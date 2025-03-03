import { useState } from 'react';
import { ChevronDown, ChevronUp, Book, Code, Brain, BarChart, Database, BookCheckIcon, BookDashedIcon } from 'lucide-react';

export function MachineLearningRoadmap1() {
  // Define the type for expandedSections state
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  // Toggle section expansion
  const toggleSection = (section: string) => {
    // Correcting the type issue by explicitly typing the section parameter
    setExpandedSections((prev: Record<string, boolean>) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Roadmap data
  const roadmapSections = [
    {
      id: 'math-foundations',
      title: 'Mathematical Foundations',
      icon: <BookCheckIcon size={20} className="text-indigo-600" />,
      subtopics: [
        'Linear Algebra',
        'Probability & Statistics',
        'Calculus',
        'Optimization',
      ],
    },
    {
      id: 'programming',
      title: 'Programming for ML',
      icon: <Code size={20} className="text-indigo-600" />,
      subtopics: [
        'Python Basics',
        'NumPy & Pandas',
        'Data Visualization (Matplotlib, Seaborn)',
        'Object-Oriented Programming',
      ],
    },
    {
      id: 'ml-basics',
      title: 'Machine Learning Basics',
      icon: <Brain size={20} className="text-indigo-600" />,
      subtopics: [
        'Supervised Learning',
        'Unsupervised Learning',
        'Model Evaluation Metrics',
        'Feature Engineering',
      ],
    },
    {
      id: 'deep-learning',
      title: 'Deep Learning',
      icon: <BarChart size={20} className="text-indigo-600" />,
      subtopics: [
        'Neural Networks',
        'Backpropagation',
        'Convolutional Neural Networks (CNNs)',
        'Recurrent Neural Networks (RNNs)',
      ],
    },
    {
      id: 'data-handling',
      title: 'Data Handling',
      icon: <Database size={20} className="text-indigo-600" />,
      subtopics: [
        'Data Cleaning',
        'Data Preprocessing',
        'Feature Scaling',
        'Handling Missing Data',
      ],
    },
    {
        id: 'research-papers',
        title: 'Research Papers',
        icon: <BookDashedIcon size={20} className="text-indigo-600" />,
        subtopics: [
          'Attention Is All You Need',
          'AlexNet',
          'BERT',
          'YOLO',
        ],
      },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center gap-2 mb-6">
        <Book className="text-indigo-600" size={24} />
        <h3 className="text-xl font-semibold">Machine Learning Roadmap</h3>
      </div>

      {/* Roadmap Sections */}
      <div className="space-y-4">
        {roadmapSections.map((section) => (
          <div key={section.id} className="border border-gray-200 rounded-lg">
            {/* Section Header */}
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg"
            >
              <div className="flex items-center gap-2">
                {section.icon}
                <span className="text-lg font-medium">{section.title}</span>
              </div>
              <span>
                {expandedSections[section.id] ? (
                  <ChevronUp size={20} className="text-gray-500" />
                ) : (
                  <ChevronDown size={20} className="text-gray-500" />
                )}
              </span>
            </button>

            {/* Subtopic List */}
            {expandedSections[section.id] && (
              <div className="p-4 pt-0">
                <ul className="space-y-2">
                  {section.subtopics.map((subtopic, index) => (
                    <li key={index} className="text-gray-700">
                      {subtopic}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Call to Action */}
      {/* <div className="mt-8 text-center">
        <p className="text-gray-600 mb-2">
          Find the detailed version of this roadmap and other similar roadmaps
        </p>
        <a
          href="#"
          className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
        >
          Explore Roadmaps
        </a>
      </div> */}
    </div>
  );
}