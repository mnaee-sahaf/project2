import { useState } from 'react';
import { Search,GraduationCap } from 'lucide-react';
import { CourseCard } from '../components/CourseCard';
import { CourseContent } from '../components/CourseContent';
import type { Course } from '../types';
import { sampleCourses } from '../data/courseData';

// import course data
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