import { useState } from 'react';
import { Search,GraduationCap } from 'lucide-react';
import { CourseCard } from '../components/CourseCard';
import { CourseContent } from '../components/CourseContent';
import type { Course } from '../types';

// Sample courses data
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
        completed: false,
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
      },
      {
        id: '1-2',
        courseId: '1',
        title: 'K-Nearest Neighbors (KNN)',
        description: 'Explore the KNN algorithm and its use in classification problems.',
        category: 'classification',
        difficulty: 'intermediate',
        completed: false,
        exercises: [
          {
            id: '1-2-1',
            lessonId: '1-2',
            title: 'Understanding KNN Algorithm',
            description: 'Visual explanation of how the K-Nearest Neighbors algorithm works.',
            type: 'visual',
            completed: false,
            content: `
              <h2>Understanding KNN</h2>
              <p>K-Nearest Neighbors is a simple but powerful algorithm used for both classification and regression tasks.</p>

              <h2>How KNN Works</h2>
              <ol>
                <li>Calculate the distance between the new point and all training points</li>
                <li>Select the K nearest points</li>
                <li>For classification: take a majority vote</li>
                <li>For regression: take the average value</li>
              </ol>

              <h2>Choosing K</h2>
              <p>The value of K is crucial:</p>
              <ul>
                <li>Small K: More sensitive to noise</li>
                <li>Large K: Smoother decision boundaries</li>
                <li>K should be odd for binary classification</li>
              </ul>
            `
          },
          {
            id: '1-2-2',
            lessonId: '1-2',
            title: 'KNN Decision Boundaries',
            description: 'Interactive visualization to explore how different k values affect decision boundaries.',
            type: 'interactive',
            completed: false
          },
          {
            id: '1-2-3',
            lessonId: '1-2',
            title: 'KNN Algorithm Quiz',
            description: 'Test your understanding of the K-Nearest Neighbors algorithm.',
            type: 'quiz',
            completed: false,
            quiz: {
              id: 'q3',
              questions: [
                {
                  id: 'q3_1',
                  text: 'Why should K be an odd number in binary classification?',
                  options: [
                    'It makes the algorithm faster',
                    'To avoid ties in voting',
                    'It reduces the memory usage',
                    'It improves accuracy in all cases'
                  ],
                  correctAnswer: 1,
                  explanation: 'Using an odd number for K in binary classification helps avoid tie situations in the majority voting process.'
                },
                {
                  id: 'q3_2',
                  text: 'What happens when K is too small?',
                  options: [
                    'The model becomes more robust',
                    'The model becomes more sensitive to noise',
                    'The model always underfits',
                    'The computation becomes slower'
                  ],
                  correctAnswer: 1,
                  explanation: 'When K is too small, the model becomes more sensitive to noise in the training data, potentially leading to overfitting.'
                }
              ]
            }
          }
        ]
      },
      {
        id: '1-3',
        courseId: '1',
        title: 'The Perceptron',
        description: 'Learn about the perceptron, the building block of neural networks.',
        category: 'basics',
        difficulty: 'intermediate',
        completed: false,
        exercises: [
          {
            id: '1-3-1',
            lessonId: '1-3',
            title: 'Perceptron Fundamentals',
            description: 'Visual explanation of how perceptrons work and their limitations.',
            type: 'visual',
            completed: false
          },
          {
            id: '1-3-2',
            lessonId: '1-3',
            title: 'Training a Perceptron',
            description: 'Interactive exercise to train a perceptron on different datasets.',
            type: 'interactive',
            completed: false
          },
          {
            id: '1-3-3',
            lessonId: '1-3',
            title: 'Perceptron Quiz',
            description: 'Test your knowledge of perceptrons and their capabilities.',
            type: 'quiz',
            completed: false,
            quiz: {
              id: 'q4',
              questions: [
                {
                  id: 'q4_1',
                  text: 'What is the main limitation of a single-layer perceptron?',
                  options: [
                    'It can only handle binary classification',
                    'It cannot learn non-linear relationships',
                    'It requires too much memory',
                    'It is too slow for practical use'
                  ],
                  correctAnswer: 1,
                  explanation: 'A single-layer perceptron cannot learn non-linear relationships, which is known as the XOR problem. This limitation led to the development of multi-layer neural networks.'
                },
                {
                  id: 'q4_2',
                  text: 'Which of the following is true about the perceptron learning rule?',
                  options: [
                    'It uses gradient descent',
                    'It only works for regression problems',
                    'It adjusts weights based on prediction errors',
                    'It requires a large dataset to converge'
                  ],
                  correctAnswer: 2,
                  explanation: 'The perceptron learning rule adjusts the weights based on the error between the predicted output and the actual output, moving the decision boundary to correctly classify misclassified points.'
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    id: '2',
    title: 'Deep Learning Fundamentals',
    description: 'Dive into neural networks, backpropagation, and modern deep learning architectures.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80',
    difficulty: 'intermediate',
    completed: false,
    lessons: [
      {
        id: '2-1',
        courseId: '2',
        title: 'Neural Networks Basics',
        description: 'Learn the fundamental concepts of neural networks and their architecture.',
        category: 'basics',
        difficulty: 'intermediate',
        completed: false,
        exercises: [
          {
            id: '2-1-1',
            lessonId: '2-1',
            title: 'Neural Network Architecture',
            description: 'Visual explanation of neural network layers, neurons, and connections.',
            type: 'visual',
            completed: false
          },
          {
            id: '2-1-2',
            lessonId: '2-1',
            title: 'Building a Simple Neural Network',
            description: 'Interactive exercise to build and train a simple neural network.',
            type: 'interactive',
            completed: false
          },
          {
            id: '2-1-3',
            lessonId: '2-1',
            title: 'Neural Networks Quiz',
            description: 'Test your knowledge of neural network fundamentals.',
            type: 'quiz',
            completed: false,
            quiz: {
              id: 'q5',
              questions: [
                {
                  id: 'q5_1',
                  text: 'What is an activation function in a neural network?',
                  options: [
                    'A function that initializes the weights',
                    'A function that determines if a neuron fires',
                    'A function that calculates the loss',
                    'A function that optimizes the learning rate'
                  ],
                  correctAnswer: 1,
                  explanation: 'An activation function determines the output of a neuron based on its inputs. It introduces non-linearity into the network, allowing it to learn complex patterns.'
                },
                {
                  id: 'q5_2',
                  text: 'Which of the following is NOT a common activation function?',
                  options: [
                    'ReLU (Rectified Linear Unit)',
                    'Sigmoid',
                    'Tanh',
                    'Logarithmic Mean Square'
                  ],
                  correctAnswer: 3,
                  explanation: 'Logarithmic Mean Square is not a standard activation function. Common activation functions include ReLU, Sigmoid, Tanh, and Leaky ReLU.'
                }
              ]
            }
          }
        ]
      }
    ]
  }
];

export function Lessons() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const filteredCourses = sampleCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDifficulty = !selectedDifficulty || course.difficulty === selectedDifficulty;
    return matchesSearch && matchesDifficulty;
  });

  if (selectedCourse) {
    return (
      <CourseContent 
        course={selectedCourse}
        onBack={() => setSelectedCourse(null)}
      />
    );
  }

  return (
    <>
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <GraduationCap className="text-indigo-600" size={32} />
          <h1 className="text-3xl font-bold text-gray-900">Courses</h1>
        </div>
        <p className="text-gray-600">Explore our comprehensive curriculum of machine learning courses.</p>
      </header>

      <div className="mb-8 grid gap-4 md:grid-cols-[1fr,auto]">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>

        <select
          value={selectedDifficulty || ''}
          onChange={(e) => setSelectedDifficulty(e.target.value || null)}
          className="rounded-lg border border-gray-200 px-4 py-2 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="">All Levels</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredCourses.map(course => (
          <CourseCard
            key={course.id}
            course={course}
            onClick={() => setSelectedCourse(course)}
          />
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No courses found matching your criteria.</p>
        </div>
      )}
    </>
  );
}