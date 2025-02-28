import React from 'react';
import type { Lesson } from '../types';
import { ArrowRight, CheckCircle, BookOpen, Activity, HelpCircle } from 'lucide-react';

interface LessonCardProps {
  lesson: Lesson;
  index: number;
  onClick: () => void;
}

export function LessonCard({ lesson, index, onClick }: LessonCardProps) {
  const completedExercises = lesson.exercises.filter(exercise => exercise.completed).length;
  const totalExercises = lesson.exercises.length;
  const progress = totalExercises > 0 ? (completedExercises / totalExercises) * 100 : 0;

  return (
    <div 
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 font-semibold">
            {index}
          </div>
          <h3 className="text-lg font-semibold text-gray-900">{lesson.title}</h3>
        </div>
        {lesson.completed && (
          <CheckCircle className="text-green-500" size={20} />
        )}
      </div>
      
      <p className="text-gray-600 mb-4">{lesson.description}</p>
      
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-gray-600">Progress</span>
          <span className="text-indigo-600 font-medium">{completedExercises} of {totalExercises} exercises</span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-indigo-600 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          {lesson.exercises.some(ex => ex.type === 'visual') && (
            <span className="flex items-center gap-1 text-sm text-gray-600">
              <BookOpen size={16} className="text-gray-500" />
              Visual
            </span>
          )}
          {lesson.exercises.some(ex => ex.type === 'interactive') && (
            <span className="flex items-center gap-1 text-sm text-gray-600">
              <Activity size={16} className="text-gray-500" />
              Interactive
            </span>
          )}
          {lesson.exercises.some(ex => ex.type === 'quiz') && (
            <span className="flex items-center gap-1 text-sm text-gray-600">
              <HelpCircle size={16} className="text-gray-500" />
              Quiz
            </span>
          )}
        </div>
        
        <span className={`px-3 py-1 rounded-full text-sm
          ${lesson.difficulty === 'beginner' ? 'bg-green-100 text-green-800' :
            lesson.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'}`}>
          {lesson.difficulty}
        </span>
        
        <button className="text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
          Start Lesson
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}