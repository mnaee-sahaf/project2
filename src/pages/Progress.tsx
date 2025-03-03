import React, { useState, useEffect } from 'react';
import { Award, Target, Clock, Brain, Trophy, Zap, BookOpen } from 'lucide-react';
import { useProgress } from '../hooks/useProgress';
import { useAuth } from '../contexts/AuthContext';
// import { supabase } from '../lib/supabase';
import type { UserProgress, LessonCompletion } from '../hooks/useProgress';

// Mock data for non-authenticated users
const mockProgress = {
  id: 'mock',
  user_id: 'mock',
  completed_lessons: [],
  hours_spent: 0,
  current_streak: 0,
  longest_streak: 0,
  average_score: 0,
  last_activity: new Date().toISOString(),
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString()
};

const mockRecentLessons: LessonCompletion[] = [];

function StatCard({ icon: Icon, label, value, className = '' }: {
  icon: React.ElementType;
  label: string;
  value: string | number;
  className?: string;
}) {
  return (
    <div className={`bg-white rounded-xl shadow-sm border border-gray-200 p-6 ${className}`}>
      <div className="flex items-center gap-4">
        <div className="p-3 bg-indigo-50 rounded-lg">
          <Icon className="text-indigo-600" size={24} />
        </div>
        <div>
          <p className="text-sm text-gray-600">{label}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
      </div>
    </div>
  );
}

function ProgressBar({ value, max }: { value: number; max: number }) {
  const percentage = (value / max) * 100;
  return (
    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
      <div 
        className="h-full bg-indigo-600 rounded-full"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}

export function Progress() {
  const { user } = useAuth();
  const { progress: authProgress, recentLessons: authRecentLessons, loading, error } = useProgress();
  const [progressData, setProgressData] = useState<UserProgress | null>(null);
  const [recentLessonsData, setRecentLessonsData] = useState<LessonCompletion[]>([]);

  useEffect(() => {
    // If user is authenticated and we have data from useProgress, use it
    if (user && authProgress) {
      setProgressData(authProgress);
      setRecentLessonsData(authRecentLessons || []);
    } else {
      // Otherwise use mock data
      setProgressData(mockProgress);
      setRecentLessonsData(mockRecentLessons);
    }
  }, [user, authProgress, authRecentLessons]);

  // Show loading state only if user is authenticated and data is loading
  if (user && loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  // Show error only if user is authenticated and there's an error
  if (user && error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-600">Error: {error}</div>
      </div>
    );
  }

  // If no progress data is available (should not happen with our setup)
  if (!progressData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-gray-600">No progress data available</div>
      </div>
    );
  }

  const {
    completed_lessons = [],
    hours_spent = 0,
    current_streak = 0,
    average_score = 0
  } = progressData;

  // For authenticated users, calculate achievement progress
  const fastLearnerProgress = user && recentLessonsData.length > 0 
    ? Math.min((recentLessonsData.length / 3) * 100, 100) 
    : 0;
  
  const perfectScoreProgress = user && recentLessonsData.length > 0
    ? Math.max(...recentLessonsData.map(lesson => lesson.score), 0)
    : 0;
  
  const streakProgress = user ? (current_streak / 7) * 100 : 0;

  return (
    <>
      {/* <header className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <BarChart3 className="text-indigo-600" size={32} />
          <h1 className="text-3xl font-bold text-gray-900">Your Progress</h1>
        </div>
        <p className="text-gray-600">Track your learning journey and achievements.</p>
      </header> */}

      <div className="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
        <StatCard 
          icon={BookOpen}
          label="Completed Lessons"
          value={completed_lessons.length}
        />
        <StatCard 
          icon={Clock}
          label="Hours Spent Learning"
          value={hours_spent.toFixed(1)}
        />
        <StatCard 
          icon={Zap}
          label="Current Streak"
          value={`${current_streak} days`}
        />
        <StatCard 
          icon={Brain}
          label="Average Score"
          value={`${average_score.toFixed(1)}%`}
        />
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <section>
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          {recentLessonsData && recentLessonsData.length > 0 ? (
            <div className="space-y-4">
              {recentLessonsData.map(lesson => (
                <div 
                  key={lesson.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-4"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-gray-900">{lesson.title}</h3>
                    <span className="text-sm text-gray-500">
                      {new Date(lesson.completed_at).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-1 rounded-full text-sm
                      ${lesson.difficulty === 'beginner' ? 'bg-green-100 text-green-800' :
                        lesson.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'}`}>
                      {lesson.difficulty}
                    </span>
                    <div className="flex items-center gap-2">
                      <Trophy 
                        size={16} 
                        className={lesson.score >= 90 ? 'text-yellow-500' : 'text-gray-400'} 
                      />
                      <span className="font-medium">{lesson.score}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 bg-white rounded-lg border border-gray-200">
              <p className="text-gray-500">No lessons completed yet</p>
              {!user && (
                <p className="text-sm text-indigo-600 mt-2"><a href='/auth/login'>Sign in to track your progress</a></p>
              )}
            </div>
          )}
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Achievements</h2>
          <div className="space-y-4">
            {[
              {
                id: 1,
                title: 'Fast Learner',
                description: 'Complete 3 lessons in one day',
                icon: Zap,
                earned: user && recentLessonsData.length >= 3,
                progress: fastLearnerProgress,
              },
              {
                id: 2,
                title: 'Perfect Score',
                description: 'Get 100% on any lesson quiz',
                earned: user && recentLessonsData.some(lesson => lesson.score === 100),
                progress: perfectScoreProgress,
                icon: Trophy,
              },
              {
                id: 3,
                title: 'Consistent Learner',
                description: 'Maintain a 7-day learning streak',
                icon: Target,
                earned: user && current_streak >= 7,
                progress: streakProgress,
              },
            ].map(achievement => (
              <div 
                key={achievement.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-4"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-2 rounded-lg ${
                    achievement.earned ? 'bg-green-100' : 'bg-gray-100'
                  }`}>
                    <achievement.icon 
                      size={24}
                      className={achievement.earned ? 'text-green-600' : 'text-gray-400'}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-medium text-gray-900">{achievement.title}</h3>
                        <p className="text-sm text-gray-600">{achievement.description}</p>
                      </div>
                      {achievement.earned && (
                        <Award className="text-yellow-500" size={20} />
                      )}
                    </div>
                    <ProgressBar value={achievement.progress} max={100} />
                    <p className="text-sm text-gray-500 mt-2">
                      {achievement.progress.toFixed(0)}% Complete
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}