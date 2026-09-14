import {
  CollegeNotice,
  CollegeEvent,
  FacultyMember,
  Department,
  StudentProfile,
  GalleryPhoto,
  LibraryBook,
  StudentGrievance,
} from '../types';

export const INITIAL_NOTICES: CollegeNotice[] = [
  {
    id: 'not-01',
    title: 'Notification regarding FYUGP 2nd & 4th Semester Form Fill-up for Session 2024-25',
    category: 'Examinations',
    date: '2025-05-12',
    isUrgent: true,
    isPinned: true,
    refNo: 'BC/EXAM/2025/112',
    fileSize: '480 KB',
    description: 'All regular students of B.A., B.Sc. and B.C.A 2nd and 4th Semester under Bodoland University are hereby notified to submit their examination forms online via the Samarth Student Portal before May 28, 2025.',
    pdfContent: 'Official Notification: Form fill-up window will remain active from 15th May to 28th May 2025 without fine. Late fine of ₹300 applicable up to 31st May 2025. Verification of documents will be conducted at the College Examination Cell from 10:00 AM to 3:00 PM.'
  },
  {
    id: 'not-02',
    title: 'Admissions Open for FYUGP (4-Year UG) 1st Semester under NEP 2020 through Samarth Portal',
    category: 'Admission',
    date: '2025-05-08',
    isUrgent: true,
    isPinned: true,
    refNo: 'BC/ADM/2025/45',
    fileSize: '1.2 MB',
    description: 'Online applications are invited for admission into First Semester of B.A., B.Sc., and B.C.A programs for the academic session 2025-26. Eligible candidates must apply through the Assam Higher Education Samarth Portal.',
    pdfContent: 'Admission Schedule 2025-26:\n1. Online Application starts: 10th May 2025\n2. Last date of application: 5th June 2025\n3. Publication of 1st Merit List: 10th June 2025\n4. Offline Verification & Admission: 12th-14th June 2025.\nFee waiver is available as per Govt. of Assam Pragyan Bharati guidelines.'
  },
  {
    id: 'not-03',
    title: 'Govt. of Assam Fee Waiver Scheme & Ishan Uday Scholarship Renewal Notice',
    category: 'Scholarship',
    date: '2025-04-29',
    isUrgent: false,
    isPinned: false,
    refNo: 'BC/SCHOL/2025/19',
    fileSize: '650 KB',
    description: 'Students applying under the Pragyan Bharati Free Admission scheme must submit parental annual income certificate (below ₹2 Lakh) issued by Circle Officer along with proof of sapling plantation.',
    pdfContent: 'Guidelines for Fee Waiver: Submit proof of family income below 2.0 Lakhs, Marksheet of qualifying exam, and Geotagged photograph of tree plantation on the day of physical verification.'
  },
  {
    id: 'not-04',
    title: 'National Seminar on "Preservation of Indigenous Languages in BTR" by Department of Bodo',
    category: 'Academic',
    date: '2025-04-20',
    isUrgent: false,
    isPinned: false,
    refNo: 'BC/SEM/2025/08',
    fileSize: '820 KB',
    description: 'Two-day National Seminar in collaboration with CIIL Mysore and Bodoland University scheduled for 18th-19th June 2025. Call for research papers from scholars, academicians and students.',
    pdfContent: 'Keynote speakers include eminent linguists from Bodo Sahitya Sabha and Gauhati University. Last date for abstract submission: 31st May 2025.'
  },
  {
    id: 'not-05',
    title: 'Short Tender Notice for Supply of Advanced Physics & Chemistry Laboratory Equipment',
    category: 'Tender',
    date: '2025-04-14',
    isUrgent: false,
    isPinned: false,
    refNo: 'BC/TND/RUSA/2025/04',
    fileSize: '340 KB',
    description: 'Sealed tenders are invited from registered suppliers/manufacturers for supply of spectrophotometers, digital balances, and optical benches under RUSA 2.0 grant.',
    pdfContent: 'Tender documents available at college office during working hours. Earnest Money Deposit (EMD): ₹10,000. Last date of tender submission: 25th May 2025 by 2:00 PM.'
  },
  {
    id: 'not-06',
    title: 'College Annual Sports & Cultural Week (Varshik Utsov) Dates Finalized',
    category: 'General',
    date: '2025-04-02',
    isUrgent: false,
    isPinned: false,
    refNo: 'BC/GEN/2025/88',
    fileSize: '510 KB',
    description: 'The Barama College Students Union (BCSU) Annual College Week will be celebrated with grand athletic competitions, literary contests, cultural rallies and theatrical performances.',
    pdfContent: 'All department flags and student houses are instructed to register their participants at the BCSU office by 20th April.'
  }
];

export const INITIAL_EVENTS: CollegeEvent[] = [
  {
    id: 'ev-01',
    title: '54th College Foundation Day Celebration',
    date: '2025-08-16',
    time: '09:30 AM - 04:30 PM',
    venue: 'College Central Auditorium & Open Stage',
    description: 'Commemorating 54 glorious years of higher education in Baksa district with flag hoisting, memorial lecture, alumni felicitation, and cultural parade.',
    category: 'Celebration',
    organizer: 'Barama College Celebrations Committee',
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ev-02',
    title: 'Bodoland University Inter-College Football Tournament (Zonal)',
    date: '2025-09-04',
    time: '08:00 AM - 05:00 PM',
    venue: 'Barama College Sports Complex Playground',
    description: 'Hosting 16 affiliated collegiate teams across BTR for the premier university football championship trophy.',
    category: 'Sports',
    organizer: 'Department of Physical Education & BCSU',
    imageUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ev-03',
    title: 'Workshop on Python for Data Science and Machine Learning',
    date: '2025-09-22',
    time: '10:00 AM - 02:30 PM',
    venue: 'Department of Computer Applications (BCA Lab)',
    description: 'Hands-on training session for undergraduate science and BCA students conducted by industry mentors from Guwahati tech park.',
    category: 'Workshop',
    organizer: 'Dept. of Computer Applications & IQAC',
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ev-04',
    title: 'World Environment Day Tree Plantation & Eco-Rally',
    date: '2025-06-05',
    time: '07:30 AM - 11:30 AM',
    venue: 'College Eco-Park & Barama Town Circuit',
    description: 'Mass sapling plantation drive organized by NSS and Eco-Club volunteers towards carbon-neutral green campus accreditation.',
    category: 'Cultural',
    organizer: 'NSS Unit & Nature Club, Barama College',
    imageUrl: 'https://images.unsplash.com/photo-1492496913980-501348b61469?auto=format&fit=crop&w=800&q=80'
  }
];

export const INITIAL_DEPARTMENTS: Department[] = [
  {
    id: 'dep-bodo',
    name: 'Department of Bodo (UG & PG)',
    code: 'BOD',
    stream: 'Arts',
    hod: 'Dr. Binoy Kumar Brahma',
    facultyCount: 7,
    intakeCapacity: 120,
    established: 1974,
    description: 'One of the prestigious departments in lower Assam offering B.A. (Honours/Major) and regular Master of Arts (M.A.) under Bodoland University. The department has produced numerous literary scholars, poets, and teachers.',
    papers: [
      'History of Bodo Literature',
      'Modern Bodo Poetry & Drama',
      'Tibeto-Burman Linguistics',
      'Folklore and Tribal Culture of Assam',
      'Bodo Grammar & Stylistics'
    ],
    careerProspects: ['Academic Teaching (School/College)', 'Civil Services', 'Translation & Publishing', 'Mass Media & Journalism', 'Cultural Research'],
    imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dep-assamese',
    name: 'Department of Assamese',
    code: 'ASM',
    stream: 'Arts',
    hod: 'Mrs. Jayashree Das',
    facultyCount: 5,
    intakeCapacity: 90,
    established: 1971,
    description: 'Established along with the founding of Barama College in 1971. Focuses on classical, medieval, and modern Assamese literature, dialectology, and cultural heritage.',
    papers: [
      'Sankardeva & Neo-Vaishnavite Literature',
      'History of Assamese Language',
      'Modern Assamese Novel and Drama',
      'Comparative Indian Literature',
      'Assamese Scriptology & Epigraphy'
    ],
    careerProspects: ['Lectureship & Research', 'Content Writing & Editing', 'Civil Services (APSC)', 'Public Relations'],
    imageUrl: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dep-english',
    name: 'Department of English',
    code: 'ENG',
    stream: 'Arts',
    hod: 'Mr. Pranjal Goswami',
    facultyCount: 6,
    intakeCapacity: 80,
    established: 1971,
    description: 'Offers comprehensive studies in British, American, Post-Colonial, and Indian Writing in English, along with functional English language laboratory classes.',
    papers: [
      'British Poetry & Drama (14th to 18th Century)',
      'Indian Classical Literature in Translation',
      'Literary Criticism and Theory',
      'Gender Studies and Cultural Analysis',
      'English Language Teaching (ELT)'
    ],
    careerProspects: ['Corporate Communications', 'Higher Education & Academia', 'Publishing & Editorial', 'Creative Writing'],
    imageUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dep-geography',
    name: 'Department of Geography (UG & PG)',
    code: 'GEO',
    stream: 'Arts',
    hod: 'Dr. Mukut Chandra Barman',
    facultyCount: 6,
    intakeCapacity: 60,
    established: 1978,
    description: 'Well-equipped with GIS & Remote Sensing lab, physical cartography surveying gear, and regular geographic field expeditions across the Himalayan foothills and Brahmaputra valley.',
    papers: [
      'Geomorphology & Climatology',
      'GIS, GPS & Digital Remote Sensing',
      'Regional Geography of North-East India',
      'Environmental Geography & Hazard Management',
      'Socio-Economic & Settlement Geography'
    ],
    careerProspects: ['Town Planning & Urban Development', 'Remote Sensing / ISRO / NESAC projects', 'Disaster Management', 'Survey of India'],
    imageUrl: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dep-botany',
    name: 'Department of Botany',
    code: 'BOT',
    stream: 'Science',
    hod: 'Dr. Anamika Basumatary',
    facultyCount: 4,
    intakeCapacity: 50,
    established: 1993,
    description: 'Equipped with a botanical garden featuring indigenous medicinal plants of Bodoland and Manas National Park biodiversity corridor. Offers practical research in microbiology and plant genetics.',
    papers: [
      'Plant Diversity & Taxonomy',
      'Plant Physiology & Biochemistry',
      'Microbiology & Plant Pathology',
      'Ethnobotany of North-East India',
      'Plant Biotechnology & Tissue Culture'
    ],
    careerProspects: ['Botanical Survey of India (BSI)', 'Forest Services (IFS / AFS)', 'Biotech Labs', 'Agricultural Research'],
    imageUrl: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dep-zoology',
    name: 'Department of Zoology',
    code: 'ZOO',
    stream: 'Science',
    hod: 'Dr. Hemen Kalita',
    facultyCount: 5,
    intakeCapacity: 50,
    established: 1993,
    description: 'Boasts an extensive zoological museum, sericulture unit, and fisheries research module studying freshwater aquatic ecosystems of Baksa district.',
    papers: [
      'Non-Chordates & Chordates Diversity',
      'Molecular Biology & Genetics',
      'Ecology & Wildlife Conservation',
      'Aquaculture and Sericulture Technologies',
      'Animal Physiology & Endocrinology'
    ],
    careerProspects: ['Zoological Survey of India (ZSI)', 'Wildlife Sanctuaries & National Parks', 'Fisheries Department', 'Pharmaceutical Research'],
    imageUrl: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dep-chemistry',
    name: 'Department of Chemistry',
    code: 'CHE',
    stream: 'Science',
    hod: 'Dr. Rabindra Kumar Sarma',
    facultyCount: 5,
    intakeCapacity: 45,
    established: 1993,
    description: 'Modern wet-chemical laboratories, analytical spectrophotometry, and green chemistry initiatives. Focuses on water quality testing and local soil analysis.',
    papers: [
      'Inorganic, Organic & Physical Chemistry',
      'Quantum Chemistry & Spectroscopy',
      'Green Chemistry & Sustainable Processes',
      'Analytical Chemistry and Instrumental Methods',
      'Polymer and Industrial Chemistry'
    ],
    careerProspects: ['Chemical & Petrochemical Industries', 'Oil India Limited / IOCL', 'Forensic Science Laboratories', 'Quality Control & Drug Testing'],
    imageUrl: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dep-physics',
    name: 'Department of Physics',
    code: 'PHY',
    stream: 'Science',
    hod: 'Mr. Bipul Chandra Deka',
    facultyCount: 4,
    intakeCapacity: 45,
    established: 1993,
    description: 'Offers state-of-the-art dark room optics labs, digital electronics workstations, and astronomical telescope observatory sessions for students.',
    papers: [
      'Classical Mechanics & Thermodynamics',
      'Electrodynamics & Optics',
      'Quantum Mechanics and Solid State Physics',
      'Digital Electronics & Microprocessors',
      'Nuclear Physics and Astrophysics'
    ],
    careerProspects: ['Scientific Officer (BARC, ISRO, DRDO)', 'Renewable Energy / Solar Sector', 'Data Analysis', 'Engineering Higher Studies'],
    imageUrl: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dep-math',
    name: 'Department of Mathematics',
    code: 'MAT',
    stream: 'Science',
    hod: 'Dr. Kamala Kanta Sarma',
    facultyCount: 4,
    intakeCapacity: 60,
    established: 1993,
    description: 'Specializes in Abstract Algebra, Real & Complex Analysis, Numerical Methods, and MATLAB computational problem-solving.',
    papers: [
      'Differential Calculus & Analytical Geometry',
      'Real & Complex Analysis',
      'Linear Algebra & Group Theory',
      'Numerical Analysis and Computer Programming',
      'Operations Research and Optimization'
    ],
    careerProspects: ['Statistical Research & Actuarial Science', 'Banking & Financial Analytics', 'Software Development', 'Higher Research (IITs/IISERs)'],
    imageUrl: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dep-bca',
    name: 'Department of Computer Applications (BCA)',
    code: 'BCA',
    stream: 'Computer Applications',
    hod: 'Mr. Rituraj Narzary',
    facultyCount: 4,
    intakeCapacity: 40,
    established: 2012,
    description: 'A flagship professional degree program equipping students with software development skills, database architecture, cloud computing, and web technologies.',
    papers: [
      'Data Structures & Algorithms in C++',
      'Object-Oriented Programming with Java & Python',
      'Relational Database Management Systems (RDBMS)',
      'Computer Networks and Web Technologies',
      'Software Engineering & Project Management'
    ],
    careerProspects: ['Software Developer / Web Architect', 'Network Administrator', 'IT Officer in Banks & Govt Agencies', 'Cybersecurity Specialist'],
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80'
  }
];

export const INITIAL_FACULTY: FacultyMember[] = [
  {
    id: 'fac-01',
    name: 'Dr. Tapan Dutta',
    department: 'Administration',
    designation: 'Principal',
    qualification: 'M.Sc., Ph.D., Post-Doc',
    email: 'principalbaramacollege@gmail.com',
    phone: '+91 3624 281449',
    specialization: 'Higher Education Management & Condensed Matter Physics',
    experienceYears: 28,
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'fac-02',
    name: 'Dr. Binoy Kumar Brahma',
    department: 'Department of Bodo (UG & PG)',
    designation: 'Associate Professor & HOD',
    qualification: 'M.A. (Gold Medalist), Ph.D.',
    email: 'binoy.brahma@baramacollegebarama.edu.in',
    specialization: 'Bodo Linguistics, Folkloristics & Tibeto-Burman Dialects',
    experienceYears: 22,
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'fac-03',
    name: 'Dr. Mukut Chandra Barman',
    department: 'Department of Geography (UG & PG)',
    designation: 'Associate Professor & HOD',
    qualification: 'M.Sc., M.Phil., Ph.D.',
    email: 'mukut.barman@baramacollegebarama.edu.in',
    specialization: 'Remote Sensing, Geoinformatics & Fluvial Geomorphology',
    experienceYears: 20,
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'fac-04',
    name: 'Dr. Anamika Basumatary',
    department: 'Department of Botany',
    designation: 'Assistant Professor & HOD',
    qualification: 'M.Sc., Ph.D., CSIR-NET',
    email: 'anamika.basumatary@baramacollegebarama.edu.in',
    specialization: 'Medicinal Ethnobotany & Plant Biotechnology',
    experienceYears: 14,
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'fac-05',
    name: 'Mr. Rituraj Narzary',
    department: 'Department of Computer Applications (BCA)',
    designation: 'Assistant Professor & Coordinator',
    qualification: 'MCA, M.Tech (CSE)',
    email: 'rituraj.narzary@baramacollegebarama.edu.in',
    specialization: 'Database Systems, Full Stack Web Architecture & Cloud Tech',
    experienceYears: 11,
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'fac-06',
    name: 'Mrs. Jayashree Das',
    department: 'Department of Assamese',
    designation: 'Associate Professor & HOD',
    qualification: 'M.A., M.Phil',
    email: 'jayashree.das@baramacollegebarama.edu.in',
    specialization: 'Medieval Assamese Literature & Vaisnavite Sattras',
    experienceYears: 19,
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80'
  }
];

export const INITIAL_GALLERY: GalleryPhoto[] = [
  {
    id: 'gal-01',
    title: 'Historic Main Academic Block and Administrative Building',
    category: 'Campus',
    imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80',
    date: '2024-11-10'
  },
  {
    id: 'gal-02',
    title: 'Central Library automated with KOHA with 35,000+ volumes',
    category: 'Infrastructure',
    imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1000&q=80',
    date: '2024-12-05'
  },
  {
    id: 'gal-03',
    title: 'Students during Botanical Field Study at Manas National Park',
    category: 'Academics',
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=80',
    date: '2025-01-18'
  },
  {
    id: 'gal-04',
    title: 'Barama College Annual Cultural Carnival Parade in Traditional Attire',
    category: 'Events',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80',
    date: '2025-02-14'
  },
  {
    id: 'gal-05',
    title: 'Advanced Science Laboratories & Spectrophotometry Research',
    category: 'Infrastructure',
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80',
    date: '2025-03-02'
  },
  {
    id: 'gal-06',
    title: 'NCC Cadets & NSS Wing Drill at Independence Day Celebrations',
    category: 'Events',
    imageUrl: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1000&q=80',
    date: '2024-08-15'
  }
];

export const INITIAL_LIBRARY_BOOKS: LibraryBook[] = [
  { id: 'b-01', title: 'A History of Bodo Literature', author: 'Dr. Kameshwar Brahma', accessionNo: 'BC/LIB/4890', category: 'Literature', available: true, shelfLocation: 'Stack-B2, Shelf-4' },
  { id: 'b-02', title: 'Principles of Geomorphology', author: 'William D. Thornbury', accessionNo: 'BC/LIB/7812', category: 'Geography', available: true, shelfLocation: 'Stack-G1, Shelf-2' },
  { id: 'b-03', title: 'Introduction to Algorithms (CLRS)', author: 'Cormen, Leiserson, Rivest', accessionNo: 'BC/LIB/9041', category: 'Computer Science', available: false, shelfLocation: 'Stack-CS, Shelf-1' },
  { id: 'b-04', title: 'Fundamentals of Ecology', author: 'Eugene P. Odum', accessionNo: 'BC/LIB/6120', category: 'Zoology / Botany', available: true, shelfLocation: 'Stack-S3, Shelf-5' },
  { id: 'b-05', title: 'Modern Indian Political Thought', author: 'V.P. Verma', accessionNo: 'BC/LIB/3201', category: 'Political Science', available: true, shelfLocation: 'Stack-P1, Shelf-3' },
  { id: 'b-06', title: 'Organic Chemistry (7th Ed)', author: 'Paula Yurkanis Bruice', accessionNo: 'BC/LIB/5529', category: 'Chemistry', available: true, shelfLocation: 'Stack-C2, Shelf-2' }
];

export const DEMO_STUDENT: StudentProfile = {
  rollNo: 'BC/2023/UG/0142',
  registrationNo: 'BU2023004812',
  name: 'Priyanjali Brahma',
  program: 'Bachelor of Arts (FYUGP 4-Year)',
  majorSubject: 'Bodo (Major)',
  minorSubject: 'History & Political Science',
  semester: '4th Semester',
  academicYear: '2024 - 2025',
  email: 'priyanjali.b2023@student.baramacollege.edu.in',
  phone: '+91 94352 87114',
  dateOfBirth: '2004-10-18',
  bloodGroup: 'O+ Positive',
  category: 'ST (Plains)',
  guardianName: 'Bipul Chandra Brahma',
  address: 'Vill: Simla Bazar, P.O. Barama, Dist: Baksa (BTR), Assam - 781346',
  photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
  attendance: [
    { code: 'BOD-MJ-401', name: 'Tibeto-Burman Linguistics & Morphology', attended: 42, total: 46, teacher: 'Dr. Binoy Kr. Brahma' },
    { code: 'BOD-MJ-402', name: 'Modern Bodo Drama & Stagecraft', attended: 39, total: 44, teacher: 'Dr. Pratibha Goyary' },
    { code: 'HIS-MN-201', name: 'History of Assam (From Ancient to 1826)', attended: 35, total: 42, teacher: 'Dr. M. Kalita' },
    { code: 'SEC-401', name: 'Desktop Publishing & Assamese/Bodo Typing', attended: 26, total: 28, teacher: 'Mr. R. Narzary' },
    { code: 'VAC-401', name: 'Environmental Studies & Disaster Management', attended: 31, total: 34, teacher: 'Dr. A. Basumatary' }
  ],
  fees: [
    {
      id: 'fee-01',
      title: 'FYUGP 4th Semester Admission & Tuition Fee',
      amount: 4650,
      dueDate: '2025-01-20',
      status: 'Paid',
      paidDate: '2025-01-16',
      receiptNo: 'BC/REC/2025/0842',
      transactionId: 'SBI_EPAY_99182746102',
      paymentMethod: 'UPI / NetBanking'
    },
    {
      id: 'fee-02',
      title: 'Bodoland University End-Semester Examination Fee',
      amount: 1450,
      dueDate: '2025-05-28',
      status: 'Pending',
    },
    {
      id: 'fee-03',
      title: 'College Annual Sports, Union & Festival Fund',
      amount: 600,
      dueDate: '2024-09-10',
      status: 'Paid',
      paidDate: '2024-09-08',
      receiptNo: 'BC/REC/2024/0219',
      transactionId: 'SBI_EPAY_88129031145',
      paymentMethod: 'Debit Card'
    }
  ],
  results: [
    {
      semester: 'Semester 1',
      session: 'Autumn 2023',
      sgpa: 8.42,
      cgpa: 8.42,
      result: 'Passed',
      subjects: [
        { code: 'BOD-MJ-101', name: 'Introduction to Bodo Literature', credits: 4, grade: 'A+', gradePoints: 9 },
        { code: 'HIS-MN-101', name: 'History of India (Earliest Times)', credits: 4, grade: 'A', gradePoints: 8 },
        { code: 'ENG-AEC-101', name: 'Communicative English', credits: 2, grade: 'A', gradePoints: 8 },
        { code: 'VAC-101', name: 'Value Education & Indian Heritage', credits: 2, grade: 'O', gradePoints: 10 }
      ]
    },
    {
      semester: 'Semester 2',
      session: 'Spring 2024',
      sgpa: 8.65,
      cgpa: 8.54,
      result: 'First Class',
      subjects: [
        { code: 'BOD-MJ-201', name: 'Bodo Poetry: Traditional & Modern', credits: 4, grade: 'A+', gradePoints: 9 },
        { code: 'HIS-MN-102', name: 'Medieval Indian History & Culture', credits: 4, grade: 'A+', gradePoints: 9 },
        { code: 'SEC-201', name: 'Translation Studies & Folkloristics', credits: 3, grade: 'A', gradePoints: 8 },
        { code: 'VAC-201', name: 'Health & Wellness Education', credits: 2, grade: 'A+', gradePoints: 9 }
      ]
    },
    {
      semester: 'Semester 3',
      session: 'Autumn 2024',
      sgpa: 8.78,
      cgpa: 8.62,
      result: 'First Class',
      subjects: [
        { code: 'BOD-MJ-301', name: 'Bodo Prose and Fiction', credits: 4, grade: 'A+', gradePoints: 9 },
        { code: 'BOD-MJ-302', name: 'Phonology of Tibeto-Burman Languages', credits: 4, grade: 'O', gradePoints: 10 },
        { code: 'POL-MN-201', name: 'Indian Constitution & Governance', credits: 4, grade: 'A', gradePoints: 8 },
        { code: 'SEC-301', name: 'Creative Writing & Digital Media', credits: 3, grade: 'A+', gradePoints: 9 }
      ]
    }
  ],
  admitCard: {
    id: 'admit-401',
    examName: 'Bodoland University FYUGP 4th Semester Examination 2025',
    semester: '4th Semester (CBCS/NEP)',
    session: 'June - July 2025',
    centre: 'Centre No. 042 - Barama College, Barama',
    rollNo: 'BC/2023/UG/0142',
    regNo: 'BU2023004812 of 2023-24',
    candidateName: 'PRIYANJALI BRAHMA',
    schedule: [
      { date: '2025-06-16', time: '09:00 AM - 12:00 PM', paperCode: 'BOD-MJ-401', paperTitle: 'Tibeto-Burman Linguistics & Morphology' },
      { date: '2025-06-20', time: '09:00 AM - 12:00 PM', paperCode: 'BOD-MJ-402', paperTitle: 'Modern Bodo Drama & Stagecraft' },
      { date: '2025-06-25', time: '01:30 PM - 04:30 PM', paperCode: 'HIS-MN-201', paperTitle: 'History of Assam (From Ancient to 1826)' },
      { date: '2025-06-30', time: '09:00 AM - 11:00 AM', paperCode: 'SEC-401', paperTitle: 'Desktop Publishing & Typing' }
    ]
  },
  issuedBooks: [
    {
      id: 'ib-1',
      title: 'A History of Bodo Literature',
      author: 'Dr. Kameshwar Brahma',
      accessionNo: 'BC/LIB/4890',
      issueDate: '2025-05-02',
      dueDate: '2025-06-02',
      returnStatus: 'Active',
      fine: 0
    },
    {
      id: 'ib-2',
      title: 'History of Assam: Earliest Times to 1947',
      author: 'Dr. Edward Gait',
      accessionNo: 'BC/LIB/3310',
      issueDate: '2025-04-20',
      dueDate: '2025-05-20',
      returnStatus: 'Active',
      fine: 0
    }
  ]
};

export const INITIAL_GRIEVANCES: StudentGrievance[] = [
  {
    id: 'grv-01',
    studentRoll: 'BC/2023/UG/0142',
    studentName: 'Priyanjali Brahma',
    subject: 'Issue regarding correction of father name spelling in Samarth Portal',
    category: 'Admissions',
    message: 'Respected Sir, in my Samarth profile, father name is spelled as "Bipul Brahma" instead of "Bipul Chandra Brahma" as per my HSLC certificate. Kindly request update.',
    date: '2025-04-18',
    status: 'Resolved',
    response: 'Verified against HSLC registration card. Record updated in Bodoland University portal database.',
    resolvedDate: '2025-04-22'
  }
];
