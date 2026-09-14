import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  CollegeNotice,
  CollegeEvent,
  FacultyMember,
  Department,
  StudentProfile,
  GalleryPhoto,
  LibraryBook,
  StudentGrievance,
  UserRole,
} from '../types';
import {
  INITIAL_NOTICES,
  INITIAL_EVENTS,
  INITIAL_DEPARTMENTS,
  INITIAL_FACULTY,
  INITIAL_GALLERY,
  INITIAL_LIBRARY_BOOKS,
  DEMO_STUDENT,
  INITIAL_GRIEVANCES,
} from '../data/initialData';

interface CollegeContextType {
  notices: CollegeNotice[];
  events: CollegeEvent[];
  departments: Department[];
  faculty: FacultyMember[];
  gallery: GalleryPhoto[];
  student: StudentProfile;
  grievances: StudentGrievance[];
  libraryBooks: LibraryBook[];
  userRole: UserRole;
  currentView: string;
  selectedNotice: CollegeNotice | null;
  selectedDepartment: Department | null;
  setCurrentView: (view: string) => void;
  setSelectedNotice: (notice: CollegeNotice | null) => void;
  setSelectedDepartment: (dept: Department | null) => void;
  loginAsStudent: (rollNo?: string) => boolean;
  loginAsAdmin: (pass?: string) => boolean;
  logout: () => void;
  addNotice: (notice: Omit<CollegeNotice, 'id'>) => void;
  updateNotice: (notice: CollegeNotice) => void;
  deleteNotice: (id: string) => void;
  addEvent: (event: Omit<CollegeEvent, 'id'>) => void;
  deleteEvent: (id: string) => void;
  addFaculty: (member: Omit<FacultyMember, 'id'>) => void;
  deleteFaculty: (id: string) => void;
  addGalleryPhoto: (photo: Omit<GalleryPhoto, 'id'>) => void;
  deleteGalleryPhoto: (id: string) => void;
  payFee: (feeId: string, paymentMethod: string) => void;
  submitGrievance: (subject: string, category: StudentGrievance['category'], message: string) => void;
  replyGrievance: (id: string, response: string) => void;
  reserveBook: (bookId: string) => boolean;
  resetToDefaults: () => void;
}

const CollegeContext = createContext<CollegeContextType | undefined>(undefined);

const STORAGE_KEYS = {
  NOTICES: 'barama_notices_v1',
  EVENTS: 'barama_events_v1',
  FACULTY: 'barama_faculty_v1',
  GALLERY: 'barama_gallery_v1',
  STUDENT: 'barama_student_v1',
  GRIEVANCES: 'barama_grievances_v1',
  BOOKS: 'barama_books_v1',
};

export const CollegeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notices, setNotices] = useState<CollegeNotice[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.NOTICES);
      return saved ? JSON.parse(saved) : INITIAL_NOTICES;
    } catch {
      return INITIAL_NOTICES;
    }
  });

  const [events, setEvents] = useState<CollegeEvent[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.EVENTS);
      return saved ? JSON.parse(saved) : INITIAL_EVENTS;
    } catch {
      return INITIAL_EVENTS;
    }
  });

  const [departments] = useState<Department[]>(INITIAL_DEPARTMENTS);

  const [faculty, setFaculty] = useState<FacultyMember[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.FACULTY);
      return saved ? JSON.parse(saved) : INITIAL_FACULTY;
    } catch {
      return INITIAL_FACULTY;
    }
  });

  const [gallery, setGallery] = useState<GalleryPhoto[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.GALLERY);
      return saved ? JSON.parse(saved) : INITIAL_GALLERY;
    } catch {
      return INITIAL_GALLERY;
    }
  });

  const [student, setStudent] = useState<StudentProfile>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.STUDENT);
      return saved ? JSON.parse(saved) : DEMO_STUDENT;
    } catch {
      return DEMO_STUDENT;
    }
  });

  const [grievances, setGrievances] = useState<StudentGrievance[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.GRIEVANCES);
      return saved ? JSON.parse(saved) : INITIAL_GRIEVANCES;
    } catch {
      return INITIAL_GRIEVANCES;
    }
  });

  const [libraryBooks, setLibraryBooks] = useState<LibraryBook[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.BOOKS);
      return saved ? JSON.parse(saved) : INITIAL_LIBRARY_BOOKS;
    } catch {
      return INITIAL_LIBRARY_BOOKS;
    }
  });

  const [userRole, setUserRole] = useState<UserRole>('public');
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedNotice, setSelectedNotice] = useState<CollegeNotice | null>(null);
  const [selectedDepartment, setSelectedDepartment] = useState<Department | null>(null);

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.NOTICES, JSON.stringify(notices));
  }, [notices]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.EVENTS, JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.FACULTY, JSON.stringify(faculty));
  }, [faculty]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(gallery));
  }, [gallery]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.STUDENT, JSON.stringify(student));
  }, [student]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.GRIEVANCES, JSON.stringify(grievances));
  }, [grievances]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.BOOKS, JSON.stringify(libraryBooks));
  }, [libraryBooks]);

  const loginAsStudent = (_rollNo?: string) => {
    setUserRole('student');
    setCurrentView('student-portal');
    return true;
  };

  const loginAsAdmin = (_pass?: string) => {
    setUserRole('admin');
    setCurrentView('admin-cms');
    return true;
  };

  const logout = () => {
    setUserRole('public');
    setCurrentView('home');
  };

  const addNotice = (newNotice: Omit<CollegeNotice, 'id'>) => {
    const id = `not-${Date.now().toString(36)}`;
    setNotices(prev => [
      {
        ...newNotice,
        id,
      },
      ...prev,
    ]);
  };

  const updateNotice = (updatedNotice: CollegeNotice) => {
    setNotices(prev => prev.map(n => (n.id === updatedNotice.id ? updatedNotice : n)));
  };

  const deleteNotice = (id: string) => {
    setNotices(prev => prev.filter(n => n.id !== id));
  };

  const addEvent = (newEvent: Omit<CollegeEvent, 'id'>) => {
    const id = `ev-${Date.now().toString(36)}`;
    setEvents(prev => [{ ...newEvent, id }, ...prev]);
  };

  const deleteEvent = (id: string) => {
    setEvents(prev => prev.filter(e => e.id !== id));
  };

  const addFaculty = (member: Omit<FacultyMember, 'id'>) => {
    const id = `fac-${Date.now().toString(36)}`;
    setFaculty(prev => [...prev, { ...member, id }]);
  };

  const deleteFaculty = (id: string) => {
    setFaculty(prev => prev.filter(f => f.id !== id));
  };

  const addGalleryPhoto = (photo: Omit<GalleryPhoto, 'id'>) => {
    const id = `gal-${Date.now().toString(36)}`;
    setGallery(prev => [{ ...photo, id }, ...prev]);
  };

  const deleteGalleryPhoto = (id: string) => {
    setGallery(prev => prev.filter(g => g.id !== id));
  };

  const payFee = (feeId: string, paymentMethod: string) => {
    const timestamp = new Date().toISOString().slice(0, 10);
    const receiptNo = `BC/REC/${new Date().getFullYear()}/${Math.floor(1000 + Math.random() * 9000)}`;
    const transactionId = `SBI_EPAY_${Math.floor(10000000000 + Math.random() * 90000000000)}`;

    setStudent(prev => ({
      ...prev,
      fees: prev.fees.map(f => {
        if (f.id === feeId) {
          return {
            ...f,
            status: 'Paid',
            paidDate: timestamp,
            receiptNo,
            transactionId,
            paymentMethod,
          };
        }
        return f;
      }),
    }));
  };

  const submitGrievance = (
    subject: string,
    category: StudentGrievance['category'],
    message: string
  ) => {
    const newGrievance: StudentGrievance = {
      id: `grv-${Date.now().toString(36)}`,
      studentRoll: student.rollNo,
      studentName: student.name,
      subject,
      category,
      message,
      date: new Date().toISOString().slice(0, 10),
      status: 'Pending',
    };
    setGrievances(prev => [newGrievance, ...prev]);
  };

  const replyGrievance = (id: string, response: string) => {
    setGrievances(prev =>
      prev.map(g => {
        if (g.id === id) {
          return {
            ...g,
            status: 'Resolved',
            response,
            resolvedDate: new Date().toISOString().slice(0, 10),
          };
        }
        return g;
      })
    );
  };

  const reserveBook = (bookId: string): boolean => {
    const target = libraryBooks.find(b => b.id === bookId);
    if (!target || !target.available) return false;

    setLibraryBooks(prev =>
      prev.map(b => (b.id === bookId ? { ...b, available: false } : b))
    );

    // Also add to student's issued list
    const newIssued: StudentProfile['issuedBooks'][0] = {
      id: `ib-${Date.now()}`,
      title: target.title,
      author: target.author,
      accessionNo: target.accessionNo,
      issueDate: new Date().toISOString().slice(0, 10),
      dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
      returnStatus: 'Active',
      fine: 0,
    };

    setStudent(prev => ({
      ...prev,
      issuedBooks: [newIssued, ...prev.issuedBooks],
    }));

    return true;
  };

  const resetToDefaults = () => {
    setNotices(INITIAL_NOTICES);
    setEvents(INITIAL_EVENTS);
    setFaculty(INITIAL_FACULTY);
    setGallery(INITIAL_GALLERY);
    setStudent(DEMO_STUDENT);
    setGrievances(INITIAL_GRIEVANCES);
    setLibraryBooks(INITIAL_LIBRARY_BOOKS);
    localStorage.clear();
  };

  return (
    <CollegeContext.Provider
      value={{
        notices,
        events,
        departments,
        faculty,
        gallery,
        student,
        grievances,
        libraryBooks,
        userRole,
        currentView,
        selectedNotice,
        selectedDepartment,
        setCurrentView,
        setSelectedNotice,
        setSelectedDepartment,
        loginAsStudent,
        loginAsAdmin,
        logout,
        addNotice,
        updateNotice,
        deleteNotice,
        addEvent,
        deleteEvent,
        addFaculty,
        deleteFaculty,
        addGalleryPhoto,
        deleteGalleryPhoto,
        payFee,
        submitGrievance,
        replyGrievance,
        reserveBook,
        resetToDefaults,
      }}
    >
      {children}
    </CollegeContext.Provider>
  );
};

export const useCollege = () => {
  const context = useContext(CollegeContext);
  if (!context) {
    throw new Error('useCollege must be used within a CollegeProvider');
  }
  return context;
};
