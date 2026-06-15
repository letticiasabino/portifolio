export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  tech: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export interface Course {
  name: string;
  duration: string;
  period: string;
  description: string;
  tech: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface Contact {
  email: string;
  github: string;
  linkedin: string;
  phone: string;
}

export interface ResumeData {
  name: string;
  title: string;
  about: string;
  contact: Contact;
  experience: Experience[];
  education: Education[];
  courses: Course[];
  skillsText: string;
  languages: Language[];
}
