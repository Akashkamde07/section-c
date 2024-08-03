import React from 'react';

const ContentUs = () => {
  return (
    <div className="mt-10 text-center px-4 w-full  bg-gray-100">
      <div className="flex justify-center space-x-2 mb-4">
        <img src="Avatar3.png" alt="Profile 1" className="rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" />
        <img src="Avatar1.png" alt="Profile 2" className="rounded-full w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18" />
        <img src="Avatar2.png" alt="Profile 3" className="rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" />
      </div>
      <h3 className="text-xl md:text-lg lg:text-xl">
        Still have questions?
      </h3>
      <p className="text-gray-600 mb-6 text-sm md:text-base lg:text-lg">
        Can’t find the answer you’re looking for? Reach out to us.
      </p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
        Get in touch
      </button>
    </div>
  );
};

export default ContentUs;