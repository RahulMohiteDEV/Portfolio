import React from 'react';

const EducationSection = () => {
  return (
    <section 
    id='Qualification'
    className="py-10 px-4 bg-gray-100 text-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mt-12 mb-12">My Qualification</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education Item 1 */}
          <div className="bg-white rounded-lg p-8 shadow-md border h-full">
            <p className="inline-block bg-green-500 text-white py-2 px-6 rounded-full text-sm font-medium">
              2020 - 2023
            </p>
            <h3 className="text-2xl font-semibold mt-4">Bachelor of Computer Science (BSc)</h3>
            <p className="text-red-500 mt-1">Shivaji University, Kolhapur</p>
            <p className="mt-4 text-sm text-gray-600">
             Lal Bahadhur Shastri college of satara.
            </p>
          </div>

          {/* Education Item 2 */}
          <div className="bg-white rounded-lg p-8 shadow-md border h-full">
            <p className="inline-block bg-green-500 text-white py-2 px-6 rounded-full text-sm font-medium">
              2023 - 2025
            </p>
            <h3 className="text-2xl font-semibold mt-4">Master of Computer Science (MSc)</h3>
            <p className="text-red-500 mt-1">Karmaveer Bhavrao Patil University, Satara</p>
            <p className="mt-4 text-sm text-gray-600">
             Yashwantrao chavan institude of satara.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;


