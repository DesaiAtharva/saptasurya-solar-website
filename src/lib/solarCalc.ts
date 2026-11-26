// Solar sizing / savings estimator for Maharashtra.
// Adjust these business assumptions any time — the calculator UI updates automatically.
export const CALC_ASSUMPTIONS = {
  tariffPerUnit: 10, // ₹ effective per kWh incl. fixed & wheeling charges (MSEDCL residential avg)
  unitsPerKwPerMonth: 120, // ~4 kWh/kW/day in Maharashtra
  sqftPerKw: 100,
  tariffEscalation: 0.03, // per year
  degradation: 0.005, // per year
  years: 25,
  co2KgPerUnit: 0.82,
  /** Indicative turnkey price per kW (before subsidy), by system size. */
  pricePerKw(kw: number): number {
    if (kw <= 3) return 75000;
    if (kw <= 10) return 68000;
    return 60000;
  },
};

export type PropertyType = 'home' | 'society' | 'commercial' | 'farm';

/** PM Surya Ghar Muft Bijli Yojana central financial assistance (CFA). */
export function pmSuryaGharSubsidy(kw: number, type: PropertyType): number {
  if (type === 'home') {
    if (kw <= 2) return Math.round(kw * 30000);
    if (kw < 3) return Math.round(60000 + (kw - 2) * 18000);
    return 78000;
  }
  if (type === 'society') {
    // ₹18,000/kW for common facilities (GHS/RWA), up to 500 kW
    return Math.round(Math.min(kw, 500) * 18000);
  }
  return 0;
}

export type CalcResult = {
  monthlyUnits: number;
  systemKw: number;
  roofSqft: number;
  grossCost: number;
  subsidy: number;
  netCost: number;
  monthlySavings: number;
  annualSavings: number;
  paybackYears: number;
  lifetimeSavings: number;
  co2TonnesPerYear: number;
};

export function calculateSolar(monthlyBill: number, type: PropertyType): CalcResult {
  const a = CALC_ASSUMPTIONS;
  const monthlyUnits = monthlyBill / a.tariffPerUnit;
  const rawKw = monthlyUnits / a.unitsPerKwPerMonth;
  const systemKw = Math.max(1, Math.ceil(rawKw * 2) / 2); // round up to 0.5 kW
  const grossCost = Math.round(systemKw * a.pricePerKw(systemKw));
  const subsidy = Math.min(pmSuryaGharSubsidy(systemKw, type), grossCost);
  const netCost = grossCost - subsidy;

  const monthlyGen = systemKw * a.unitsPerKwPerMonth;
  const monthlySavings = Math.round(Math.min(monthlyGen, monthlyUnits) * a.tariffPerUnit);
  const annualSavings = monthlySavings * 12;

  let lifetimeSavings = 0;
  for (let y = 0; y < a.years; y++) {
    lifetimeSavings +=
      annualSavings * Math.pow(1 + a.tariffEscalation, y) * Math.pow(1 - a.degradation, y);
  }

  return {
    monthlyUnits: Math.round(monthlyUnits),
    systemKw,
    roofSqft: Math.round(systemKw * a.sqftPerKw),
    grossCost,
    subsidy,
    netCost,
    monthlySavings,
    annualSavings,
    paybackYears: annualSavings > 0 ? Math.round((netCost / annualSavings) * 10) / 10 : 0,
    lifetimeSavings: Math.round(lifetimeSavings),
    co2TonnesPerYear: Math.round(((monthlyGen * 12 * a.co2KgPerUnit) / 1000) * 10) / 10,
  };
}

export const inr = (n: number) => '₹' + Math.round(n).toLocaleString('en-IN');
