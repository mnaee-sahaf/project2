export interface Course {
  id: string;
  title: string;
  description: string;
  image?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  lessons: Lesson[];
  completed: boolean;
  paid: boolean;
}

export interface Lesson {
  id: string;
  courseId: string;
  title: string;
  description: string;
  category: 'basics' | 'regression' | 'classification' | 'clustering';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  completed: boolean;
  content?: string;
  exercises: Exercise[];
}

export interface Exercise {
  id: string;
  lessonId: string;
  title: string;
  description: string;
  type: 'visual' | 'interactive' | 'quiz';
  completed: boolean;
  content?: string;
  quiz?: Quiz;
  path?: string; 
}

export interface Quiz {
  id: string;
  questions: Question[];
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface UserProgress {
  completedLessons: string[];
  currentLesson: string | null;
  score: number;
}