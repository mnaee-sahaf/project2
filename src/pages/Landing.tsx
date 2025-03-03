// import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Target, Users, ArrowRight, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Interactive Learning',
    description: 'Learn machine learning concepts through hands-on exercises and real-time visualizations.'
  },
  {
    icon: Target,
    title: 'Structured Curriculum',
    description: 'Follow a carefully designed path from basics to advanced ML concepts.'
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Join a community of learners and share your progress with others.'
  }
];

const highlights = [
  'Interactive visualizations',
  'Real-world projects',
  'Expert-crafted content',
  'Progress tracking',
  'Hands-on exercises',
  'Instant feedback'
];

export function Landing() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488229297570-58520851e868?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-12 sm:py-16 md:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6">
              Master Machine Learning
              <br className="hidden sm:block" />
              Through Practice
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-indigo-100 mb-6 md:mb-8 max-w-3xl mx-auto">
              The latest Research Papers in AI and ML concepts as hands-on interactive exercises and real-time visualizations.
              Start your journey into artificial intelligence today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 text-base font-medium rounded-lg bg-white text-indigo-600 hover:bg-indigo-50 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/lessons"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 text-base font-medium rounded-lg border border-white text-white hover:bg-white/10 transition-colors"
              >
                Browse Lessons
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
              Why Learn With Us?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Our Goal is to make AI education accessible to everyone. Our platform lowers the barrier for entry by combining theory with practice, making complex ML papers and concepts accessible and engaging
            </p>
            <br />
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
               The problem to solve here is that with the rise of AI tools, mastering the basic funadamentals is more important than ever. It's what will differenitate between those that are replaceable and those that are not
               </p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-5 md:p-6 rounded-xl border border-gray-200 hover:border-indigo-200 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                Everything you need to master machine learning
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm md:text-base text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 md:mt-8">
                <Link
                  to="/dashboard"
                  className="inline-flex items-center justify-center px-5 md:px-6 py-2 md:py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors text-sm md:text-base"
                >
                  Start Learning Now
                  <ArrowRight className="ml-2 h-4 md:h-5 w-4 md:w-5" />
                </Link>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <img
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80"
                alt="Machine Learning Visualization"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white py-10 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 md:mb-4">
            Ready to start your ML journey?
          </h2>
          <p className="text-lg md:text-xl text-indigo-100 mb-6 md:mb-8 max-w-2xl mx-auto">
            Join thousands of learners who are already mastering machine learning concepts through our interactive platform.
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 text-base font-medium rounded-lg bg-white text-indigo-600 hover:bg-indigo-50 transition-colors"
          >
            Get Started For Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}