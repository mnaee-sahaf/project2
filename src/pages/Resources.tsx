// import React from 'react';

import { DownloadCloud } from "lucide-react";


export function Resources() {
  return (
    <>
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-4">
        <DownloadCloud className="text-indigo-600" size={32} />
        <h1 className="text-3xl font-bold text-gray-900">Resources</h1>
        </div>
        <p className="text-gray-600 mt-2">
        Here you can find downloadable worksheets and handwrtitten notes
        </p>
     
      </header>


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