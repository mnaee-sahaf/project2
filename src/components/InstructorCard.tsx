
export function InstructorCard(){
  return (
    <div className="bg-gray-100 rounded-2xl p-8 max-w-xl mx-auto shadow-lg flex flex-col items-center">
      {/* Instructor Image */}
      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
        <img
          src="/profile.jpg" // Replace with the actual image URL
          alt="Muneeb"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-900 mt-4">Hey! I'm Muneeb.</h2>
      <h3 className="text-lg font-semibold text-gray-700 mt-2">I'm the instructor of the program.</h3>

      {/* Description */}
      <p className="text-gray-600 text-center mt-4">
        I'm a computer scientist and self taught machine learning engineer with five years of experience building and scaling
        enterprise software and tinkering with machine learning systems.
      </p>

      <p className="text-gray-600 text-center mt-2">
        From 2019 to 2025, I had the privilege of building systems for companies like Motive and Jibble. I learned what it takes to
        build reliable and scalable software.
      </p>

      <p className="text-gray-600 text-center mt-2">
        I started this program in December 2024, and since then, hundereds of students have
        successfully graduated with the fundaemntals of Machine Learning.
      </p>

      <p className="text-gray-600 text-center mt-4">I can't wait to see you on the other side!</p>

      {/* Social Icons */}
      <div className="flex space-x-4 mt-6">
        <a href="#" className="text-gray-700 hover:text-gray-900">
          LinkedIn
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900">
          Instagram
        </a>
      </div>
    </div>
  );
};


