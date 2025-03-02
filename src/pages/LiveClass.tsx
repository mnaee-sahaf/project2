import React from "react";

const LiveClass: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-900">


      <section className="text-center py-20 bg-gradient-to-br from-indigo-600 to-indigo-900 text-white">
        <h1 className="text-4xl font-bold">Live Cohort - Project: Neural Networks From Scratch</h1>
        <p className="mt-4 text-lg">No BS Just Pure Code And Math</p>
        <div className="mt-6 space-x-4">
          <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-md">ENROLL</button>
        </div>
      </section>
            {/* FAQ Section */}
            <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
          <div className="mt-8 bg-white p-6 shadow-lg rounded-lg">
            <h3 className="font-semibold text-lg">Who is this course for?</h3>
            <p className="text-gray-600 mt-2">Anyone interested in AI, from beginners to professionals.</p>
          </div>
          <div className="mt-4 bg-white p-6 shadow-lg rounded-lg">
            <h3 className="font-semibold text-lg">Do I need programming experience?</h3>
            <p className="text-gray-600 mt-2">Basic Python knowledge is helpful.</p>
          </div>
        </div>
      </section>

            {/* Course Highlights */}
            <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold">What You'll Learn</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="font-semibold text-xl">Neural Netowrks</h3>
              <p className="text-gray-600 mt-2">Building Neural Networks From Scratch - No Fluff - Just Math And Raw Code.</p>
            </div>
            {/* <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="font-semibold text-xl">Real-World Projects</h3>
              <p className="text-gray-600 mt-2">Hands-on experience with industry-level ML solutions.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="font-semibold text-xl">Career Support</h3>
              <p className="text-gray-600 mt-2">Get mentorship and guidance to land ML jobs.</p>
            </div> */}
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="text-center py-16 px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <img src="/profile.jpg" alt="Instructor" className="w-24 h-24 mx-auto rounded-full border-4 border-gray-300" />
          <h2 className="text-2xl font-bold mt-4">Yo! I'm Muneeb</h2>
          <p className="text-gray-600 mt-2">I have 4 years of experience in software engineering.</p>
          <p className="text-gray-600 mt-4">I’ve worked with companies like Motive and Jibble to build enterprise systems, I created this platform to teach myself and others the basics of Machine Learning
             since I beleive that learning the basics of AI will be the most valuable skillset in the years to come</p>
        </div>
      </section>


      {/* Testimonials */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold">What Students Say</h2>
        <div className="mt-8 max-w-3xl mx-auto bg-white p-6 shadow-lg rounded-lg">
          <p className="text-gray-700">"I dont have tesitomals yet"</p>
          <p className="mt-4 font-semibold">- LOL</p>
        </div>
      </section>
    </div>
  );
};

export default LiveClass;
