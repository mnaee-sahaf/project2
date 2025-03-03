import type { Course } from '../types';
import { ArrowRight, CheckCircle, BookOpen } from 'lucide-react';

interface CourseCardProps {
  course: Course;
  onClick: () => void;
}

export function CourseCard({ course, onClick }: CourseCardProps) {
  const completedLessons = course.lessons.filter(lesson => lesson.completed).length;
  const totalLessons = course.lessons.length;
  const progress = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;

  return (
    <div 
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 hover:shadow-md transition-shadow cursor-pointer"
      onClick={onClick}
    >
      {course.image && (
        <div className="mb-4 overflow-hidden rounded-lg h-32 sm:h-40">
          <img 
            src={course.image} 
            alt={course.title} 
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
        </div>
      )}
      
      <div className="flex justify-between items-start mb-3 sm:mb-4">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900">{course.title}</h3>
        {course.completed && (
          <CheckCircle className="text-green-500 flex-shrink-0" size={18} />
        )}
      </div>
      
      <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-2">{course.description}</p>
      
      <div className="mb-3 sm:mb-4">
        <div className="flex justify-between text-xs sm:text-sm mb-1">
          <span className="text-gray-600">Progress</span>
          <span className="text-indigo-600 font-medium">{Math.round(progress)}%</span>
        </div>
        <div className="h-1.5 sm:h-2 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-indigo-600 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      
      <div className="flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center gap-1 sm:gap-2">
          <BookOpen size={14} className="text-gray-500" />
          <span className="text-xs sm:text-sm text-gray-600">{totalLessons} lessons</span>
        </div>
        
        <span className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm
          ${course.difficulty === 'beginner' ? 'bg-green-100 text-green-800' :
            course.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
            'bg-orange-100 text-orange-800'}`}>
          {course.difficulty}
        </span>
        <span className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm
          ${course.paid ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'}`}>
          {course.paid ? 'paid' : 'free'}
        </span>
        <button className="text-indigo-600 hover:text-indigo-700 flex items-center gap-1 text-xs sm:text-sm">
          View
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}