export type UserRole = 'public' | 'student' | 'admin';

export type NoticeCategory = 'General' | 'Academic' | 'Examinations' | 'Admission' | 'Tender' | 'Scholarship';

export interface CollegeNotice {
  id: string;
  title: string;
  category: NoticeCategory;
  date: string;
  isUrgent?: boolean;
  isPinned?: boolean;
  description: string;
  fileSize?: string;
  refNo?: string;
  pdfContent?: string;
}

export interface CollegeEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  category: 'Academic' | 'Cultural' | 'Sports' | 'Celebration' | 'Workshop';
  imageUrl: string;
  organizer: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  department: string;
  designation: string;
  qualification: string;
  email: string;
  phone?: string;
  specialization: string;
  experienceYears: number;
  imageUrl: string;
}

export interface Department {
  id: string;
  name: string;
  code: string;
  stream: 'Arts' | 'Science' | 'Computer Applications' | 'Post Graduate';
  hod: string;
  facultyCount: number;
  intakeCapacity: number;
  established: number;
  description: string;
  papers: string[];
  careerProspects: string[];
  imageUrl: string;
}

export interface SubjectAttendance {
  code: string;
  name: string;
  attended: number;
  total: number;
  teacher: string;
}

export interface FeeRecord {
  id: string;
  title: string;
  amount: number;
  dueDate: string;
  status: 'Paid' | 'Pending';
  paidDate?: string;
  receiptNo?: string;
  transactionId?: string;
  paymentMethod?: string;
}

export interface SubjectGrade {
  code: string;
  name: string;
  credits: number;
  grade: string;
  gradePoints: number;
}

export interface SemesterResult {
  semester: string;
  session: string;
  sgpa: number;
  cgpa: number;
  result: 'Passed' | 'First Class' | 'Promoted';
  subjects: SubjectGrade[];
}

export interface AdmitCard {
  id: string;
  examName: string;
  semester: string;
  session: string;
  centre: string;
  rollNo: string;
  regNo: string;
  candidateName: string;
  schedule: {
    date: string;
    time: string;
    paperCode: string;
    paperTitle: string;
  }[];
}

export interface LibraryBook {
  id: string;
  title: string;
  author: string;
  accessionNo: string;
  category: string;
  available: boolean;
  shelfLocation: string;
}

export interface IssuedBook {
  id: string;
  title: string;
  author: string;
  accessionNo: string;
  issueDate: string;
  dueDate: string;
  returnStatus: 'Active' | 'Overdue';
  fine: number;
}

export interface StudentGrievance {
  id: string;
  studentRoll: string;
  studentName: string;
  subject: string;
  category: 'Admissions' | 'Examinations' | 'Fees & Accounts' | 'Library' | 'Hostel' | 'Other';
  message: string;
  date: string;
  status: 'Pending' | 'In Review' | 'Resolved';
  response?: string;
  resolvedDate?: string;
}

export interface StudentProfile {
  rollNo: string;
  registrationNo: string;
  name: string;
  program: string;
  majorSubject: string;
  minorSubject: string;
  semester: string;
  academicYear: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  bloodGroup: string;
  category: string;
  guardianName: string;
  address: string;
  photoUrl: string;
  attendance: SubjectAttendance[];
  fees: FeeRecord[];
  results: SemesterResult[];
  admitCard: AdmitCard;
  issuedBooks: IssuedBook[];
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'Campus' | 'Academics' | 'Events' | 'Sports' | 'Infrastructure';
  imageUrl: string;
  date: string;
}
