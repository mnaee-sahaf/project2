// import React from 'react';

import { DownloadCloud } from "lucide-react";


export function Resources() {
  return (
    <>
      <header className="mb-6 sm:mb-8">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <DownloadCloud className="text-indigo-600" size={24}/>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Resources</h1>
        </div>
        <p className="text-sm sm:text-base text-gray-600 mt-1 sm:mt-2">
          Here you can find downloadable worksheets and handwritten notes
        </p>
      </header>

      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <div className="p-4 sm:p-6 rounded-xl border border-gray-200 hover:border-indigo-200 hover:shadow-lg transition-all">
          <div className="w-10 sm:w-12 h-10 sm:h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
            <DownloadCloud className="h-5 sm:h-6 w-5 sm:w-6 text-indigo-600" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">
            Downloadable Worksheets
          </h3>
          <p className="text-sm sm:text-base text-gray-600">
            Download and print worksheets to practice your skills.
            (Coming Soon)
          </p>
        </div>
        <div className="p-4 sm:p-6 rounded-xl border border-gray-200 hover:border-indigo-200 hover:shadow-lg transition-all">
          <div className="w-10 sm:w-12 h-10 sm:h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
            <DownloadCloud className="h-5 sm:h-6 w-5 sm:w-6 text-indigo-600" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">
            Handwritten Notes
          </h3>
          <p className="text-sm sm:text-base text-gray-600">
            Download and print notes to help you study.
            (Coming Soon)
          </p>
        </div>
        <div className="p-6 rounded-xl border border-gray-200 hover:border-indigo-200 hover:shadow-lg transition-all">
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
            <DownloadCloud className="h-6 w-6 text-indigo-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Best Free ML Courses
          </h3>
          <p className="text-gray-600">
            <ul className="text-gray-600 list-disc list-inside">
              <li><a href="https://karpathy.ai/zero-to-hero.html" target="_blank" rel="noopener noreferrer">Andrej Karpathy: 0 to hero</a></li>
              <li><a href="https://www.youtube.com/playlist?list=PLkt2uSq6rBVctENoVBg1TpCC7OQi31AlC" target="_blank" rel="noopener noreferrer">CS231n Winter 2016</a></li>
              <li><a href="https://course.fast.ai/" target="_blank" rel="noopener noreferrer">https://course.fast.ai/</a></li>
              <li><a href="https://d2l.ai/" target="_blank" rel="noopener noreferrer">https://d2l.ai/</a></li>
              <li><a href="https://uvadlc-notebooks.readthedocs.io/en/latest/" target="_blank" rel="noopener noreferrer">https://uvadlc-notebooks.readthedocs.io/en/latest/</a></li>
              <li><a href="https://github.com/mlabonne/llm-course" target="_blank" rel="noopener noreferrer">https://github.com/mlabonne/llm-course</a></li>
              <li><a href="https://huggingface.co/learn/computer-vision-course/en/unit0/welcome/welcome" target="_blank" rel="noopener noreferrer">Huggingface Computer Vision</a></li>
              <li><a href="https://huggingface.co/learn/diffusion-course/unit0/1" target="_blank" rel="noopener noreferrer">Huggingface Diffusion</a></li>
              <li><a href="https://www.cs.cornell.edu/courses/cs4780/2024sp/" target="_blank" rel="noopener noreferrer">Cornerll CS4780</a></li>
              <li><a href="https://github.com/abhishekkrthakur/approachingalmost" target="_blank" rel="noopener noreferrer">Approaching Almost Any ML Problem</a></li>
            </ul>
          </p>
        </div>
      </div>
    </>
  );
}