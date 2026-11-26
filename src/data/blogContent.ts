// Article bodies for /blog/[slug]. Keep figures consistent with src/lib/solarCalc.ts.
export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'table'; head: string[]; rows: string[][] }
  | { type: 'tip'; text: string };

const SUBSIDY_TABLE: Block = {
  type: 'table',
  head: ['System size', 'PM Surya Ghar subsidy', 'Typical use'],
  rows: [
    ['1 kW', '₹30,000', 'Bill up to ~₹1,200/month'],
    ['2 kW', '₹60,000', 'Bill ₹1,200 – ₹2,500/month'],
    ['3 kW and above', '₹78,000 (max)', 'Bill ₹2,500+/month'],
    ['Housing society (common areas)', '₹18,000 per kW', 'Lifts, pumps, lighting'],
  ],
};

const PRICE_TABLE: Block = {
  type: 'table',
  head: ['System', 'Approx. price before subsidy', 'Subsidy', 'Approx. net cost'],
  rows: [
    ['1 kW', '₹75,000', '₹30,000', '₹45,000'],
    ['2 kW', '₹1,50,000', '₹60,000', '₹90,000'],
    ['3 kW', '₹2,25,000', '₹78,000', '₹1,47,000'],
    ['5 kW', '₹3,40,000', '₹78,000', '₹2,62,000'],
    ['10 kW', '₹6,80,000', '₹78,000', '₹6,02,000'],
  ],
};

export const BLOG_CONTENT: Record<string, Block[]> = {
  'solar-panel-price-maharashtra-2026': [
    {
      type: 'p',
      text: 'If you are planning rooftop solar in Maharashtra, the first question is always: how much will it cost? This guide breaks down 2026 prices by system size, what drives the price up or down, how much subsidy you get, and how quickly the system pays for itself.',
    },
    { type: 'h2', text: 'Solar system prices in Maharashtra (2026)' },
    PRICE_TABLE,
    {
      type: 'p',
      text: 'Prices are for a complete on-grid system: panels, inverter, mounting structure, wiring, earthing, lightning arrester, installation and net-metering paperwork. Hybrid systems with batteries cost more.',
    },
    { type: 'h2', text: 'What affects the price?' },
    {
      type: 'ul',
      items: [
        'Panel technology — Mono PERC is the value choice; TOPCon and bifacial panels cost 5–10% more but generate more.',
        'Inverter brand — a reputed string inverter with good service support is worth paying for.',
        'Mounting structure — elevated structures, hot-dip galvanised steel for coastal areas, or extra height to keep terrace space usable add cost.',
        'Roof type — RCC roofs are simplest; tin-sheet and tiled roofs need special mounting.',
        'Distance & access — remote sites and high-rise buildings add logistics cost.',
      ],
    },
    { type: 'h2', text: 'Subsidy under PM Surya Ghar' },
    SUBSIDY_TABLE,
    {
      type: 'p',
      text: 'The subsidy is credited directly to your bank account after the system is commissioned and the net meter is installed. A registered vendor like Saptasurya Solar handles the national-portal application for you.',
    },
    { type: 'h2', text: 'Payback period' },
    {
      type: 'p',
      text: 'In Maharashtra, 1 kW of panels produces about 120 units a month. At an effective tariff of around ₹10 per unit, a 3 kW system saves roughly ₹3,500 – ₹3,600 every month. With a net cost of about ₹1.47 lakh, the payback is around 3.4 years, after which you get 20+ years of nearly free electricity.',
    },
    {
      type: 'tip',
      text: 'Use the calculator below with your own bill to see your exact system size, subsidy and payback.',
    },
  ],

  'benefits-solar-energy-maharashtra': [
    {
      type: 'p',
      text: 'Electricity tariffs in Maharashtra are among the highest in India, and they rise almost every year. That is why thousands of homeowners are switching to rooftop solar. Here are the ten biggest benefits.',
    },
    { type: 'h2', text: 'Top 10 benefits' },
    {
      type: 'ul',
      items: [
        'Cut your electricity bill by 70–90% — most homes with a correctly sized system pay only the fixed charges.',
        'Government subsidy up to ₹78,000 under PM Surya Ghar for homes, and ₹18,000/kW for housing societies.',
        'Fast payback of about 3–5 years, then 20+ years of free power.',
        'Protection from tariff hikes — your solar units cost nothing no matter how much MSEDCL rates rise.',
        'Net metering — extra units you export are credited against your bill.',
        'Very low maintenance — just cleaning panels every 2–3 weeks.',
        '25-year panel performance warranty.',
        'Higher property value — homes with solar are more attractive to buyers and tenants.',
        'Cooler top floor — panels shade the roof and reduce heat entering the house.',
        'Clean energy — a 3 kW system avoids about 3.5 tonnes of CO₂ every year.',
      ],
    },
    { type: 'h2', text: 'Is my home suitable?' },
    {
      type: 'p',
      text: 'You need about 100 sq ft of shadow-free roof per kW, an electricity connection in your name (or society approval for shared roofs), and a monthly bill of roughly ₹1,000 or more for solar to make strong financial sense.',
    },
  ],

  'solar-subsidy-2026-guide': [
    {
      type: 'p',
      text: 'PM Surya Ghar Muft Bijli Yojana is the central government scheme that pays a subsidy (Central Financial Assistance) directly into your bank account when you install rooftop solar. Here is everything Maharashtra homeowners need to know in 2026.',
    },
    { type: 'h2', text: 'How much subsidy can you get?' },
    SUBSIDY_TABLE,
    { type: 'h2', text: 'Who is eligible?' },
    {
      type: 'ul',
      items: [
        'Indian resident with a house and a suitable roof.',
        'A valid electricity connection in the applicant’s name.',
        'Not already availed any other rooftop solar subsidy.',
        'Installation through a vendor registered on the national portal, using approved (ALMM / DCR) panels.',
      ],
    },
    { type: 'h2', text: 'Step-by-step process' },
    {
      type: 'ul',
      items: [
        '1. Register on pmsuryaghar.gov.in with your state, DISCOM and consumer number.',
        '2. Apply for rooftop solar and choose a registered vendor.',
        '3. Get feasibility approval from your DISCOM (MSEDCL, BEST, Tata Power or Adani Electricity).',
        '4. The vendor installs the system.',
        '5. Submit installation details and apply for the net meter.',
        '6. DISCOM inspects and installs the net meter; a commissioning certificate is generated.',
        '7. Submit bank details — the subsidy is credited to your account.',
      ],
    },
    {
      type: 'p',
      text: 'Saptasurya Solar handles every step above for you — from portal registration to the final subsidy claim.',
    },
    { type: 'h2', text: 'Documents needed' },
    {
      type: 'ul',
      items: [
        'Latest electricity bill',
        'Aadhaar card',
        'Cancelled cheque / bank passbook',
        'Property ownership proof or society NOC',
        'Passport-size photo',
      ],
    },
    {
      type: 'tip',
      text: 'Collateral-free solar loans at concessional interest are also available under the scheme — ask us if you would like financing.',
    },
  ],

  'solar-panel-cost-pune-2026': [
    {
      type: 'p',
      text: 'Pune has excellent sunshine — about 4.0 to 4.5 units per kW per day — and high residential tariffs, making it one of the best cities in Maharashtra for rooftop solar. Here is what solar costs in Pune in 2026.',
    },
    PRICE_TABLE,
    { type: 'h2', text: 'Typical sizes for Pune homes' },
    {
      type: 'ul',
      items: [
        '2 BHK flat owner (individual connection, own roof): 2–3 kW.',
        'Row house / bungalow with ACs: 3–5 kW.',
        'Large bungalow with EV charging: 5–10 kW.',
        'Housing society common areas: 10–50 kW depending on lifts and pumps.',
      ],
    },
    { type: 'h2', text: 'Net metering in Pune' },
    {
      type: 'p',
      text: 'All of Pune city and PCMC are served by MSEDCL. Net-meter approval typically takes 2–4 weeks after installation. We prepare the application, coordinate the inspection and follow up until the meter is installed.',
    },
    { type: 'h2', text: 'Why choose a local installer?' },
    {
      type: 'p',
      text: 'Saptasurya Solar is based in Hadapsar, Pune — so site surveys happen within days, and after-sales service is quick. We serve Pune city, PCMC, Hinjewadi, Wagholi, Kharadi, Undri, Baner and surrounding areas.',
    },
  ],

  'is-solar-still-worth-it-india-2026': [
    {
      type: 'p',
      text: 'With net-metering rules changing in some states and panel prices fluctuating, many people ask: is rooftop solar still worth it in 2026? For most Maharashtra homes, the honest answer is yes — here is the math.',
    },
    { type: 'h2', text: 'The ROI math for a 3 kW home system' },
    {
      type: 'table',
      head: ['Item', 'Value'],
      rows: [
        ['System cost (before subsidy)', '~₹2.25 lakh'],
        ['PM Surya Ghar subsidy', '₹78,000'],
        ['Net cost', '~₹1.47 lakh'],
        ['Monthly generation', '~360 units'],
        ['Monthly saving @ ₹10/unit', '~₹3,600'],
        ['Payback', '~3.4 years'],
        ['25-year savings (with 3% tariff rise)', '₹14+ lakh'],
      ],
    },
    { type: 'h2', text: 'When solar is NOT worth it' },
    {
      type: 'ul',
      items: [
        'Your monthly bill is below ₹700–800 — savings will be small.',
        'Your roof is heavily shaded by taller buildings or trees.',
        'You plan to move within 2–3 years and cannot take the system with you.',
        'You rent and the owner won’t allow installation.',
      ],
    },
    { type: 'h2', text: 'The verdict' },
    {
      type: 'p',
      text: 'If you own your roof and pay more than ₹1,500 a month, solar is one of the best financial investments available — returns of 25–35% a year, beating FDs and most mutual funds, with almost no risk.',
    },
  ],

  '1kw-solar-system-price-maharashtra': [
    {
      type: 'p',
      text: 'A 1 kW system is the smallest rooftop solar system most installers offer. It is affordable, but is it enough for your home?',
    },
    { type: 'h2', text: 'Price & subsidy' },
    {
      type: 'p',
      text: 'A complete 1 kW on-grid system in Maharashtra costs around ₹75,000. With the ₹30,000 PM Surya Ghar subsidy, your net cost is about ₹45,000.',
    },
    { type: 'h2', text: 'What can 1 kW run?' },
    {
      type: 'p',
      text: '1 kW generates about 4 units per day (120 units/month). That covers lights, fans, a fridge, TV and a few hours of a washing machine — typical for a small family without AC.',
    },
    { type: 'h2', text: 'Is 1 kW enough?' },
    {
      type: 'ul',
      items: [
        'Bill under ₹1,200/month → 1 kW is a good fit.',
        'Bill ₹1,200 – ₹2,500 → go for 2 kW (subsidy doubles to ₹60,000).',
        'Bill above ₹2,500 or you use AC → 3 kW gives the maximum ₹78,000 subsidy and the best value per kW.',
      ],
    },
    {
      type: 'tip',
      text: 'Because the subsidy jumps from ₹30,000 to ₹78,000 between 1 and 3 kW, a 3 kW system costs only about ₹1 lakh more after subsidy while tripling your savings.',
    },
  ],

  'best-solar-company-pune-thane': [
    {
      type: 'p',
      text: 'Rooftop solar is a 25-year investment, so choosing the right installer matters more than saving a few thousand rupees upfront. Here is a checklist to pick a trustworthy solar company in Pune, Thane or anywhere in Maharashtra.',
    },
    { type: 'h2', text: '8-point checklist' },
    {
      type: 'ul',
      items: [
        'Registered vendor on the PM Surya Ghar national portal — otherwise you lose the subsidy.',
        'Uses ALMM-listed panels from reputed manufacturers, with datasheets and warranty cards.',
        'Gives a written, itemised quotation — panel brand & wattage, inverter model, structure type, cable specs.',
        'Does a physical site survey and shadow analysis before quoting.',
        'Handles net-metering paperwork with your DISCOM.',
        'Provides a workmanship warranty (at least 5 years) in writing.',
        'Shows real installations and customer references near you.',
        'Has a local service team for quick after-sales support.',
      ],
    },
    { type: 'h2', text: 'Red flags' },
    {
      type: 'ul',
      items: [
        'Prices far below market — usually means non-ALMM panels or thin structures.',
        'Asking for 100% payment upfront.',
        'Vague quotes like “3 kW system — ₹X” without brand details.',
        '“Guaranteed zero bill” promises without seeing your consumption.',
      ],
    },
    {
      type: 'p',
      text: 'At Saptasurya Solar we tick every item on this list — and we are happy to share references from customers in your area.',
    },
  ],

  'rooftop-solar-guide-india-2026': [
    {
      type: 'p',
      text: 'New to rooftop solar? This guide explains how it works, which type to choose, how to size it and what the installation process looks like.',
    },
    { type: 'h2', text: 'How rooftop solar works' },
    {
      type: 'p',
      text: 'Solar panels convert sunlight into DC electricity. An inverter converts it to AC for your home. In an on-grid system, any extra power goes to the grid through a net meter and is credited to your bill; at night you draw power from the grid as usual.',
    },
    { type: 'h2', text: 'Sizing your system' },
    {
      type: 'p',
      text: 'Divide your average monthly units (from your bill) by 120 to get the kW you need in Maharashtra. For example, 360 units/month → 3 kW. Each kW needs about 100 sq ft of shadow-free roof.',
    },
    { type: 'h2', text: 'Key components' },
    {
      type: 'ul',
      items: [
        'Panels — Mono PERC, TOPCon or bifacial; 25-year performance warranty.',
        'Inverter — string inverters for homes; hybrid inverters if you want battery backup.',
        'Mounting structure — galvanised steel or aluminium, designed for wind load.',
        'Protection — DC/AC distribution boxes, earthing, surge protection and lightning arrester.',
        'Net meter — bi-directional meter installed by your DISCOM.',
      ],
    },
    { type: 'h2', text: 'Installation timeline' },
    {
      type: 'p',
      text: 'Site survey and quote: 2–5 days. Subsidy registration and DISCOM feasibility: 1–2 weeks. Installation: 1–2 days. Net metering and commissioning: 2–4 weeks.',
    },
  ],

  '5kw-solar-system-price-india': [
    {
      type: 'p',
      text: 'A 5 kW system is the most popular choice for bungalows and larger homes with multiple ACs. Here is what it costs in Maharashtra in 2026.',
    },
    { type: 'h2', text: 'Price breakdown' },
    {
      type: 'table',
      head: ['Item', 'Value'],
      rows: [
        ['System cost (on-grid, before subsidy)', '~₹3.4 lakh'],
        ['PM Surya Ghar subsidy', '₹78,000'],
        ['Net cost', '~₹2.62 lakh'],
        ['Roof area needed', '~500 sq ft'],
        ['Monthly generation', '~600 units'],
        ['Monthly saving @ ₹10/unit', '~₹6,000'],
        ['Payback', '~3.6 years'],
      ],
    },
    { type: 'h2', text: 'Who should choose 5 kW?' },
    {
      type: 'ul',
      items: [
        'Monthly bill of ₹5,000 – ₹7,000.',
        'Homes running 2–3 ACs in summer.',
        'Families planning to buy an electric vehicle.',
      ],
    },
    { type: 'h2', text: 'On-grid vs hybrid at 5 kW' },
    {
      type: 'p',
      text: 'A hybrid 5 kW system with a 5 kWh lithium battery costs roughly ₹1.5 – ₹2.5 lakh more, but keeps essential loads running during power cuts. If outages are rare in your area, on-grid gives the fastest payback.',
    },
  ],

  'on-grid-off-grid-hybrid-solar': [
    {
      type: 'p',
      text: 'There are three types of rooftop solar systems. Choosing the right one depends on how reliable your grid supply is and what you want from solar.',
    },
    {
      type: 'table',
      head: ['', 'On-grid', 'Off-grid', 'Hybrid'],
      rows: [
        ['Battery', 'No', 'Yes', 'Yes'],
        ['Works in power cut', 'No', 'Yes', 'Yes'],
        ['Net metering', 'Yes', 'No', 'Yes'],
        ['PM Surya Ghar subsidy', 'Yes', 'No', 'Yes (on panel capacity)'],
        ['Cost', 'Lowest', 'Medium–High', 'Highest'],
        ['Best for', 'Cities with reliable power', 'No grid / remote farms', 'Frequent outages'],
      ],
    },
    { type: 'h2', text: 'Our recommendation for Maharashtra' },
    {
      type: 'ul',
      items: [
        'Mumbai, Pune, Thane, Nashik city — on-grid: fastest payback, outages are rare.',
        'Rural areas with load-shedding — hybrid: savings plus backup.',
        'Farms and sites without an electricity connection — off-grid or PM-KUSUM solar pumps.',
      ],
    },
    {
      type: 'tip',
      text: 'Not sure? We check your area’s power reliability during the free site survey and recommend the right type.',
    },
  ],

  'solar-panel-installation-nagpur-guide': [
    {
      type: 'p',
      text: 'Nagpur and the wider Vidarbha region receive some of the strongest sunshine in India — about 4.4 to 4.8 units per kW per day. Combined with heavy summer AC usage, that makes solar here pay back faster than almost anywhere else in Maharashtra.',
    },
    { type: 'h2', text: 'Cost in Nagpur' },
    PRICE_TABLE,
    { type: 'h2', text: 'Designing for Nagpur’s heat' },
    {
      type: 'ul',
      items: [
        'Panels with a low temperature coefficient lose less output at 45°C+.',
        'Elevated structures allow airflow under panels and keep them cooler.',
        'Inverters should be installed in a shaded, ventilated spot.',
        'Weekly cleaning in the dusty pre-monsoon months keeps generation high.',
      ],
    },
    { type: 'h2', text: 'Subsidy & net metering' },
    {
      type: 'p',
      text: 'Nagpur is served by MSEDCL. Homeowners get the full PM Surya Ghar subsidy (up to ₹78,000) and MSEDCL net metering. We handle the national-portal application, DISCOM approvals and the subsidy claim.',
    },
  ],
};
