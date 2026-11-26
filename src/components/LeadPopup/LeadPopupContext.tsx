'use client';
import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Dialog, DialogContent, IconButton, Box, Typography, Chip } from '@mui/material';
import { Close, VerifiedUser } from '@mui/icons-material';
import LeadForm from '@/components/LeadForm/LeadForm';
import { captureUtm, hasSubmittedLead } from '@/lib/leads';
import { trackEvent } from '@/lib/analytics';

/** Popup copy per pre-set property type — only mention a subsidy that applies to that type. */
const POPUP_COPY: Record<string, { chip: string; title: string; text: string }> = {
  default: {
    chip: 'PM Surya Ghar subsidy up to ₹78,000',
    title: 'Free Site Survey + Subsidy Check',
    text: 'Tell us a little about your property — our engineer will call you with a custom quote.',
  },
  home: {
    chip: 'PM Surya Ghar subsidy up to ₹78,000',
    title: 'Free Site Survey + Subsidy Check',
    text: 'Tell us about your home — our engineer will call you with a custom quote.',
  },
  society: {
    chip: 'PM Surya Ghar subsidy for housing societies',
    title: 'Free Site Survey for Your Society',
    text: 'Tell us about your society — our engineer will call you to plan a common-area system.',
  },
  commercial: {
    chip: 'Free site survey for businesses',
    title: 'Business Solar Quote',
    text: 'Tell us about your premises — our engineer will call you with a custom quote.',
  },
  farm: {
    chip: 'PM-KUSUM solar pump subsidy',
    title: 'Solar Water Pump Quote',
    // TODO(owner): verify — confirms we advise on PM-KUSUM eligibility.
    text: 'Tell us about your farm — our engineer will call you with pump options and your PM-KUSUM eligibility.',
  },
};

type PopupOptions = { propertyType?: string };
type Ctx = { openPopup: (source?: string, options?: PopupOptions) => void };
const LeadPopupCtx = createContext<Ctx>({ openPopup: () => {} });
export const useLeadPopup = () => useContext(LeadPopupCtx);

const AUTO_DELAY_MS = 40000;
const SHOWN_KEY = 'ss_popup_shown';

/**
 * Provides a global "Get Free Quote" dialog.
 * Auto-opens once per session: after 40s on site, or on desktop exit-intent.
 * Never auto-opens for visitors who already submitted a lead, or on /contact.
 */
export function LeadPopupProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [source, setSource] = useState('popup');
  const [propertyType, setPropertyType] = useState('');
  const copy = POPUP_COPY[propertyType] ?? POPUP_COPY.default;
  const pathname = usePathname();
  const autoShown = useRef(false);

  const openPopup = useCallback((src = 'cta_button', options?: PopupOptions) => {
    setSource(src);
    setPropertyType(options?.propertyType ?? '');
    setOpen(true);
    trackEvent('quote_popup_open', { trigger: src });
  }, []);

  useEffect(() => {
    captureUtm();
  }, []);

  useEffect(() => {
    const canAutoShow = () => {
      if (autoShown.current || hasSubmittedLead() || pathname === '/contact') return false;
      try {
        return sessionStorage.getItem(SHOWN_KEY) !== '1';
      } catch {
        return true;
      }
    };
    const autoOpen = (trigger: string) => {
      if (!canAutoShow()) return;
      autoShown.current = true;
      try {
        sessionStorage.setItem(SHOWN_KEY, '1');
      } catch {
        /* ignore */
      }
      openPopup(trigger);
    };

    const timer = window.setTimeout(() => autoOpen('popup_timer'), AUTO_DELAY_MS);
    const onLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && window.innerWidth >= 900) autoOpen('popup_exit_intent');
    };
    document.addEventListener('mouseout', onLeave);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener('mouseout', onLeave);
    };
  }, [pathname, openPopup]);

  return (
    <LeadPopupCtx.Provider value={{ openPopup }}>
      {children}
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="xs" fullWidth scroll="body">
        <IconButton
          aria-label="Close"
          onClick={() => setOpen(false)}
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <Close />
        </IconButton>
        <DialogContent sx={{ pt: 4 }}>
          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <Chip
              icon={<VerifiedUser />}
              label={copy.chip}
              color="primary"
              size="small"
              sx={{ mb: 1.5, fontWeight: 700 }}
            />
            <Typography variant="h5" sx={{ fontWeight: 800 }}>
              {copy.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {copy.text}
            </Typography>
          </Box>
          <LeadForm
            compact
            source={source}
            defaultPropertyType={propertyType}
            onSuccess={() => window.setTimeout(() => setOpen(false), 6000)}
          />
        </DialogContent>
      </Dialog>
    </LeadPopupCtx.Provider>
  );
}
