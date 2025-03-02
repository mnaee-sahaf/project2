import React, { useState } from 'react';
import { ArrowLeft, BookOpen, Activity, HelpCircle } from 'lucide-react';
import type { Lesson, Exercise } from '../types';
import { ExerciseContent } from './exercises/ExerciseContent';

interface LessonContentProps {
  lesson: Lesson;
  onBack: () => void;
}

export function LessonContent({ lesson, onBack }: LessonContentProps) {
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const [completedExercises, setCompletedExercises] = useState<Set<string>>(
    new Set(lesson.exercises.filter(ex => ex.completed).map(ex => ex.id))
  );

  const handleExerciseComplete = (exerciseId: string) => {
    setCompletedExercises(prev => {
      const updated = new Set(prev);
      updated.add(exerciseId);
      return updated;
    });
  };

  if (selectedExercise) {
    return (
      <ExerciseContent 
        exercise={selectedExercise}
        onBack={() => setSelectedExercise(null)}
        onComplete={() => {
          handleExerciseComplete(selectedExercise.id);
          setSelectedExercise(null);
        }}
        isCompleted={completedExercises.has(selectedExercise.id)}
      />
    );
  }

  const visualExercise = lesson.exercises.find(ex => ex.type === 'visual');
  const interactiveExercise = lesson.exercises.find(ex => ex.type === 'interactive');
  const quizExercise = lesson.exercises.find(ex => ex.type === 'quiz');

  const allExercisesCompleted = lesson.exercises.every(ex => completedExercises.has(ex.id));

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <button
        onClick={onBack}
        className="mb-6 flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition-colors"
      >
        <ArrowLeft size={20} />
        Back to lessons
      </button>

      <article className="prose prose-indigo max-w-none mb-12">
        <h1>{lesson.title}</h1>
        <div className="flex gap-4 mb-6">
          <span className={`px-3 py-1 rounded-full text-sm
            ${lesson.difficulty === 'beginner' ? 'bg-green-100 text-green-800' :
              lesson.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'}`}>
            {lesson.difficulty}
          </span>
          <span className="px-3 py-1 rounded-full text-sm bg-indigo-100 text-indigo-800">
            {lesson.category}
          </span>
        </div>

        <p className="text-gray-600">{lesson.description}</p>
      </article>

      <h2 className="text-xl font-semibold mb-6">Lesson Exercises</h2>
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {visualExercise && (
          <ExerciseCard 
            exercise={visualExercise}
            icon={BookOpen}
            iconColor="text-blue-600"
            bgColor="bg-blue-50"
            onClick={() => setSelectedExercise(visualExercise)}
            isCompleted={completedExercises.has(visualExercise.id)}
          />
        )}
        
        {interactiveExercise && (
          <ExerciseCard 
            exercise={interactiveExercise}
            icon={Activity}
            iconColor="text-purple-600"
            bgColor="bg-purple-50"
            onClick={() => setSelectedExercise(interactiveExercise)}
            isCompleted={completedExercises.has(interactiveExercise.id)}
          />
        )}
        
        {quizExercise && (
          <ExerciseCard 
            exercise={quizExercise}
            icon={HelpCircle}
            iconColor="text-green-600"
            bgColor="bg-green-50"
            onClick={() => setSelectedExercise(quizExercise)}
            isCompleted={completedExercises.has(quizExercise.id)}
          />
        )}
      </div>

      {allExercisesCompleted && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-green-800 mb-2">Lesson Completed!</h3>
          <p className="text-green-700">
            Congratulations! You've completed all exercises in this lesson.
          </p>
        </div>
      )}
    </div>
  );
}

interface ExerciseCardProps {
  exercise: Exercise;
  icon: React.ElementType;
  iconColor: string;
  bgColor: string;
  onClick: () => void;
  isCompleted: boolean;
}

function ExerciseCard({ exercise, icon: Icon, iconColor, bgColor, onClick, isCompleted }: ExerciseCardProps) {
  return (
    <div 
      className={`border rounded-xl p-6 cursor-pointer transition-all ${
        isCompleted 
          ? 'border-green-200 bg-green-50 hover:bg-green-100' 
          : 'border-gray-200 hover:border-indigo-200 hover:shadow-md'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-3 rounded-lg ${bgColor}`}>
          <Icon className={iconColor} size={24} />
        </div>
        <h3 className="font-semibold">{exercise.type.charAt(0).toUpperCase() + exercise.type.slice(1)}</h3>
        {isCompleted && <span className="ml-auto text-green-600 text-sm font-medium">Completed</span>}
      </div>
      
      <p className="text-gray-700 mb-4">{exercise.title}</p>
      
      <p className="text-sm text-gray-500">{exercise.description}</p>
    </div>
  );
}