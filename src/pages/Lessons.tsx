import { useState } from 'react';
import { Search,GraduationCap } from 'lucide-react';
import { CourseCard } from '../components/CourseCard';
import { CourseContent } from '../components/CourseContent';
import type { Course } from '../types';

// Sample courses data
const sampleCourses: Course[] = [
  {
    id: '5',
    title: 'Python Fundemntals',
    description: 'Learn the fundamental concepts of python and its applications.',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    difficulty: 'beginner',
    completed: false,
    lessons: [
      {
        id: '1-1',
        courseId: '1',
        title: 'Python Basics',
        description: 'Learn the fundamental concepts of Python, its history and its applications.',
        category: 'basics',
        difficulty: 'beginner',
        completed: false,
        exercises: [
          {
            id: '1-1-1',
            lessonId: '1-1',
            title: 'Understanding Python Programming Concepts',
            description: 'Visual explanation of key Python concepts and terminology.',
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
        title: 'Data Types in Python',
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
        title: 'Common Data Structures in Python',
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
    id: '1',
    title: 'Introduction to Machine Learning',
    description: 'Learn the fundamental concepts of machine learning and its applications.',
    image: 'https://images.pexels.com/photos/17483910/pexels-photo-17483910/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-represents-the-concept-of-artificial-general-intelligence-agi-it-was-created-by-artist-domhnall-malone-as-part-of-th.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
    image: 'https://images.pexels.com/photos/18069362/pexels-photo-18069362/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-depicts-how-ai-could-help-understand-ecosystems-and-identify-species-it-was-created-by-nidia-dias-as-part-of-the-visua.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
            completed: false,
            path: 'neural-network'
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
  },
  {
    id: '3',
    title: 'Build Neural Networks From Scratch',
    description: 'Dive into neural networks, backpropagation, and modern deep learning architectures.',
    image: 'https://images.pexels.com/photos/30885762/pexels-photo-30885762/free-photo-of-wooden-tiles-spelling-deepseek-on-table.jpeg',
    difficulty: 'advanced',
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
  },
  {
    id: '4',
    title: 'ML Research Papers',
    description: 'Test your knowledge of the key concepts of the most influential machine learning research papers',
    image: 'https://images.pexels.com/photos/12334692/pexels-photo-12334692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    difficulty: 'advanced',
    completed: false,
    lessons: [
      {
        id: '4-1',
        courseId: '2',
        title: 'Attention Is All You Need',
        description: 'Fundamental paper that changed the way we see how LLMs work',
        category: 'basics',
        difficulty: 'advanced',
        completed: false,
        exercises: [
          {
            id: '4-1-1',
            lessonId: '4-1',
            title: 'Attention Is All You Need',
            description: 'A breakdown class on the importance this paper had on the field of NLP',
            type: 'visual',
            completed: false
          },
          {
            id: '4-1-2',
            lessonId: '4-1',
            title: 'Transformers in Action',
            description: 'Interactive exercise for Transformers.',
            type: 'interactive',
            completed: false,
            path: 'attention-is-all-you-need'
          },
          {
            id: '4-1-3',
            lessonId: '4-1',
            title: 'Paper Quiz',
            description: 'Test your knowledge of the Attention Is All You Need paper.',
            type: 'quiz',
            completed: false,
            quiz: {
              id: 'q5',
              questions: [
                {
                  id: 'q1',
                  text: 'What is the key architectural innovation proposed in the Transformer paper?',
                  options: [
                    'Using convolutional neural networks with attention',
                    'Eliminating recurrence and using only attention mechanisms',
                    'Combining RNNs with reinforcement learning',
                    'Introducing new activation functions for sequence modeling'
                  ],
                  correctAnswer: 1,
                  explanation: 'The Transformer replaces recurrent and convolutional layers entirely with self-attention mechanisms.'
                },
                {
                  id: 'q2',
                  text: 'What problem does scaled dot-product attention specifically address?',
                  options: [
                    'Vanishing gradients in RNNs',
                    'Large magnitude dot products in high dimensions',
                    'Overfitting in small datasets', 
                    'Slow convergence in CNNs'
                  ],
                  correctAnswer: 1,
                  explanation: 'Scaling by 1/√dₖ prevents large dot product magnitudes that push softmax into low-gradient regions.'
                },
                {
                  id: 'q3',
                  text: 'How many attention heads are used in the base Transformer model?',
                  options: ['4', '6', '8', '12'],
                  correctAnswer: 2,
                  explanation: 'The base model uses h=8 parallel attention heads (Section 3.2.2).'
                },
                {
                  id: 'q4', 
                  text: 'What is the purpose of positional encoding in the Transformer?',
                  options: [
                    'To add task-specific metadata',
                    'To inject sequence order information',
                    'To reduce model parameters',
                    'To implement dropout regularization'
                  ],
                  correctAnswer: 1,
                  explanation: 'Positional encodings compensate for the lack of recurrence/convolutions by encoding position information (Section 3.5).'
                },
                {
                  id: 'q5',
                  text: 'Which component enables the Transformer to handle long-range dependencies better than RNNs?',
                  options: [
                    'Residual connections',
                    'Constant path length between positions', 
                    'Layer normalization',
                    'Feed-forward networks'
                  ],
                  correctAnswer: 1,
                  explanation: 'Self-attention creates direct connections between all positions with O(1) operations (Section 4).'
                },
                {
                  id: 'q6',
                  text: 'What is the dimensionality of the inner feed-forward layer in the position-wise networks?',
                  options: ['512', '1024', '2048', '4096'],
                  correctAnswer: 2,
                  explanation: 'The inner layer has dimensionality d_ff=2048 (Section 3.3).'
                },
                {
                  id: 'q7',
                  text: 'Which regularization technique was NOT used in the Transformer?',
                  options: [
                    'Residual dropout',
                    'Label smoothing', 
                    'Weight decay',
                    'Batch normalization'
                  ],
                  correctAnswer: 3,
                  explanation: 'The paper uses dropout and label smoothing but not batch normalization (Section 5.4).'
                },
                {
                  id: 'q8',
                  text: 'What is the primary advantage of multi-head attention over single-head attention?',
                  options: [
                    'Reduces computational complexity',
                    'Allows focusing on different representation subspaces',
                    'Prevents overfitting',
                    'Simplifies implementation'
                  ],
                  correctAnswer: 1,
                  explanation: 'Multi-head attention enables attending to different subspaces simultaneously (Section 3.2.2).'
                },
                {
                  id: 'q9',
                  text: 'How does the decoder prevent leftward information flow?',
                  options: [
                    'Using padding masks',
                    'Applying gradient clipping',
                    'Masking future positions', 
                    'Limiting attention heads'
                  ],
                  correctAnswer: 2,
                  explanation: 'The decoder masks subsequent positions to preserve auto-regressive properties (Section 3.2.3).'
                },
                {
                  id: 'q10',
                  text: 'What was the BLEU score improvement over previous best models for English-German translation?',
                  options: ['1.0', '2.0', '3.0', '4.0'],
                  correctAnswer: 1,
                  explanation: 'The Transformer achieved 2.0 BLEU improvement (Section 6.1).'
                },
                {
                  id: 'q11',
                  text: 'Which mathematical function is used for positional encoding?',
                  options: [
                    'Sigmoid and tanh',
                    'Sine and cosine', 
                    'ReLU and softmax',
                    'Exponential linear units'
                  ],
                  correctAnswer: 1,
                  explanation: 'Positional encodings use sine and cosine functions (Section 3.5).'
                },
                {
                  id: 'q12',
                  text: 'What is the purpose of the warmup_steps in the learning rate schedule?',
                  options: [
                    'Gradually increase then decrease learning rate',
                    'Prevent early overfitting',
                    'Allow model parameters to stabilize', 
                    'Compensate for Adam optimizer bias'
                  ],
                  correctAnswer: 3,
                  explanation: 'Warmup helps stabilize parameters early in training (Section 5.3).'
                },
                {
                  id: 'q13',
                  text: 'How many layers are in the encoder and decoder stacks of the base model?',
                  options: ['4', '6', '8', '10'],
                  correctAnswer: 1,
                  explanation: 'Both encoder and decoder have N=6 identical layers (Section 3.1).'
                },
                {
                  id: 'q14',
                  text: 'What is the main computational complexity of self-attention layers?',
                  options: [
                    'O(n log n)',
                    'O(n²)', 
                    'O(n³)',
                    'O(1)'
                  ],
                  correctAnswer: 1,
                  explanation: 'Self-attention has O(n²·d) complexity due to pairwise attention (Table 1).'
                },
                {
                  id: 'q15',
                  text: 'Which task demonstrated the Transformers generalization capabilities?',
                  options: [
                    'Image classification',
                    'Speech recognition',
                    'English constituency parsing', 
                    'Text summarization'
                  ],
                  correctAnswer: 2,
                  explanation: 'The model achieved strong results on parsing with minimal modifications (Section 6.3).'
                },
                {
                  id: 'q16',
                  text: 'What is the dimensionality ratio between query/key and value vectors in multi-head attention?',
                  options: [
                    'd_k = d_v = d_model/h',
                    'd_k = d_model, d_v = h',
                    'd_k = h, d_v = d_model',
                    'All dimensions equal'
                  ],
                  correctAnswer: 0,
                  explanation: 'd_k = d_v = d_model/h = 64 for base model (Section 3.2.2).'
                },
                {
                  id: 'q17',
                  text: 'Which component is responsible for the Transformers parallelization capability?',
                  options: [
                    'Layer normalization',
                    'Position-wise FFNs',
                    'Self-attention mechanism', 
                    'Residual connections'
                  ],
                  correctAnswer: 2,
                  explanation: 'Self-attention computes all positions simultaneously (Section 4).'
                },
                {
                  id: 'q18',
                  text: 'What was the primary metric used for translation quality evaluation?',
                  options: [
                    'Perplexity',
                    'BLEU score', 
                    'ROUGE',
                    'Accuracy'
                  ],
                  correctAnswer: 1,
                  explanation: 'Translation results were measured using BLEU (Section 6.1).'
                },
                {
                  id: 'q19',
                  text: 'How does the Transformer handle variable-length sequences?',
                  options: [
                    'Dynamic computation graphs',
                    'Positional encoding',
                    'Masked attention', 
                    'All of the above'
                  ],
                  correctAnswer: 3,
                  explanation: 'The model uses all these techniques for sequence handling.'
                },
                {
                  id: 'q20',
                  text: 'What was the purpose of using label smoothing?',
                  options: [
                    'Reduce overfitting',
                    'Improve convergence speed',
                    'Handle class imbalance',
                    'All of the above'
                  ],
                  correctAnswer: 0,
                  explanation: 'Label smoothing (ε=0.1) helped prevent overconfidence (Section 5.4).'
                },
                {
                  id: 'q21',
                  text: 'Which architectural choice helps prevent vanishing gradients?',
                  options: [
                    'Residual connections', 
                    'Layer normalization',
                    'Multi-head attention',
                    'All of the above'
                  ],
                  correctAnswer: 3,
                  explanation: 'All these components contribute to stable gradient flow.'
                },
                {
                  id: 'q22',
                  text: 'What is the computational advantage of dot-product attention over additive attention?',
                  options: [
                    'Better theoretical bounds',
                    'More parameters',
                    'Optimized matrix multiplication', 
                    'Easier to parallelize'
                  ],
                  correctAnswer: 2,
                  explanation: 'Dot-product attention leverages optimized matrix operations (Section 3.2.1).'
                },
                {
                  id: 'q23',
                  text: 'How does the model dimension d_model relate to attention heads?',
                  options: [
                    'd_model = h × d_k',
                    'd_k = d_model × h',
                    'h = d_model × d_k',
                    'No direct relationship'
                  ],
                  correctAnswer: 0,
                  explanation: 'd_model = h × d_k (64×8=512 in base model) (Section 3.2.2).'
                },
                {
                  id: 'q24',
                  text: 'What was the key finding from the positional encoding ablation study?',
                  options: [
                    'Learned embeddings performed better',
                    'Sinusoidal encodings improved extrapolation', 
                    'Positional information hurt performance',
                    'No significant difference was found'
                  ],
                  correctAnswer: 3,
                  explanation: 'Learned and sinusoidal encodings performed similarly (Section 3.5).'
                },
                {
                  id: 'q25',
                  text: 'What key limitation of convolutional architectures does the Transformer address?',
                  options: [
                    'Inability to handle variable-length sequences',
                    'Exponential growth of operations with distance', 
                    'Lack of parallelization capabilities',
                    'High memory consumption'
                  ],
                  correctAnswer: 1,
                  explanation: 'Convolutional layers require O(n/k) layers to connect all positions vs Transformers O(1) operations (Section 4).'
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
          <h1 className="text-3xl font-bold text-gray-900">Interactive Courses</h1>
        </div>
        <p className="text-gray-600">Explore our comprehensive curriculum of interacive courses related to machine learning</p>
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