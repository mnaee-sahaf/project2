import React, { lazy, Suspense } from 'react';
import { Loader2 } from 'lucide-react';
import type { Exercise } from '../../types';

// Lazy load interactive components
const TransformerInt = lazy(() => import('../../Interactive/transformerInt'));
const DefaultInteractive = lazy(() => import('../../Interactive/neuralnetInt'));

interface InteractiveExerciseProps {
  exercise: Exercise;
  onComplete: () => void;
  isCompleted: boolean;
}

// Define a common props interface for interactive components
interface InteractiveComponentProps {
  onComplete: () => void;
}

// Map of exercise paths to their corresponding components
const INTERACTIVE_COMPONENTS: Record<string, React.ComponentType<InteractiveComponentProps>> = {
  'attention-is-all-you-need': TransformerInt,
  'neural-network': DefaultInteractive,
  // Add more mappings as needed
};

export function InteractiveExercise({ exercise, onComplete, isCompleted }: InteractiveExerciseProps) {
  // Get the interactive component based on the exercise path
  const InteractiveComponent = exercise.path && INTERACTIVE_COMPONENTS[exercise.path] || DefaultInteractive;

  return (
    <div className="space-y-6">
      <div className="prose prose-indigo max-w-none mb-6">
        {exercise.content && (
          <div dangerouslySetInnerHTML={{ __html: exercise.content }} />
        )}
      </div>
      
      <Suspense fallback={
        <div className="flex items-center justify-center h-64">
          <Loader2 className="h-8 w-8 animate-spin text-indigo-600" />
        </div>
      }>
        <InteractiveComponent onComplete={onComplete} />
      </Suspense>
      
      {isCompleted && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800">
          You've completed this interactive exercise. Feel free to continue experimenting with the parameters.
        </div>
      )}
    </div>
  );
}