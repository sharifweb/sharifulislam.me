import { 
  OdommoProgramme, 
  ExperienceItem, 
  ExchangeProgram, 
  EducationItem, 
  ResearchItem, 
  SkillCategory, 
  HonorItem,
  GalleryMoment
} from './types';

export const PERSONAL_INFO = {
  fullName: "Md. Shariful Islam",
  tagline: "Builder of systems. Shaper of futures. Citizen of the world.",
  subtext: "Where grassroots meets global — from Gafargaon to five continents.",
  location: "Dhaka, Bangladesh",
  educationStatus: "BSc in Information Technology & Management (ITM)",
  institution: "Daffodil International University",
  graduationDate: "Graduated June 2026",
  email: "mail.mdsharif@gmail.com",
  phone: "+880 1790-071378",
  linkedin: "https://www.linkedin.com/in/sharif-link",
  facebook: "https://www.facebook.com/name.sharif",
  bioParagraphs: [
    "I grew up in Gafargaon, Mymensingh — and at 16, in class 10, I co-founded an organization, ODOMMO ’19, with classmates that I thought would last a year. That was October 2018. It's still running.",
    "Since then, I've worn many hats simultaneously: NGO chairman leading a national youth movement, operations professional working remotely for companies in the USA and Dubai, scholar completing an internationally mobile degree, and researcher exploring how clean energy and sustainable trade can reshape developing economies.",
    "I graduated with a BSc in Information Technology & Management from Daffodil International University in June 2026 — having also studied in Sweden on an Erasmus+ scholarship, attended programmes in Poland, Hungary, and Egypt, and worked professionally across two continents without pausing my studies or my organization.",
    "What drives me is building things that outlast me — whether that's a youth foundation entering its eighth year, a system that makes a team more organized, or a piece of research that asks a better question about how Bangladesh can grow more sustainably."
  ],
  quickStats: [
    { value: "7.5+ Years", label: "leading Odommo '19" },
    { value: "13 Countries Explored", label: "5 international programmes" },
    { value: "Operations Pro", label: "3 companies · 2 continents" }
  ]
};

export const ODOMMO_FOUNDING_STORY = {
  title: "Building From the Ground Up",
  description: "Started October 2018 in Gafargaon, Mymensingh with classmates at the age of 16. No funding, no external support, no playbook. Today it is a nationally registered youth foundation and a National Youth Partner of ActionAid Bangladesh under the GOLD programme, working within a coalition of 12 youth-led organizations under Global Platform Bangladesh.",
  statusNow: "Today, Odommo '19 is nationally registered with the Department of Bangladesh Youth Development (Reg. No. mym-147/Gafar-006) and actively driving national campaigns on climate resilience, literacy, and youth governance.",
  myRole: "In my capacity as Co-Founder and Chairman, I have continuous leadership from the founding onwards. I lead our long-term strategy, governance, partnerships, corporate compliance, and external representation."
};

export const ODOMMO_STATS = [
  { value: "7.5+ Years", label: "of continuous operation", metric: "Active & Growing" },
  { value: "50,000+", label: "Beneficiaries", metric: "Direct support" },
  { value: "300+", label: "Volunteers engaged", metric: "Social action" },
  { value: "50+", label: "Youth & community leaders developed", metric: "Civic empowerment" },
  { value: "100+", label: "Projects and activities delivered", metric: "Impact items" }
];

export const ODOMMO_PROGRAMMES: OdommoProgramme[] = [
  {
    id: "p1",
    title: "Plastic-Free Mymensingh (2026)",
    description: "An innovative climate literacy initiative that translates policy into practice. We use indigenous folk-songs and local folk-theater (street drama) to communicate climate science, plastic contamination risks, and waste sorting to rural and semi-urban populations who bypass typical digital communication pipelines.",
    sdgs: [
      { number: 11, name: "Sustainable Cities" },
      { number: 12, name: "Responsible Consumption" },
      { number: 13, name: "Climate Action" }
    ],
    category: "Climate & Sustainability"
  },
  {
    id: "p2",
    title: "Climate Strike Mobilizations (2024 & 2025)",
    description: "Co-led and coordinated the 2025 multi-city Climate Strikes in Bangladesh. This included organizing the central rally and press deployment at the National Press Club in Dhaka, with synchronized community actions and high school mobilizations mapped across Mymensingh, Sherpur, and Jamalpur districts.",
    sdgs: [
      { number: 13, name: "Climate Action" }
    ],
    category: "Campaigns & Advocacy"
  },
  {
    id: "p3",
    title: "Odommo & Bhramyaman Pathagar",
    description: "A system of brick-and-mortar village libraries integrated with a network of mobile libraries ('Bhramyaman Pathagar'). These micro-institutions bring physical textbooks and environmental literature to remote farming communities, promoting a culture of reading of sustainability topics.",
    sdgs: [
      { number: 4, name: "Quality Education" },
      { number: 13, name: "Climate Action" },
      { number: 15, name: "Life on Land" }
    ],
    category: "Education & Literacy"
  },
  {
    id: "p4",
    title: "Boi Binimoy Utsab (Book Exchange Festival)",
    description: "A book recycling and library redistribution network that helps students swap or donate used academic textbooks. What started as a small localized event in Gafargaon has expanded into a recurring multi-district initiative operating in Mymensingh, Rajshahi, and Dinajpur.",
    sdgs: [
      { number: 4, name: "Quality Education" }
    ],
    category: "Education & Literacy"
  },
  {
    id: "p5",
    title: "Zero Malnutrition Program",
    description: "An integrated public health program performing door-to-door infant nutrition checks, distributing basic nutritional support, and training mothers in rural Mymensingh villages on dietary composition using simple accessible ingredients.",
    sdgs: [
      { number: 2, name: "Zero Hunger" },
      { number: 3, name: "Good Health" }
    ],
    category: "Public Health"
  },
  {
    id: "p6",
    title: "Mahiyoshir Surokshay (Women's Safety Campaign)",
    description: "Recurring community advisory and campaign circles focusing on structural gender justice, safety in transport corridors, legal aid awareness, and reproductive health sanitation for rural girls and working women.",
    sdgs: [
      { number: 5, name: "Gender Equality" }
    ],
    category: "Social Justice"
  }
];

export const EXPERIENCE_TIMELINE: ExperienceItem[] = [
  {
    id: "exp-fredo",
    role: "Operations Consultant",
    company: "Fredocloud (Dubai, UAE, Remote)",
    location: "Dubai, UAE / Remote",
    type: "Remote Consultancy",
    hoursPerWeek: 40,
    startDate: "April 2026",
    endDate: "Present",
    highlights: [
      "Oversee day-to-day operational workflows, client coordination, project pipeline management, and internal team communications for a prominent Dubai-based digital product design and development agency serving 100+ global clients.",
      "Track and maintain project coordinates across multiple active time zones.",
      "Optimise the complete agency back-end infrastructure to ensure workflow compliance and client satisfaction."
    ],
    skills: ["Operations Management", "Client Coordination", "Pipeline Tracking", "Cross-Timezone Collaboration", "Agile Project Delivery"]
  },
  {
    id: "exp-beige-3",
    role: "Operations Manager (Previously Operations Associate)",
    company: "Beige Corporation (USA, Remote)",
    location: "Los Angeles, CA / Remote",
    type: "Full-Time",
    hoursPerWeek: 45,
    startDate: "December 2025",
    endDate: "February 2026",
    highlights: [
      "Coordinate cross-functional pipeline tasks across administrative, sales, post-production, customer success, and accounting frameworks in a US-based firm.",
      "Own, design, and automate CRM tracking flows and reporting tools using Monday CRM, Asana, and Google Sheets to increase processing transparency.",
      "Work directly with the C-Suite (CEO & COO) to address operational bottlenecks, establish standardized SOP guidelines, and implement workflows.",
      "Provide administrative, workflow QA, and technical pipeline support to teams operating across multiple US and international time zones."
    ],
    skills: ["Operations", "Monday CRM", "Asana", "Project Administration", "SOP Compliance", "Strategic Planning"]
  },
  {
    id: "exp-beige-2",
    role: "Assistant Sales Manager (Operations Focus)",
    company: "Beige Corporation (USA, Remote)",
    location: "Los Angeles, CA / Remote",
    type: "Full-Time",
    hoursPerWeek: 45,
    startDate: "March 2025",
    endDate: "November 2025",
    highlights: [
      "Managed inbound operations, contract preparations, and workflow scheduling for a premium digital marketplace platform.",
      "Monitored representative performance metrics, reviewed compliance script audits, and structured pipeline reports for management review.",
      "Oversaw high-touch client communication channels, acting as the primary escalations point for active enterprise client projects."
    ],
    skills: ["Team Leadership", "HubSpot CRM", "KPI Auditing", "Client Management", "Process Engineering"]
  },
  {
    id: "exp-beige-1",
    role: "Sales Representative",
    company: "Beige Corporation (USA, Remote)",
    location: "Los Angeles, CA / Remote",
    type: "Full-Time",
    hoursPerWeek: 45,
    startDate: "September 2024",
    endDate: "February 2025",
    highlights: [
      "Qualified high-intent inbound inquiries and managed initial sales pipeline stages from contract drafting to onboarding.",
      "Consistently achieved pipeline targets, generating average monthly sales contributions of ~$15K in closed contract value.",
      "Utilized Invoice Simple and HoneyBook systems to manage client billing records, billing queries, and automated reminders."
    ],
    skills: ["B2B Communication", "HoneyBook", "Inbound Sales", "Billing Operations", "Contract Admin"]
  },
  {
    id: "exp-10ms-4",
    role: "Project Executive",
    company: "10 Minute School (Bangladesh, Hybrid)",
    location: "Dhaka, Bangladesh / Hybrid",
    type: "Full-Time",
    hoursPerWeek: 42,
    startDate: "September 2023",
    endDate: "December 2023",
    highlights: [
      "Coordinated cross-functional project deliverables and schedules with key commercial stakeholders for the nation's premier EdTech portal.",
      "Assembled operational dashboards and detailed tracking reports using Google Workspace platforms for C-level presentation.",
      "Developed internal onboarding modules and direct tooling guides to minimize ramp-up times for incoming operations personnel."
    ],
    skills: ["EdTech Operations", "Project Coordination", "Cross-functional Leadership", "Google Workspace"]
  },
  {
    id: "exp-10ms-3",
    role: "Affiliate Coordinator & Sales Advisor",
    company: "10 Minute School",
    location: "Dhaka, Bangladesh / Hybrid",
    type: "Full-Time",
    hoursPerWeek: 40,
    startDate: "June 2022",
    endDate: "September 2023",
    highlights: [
      "Engineered communication architecture across a network of digital product affiliates, resolving partner concerns systematically.",
      "Promoted to lead 'Premier Affiliate' and 'Top Academic Best Seller' divisions following the realization of 296+ high-value transactions generating over 334,222 BDT.",
      "Developed commercial pitch decks, graphics templates, and marketing assets to ensure uniform representation of the 10MS brand."
    ],
    skills: ["Stakeholder Relations", "Affiliate Management", "Coaching", "Copywriting", "Sales"]
  },
  {
    id: "exp-10ms-2",
    role: "Retention Coordinator",
    company: "10 Minute School",
    location: "Dhaka, Bangladesh / Hybrid",
    type: "Full-Time",
    hoursPerWeek: 40,
    startDate: "March 2022",
    endDate: "May 2022",
    highlights: [
      "Spearheaded retention workflows, customer satisfaction tracking, and outreach processes for the primary subscription products.",
      "Identified and cataloged recurring user concerns, coordinating structural product changes with development teams."
    ],
    skills: ["Customer Retention", "Data Analysis", "Product Analytics"]
  },
  {
    id: "exp-10ms-1",
    role: "Weekend Retention Manager & Contributor",
    company: "10 Minute School",
    location: "Dhaka, Bangladesh / Remote",
    type: "Part-Time",
    hoursPerWeek: 16,
    startDate: "September 2021",
    endDate: "February 2022",
    highlights: [
      "Created physics and accounting content slideshows and educational flashcards for secondary and higher secondary curriculum levels.",
      "Managed weekly client response queues and analyzed satisfaction ratings to ensure high quality metrics during weekend surges."
    ],
    skills: ["Instructional Design", "Customer Support", "Microsoft PowerPoint"]
  },
  {
    id: "exp-consulate",
    role: "Project Consulate HR & Admission Assistant",
    company: "Project Consulate (Bangladesh, Hybrid)",
    location: "Dhaka, Bangladesh",
    type: "Contract",
    hoursPerWeek: 35,
    startDate: "August 2023",
    endDate: "December 2023",
    highlights: [
      "Maintained tracking mechanisms for recruitment cycles, handled pre-screening calls, and scheduled interviews for program participants.",
      "Coordinated onboarding materials and academic scheduling calendars for incoming students across partner EdTech tracks."
    ],
    skills: ["Recruiting", "Admin Coordination", "Academic Planning"]
  },
  {
    id: "exp-yo",
    role: "Bangla Team Internship",
    company: "Youth Opportunities (Bangladesh / Remote)",
    location: "Dhaka, Bangladesh / Remote",
    type: "Internship",
    hoursPerWeek: 20,
    startDate: "June 2020",
    endDate: "November 2020",
    highlights: [
      "Sourced elite educational opportunities, scholarships, and international competitions for the global bangla-speaking student demographic.",
      "Translated high-level academic calls and application guidelines from English to native Bangla to ensure clarity and equity of access."
    ],
    skills: ["Opportunity Sourcing", "Translation", "Content Curation"]
  },
  {
    id: "exp-dobrimir",
    role: "Navatar Innovator / Fellow",
    company: "DobriMir Welfare Association (Russia / Remote)",
    location: "Moscow, Russia / Remote",
    type: "Fellowship",
    hoursPerWeek: 15,
    startDate: "May 2019",
    endDate: "April 2020",
    highlights: [
      "Awarded the prestigious 'DobriMir Welfare Fellowship 2019' centered on community welfare innovations.",
      "Contributed to international business development and community project layouts, and coordinated photography events to support global youth causes."
    ],
    skills: ["Intercultural Collaboration", "Social Media Care", "Event Ideation"]
  }
];

export const EXCHANGE_PROGRAMS: ExchangeProgram[] = [
  {
    id: "exc-sweden",
    country: "Sweden",
    flag: "🇸🇪",
    dates: "January – June 2024",
    programName: "Erasmus+ Semester Exchange Program",
    institution: "Mälardalen University, Västerås",
    coverage: "Earned 30 ECTS credits. Completed advanced modules in Artificial Intelligence 2; Cloud Computing, Security & Big Data; Internationalization Process of Business; and Swedish Language Acquisition. Passed with G (80% top mark).",
    outcome: "Designed and co-authored a comprehensive market-viability research project examining the physical and regulatory supply chain required to export traditional, organic jute bags from rural Bangladesh to Swedish consumer networks as an eco-certified plastic alternative."
  },
  {
    id: "exc-usa",
    country: "United States",
    flag: "🇺🇸",
    dates: "July – August 2023",
    programName: "UMBC Summer Intensive English & Cultural Leadership Program",
    institution: "University of Maryland, Baltimore County (UMBC)",
    coverage: "An intensive immersion program focusing on advanced academic writing, systemic public rhetoric, cross-cultural leadership models, and institutional governance structures in the public sphere.",
    outcome: "Built active frameworks for transnational project delivery and presented an analysis of rural youth digital literacy strategies to UMBC faculty boards."
  },
  {
    id: "exc-egypt",
    country: "Egypt",
    flag: "🇪🇬",
    dates: "October 2025",
    programName: "COP30 Simulation Conference Participant",
    institution: "The British University in Egypt (BUE) in partnership with UNDP Egypt & Danish Egyptian Dialogue Initiative",
    coverage: "One of 130 highly specialized global delegates selected from 91 universities across 47 nations. Completed a rigorous, pre-conference climate finance policy capacity-building syllabus.",
    outcome: "Negotiated as a state diplomat in the simulated 'Just Transition Lab' and the 'Debt Alliance & Climate Finance Lab', modeling the fiscal models required for climate-vulnerable nations to offset structural loss and damage."
  },
  {
    id: "exc-hungary",
    country: "Hungary",
    flag: "🇭🇺",
    dates: "May 2024",
    programName: "Sustainable Mindset Residential Youth Exchange",
    institution: "ReCreativity Youth NGO, Hollókő / Budapest",
    coverage: "Concentrated training in circular economies, sustainable manufacturing and lifestyle cycles, non-formal pedagogies, and creative waste recycling strategies.",
    outcome: "Learned structural techniques for non-digital community engagement. Upcycling concepts and local drama-theater models studied on this trip directly inspired Odommo '19's 'Plastic-Free Mymensingh' street-drama initiatives in 2026."
  },
  {
    id: "exc-poland",
    country: "Poland",
    flag: "🇵🇱",
    dates: "March 2024",
    programName: "2nd ASECU Youth Winter School",
    institution: "Jan Kochanowski University, Kielce & Copernicus Academy",
    coverage: "Themed 'The Future of Cross-National Cooperation in the Three Seas — Baltics, Black Sea, Mediterranean.' Examined macro-regional economics and regional security policies.",
    outcome: "Collaborated on a governance model utilizing quadruple-helix structures (government-academy-industry-citizens) to drive carbon neutrality in regional trade corridors."
  },
  {
    id: "exc-malaysia-v",
    country: "Malaysia",
    flag: "🇲🇾",
    dates: "March – July 2023",
    programName: "Virtual Entrepreneurship & Enterprise Development",
    institution: "Universiti Tun Hussein Onn",
    coverage: "Rigorous coursework examining venture capital mechanics, canvas design modeling, and early scale-stage funding models.",
    outcome: "Graduated with a GPA score of 3.94/4.00, formulating a scalable social enterprise structure for rural plastic upcycling.",
    isVirtual: true
  },
  {
    id: "exc-russia-v",
    country: "Russia",
    flag: "🇷🇺",
    dates: "September – December 2023",
    programName: "Virtual Intercultural Communications Course",
    institution: "Ural State University of Economics",
    coverage: "Exploration of semiotics, cognitive cultural barriers, and linguistic models in international organizational diplomacy.",
    outcome: "Earned a perfect 5.00/5.00 grade, specializing in conflict mitigation techniques for remote cross-border teams.",
    isVirtual: true
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: "edu-diu",
    degree: "BSc in Information Technology & Management (ITM)",
    institution: "Daffodil International University",
    location: "Daffodil Smart City, Ashulia, Savar, Dhaka, Bangladesh",
    dates: "July 2022 – June 2026",
    grade: "Cumulative CGPA: 3.87/4.00 (Graduated)",
    highlights: "Secured a highly competitive 85% merit tuition waiver covering the complete degree pathway, awarded based on outstanding pre-admission profiling and interviews. Maintained high academic standing while holding continuous corporate and NGO responsibilities."
  },
  {
    id: "edu-hsc",
    degree: "Higher Secondary Certificate (HSC) — Science Stream",
    institution: "Shahid Syed Nazrul Islam College",
    location: "Mymensingh, Bangladesh",
    dates: "Class of 2021",
    grade: "GPA: 5.00/5.00 (Perfect Board Standing)",
    highlights: "Distinguished pre-university college. Focused on core physics, chemistry, higher mathematics, and biology."
  },
  {
    id: "edu-ssc",
    degree: "Secondary School Certificate (SSC) — Science Stream",
    institution: "Gafargaon Islamia Government High School",
    location: "Mymensingh, Bangladesh",
    dates: "Class of 2019",
    grade: "GPA: 5.00/5.00 (Perfect Board Standing)",
    highlights: "Established and historically prominent high school. This is where I co-founded Odommo '19 during my 10th-grade class with classmates."
  }
];

export const RESEARCH_PROJECTS: ResearchItem[] = [
  {
    id: "res-bue",
    title: "A Global Mutirão in the Classroom: A National Curriculum Policy for Bangladesh to Build Youth Capacity for Green Jobs in Alignment with the SAA and ACE",
    institution: "The British University in Egypt (BUE Scholar)",
    year: "2025 (Policy Paper)",
    description: "Published policy paper/research report formulating a national curriculum policy framework build youth capacity for green jobs in alignment with climate advocacy and Action for Climate Empowerment (ACE) guidelines.",
    statusBadge: "📚 Published",
    sdgs: ["SDG 13: Climate Action", "SDG 4: Quality Education"]
  },
  {
    id: "res-thesis",
    title: "Solar Rooftop Systems and Net Metering in Bangladesh",
    institution: "Daffodil International University",
    year: "In Progress (Undergraduate Thesis)",
    description: "An empirical investigation analyzing the economic feasibility, technical constraints, and policy landscapes of grid-connected rooftop photovoltaic (PV) systems under the net metering guidelines of Bangladesh. Designed to map optimal pathways to accelerate solar adoption in developing economies, aligning directly with SDG 7 (Affordable & Clean Energy) and SDG 13 (Climate Action).",
    statusBadge: "🔬 In Progress",
    sdgs: ["SDG 7: Affordable and Clean Energy", "SDG 13: Climate Action"]
  },
  {
    id: "res-jute",
    title: "Feasibility and Life-Cycle Assessment of Jute Bag Exports (Bangladesh to Sweden)",
    institution: "Mälardalen University, Sweden",
    year: "2024 (Group Research)",
    description: "A comprehensive analysis tracing the supply chain sustainability, lifecycle carbon footprint, and commercial export potential of traditional Bangladeshi jute bags into Swedish retail chains. Outlined structural trade routes and environmental sustainability indexes.",
    statusBadge: "✅ Completed",
    sdgs: ["SDG 12: Responsible Consumption & Production", "SDG 13: Climate Action"]
  },
  {
    id: "res-book",
    title: "Student with Excellency — Bangla Productivity Hack Book",
    institution: "Amar Ekushey Boi Mela 2022, Bangladesh",
    year: "Published 2022 (Co-Author)",
    description: "Co-authored a highly practical and localized student guide to productivity and academic excellence, published nationally at the Amar Ekushey Book Fair 2022 in Bangladesh.",
    statusBadge: "📚 Published",
    sdgs: ["SDG 4: Quality Education"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "sk-ops",
    name: "Operations & Project Governance",
    skills: [
      "Process Architecture & SOP Compliance",
      "Pipeline & Task Workflow Tracking",
      "Monday.com, Asana, & Notion Setups",
      "Document Structuring & QA Auditing",
      "Cross-Time-Zone Distributed Cohesiveness",
      "Key Performance Indicator (KPI) Monitoring"
    ]
  },
  {
    id: "sk-tech",
    name: "Tech Ecosystems & Digital Enablers",
    skills: [
      "Advanced Google Workspace Management",
      "CRM Administration (HubSpot, HubSpot Sales Hub)",
      "Microsoft PowerPoint & Word (Advanced Layouts)",
      "Venture Mechanics & Early-Stage Models",
      "AI Prompt Engineering & Generative Tools",
      "EdTech Virtual Delivery Foundations"
    ]
  },
  {
    id: "sk-civ",
    name: "Civic Coalition & Advocacy",
    skills: [
      "Strategic Governance Planning",
      "Partnership Architecture Formulation",
      "Grassroots Campaign Mobilization",
      "Volunteer Network Architectures",
      "SDG Action Integration Models",
      "Stakeholder Communication Protocols"
    ]
  },
  {
    id: "sk-comm",
    name: "Rhetoric & Language Assets",
    skills: [
      "Professional Written English (Business-Grade)",
      "Debate and Oral Rhetoric",
      "Public Advocacy and Presentation Layouts",
      "B2B Client Coordination & Negotiations",
      "English (Expert: TOEFL & DET Verified)",
      "Bangla (Native Proficiency)",
      "Swedish (Conversational / Level 1)"
    ]
  }
];

export const HONORS_AWARDS: HonorItem[] = [
  {
    id: "hon-hult",
    title: "Hult Prize Competition Finalist",
    issuer: "Daffodil International University",
    year: "2023",
    description: "Formulated and pitched a highly specialized social enterprise model addressing local food security."
  },
  {
    id: "hon-scout",
    title: "National Champion, Talent Hunt (Recitation)",
    issuer: "Bangladesh Scouts",
    year: "2020",
    description: "Won first standing at the national level in recitation of the Holy Quran."
  },
  {
    id: "hon-olympiad",
    title: "11th Place, National Informatics Olympiad",
    issuer: "Bangladesh Informatics Olympiad Committee",
    year: "2020",
    description: "Ranked 11th nationwide in algorithmic problem solving and programming."
  },
  {
    id: "hon-waiver",
    title: "85% Merit Tuition Waiver Scheme",
    issuer: "Daffodil International University",
    year: "2022",
    description: "Awarded a continuous merit waiver for the entire BSc pathway based on outstanding pre-admission profiles."
  },
  {
    id: "hon-debate",
    title: "ICT Secretary, National Debate Federation (NDF-BD)",
    issuer: "Mymensingh District Committee",
    year: "2020 – 2022",
    description: "Governed digital communication and debate networks across the Mymensingh division."
  },
  {
    id: "hon-volunteer",
    title: "Volunteer of the Year Award",
    issuer: "Amar Ma Foundation",
    year: "2019",
    description: "Recognized for driving massive rural literacy campaign logistics throughout central Mymensingh."
  },
  {
    id: "hon-dobri",
    title: "DobriMir Welfare Fellowship Selection",
    issuer: "DobriMir Association, Moscow, Russia",
    year: "2019",
    description: "Elected to a paid Russian welfare fellowship following a competitive multi-national social action challenge."
  },
  {
    id: "hon-children",
    title: "Divisional Winner & National Runner-Up",
    issuer: "National Children's Prize Competition",
    year: "2019",
    description: "Placed as divisional champion in public debate and presentation."
  }
];

export const VOLUNTEERING_EXTRA: { title: string; organization: string; dates: string; details: string }[] = [
  {
    title: "Co-Founder & Chairman",
    organization: "Odommo '19 Youth Foundation",
    dates: "Oct 2018 – Present",
    details: "Lead a coalition of 200+ active youth workers across 4 districts delivering structural SDG development programs."
  },
  {
    title: "Rover Scout",
    organization: "Scouter Rafiqul Islam Open Scout Group",
    dates: "Jun 2019 – May 2022",
    details: "Practiced wilderness survival, public discipline coordination, and disaster response operations in Gafargaon."
  },
  {
    title: "Mymensingh Sadar Coordinator",
    organization: "Amar Ma Foundation",
    dates: "May 2019 – Sep 2022",
    details: "Supervised high-impact child education schedules, rural clothing donation runs, and local medical support campaigns."
  },
  {
    title: "Active Member",
    organization: "BD Clean — Mymensingh Section",
    dates: "Jun 2019 – Jun 2021",
    details: "Coordinated extensive physical sanitation operations on waterbodies and inner-city streets to advocate civil duty."
  },
  {
    title: "Active Department Volunteer",
    organization: "Daffodil ITM Summit Logistics Core",
    dates: "July 2022",
    details: "Represented the ITM Department as student guide during high-stakes tech summit panel sessions."
  }
];

export const GALLERY_MOMENTS: GalleryMoment[] = [
  {
    id: "gal-1",
    caption: "Climate Strike rally, co-leading mobilizations and demanding loss-and-damage climate financing from global high-emission nations.",
    location: "National Press Club, Dhaka, Bangladesh",
    year: "November 2025",
    imageTheme: "forest"
  },
  {
    id: "gal-2",
    caption: "Confronting global negotiators at the COP30 Simulate Summit representing climate-vulnerable coastal regions.",
    location: "British University in Egypt, Cairo",
    year: "October 2025",
    imageTheme: "desert"
  },
  {
    id: "gal-3",
    caption: "Erasmus+ academic semester at Västerås, capturing a crisp Swedish spring landscape while studying cloud system architectures.",
    location: "Mälardalen University, Sweden",
    year: "April 2024",
    imageTheme: "nordic"
  },
  {
    id: "gal-4",
    caption: "Co-founders conference planning at Gafargaon center, checking program agendas and organizing digital library distributions.",
    location: "Odommo '19 Headquarters, Mymensingh",
    year: "August 2023",
    imageTheme: "civic"
  },
  {
    id: "gal-5",
    caption: "Designing experimental organic upcycling crafts during the Sustainable Mindset residential course program.",
    location: "Hollókő Youth Center, Hungary",
    year: "May 2024",
    imageTheme: "circular"
  },
  {
    id: "gal-6",
    caption: "Representing Daffodil International University during the grueling high-stakes inter-university presentation contests.",
    location: "Daffodil Smart City, Savar, Dhaka",
    year: "July 2023",
    imageTheme: "academic"
  }
];
