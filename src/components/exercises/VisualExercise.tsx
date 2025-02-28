import React from 'react';
import type { Exercise } from '../../types';

interface VisualExerciseProps {
  exercise: Exercise;
  onComplete: () => void;
  isCompleted: boolean;
}

export function VisualExercise({ exercise, isCompleted }: VisualExerciseProps) {
  return (
    <div className="space-y-6">
      <div className="prose prose-indigo max-w-none">
        {exercise.content ? (
          <div dangerouslySetInnerHTML={{ __html: exercise.content }} />
        ) : (
          <div className="space-y-4">
            <h3>Understanding the Concept</h3>
            <p>
              This visual exercise helps you understand the key concepts through diagrams, 
              illustrations, and explanations.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                alt="Machine Learning Concept Visualization"
                className="w-full h-auto rounded-lg mb-4"
              />
              <p className="text-sm text-gray-500 text-center">
                Example visualization of the concept
              </p>
            </div>
            
            <h4>Key Takeaways</h4>
            <ul>
              <li>Understanding the fundamental principles</li>
              <li>Recognizing patterns in the visualization</li>
              <li>Connecting theory to practical applications</li>
            </ul>
          </div>
        )}
      </div>
      
      {isCompleted && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800">
          You've completed this visual exercise. Feel free to review the material anytime.
        </div>
      )}
    </div>
  );
}