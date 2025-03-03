import type { Course } from '../types';


export const sampleCourses: Course[] = [
    {
        id: '4',
        title: 'ML Research Papers',
        description: 'Test your knowledge of the key concepts of the most influential machine learning research papers',
        image: 'https://images.pexels.com/photos/12334692/pexels-photo-12334692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        difficulty: 'advanced',
        completed: false,
        paid: true,
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
          },
          {
            id: '4-2',
            courseId: '2',
            title: 'Neural Networks Are Decision Trees',
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
    },
    {
        id: '3',
        title: 'Build Neural Networks From Scratch',
        description: 'Dive into neural networks, backpropagation, and modern deep learning architectures.',
        image: 'https://images.pexels.com/photos/30885762/pexels-photo-30885762/free-photo-of-wooden-tiles-spelling-deepseek-on-table.jpeg',
        difficulty: 'advanced',
        completed: false,
        paid: true,
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
        id: '1',
        title: 'Theory Of Machine Learning',
        description: 'Learn the fundamental concepts of machine learning and its applications.',
        image: 'https://images.pexels.com/photos/17483910/pexels-photo-17483910/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-represents-the-concept-of-artificial-general-intelligence-agi-it-was-created-by-artist-domhnall-malone-as-part-of-th.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        difficulty: 'beginner',
        completed: false,
        paid: false,
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
                      id: 'q1',
                      text: 'What is the primary goal of supervised learning?',
                      options: [
                        'To discover hidden patterns in unlabeled data',
                        'To predict outcomes using labeled training data',
                        'To reduce computational complexity',
                        'To optimize resource allocation'
                      ],
                      correctAnswer: 1,
                      explanation: 'Supervised learning uses labeled data to train models to predict outcomes for unseen data.'
                    },
                    {
                      id: 'q2',
                      text: 'Which algorithm is commonly used for regression tasks?',
                      options: [
                        'K-Means',
                        'Decision Tree',
                        'Linear Regression',
                        'Support Vector Machine (SVM)'
                      ],
                      correctAnswer: 2,
                      explanation: 'Linear Regression is a foundational algorithm for predicting continuous numerical outputs.'
                    },
                    {
                      id: 'q3',
                      text: 'What does the term "overfitting" mean?',
                      options: [
                        'The model performs well on training data but poorly on unseen data',
                        'The model is too simple to capture patterns',
                        'The model has high bias',
                        'The model is optimized for speed'
                      ],
                      correctAnswer: 0,
                      explanation: 'Overfitting occurs when a model memorizes training data noise, leading to poor generalization.'
                    },
                    {
                      id: 'q4',
                      text: 'Which Python library is primarily used for machine learning?',
                      options: [
                        'Matplotlib',
                        'Pandas',
                        'Scikit-learn',
                        'TensorFlow'
                      ],
                      correctAnswer: 2,
                      explanation: 'Scikit-learn provides tools for preprocessing, model training, and evaluation.'
                    },
                    {
                      id: 'q5',
                      text: 'What is the purpose of a training-test split?',
                      options: [
                        'To reduce dataset size',
                        'To evaluate model performance on unseen data',
                        'To speed up training',
                        'To balance class labels'
                      ],
                      correctAnswer: 1,
                      explanation: 'Splitting data ensures the model is tested on data it hasn’t seen during training.'
                    },
                    {
                      id: 'q6',
                      text: 'Which evaluation metric is used for classification tasks?',
                      options: [
                        'Mean Absolute Error (MAE)',
                        'R-squared',
                        'Accuracy',
                        'Euclidean Distance'
                      ],
                      correctAnswer: 2,
                      explanation: 'Accuracy measures the percentage of correct predictions in classification.'
                    },
                    {
                      id: 'q7',
                      text: 'What does KNN stand for?',
                      options: [
                        'Kernel Neural Network',
                        'K-Nearest Neighbors',
                        'K-Means Network',
                        'Key Normalization Node'
                      ],
                      correctAnswer: 1,
                      explanation: 'K-Nearest Neighbors classifies data points based on the majority class of their nearest neighbors.'
                    },
                    {
                      id: 'q8',
                      text: 'Which activation function is commonly used in neural network output layers for binary classification?',
                      options: [
                        'ReLU',
                        'Sigmoid',
                        'Tanh',
                        'Linear'
                      ],
                      correctAnswer: 1,
                      explanation: 'Sigmoid outputs probabilities between 0 and 1, ideal for binary classification.'
                    },
                    {
                      id: 'q9',
                      text: 'What is the role of a loss function?',
                      options: [
                        'To measure model performance during training',
                        'To preprocess data',
                        'To visualize decision boundaries',
                        'To select hyperparameters'
                      ],
                      correctAnswer: 0,
                      explanation: 'Loss functions quantify the error between predictions and actual values.'
                    },
                    {
                      id: 'q10',
                      text: 'Which code snippet correctly splits data into training and test sets?',
                      options: [
                        'train, test = split(data, test_size=0.2)',
                        'X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3)',
                        'train_test_split(X, y, shuffle=True)',
                        'split(data, ratio=0.7)'
                      ],
                      correctAnswer: 1,
                      explanation: 'scikit-learn’s `train_test_split` returns four arrays: features and labels for training/testing.'
                    },
                    {
                      id: 'q11',
                      text: 'What is regularization used for?',
                      options: [
                        'To increase model complexity',
                        'To reduce overfitting by penalizing large weights',
                        'To speed up training',
                        'To handle missing data'
                      ],
                      correctAnswer: 1,
                      explanation: 'Regularization (e.g., L1/L2) discourages overly complex models by adding penalty terms to the loss.'
                    },
                    {
                      id: 'q12',
                      text: 'Which algorithm creates splits based on information gain?',
                      options: [
                        'Linear Regression',
                        'Decision Tree',
                        'K-Means',
                        'Logistic Regression'
                      ],
                      correctAnswer: 1,
                      explanation: 'Decision Trees use metrics like information gain or Gini impurity to split nodes.'
                    },
                    {
                      id: 'q13',
                      text: 'What does the following code do?\n`from sklearn.preprocessing import StandardScaler`',
                      options: [
                        'Imports a decision tree classifier',
                        'Imports a tool to normalize data',
                        'Imports a hyperparameter tuning library',
                        'Imports a visualization library'
                      ],
                      correctAnswer: 1,
                      explanation: 'StandardScaler standardizes features by removing the mean and scaling to unit variance.'
                    },
                    {
                      id: 'q14',
                      text: 'What is a "feature" in machine learning?',
                      options: [
                        'A performance metric',
                        'An input variable used for making predictions',
                        'A type of neural network layer',
                        'A data visualization technique'
                      ],
                      correctAnswer: 1,
                      explanation: 'Features are individual measurable properties of the data (e.g., age, height).'
                    },
                    {
                      id: 'q15',
                      text: 'Which of the following is a clustering algorithm?',
                      options: [
                        'Random Forest',
                        'K-Means',
                        'Linear Regression',
                        'SVM'
                      ],
                      correctAnswer: 1,
                      explanation: 'K-Means groups data points into clusters based on similarity.'
                    },
                    {
                      id: 'q16',
                      text: 'What is the output layer size for a multiclass classification problem with 5 classes?',
                      options: [
                        '1 neuron',
                        '5 neurons',
                        '10 neurons',
                        'Equal to the number of features'
                      ],
                      correctAnswer: 1,
                      explanation: 'In multiclass classification, the output layer typically has one neuron per class.'
                    },
                    {
                      id: 'q17',
                      text: 'Which code trains a logistic regression model?',
                      options: [
                        'model.fit(X_train, y_train)',
                        'model = LogisticRegression().train(X, y)',
                        'model = LogisticRegression().fit(X_train, y_train)',
                        'model.predict(X_test)'
                      ],
                      correctAnswer: 2,
                      explanation: 'scikit-learn uses the `fit()` method to train models.'
                    },
                    {
                      id: 'q18',
                      text: 'What is the purpose of a confusion matrix?',
                      options: [
                        'To visualize model architecture',
                        'To evaluate classification performance',
                        'To preprocess text data',
                        'To reduce dimensionality'
                      ],
                      correctAnswer: 1,
                      explanation: 'A confusion matrix shows true vs. predicted labels (TP, TN, FP, FN).'
                    },
                    {
                      id: 'q19',
                      text: 'What is the default value of `k` in KNN?',
                      options: [
                        '1',
                        '3',
                        '5',
                        'Defined by the user'
                      ],
                      correctAnswer: 3,
                      explanation: 'In scikit-learn, `n_neighbors` defaults to 5, but it must be explicitly set by the user.'
                    },
                    {
                      id: 'q20',
                      text: 'What is cross-validation used for?',
                      options: [
                        'To increase training speed',
                        'To reduce model bias',
                        'To evaluate model generalizability',
                        'To preprocess images'
                      ],
                      correctAnswer: 2,
                      explanation: 'Cross-validation splits data into multiple folds to assess performance across different subsets.'
                    },
                    {
                      id: 'q21',
                      text: 'What does the following code compute?\n`np.mean(np.abs(y_true - y_pred))`',
                      options: [
                        'Mean Squared Error (MSE)',
                        'R-squared',
                        'Mean Absolute Error (MAE)',
                        'Accuracy'
                      ],
                      correctAnswer: 2,
                      explanation: 'MAE calculates the average absolute difference between predictions and true values.'
                    },
                    {
                      id: 'q22',
                      text: 'Which hyperparameter controls tree depth in a Decision Tree?',
                      options: [
                        'min_samples_split',
                        'max_depth',
                        'n_estimators',
                        'learning_rate'
                      ],
                      correctAnswer: 1,
                      explanation: '`max_depth` limits how deep the tree can grow to prevent overfitting.'
                    },
                    {
                      id: 'q23',
                      text: 'What is the output of this code?\n`print(confusion_matrix([1,0,1], [1,1,0]))`',
                      options: [
                        '[[1 1], [1 0]]',
                        '[[1 0], [1 1]]',
                        '[[1 1], [0 1]]',
                        '[[1 0], [0 1]]'
                      ],
                      correctAnswer: 0,
                      explanation: 'Row 1: True Positives (1) and False Positives (1). Row 2: False Negatives (1) and True Negatives (0).'
                    },
                    {
                      id: 'q24',
                      text: 'Which gradient descent update rule is correct?',
                      options: [
                        'weights = weights - learning_rate * gradient',
                        'weights = weights + learning_rate * gradient',
                        'weights = gradient - learning_rate * weights',
                        'weights = learning_rate * gradient'
                      ],
                      correctAnswer: 0,
                      explanation: 'Weights are updated by subtracting the gradient scaled by the learning rate.'
                    },
                    {
                      id: 'q25',
                      text: 'What is the primary use of PCA?',
                      options: [
                        'Classification',
                        'Dimensionality reduction',
                        'Clustering',
                        'Regularization'
                      ],
                      correctAnswer: 1,
                      explanation: 'Principal Component Analysis (PCA) reduces feature space while preserving variance.'
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
      id: '5',
      title: 'Python Fundemntals',
      description: 'Learn the fundamental concepts of python and its applications.',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      difficulty: 'beginner',
      completed: false,
      paid: false,
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
        id: '6',
        title: 'Maths for Machine Learning',
        description: 'Learn the fundamental concepts of Math for Machine Learning.',
        image: 'https://images.pexels.com/photos/5185093/pexels-photo-5185093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        difficulty: 'beginner',
        completed: false,
        paid: false,
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
      id: '2',
      title: 'Deep Learning Fundamentals',
      description: 'Dive into neural networks, backpropagation, and modern deep learning architectures.',
      image: 'https://images.pexels.com/photos/18069362/pexels-photo-18069362/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-depicts-how-ai-could-help-understand-ecosystems-and-identify-species-it-was-created-by-nidia-dias-as-part-of-the-visua.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      difficulty: 'intermediate',
      completed: false,
      paid:false,
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
  ];