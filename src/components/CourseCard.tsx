import React from 'react';
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
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer"
      onClick={onClick}
    >
      {course.image && (
        <div className="mb-4 overflow-hidden rounded-lg h-40">
          <img 
            src={course.image} 
            alt={course.title} 
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
        </div>
      )}
      
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>
        {course.completed && (
          <CheckCircle className="text-green-500" size={20} />
        )}
      </div>
      
      <p className="text-gray-600 mb-4">{course.description}</p>
      
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-gray-600">Progress</span>
          <span className="text-indigo-600 font-medium">{Math.round(progress)}%</span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-indigo-600 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <BookOpen size={16} className="text-gray-500" />
          <span className="text-sm text-gray-600">{totalLessons} lessons</span>
        </div>
        
        <span className={`px-3 py-1 rounded-full text-sm
          ${course.difficulty === 'beginner' ? 'bg-green-100 text-green-800' :
            course.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'}`}>
          {course.difficulty}
        </span>
        
        <button className="text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
          View Course
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}