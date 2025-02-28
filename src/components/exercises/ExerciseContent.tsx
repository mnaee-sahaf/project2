import React from 'react';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import type { Exercise } from '../../types';
import { VisualExercise } from './VisualExercise';
import { InteractiveExercise } from './InteractiveExercise';
import { Quiz } from '../Quiz';

interface ExerciseContentProps {
  exercise: Exercise;
  onBack: () => void;
  onComplete: () => void;
  isCompleted: boolean;
}

export function ExerciseContent({ exercise, onBack, onComplete, isCompleted }: ExerciseContentProps) {
  const handleQuizComplete = (score: number) => {
    console.log(`Quiz completed with score: ${score}`);
    onComplete();
  };

  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={onBack}
        className="mb-6 flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition-colors"
      >
        <ArrowLeft size={20} />
        Back to lesson
      </button>

      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl font-bold text-gray-900">{exercise.title}</h1>
          {isCompleted && (
            <div className="flex items-center gap-2 text-green-600">
              <CheckCircle size={20} />
              <span className="font-medium">Completed</span>
            </div>
          )}
        </div>
        <p className="text-gray-600">{exercise.description}</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        {exercise.type === 'visual' && (
          <VisualExercise 
            exercise={exercise} 
            onComplete={onComplete}
            isCompleted={isCompleted}
          />
        )}
        
        {exercise.type === 'interactive' && (
          <InteractiveExercise 
            exercise={exercise} 
            onComplete={onComplete}
            isCompleted={isCompleted}
          />
        )}
        
        {exercise.type === 'quiz' && exercise.quiz && (
          <Quiz 
            quiz={exercise.quiz} 
            onComplete={handleQuizComplete} 
          />
        )}
      </div>

      {!isCompleted && exercise.type !== 'quiz' && (
        <div className="flex justify-center">
          <button
            onClick={onComplete}
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Mark as Completed
          </button>
        </div>
      )}
    </div>
  );
}