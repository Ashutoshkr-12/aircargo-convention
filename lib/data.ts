export type SessionStatus = "ON TIME" | "BOARDING" | "FINAL CALL" | "DEPARTED";

export type Session = {
  code: string; // flight-style session code
  route: string; // topic "from -> to"
  time: string;
  gate: string; // room
  status: SessionStatus;
  day: 1 | 2 | 3 | 4;
  track: "Keynote" | "Operations" | "Cargo Tech" | "Sustainability" | "Network";
};

export const conventionDays = [
  { day: 1 as const, date: "25 Sep 2026", label: "Day 1 · Sep 25", weekday: "Friday", sub: "Arrivals & Ops" },
  { day: 2 as const, date: "26 Sep 2026", label: "Day 2 · Sep 26", weekday: "Saturday", sub: "Tech & Sustainability" },
  { day: 3 as const, date: "27 Sep 2026", label: "Day 3 · Sep 27", weekday: "Sunday", sub: "Network & Regulation" },
  { day: 4 as const, date: "28 Sep 2026", label: "Day 4 · Sep 28", weekday: "Monday", sub: "Innovation & Close" },
];

export const sessions: Session[] = [
  {
    code: "HZ 101",
    route: "Opening Keynote — State of Global Air Freight",
    time: "08:30",
    gate: "Hangar Main",
    status: "ON TIME",
    day: 1,
    track: "Keynote",
  },
  {
    code: "HZ 214",
    route: "Widebody Capacity Planning for Peak Season",
    time: "10:00",
    gate: "Room ORD",
    status: "ON TIME",
    day: 1,
    track: "Operations",
  },
  {
    code: "HZ 228",
    route: "Cool Chain: Pharma & Perishables at Altitude",
    time: "11:15",
    gate: "Room FRA",
    status: "BOARDING",
    day: 1,
    track: "Cargo Tech",
  },
  {
    code: "HZ 240",
    route: "SAF Adoption Across Freighter Fleets",
    time: "13:30",
    gate: "Room SIN",
    status: "ON TIME",
    day: 1,
    track: "Sustainability",
  },
  {
    code: "HZ 255",
    route: "Ground Handling Automation Showcase",
    time: "15:00",
    gate: "Hangar B",
    status: "ON TIME",
    day: 1,
    track: "Cargo Tech",
  },
  {
    code: "HZ 260",
    route: "Welcome Reception on the Apron",
    time: "18:00",
    gate: "Tarmac Deck",
    status: "ON TIME",
    day: 1,
    track: "Network",
  },
  {
    code: "HZ 302",
    route: "Digital Booking & the e-AWB Standard",
    time: "09:00",
    gate: "Room ORD",
    status: "ON TIME",
    day: 2,
    track: "Cargo Tech",
  },
  {
    code: "HZ 318",
    route: "Forwarder Roundtable: Capacity Crunch 2027",
    time: "10:30",
    gate: "Room FRA",
    status: "ON TIME",
    day: 2,
    track: "Operations",
  },
  {
    code: "HZ 331",
    route: "Live Animal & High-Value Cargo Handling",
    time: "12:00",
    gate: "Room SIN",
    status: "FINAL CALL",
    day: 2,
    track: "Operations",
  },
  {
    code: "HZ 347",
    route: "Keynote — Autonomous Ramps, Real Timelines",
    time: "14:00",
    gate: "Hangar Main",
    status: "ON TIME",
    day: 2,
    track: "Keynote",
  },
  {
    code: "HZ 360",
    route: "Carbon Offsets vs. SAF: A Working Debate",
    time: "15:30",
    gate: "Room SIN",
    status: "ON TIME",
    day: 2,
    track: "Sustainability",
  },
  {
    code: "HZ 372",
    route: "Alliance Mixer & Route Map Unveil",
    time: "19:00",
    gate: "Tarmac Deck",
    status: "ON TIME",
    day: 2,
    track: "Network",
  },
  {
    code: "HZ 404",
    route: "Keynote — Customs, Compliance & the New Trade Corridors",
    time: "08:30",
    gate: "Hangar Main",
    status: "ON TIME",
    day: 3,
    track: "Keynote",
  },
  {
    code: "HZ 411",
    route: "Last-Mile from the Last Mile of Runway",
    time: "10:00",
    gate: "Room FRA",
    status: "ON TIME",
    day: 3,
    track: "Operations",
  },
  {
    code: "HZ 415",
    route: "Data Sharing Across Carriers & Customs",
    time: "11:15",
    gate: "Room ORD",
    status: "ON TIME",
    day: 3,
    track: "Cargo Tech",
  },
  {
    code: "HZ 422",
    route: "Security Screening at Scale: e-Freight & PLACI",
    time: "13:30",
    gate: "Room SIN",
    status: "ON TIME",
    day: 3,
    track: "Operations",
  },
  {
    code: "HZ 428",
    route: "Alliance Network Roundtable: Building Trade Lanes",
    time: "15:00",
    gate: "Tarmac Deck",
    status: "ON TIME",
    day: 3,
    track: "Network",
  },
  {
    code: "HZ 434",
    route: "Gala Dinner on the Hangar Floor",
    time: "19:30",
    gate: "Hangar B",
    status: "ON TIME",
    day: 3,
    track: "Network",
  },
  {
    code: "HZ 501",
    route: "Keynote — AI on the Ramp: Cargo Ops in Real Time",
    time: "08:30",
    gate: "Hangar Main",
    status: "ON TIME",
    day: 4,
    track: "Cargo Tech",
  },
  {
    code: "HZ 512",
    route: "Startup Showcase: Next-Gen Cargo Tech",
    time: "10:00",
    gate: "Room ORD",
    status: "ON TIME",
    day: 4,
    track: "Cargo Tech",
  },
  {
    code: "HZ 520",
    route: "Sustainable Fuels Roadmap to 2030",
    time: "11:15",
    gate: "Room SIN",
    status: "ON TIME",
    day: 4,
    track: "Sustainability",
  },
  {
    code: "HZ 530",
    route: "Closing Keynote — Cargo's Next Decade",
    time: "12:30",
    gate: "Hangar Main",
    status: "ON TIME",
    day: 4,
    track: "Keynote",
  },
];

export type Speaker = {
  initials: string;
  name: string;
  title: string;
  org: string;
  track: Session["track"];
  day: 1 | 2 | 3 | 4;
  time: string;
  sessionTitle: string;
  photo: string;
};



export const speakers: Speaker[] = [
  {
    initials: "MA",
    name: "Mireille Aoun",
    title: "Chief Cargo Officer",
    org: "Nimbus Air Cargo",
    track: "Keynote",
    day: 1,
    time: "08:30",
    sessionTitle: "Opening Keynote — State of Global Air Freight",
    photo: "https://images.unsplash.com/photo-1725028748781-7adb1df9a943?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    initials: "DK",
    name: "Daniyar Kenzhe",
    title: "VP Network Planning",
    org: "Meridian Freight Group",
    track: "Operations",
    day: 1,
    time: "10:00",
    sessionTitle: "Widebody Capacity Planning for Peak Season",
    photo: "https://images.unsplash.com/photo-1725028748781-7adb1df9a943?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    initials: "RS",
    name: "Renata Silva",
    title: "Head of Cool Chain",
    org: "Polaris Logistics",
    track: "Cargo Tech",
    day: 1,
    time: "11:15",
    sessionTitle: "Cool Chain: Pharma & Perishables at Altitude",
    photo: "https://images.unsplash.com/photo-1725028748781-7adb1df9a943?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    initials: "TO",
    name: "Tomas Okafor",
    title: "Director of Sustainability",
    org: "Vertex Air Freight",
    track: "Sustainability",
    day: 1,
    time: "13:30",
    sessionTitle: "SAF Adoption Across Freighter Fleets",
    photo: "https://images.unsplash.com/photo-1725028748781-7adb1df9a943?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    initials: "JL",
    name: "Jia Lin",
    title: "GM Ground Operations",
    org: "Orbital Handling",
    track: "Operations",
    day: 2,
    time: "10:30",
    sessionTitle: "Forwarder Roundtable: Capacity Crunch 2027",
    photo: "https://images.unsplash.com/photo-1725028748781-7adb1df9a943?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    initials: "AH",
    name: "Amara Haile",
    title: "Head of Digital Cargo",
    org: "Nimbus Air Cargo",
    track: "Cargo Tech",
    day: 2,
    time: "09:00",
    sessionTitle: "Digital Booking & the e-AWB Standard",
    photo: "https://images.unsplash.com/photo-1725028748781-7adb1df9a943?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    initials: "PV",
    name: "Pieter Van Dyk",
    title: "Chief Pilot, Freighter Ops",
    org: "Meridian Freight Group",
    track: "Keynote",
    day: 2,
    time: "14:00",
    sessionTitle: "Keynote — Autonomous Ramps, Real Timelines",
    photo: "https://images.unsplash.com/photo-1725028748781-7adb1df9a943?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    initials: "SC",
    name: "Soo-ah Choi",
    title: "Head of Alliances",
    org: "Polaris Logistics",
    track: "Network",
    day: 3,
    time: "15:00",
    sessionTitle: "Alliance Network Roundtable: Building Trade Lanes",
    photo: "https://images.unsplash.com/photo-1725028748781-7adb1df9a943?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    initials: "EN",
    name: "Elena Novak",
    title: "Chief Compliance Officer",
    org: "Vertex Air Freight",
    track: "Keynote",
    day: 3,
    time: "08:30",
    sessionTitle: "Keynote — Customs, Compliance & the New Trade Corridors",
    photo: "https://images.unsplash.com/photo-1725028748781-7adb1df9a943?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    initials: "RK",
    name: "Rahul Kapoor",
    title: "Founder & CEO",
    org: "SkyLoop Robotics",
    track: "Cargo Tech",
    day: 4,
    time: "08:30",
    sessionTitle: "Keynote — AI on the Ramp: Cargo Ops in Real Time",
    photo: "https://images.unsplash.com/photo-1725028748781-7adb1df9a943?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    initials: "LF",
    name: "Lucia Ferreira",
    title: "Managing Director",
    org: "Orbital Handling",
    track: "Sustainability",
    day: 4,
    time: "11:15",
    sessionTitle: "Sustainable Fuels Roadmap to 2030",
    photo: "https://images.unsplash.com/photo-1725028748781-7adb1df9a943?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    initials: "KA",
    name: "Kenji Arata",
    title: "President, Cargo Division",
    org: "Nimbus Air Cargo",
    track: "Keynote",
    day: 4,
    time: "12:30",
    sessionTitle: "Closing Keynote — Cargo's Next Decade",
    photo: "https://images.unsplash.com/photo-1725028748781-7adb1df9a943?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
];

export type Partner = {
  name: string;
  partner: string; // short mark shown inside the logo badge
  photo: string; // CSS color for the logo mark
};

export const partners: Partner[] = [
  { name: "Network Tea Partner", partner: "Powered By", photo:" https://res.cloudinary.com/vistaprint/images/f_auto,q_auto/v1706191816/ideas-and-advice-prod/blogadmin/Screenshot-2024-01-25-at-15.09.28/Screenshot-2024-01-25-at-15.09.28.png?_i=AA" },
  { name: "SkyDriver", partner: "Title partner", photo:" https://res.cloudinary.com/vistaprint/images/f_auto,q_auto/v1706191816/ideas-and-advice-prod/blogadmin/Screenshot-2024-01-25-at-15.09.28/Screenshot-2024-01-25-at-15.09.28.png?_i=AA" },
  { name: "Cately cargo", partner: "Gold Partner", photo:" https://res.cloudinary.com/vistaprint/images/f_auto,q_auto/v1706191816/ideas-and-advice-prod/blogadmin/Screenshot-2024-01-25-at-15.09.28/Screenshot-2024-01-25-at-15.09.28.png?_i=AA" },
  { name: "shyways group", partner: "Table branding partner", photo:" https://res.cloudinary.com/vistaprint/images/f_auto,q_auto/v1706191816/ideas-and-advice-prod/blogadmin/Screenshot-2024-01-25-at-15.09.28/Screenshot-2024-01-25-at-15.09.28.png?_i=AA" },
  { name: "Orbital Handling", partner: "Network tea partner", photo:" https://res.cloudinary.com/vistaprint/images/f_auto,q_auto/v1706191816/ideas-and-advice-prod/blogadmin/Screenshot-2024-01-25-at-15.09.28/Screenshot-2024-01-25-at-15.09.28.png?_i=AA" },
  { name: "SkyLoop Robotics", partner: "Patner", photo:" https://res.cloudinary.com/vistaprint/images/f_auto,q_auto/v1706191816/ideas-and-advice-prod/blogadmin/Screenshot-2024-01-25-at-15.09.28/Screenshot-2024-01-25-at-15.09.28.png?_i=AA" },
  { name: "Changi Cargo Terminal", partner: "Partner", photo:" https://res.cloudinary.com/vistaprint/images/f_auto,q_auto/v1706191816/ideas-and-advice-prod/blogadmin/Screenshot-2024-01-25-at-15.09.28/Screenshot-2024-01-25-at-15.09.28.png?_i=AA" },
  { name: "Aerova Insurance", partner: "Partner", photo:" https://res.cloudinary.com/vistaprint/images/f_auto,q_auto/v1706191816/ideas-and-advice-prod/blogadmin/Screenshot-2024-01-25-at-15.09.28/Screenshot-2024-01-25-at-15.09.28.png?_i=AA" },
];

export type Sponsor = {
  name: string;
  short: string;
  tier: "Platinum" | "Gold" | "Silver";
  blurb: string;
};

export const sponsors: Sponsor[] = [
  {
    name: "Nimbus Air Cargo",
    short: "NAC",
    tier: "Platinum",
    blurb: "Global freighter network spanning 64 cargo hubs.",
  },
  {
    name: "Meridian Freight Group",
    short: "MFG",
    tier: "Platinum",
    blurb: "Forwarding and customs brokerage across 40 countries.",
  },
  {
    name: "Vertex Logistics",
    short: "VTX",
    tier: "Gold",
    blurb: "Cool-chain and pharma logistics specialists.",
  },
  {
    name: "Orbital Handling",
    short: "ORB",
    tier: "Gold",
    blurb: "Ramp and ground handling at 120+ airports.",
  },
  {
    name: "SkyLoop Robotics",
    short: "SKL",
    tier: "Gold",
    blurb: "Autonomous ramp and warehouse automation.",
  },
  {
    name: "Polaris Air",
    short: "PLA",
    tier: "Silver",
    blurb: "Widebody freighter charter and leasing.",
  },
  {
    name: "Changi Cargo Terminal",
    short: "CCT",
    tier: "Silver",
    blurb: "Host terminal partner for AEROVA Horizon 2026.",
  },
  {
    name: "Aerova Insurance",
    short: "AIN",
    tier: "Silver",
    blurb: "Cargo risk and marine insurance underwriting.",
  },
];

export type Ticket = {
  name: string;
  price: string;
  cadence: string;
  blurb: string;
  features: string[];
  featured?: boolean;
};

export const tickets: Ticket[] = [
  {
    name: "Delegate",
    price: "$1,450",
    cadence: "full convention",
    blurb: "Full access to keynotes, tracks and the exhibitor floor.",
    features: [
      "All 3 days of sessions",
      "Welcome reception & alliance mixer",
      "Session recordings for 90 days",
    ],
  },
  {
    name: "Carrier Alliance",
    price: "$3,200",
    cadence: "team of 4",
    blurb: "Bring your ops, network and sustainability leads together.",
    features: [
      "4 delegate passes",
      "Reserved roundtable seating",
      "Private briefing with the programme chair",
      "Session recordings for 1 year",
    ],
    featured: true,
  },
  {
    name: "Exhibitor",
    price: "$6,800",
    cadence: "booth + 2 passes",
    blurb: "A booth on Hangar Floor plus two full delegate passes.",
    features: [
      "18 sq m booth, Hangar Floor",
      "2 delegate passes",
      "Listing in the Cargo Directory",
    ],
  },
];

export const faqs: {
  q: string;
  a: string;
}[] = [
  {
    q: "Where and when is AEROVA Horizon 2026 held?",
    a: "The convention runs 25–28 September 2026 at the Meridian Exhibition Hangar, Gate District, Singapore — a short transfer from Changi and most airport-adjacent hotels.",
  },
  {
    q: "Who should attend?",
    a: "Cargo carriers, freight forwarders, ground handlers, customs and trade compliance teams, and technology providers serving the air freight supply chain.",
  },
  {
    q: "Are sessions recorded?",
    a: "Yes. Delegate passes include recordings for 90 days after the event; Carrier Alliance passes include a full year of on-demand access.",
  },
  {
    q: "Can I transfer or upgrade my pass?",
    a: "Passes can be transferred to a colleague at no charge up to 14 days before the event, and upgraded to a higher tier at any time by paying the difference.",
  },
  {
    q: "Is there a group rate for exhibitors?",
    a: "Booths on Hangar Floor include two delegate passes by default, and additional team passes are available at a reduced exhibitor rate.",
  },
];
