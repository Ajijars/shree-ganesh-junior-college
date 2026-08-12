export const siteConfig = {
  name: "Shree Ganesh Junior College",
  shortName: "SGJC Korhale",
  location: "Korhale, Tal. Rahata, Dist. Ahmednagar",
  tagline: "Learning Today ... Leading Tomorrow",
  description:
    "Premier junior college at Shirdi Bypass, Korhale offering 11th & 12th Science and Commerce with specialized batches for NEET, JEE, CET, and Board examinations.",
  emails: {
    primary: "contact@shreeganeshedu.in",
    documents: "shreeganeshdocument@gmail.com",
  },
  phone: "+91 82752 82044",
  phoneAlt: "+91 92264 16755",
  instagram: "https://www.instagram.com/shreeganesh_official/",
  address: {
    line1: "Shree Ganesh International School & Junior College",
    line2: "Shirdi Bypass, Korhale",
    line3: "Tal. Rahata, Dist. Ahmednagar, Maharashtra",
  },
  officeHours: "Mon – Sat: 9:00 AM – 5:00 PM",
};

export const leadership = {
  chairman: {
    name: "Mr. Vijay Shete",
    title: "Chairman / President",
    photo: "/images/president-vijay-shete.png",
    message:
      "At Shree Ganesh Junior College, we believe every student carries unique potential. Our institution is committed to nurturing disciplined, confident, and capable young minds who will lead tomorrow. With dedicated faculty, modern infrastructure, and a values-driven environment, we strive to make quality education accessible to every aspiring learner in Korhale and beyond.",
  },
  biologyFaculty: {
    name: "Mr. Riyaj R. Shaikh",
    title: "Biology Faculty — NEET Batch",
    photo: "/images/riyaj-shaikh-biology.png",
    message:
      "With M.Sc. (Biotech) and M.Ed. qualifications and over 13 years of teaching experience, I am dedicated to guiding NEET aspirants through comprehensive Biology preparation. Our focus is on concept clarity, diagram-based learning, and rigorous MCQ practice to help every student achieve their medical career goals.",
  },
};

export const visionMission = {
  vision:
    "To be a leading junior college in the region, recognized for academic excellence, ethical values, and producing confident graduates ready for higher education and professional careers.",
  mission: [
    "Provide quality 11th & 12th education in Science and Commerce streams aligned with Maharashtra State Board standards.",
    "Offer specialized coaching tracks for NEET, JEE, CET, and Regular Board preparation.",
    "Foster holistic development through sports, cultural events, and leadership opportunities.",
    "Maintain a safe, inclusive campus with hostel facilities for outstation students.",
    "Build strong partnerships with parents and the community for student success.",
  ],
};

export const stats = [
  { label: "Years of Excellence", value: "15+" },
  { label: "Science Batches", value: "4" },
  { label: "Streams Offered", value: "2" },
  { label: "Faculty Members", value: "25+" },
];

export const scienceBatches = [
  {
    id: "neet",
    name: "NEET Batch",
    slug: "neet",
    icon: "Stethoscope",
    description:
      "Intensive PCB-focused program designed for medical entrance preparation alongside HSC board syllabus.",
    subjects: ["Physics", "Chemistry", "Biology", "English"],
    features: [
      "Daily NEET-pattern tests",
      "Biology diagram & MCQ workshops",
      "Previous year paper analysis",
      "Doubt-solving sessions",
    ],
    syllabus: [
      { unit: "Physics", topics: "Mechanics, Thermodynamics, Optics, Modern Physics, Electrostatics" },
      { unit: "Chemistry", topics: "Physical, Organic & Inorganic Chemistry — full HSC + NEET focus" },
      { unit: "Biology", topics: "Botany & Zoology — Botany, Human Physiology, Genetics, Ecology" },
    ],
  },
  {
    id: "jee",
    name: "JEE Batch",
    slug: "jee",
    icon: "Calculator",
    description:
      "Rigorous PCM program for JEE Main & Advanced aspirants with problem-solving emphasis.",
    subjects: ["Physics", "Chemistry", "Mathematics", "English"],
    features: [
      "Advanced problem-solving drills",
      "Weekly JEE mock tests",
      "Formula sheets & shortcut techniques",
      "Individual performance tracking",
    ],
    syllabus: [
      { unit: "Physics", topics: "Mechanics, Waves, EM, Modern Physics — JEE-weighted topics" },
      { unit: "Chemistry", topics: "Physical Chemistry emphasis, Organic mechanisms, Inorganic trends" },
      { unit: "Mathematics", topics: "Calculus, Algebra, Coordinate Geometry, Vectors, Probability" },
    ],
  },
  {
    id: "cet",
    name: "CET Batch",
    slug: "cet",
    icon: "Target",
    description:
      "Balanced PCM/PCB preparation for MHT-CET and other state-level engineering & pharmacy entrances.",
    subjects: ["Physics", "Chemistry", "Mathematics/Biology", "English"],
    features: [
      "CET-pattern weekly tests",
      "Speed & accuracy training",
      "Maharashtra CET syllabus alignment",
      "Board + CET dual preparation",
    ],
    syllabus: [
      { unit: "Physics", topics: "HSC syllabus with CET MCQ practice" },
      { unit: "Chemistry", topics: "HSC syllabus with reaction-based MCQs" },
      { unit: "Mathematics", topics: "HSC Maths with CET-specific problem types" },
    ],
  },
  {
    id: "regular",
    name: "Regular Board Batch",
    slug: "regular-board",
    icon: "BookOpen",
    description:
      "Comprehensive HSC Science preparation focused on Maharashtra State Board examinations.",
    subjects: ["Physics", "Chemistry", "Biology/Mathematics", "English", "IT/Optional"],
    features: [
      "Board exam-oriented teaching",
      "Preliminary & mock board exams",
      "Practical lab sessions",
      "Study material & notes provided",
    ],
    syllabus: [
      { unit: "Physics", topics: "Full MSBSHSE 11th & 12th Physics syllabus" },
      { unit: "Chemistry", topics: "Full MSBSHSE 11th & 12th Chemistry syllabus" },
      { unit: "Biology/Maths", topics: "Stream-specific HSC syllabus coverage" },
    ],
  },
];

export const commerceStream = {
  name: "Commerce Stream",
  description:
    "Comprehensive 11th & 12th Commerce program covering Accountancy, Economics, Organisation of Commerce, and Secretarial Practice with focus on board excellence and career readiness.",
  subjects: [
    "Book Keeping & Accountancy",
    "Economics",
    "Organisation of Commerce & Management",
    "Secretarial Practice",
    "English",
    "Information Technology",
  ],
  features: [
    "CA Foundation awareness sessions",
    "Practical accounting workshops",
    "Business case study discussions",
    "Board exam preparation & mock tests",
  ],
  syllabus: [
    { unit: "Accountancy", topics: "Journal, Ledger, Final Accounts, Partnership, Company Accounts" },
    { unit: "Economics", topics: "Micro & Macro Economics, Indian Economic Development" },
    { unit: "OCM", topics: "Forms of Business, Management Principles, Marketing" },
    { unit: "SP", topics: "Company Law, Meetings, Documents & Correspondence" },
  ],
};

export const teachingStaff = [
  { name: "Prof. Deshmukh", subject: "Physics", qualification: "M.Sc. Physics, B.Ed.", experience: "12 years" },
  { name: "Prof. Patil", subject: "Chemistry", qualification: "M.Sc. Chemistry, B.Ed.", experience: "10 years" },
  { name: "Prof. Kulkarni", subject: "Mathematics", qualification: "M.Sc. Mathematics", experience: "15 years" },
  { name: "Mr. Riyaj R. Shaikh", subject: "Biology (NEET)", qualification: "M.Sc. Biotech, M.Ed.", experience: "13+ years" },
  { name: "Prof. More", subject: "Accountancy", qualification: "M.Com, CA Inter", experience: "11 years" },
  { name: "Prof. Shinde", subject: "Economics", qualification: "M.A. Economics", experience: "9 years" },
  { name: "Prof. Gaikwad", subject: "English", qualification: "M.A. English, B.Ed.", experience: "7 years" },
  { name: "Prof. Pawar", subject: "IT / Computer", qualification: "M.Sc. IT", experience: "6 years" },
];

export const nonTeachingStaff = [
  { name: "Mr. Thorat", role: "Office Superintendent", department: "Administration" },
  { name: "Mrs. Bhosale", role: "Accountant", department: "Accounts" },
  { name: "Mr. Salunkhe", role: "Lab Assistant", department: "Science Lab" },
  { name: "Mrs. Raut", role: "Library In-charge", department: "Library" },
  { name: "Mr. Mane", role: "Hostel Warden", department: "Hostel" },
  { name: "Mrs. Chavan", role: "Clerk", department: "Admission Office" },
];

export const hostelInfo = {
  title: "Boys & Girls Hostel Facilities",
  description:
    "Safe, disciplined, and homely hostel environment for outstation students pursuing 11th and 12th at SGJC Korhale.",
  facilities: [
    "Separate wings for boys and girls with 24/7 security",
    "Clean, well-ventilated rooms (2–4 sharing)",
    "Nutritious mess with vegetarian meals",
    "Study hall with evening supervision",
    "RO drinking water & laundry facility",
    "Wi-Fi in common areas for academic use",
    "Regular parent communication & attendance reports",
  ],
  rules: [
    "Fixed study hours: 7:00 PM – 10:00 PM daily",
    "Mobile phone usage restricted during study hours",
    "Visitors allowed only on designated days with prior notice",
    "Zero tolerance for ragging — anti-ragging committee active",
  ],
  warden: {
    name: "Mr. Mane",
    phone: "+91 98765 43210",
  },
};

export const galleryImages = [
  {
    src: "/images/campus-building.jpg",
    alt: "Shree Ganesh Junior College main building, Korhale",
    caption: "Main Campus Building",
  },
  {
    src: "/images/campus-aerial.png",
    alt: "Aerial view of Shree Ganesh campus",
    caption: "Campus Overview",
  },
  {
    src: "/images/ceremony.png",
    alt: "Traditional ceremony at Shree Ganesh Junior College",
    caption: "Campus Ceremony",
  },
  {
    src: "/images/neet-results-2022.png",
    alt: "NEET Results 2022 — Shree Ganesh Education Society",
    caption: "NEET Results 2022",
  },
  {
    src: "/images/cet-results-2022.png",
    alt: "MH-CET Results 2022 — Shree Ganesh Junior College",
    caption: "MH-CET Results 2022",
  },
  {
    src: "/images/jee-mains-2023.png",
    alt: "JEE Mains 2023 Phase 1 Results",
    caption: "JEE Mains 2023",
  },
  {
    src: "/images/results-highlights.png",
    alt: "IIT, Medical and JEE Mains 2024 Results",
    caption: "Results Highlights",
  },
  {
    src: "/images/ssc-results-2022-newspaper.png",
    alt: "Punya Nagari newspaper — Shree Ganesh 100% SSC results 2022",
    caption: "SSC 100% Results — Punya Nagari",
  },
];

export const resultBanners = [
  {
    title: "IIT, Medical & JEE Highlights",
    subtitle: "IIT Selection 2023 · Medical Selection 2022 · JEE Mains 2024",
    src: "/images/results-highlights.png",
    alt: "Combined results — IIT, Medical and JEE Mains achievements",
  },
  {
    title: "JEE Mains 2023 — Phase 1",
    subtitle: "IIT म्हणजेच, श्रीगणेश — Top percentiles up to 96.05%",
    src: "/images/jee-mains-2023.png",
    alt: "JEE Mains 2023 Phase 1 results",
  },
  {
    title: "MH-CET Result 2022",
    subtitle: "44 students featured with PCM/PCB percentiles",
    src: "/images/cet-results-2022.png",
    alt: "MH-CET Result 2022",
  },
  {
    title: "NEET Result 2022",
    subtitle: "Top scores up to 582/720",
    src: "/images/neet-results-2022.png",
    alt: "NEET Result 2022",
  },
];

export const neetToppers2022 = [
  { name: "Akash Jagtap", score: "582 / 720" },
  { name: "Rutik Chavan", score: "579 / 720" },
  { name: "Samadhan Randale", score: "554 / 720" },
  { name: "Mayuresh Salgat", score: "550 / 720" },
  { name: "Shruti Shinde", score: "511 / 720" },
];

export const jeeMains2023Toppers = [
  { name: "Sai Gawali", score: "96.05%" },
  { name: "Pranjal Shete", score: "94.68%" },
  { name: "Riddhi Lahare", score: "94.22%" },
  { name: "Biraj Gorde", score: "86.12%" },
];

export const iitSelection2023 = [
  { name: "Ridhi Lahare", achievement: "Gen EWS — Rank 3114" },
  { name: "Sai Gavli", achievement: "OBC-NCL — Rank 4645" },
];

export const medicalSelection2022 = [
  { name: "Samadhan Randale", achievement: "Terna Medical College, Mumbai" },
  { name: "Mayuresh Salgar", achievement: "Terna Medical College, Mumbai" },
  { name: "Ritika Thorat", achievement: "Gov. Medical College, Alibag" },
];

export const jeeMains2024Toppers = [
  { name: "Om Malusare", score: "97.20%" },
  { name: "Chaitanya Wani", score: "96.69%" },
  { name: "Ashish Fatangare", score: "95.53%" },
  { name: "Danish Sheikh", score: "90.27%" },
  { name: "Priya Shirole", score: "89.48%" },
  { name: "Aditya Dabhade", score: "89.32%" },
  { name: "Parth Ambhale", score: "89.25%" },
  { name: "Manoj Malwade", score: "88.40%" },
  { name: "Sahil Dahe", score: "86.93%" },
  { name: "Aziz Sheikh", score: "85.71%" },
  { name: "Sarthak Gaikwad", score: "84.66%" },
  { name: "Meghana Nimbalkar", score: "83.57%" },
  { name: "Sahish Dabhade", score: "82.76%" },
  { name: "Gauri Pachore", score: "82.36%" },
  { name: "Tarkesh Khabde", score: "81.70%" },
  { name: "Vishal Kolhe", score: "81.54%" },
  { name: "Hemraj Bhusare", score: "81.15%" },
  { name: "Prashant Mokal", score: "81.12%" },
  { name: "Sarvesh Agrawal", score: "81.00%" },
  { name: "Vaishnavi Katkar", score: "80.23%" },
];

export const sscResults2022 = {
  headline: "100% Results — 3rd Consecutive Year",
  source: "Punya Nagari — Smart Shrirampur, 20 June 2022",
  institution: "Shree Ganesh International School, Korhale",
  stats: {
    appeared: 54,
    pass: "100%",
    distinction: 42,
    firstClass: 11,
    secondClass: 1,
  },
  toppers: [
    { name: "Chaitanya Ravindra Gade", score: "96.4%" },
    { name: "Gayatri Ravindra Gunjal", score: "95.8%" },
    { name: "Siddhi Vishnu Karekar", score: "94%" },
    { name: "Arthav Rajesh Gaikwad", score: "93.2%" },
  ],
  newspaperImage: "/images/ssc-results-2022-newspaper.png",
};

export const results = {
  board2025: {
    science: { pass: "98%", distinction: "72%", topScore: "96.40%" },
    commerce: { pass: "99%", distinction: "68%", topScore: "94.80%" },
  },
  entranceHighlights: [
    { exam: "JEE Mains 2024", achievement: "Top percentile 97.20% — Om Malusare" },
    { exam: "IIT Selection 2023", achievement: "Ridhi Lahare (Rank 3114) · Sai Gavli (Rank 4645)" },
    { exam: "MH-CET 2022", achievement: "44 students with outstanding PCM/PCB percentiles" },
    { exam: "NEET 2022", achievement: "Top score 582/720 — Akash Jagtap" },
    { exam: "SSC 2022", achievement: "100% pass — 3rd consecutive year (42 distinctions out of 54 students)" },
  ],
  toppers: [
    { name: "Om Malusare", stream: "JEE Mains 2024", score: "97.20%" },
    { name: "Sai Gawali", stream: "JEE Mains 2023", score: "96.05%" },
    { name: "Akash Jagtap", stream: "NEET 2022", score: "582 / 720" },
  ],
};

export const sports = [
  { name: "Cricket", description: "Inter-collegiate and district-level participation" },
  { name: "Kabaddi", description: "Annual tournaments and coaching camps" },
  { name: "Volleyball", description: "College team with regular practice sessions" },
  { name: "Athletics", description: "Track & field events at university level" },
  { name: "Chess", description: "Indoor competitions and brain sport club" },
  { name: "Badminton", description: "Court facilities and friendly matches" },
];

export const events = [
  {
    title: "Annual Day Celebration",
    date: "January",
    description: "Cultural performances, prize distribution, and chief guest address.",
  },
  {
    title: "Science Exhibition",
    date: "December",
    description: "Students showcase working models and research projects.",
  },
  {
    title: "Sports Week",
    date: "November",
    description: "Week-long inter-class sports competitions across all disciplines.",
  },
  {
    title: "Freshers' Welcome",
    date: "July",
    description: "Warm welcome gathering for newly admitted 11th standard students.",
  },
  {
    title: "Farewell & Graduation",
    date: "February",
    description: "Sending off 12th standard students with memories and blessings.",
  },
  {
    title: "Guest Lecture Series",
    date: "Throughout Year",
    description: "Doctors, engineers, and CA professionals share career guidance.",
  },
];

export const competitions = [
  { name: "Inter-Collegiate Quiz", category: "Academic" },
  { name: "Debating Competition", category: "Literary" },
  { name: "Science Olympiad Prep", category: "Science" },
  { name: "Essay Writing", category: "Literary" },
  { name: "Math Talent Search", category: "Mathematics" },
  { name: "Business Plan Contest", category: "Commerce" },
];

export const admissions = {
  eligibility: {
    eleventh: [
      "Passed SSC (10th) from a recognized board",
      "Minimum 50% aggregate (Science); 45% (Commerce) — subject to change",
      "School Leaving Certificate & mark sheet required",
    ],
    twelfth: [
      "Passed 11th standard from recognized junior college",
      "Transfer Certificate if from another institution",
      "Stream change subject to seat availability & merit",
    ],
  },
  documents: [
    "SSC Mark Sheet & Passing Certificate",
    "School Leaving Certificate (LC/TC)",
    "Aadhar Card copy",
    "Passport-size photographs (4 nos.)",
    "Caste certificate (if applicable)",
    "Income certificate (if applicable for scholarship)",
  ],
  process: [
    "Fill online / offline admission enquiry form",
    "Visit campus with documents for verification",
    "Merit list & batch allocation (NEET/JEE/CET/Regular)",
    "Fee payment & confirmation",
    "Orientation program for parents & students",
  ],
  fees: [
    { item: "Tuition Fee (Science)", amount: "Contact Office" },
    { item: "Tuition Fee (Commerce)", amount: "Contact Office" },
    { item: "Hostel Fee (Annual)", amount: "Contact Office" },
    { item: "Lab & Library Fee", amount: "Included / Contact Office" },
  ],
};

export const announcements = [
  { date: "Aug 2026", text: "Admissions open for 11th Science & Commerce — 2026-27 session." },
  { date: "Aug 2026", text: "NEET & JEE batch orientation program — details at office." },
  { date: "Jul 2026", text: "12th practical exam schedule available at office." },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/academics",
    label: "Academics",
    children: [
      { href: "/academics/science/neet", label: "NEET Batch" },
      { href: "/academics/science/jee", label: "JEE Batch" },
      { href: "/academics/science/cet", label: "CET Batch" },
      { href: "/academics/science/regular-board", label: "Regular Board" },
      { href: "/academics/commerce", label: "Commerce" },
    ],
  },
  { href: "/admissions", label: "Admissions" },
  { href: "/hostel", label: "Hostel" },
  { href: "/results", label: "Results" },
  { href: "/activities", label: "Activities" },
  { href: "/contact", label: "Contact" },
];
