import React, { useState } from 'react';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { LessonCard } from './LessonCard';
import { LessonContent } from './LessonContent';
import type { Course, Lesson } from '../types';

interface CourseContentProps {
  course: Course;
  onBack: () => void;
}

export function CourseContent({ course, onBack }: CourseContentProps) {
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);

  if (selectedLesson) {
    return (
      <LessonContent 
        lesson={selectedLesson} 
        onBack={() => setSelectedLesson(null)}
      />
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={onBack}
        className="mb-6 flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition-colors"
      >
        <ArrowLeft size={20} />
        Back to courses
      </button>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{course.title}</h1>
        <div className="flex gap-4 mb-4">
          <span className={`px-3 py-1 rounded-full text-sm
            ${course.difficulty === 'beginner' ? 'bg-green-100 text-green-800' :
              course.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'}`}>
            {course.difficulty}
          </span>
          <span className="px-3 py-1 rounded-full text-sm bg-indigo-100 text-indigo-800 flex items-center gap-1">
            <BookOpen size={14} />
            {course.lessons.length} lessons
          </span>
        </div>
        <p className="text-gray-600">{course.description}</p>
      </div>

      <h2 className="text-xl font-semibold mb-4">Course Lessons</h2>
      <div className="space-y-4">
        {course.lessons.map((lesson, index) => (
          <LessonCard
            key={lesson.id}
            lesson={lesson}
            index={index + 1}
            onClick={() => setSelectedLesson(lesson)}
          />
        ))}
      </div>
    </div>
  );
}