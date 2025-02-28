// import React from 'react';
import { Progress } from './Progress';
// import { LessonCard } from '../components/LessonCard';
// import { allLessons } from '../data/lessons';


export function Dashboard() {
  return (
    <>
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome back!</h1>
        <p className="text-gray-600 mt-2">Continue your journey into machine learning.</p>
      </header>
      <Progress />

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* <section>
          <h2 className="text-xl font-semibold mb-4">Your Current Lesson</h2>
          <p>Cuurent Lesson Will Be Put Here</p>        </section> */}

        {/* <section>
          <h2 className="text-xl font-semibold mb-4">Next Up</h2>
          <div className="space-y-4">
            {allLessons.map(lesson => (
              <LessonCard
                key={lesson.id}
                lesson={lesson}
                onClick={() => console.log('Lesson clicked:', lesson.id)}
              />
            ))}
          </div>
        </section> */}
      </div>
    </>
  );
}