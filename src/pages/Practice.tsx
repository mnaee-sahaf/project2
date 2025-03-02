import { useState, useEffect } from 'react';
import { Dumbbell, Search, ArrowLeft } from 'lucide-react';
// import { supabase } from '../lib/supabase';
import type { Course, Exercise } from '../types';
import { BookOpen, Activity, HelpCircle, ArrowRight } from 'lucide-react';
import { ExerciseContent } from '../components/exercises/ExerciseContent';

// Sample courses data - in a real app, this would come from an API or database
const sampleCourses: Course[] = [
  {
    id: '1',
    title: 'Introduction to Machine Learning',
    description: 'Learn the fundamental concepts of machine learning and its applications.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80',
    difficulty: 'beginner',
    completed: false,
    lessons: [
      {
        id: '1-1',
        courseId: '1',
        title: 'ML Basics',
        description: 'Learn the fundamental concepts of machine learning and its applications.',
        category: 'basics',
        difficulty: 'beginner',
        completed: true,
        exercises: [
          {
            id: '1-1-1',
            lessonId: '1-1',
            title: 'Understanding Machine Learning Concepts',
            description: 'Visual explanation of key machine learning concepts and terminology.',
            type: 'visual',
            completed: false,
            content: `
              <h2>What is Machine Learning?</h2>
              <p>Machine Learning is a subset of artificial intelligence that focuses on developing systems that can learn and improve from experience without being explicitly programmed.</p>
              
              <h2>Key Concepts</h2>
              <ul>
                <li><strong>Supervised Learning:</strong> The algorithm learns from labeled training data</li>
                <li><strong>Unsupervised Learning:</strong> The algorithm finds patterns in unlabeled data</li>
                <li><strong>Reinforcement Learning:</strong> The algorithm learns through trial and error</li>
              </ul>

              <h2>Applications</h2>
              <p>Machine learning is used in various fields:</p>
              <ul>
                <li>Image and Speech Recognition</li>
                <li>Natural Language Processing</li>
                <li>Recommendation Systems</li>
                <li>Autonomous Vehicles</li>
                <li>Medical Diagnosis</li>
              </ul>
            `
          },
          {
            id: '1-1-2',
            lessonId: '1-1',
            title: 'Exploring Data Patterns',
            description: 'Interactive visualization to explore how machine learning identifies patterns in data.',
            type: 'interactive',
            completed: false
          },
          {
            id: '1-1-3',
            lessonId: '1-1',
            title: 'ML Fundamentals Quiz',
            description: 'Test your knowledge of basic machine learning concepts and terminology.',
            type: 'quiz',
            completed: false,
            quiz: {
              id: 'q1',
              questions: [
                {
                  id: 'q1_1',
                  text: 'What is the main difference between supervised and unsupervised learning?',
                  options: [
                    'Supervised learning requires a GPU, unsupervised doesn\'t',
                    'Supervised learning uses labeled data, unsupervised learning uses unlabeled data',
                    'Supervised learning is faster than unsupervised learning',
                    'Supervised learning is only used for classification tasks'
                  ],
                  correctAnswer: 1,
                  explanation: 'Supervised learning uses labeled training data where the desired output is known, while unsupervised learning works with unlabeled data to find patterns and structures.'
                },
                {
                  id: 'q1_2',
                  text: 'Which of the following is NOT a common application of machine learning?',
                  options: [
                    'Image recognition',
                    'Weather control',
                    'Spam detection',
                    'Medical diagnosis'
                  ],
                  correctAnswer: 1,
                  explanation: 'Weather control is not possible with current technology. Machine learning can predict weather patterns but cannot control them.'
                }
              ]
            }
          }
        ]
      }
    ]
  }
];

// Flatten all exercises from all courses and lessons
const getAllExercises = (): Exercise[] => {
  const allExercises: Exercise[] = [];
  
  sampleCourses.forEach(course => {
    course.lessons.forEach(lesson => {
      lesson.exercises.forEach(exercise => {
        allExercises.push({
          ...exercise,
          lessonTitle: lesson.title,
          courseTitle: course.title
        } as Exercise & { lessonTitle: string; courseTitle: string });
      });
    });
  });
  
  return allExercises;
};

export function Practice() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [activeExercise, setActiveExercise] = useState<Exercise | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [exercises, setExercises] = useState<(Exercise & { lessonTitle: string; courseTitle: string })[]>([]);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        // Using static data regardless of authentication status
        setExercises(getAllExercises() as (Exercise & { lessonTitle: string; courseTitle: string })[]);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load exercises');
      } finally {
        setLoading(false);
      }
    };

    fetchExercises();
  }, []);

  const filteredExercises = exercises.filter(exercise => {
    const matchesSearch = exercise.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         exercise.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = !selectedType || exercise.type === selectedType;
    return matchesSearch && matchesType;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <div className="text-red-600">{error}</div>
      </div>
    );
  }

  if (activeExercise) {
    return (
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => setActiveExercise(null)}
          className="mb-6 flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to exercises
        </button>
        
        <ExerciseContent 
          exercise={activeExercise}
          onBack={() => setActiveExercise(null)}
          onComplete={() => {
            // Mark exercise as completed
            setActiveExercise(prev => prev ? { ...prev, completed: true } : null);
            // In a real app, you would save this to the database
            setTimeout(() => setActiveExercise(null), 2000);
          }}
          isCompleted={activeExercise.completed}
        />
      </div>
    );
  }

  return (
    <>
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Dumbbell className="text-indigo-600" size={32} />
          <h1 className="text-3xl font-bold text-gray-900">Practice Exercises</h1>
        </div>
        <p className="text-gray-600">
          Reinforce your learning with hands-on exercises and interactive visualizations.
        </p>
      </header>

      <div className="mb-8 grid gap-4 md:grid-cols-[1fr,auto]">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search exercises..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>

        <select
          value={selectedType || ''}
          onChange={(e) => setSelectedType(e.target.value || null)}
          className="rounded-lg border border-gray-200 px-4 py-2 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="">All Types</option>
          <option value="visual">Visual</option>
          <option value="interactive">Interactive</option>
          <option value="quiz">Quiz</option>
        </select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredExercises.map(exercise => (
          <ExerciseCard
            key={exercise.id}
            exercise={exercise}
            onClick={() => setActiveExercise(exercise)}
          />
        ))}
      </div>

      {filteredExercises.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No exercises found matching your criteria.</p>
        </div>
      )}
    </>
  );
}

interface ExerciseCardProps {
  exercise: Exercise & { lessonTitle: string; courseTitle: string };
  onClick: () => void;
}

function ExerciseCard({ exercise, onClick }: ExerciseCardProps) {
  const getTypeIcon = () => {
    switch (exercise.type) {
      case 'visual':
        return <div className="p-2 rounded-lg bg-blue-100"><BookOpen className="text-blue-600" size={24} /></div>;
      case 'interactive':
        return <div className="p-2 rounded-lg bg-purple-100"><Activity className="text-purple-600" size={24} /></div>;
      case 'quiz':
        return <div className="p-2 rounded-lg bg-green-100"><HelpCircle className="text-green-600" size={24} /></div>;
      default:
        return null;
    }
  };

  return (
    <div
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-4">
        {getTypeIcon()}
        {exercise.completed && (
          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Completed</span>
        )}
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-2">{exercise.title}</h3>
      <p className="text-gray-600 mb-4">{exercise.description}</p>

      <div className="flex flex-col gap-1 mb-4">
        <span className="text-sm text-gray-500">From lesson: {exercise.lessonTitle}</span>
        <span className="text-sm text-gray-500">Course: {exercise.courseTitle}</span>
      </div>

      <div className="flex items-center justify-between">
        <span className={`px-3 py-1 rounded-full text-sm ${
          exercise.type === 'visual' ? 'bg-blue-50 text-blue-700' :
          exercise.type === 'interactive' ? 'bg-purple-50 text-purple-700' :
          'bg-green-50 text-green-700'
        }`}>
          {exercise.type.charAt(0).toUpperCase() + exercise.type.slice(1)}
        </span>
        
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium"
        >
          Start Exercise
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

