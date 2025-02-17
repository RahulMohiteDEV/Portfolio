import React from 'react';
import { FaCode, FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaAngular } from 'react-icons/fa'; // Import the icons you want to use

const skills = {
  languages: [
    { name: 'Web Design', percentage: 85, icon: <FaCode color="#3498db" /> }, // Blue
    { name: 'HTML/CSS', percentage: 95, icon: <FaHtml5 color="#e34c26" /> }, // Red-Orange (HTML5 color)
    { name: 'JavaScript', percentage: 75, icon: <FaJsSquare color="#f7df1e" /> }, // Yellow (JS color)
  ],
  frameworks: [
    { name: 'React JS', percentage: 70, icon: <FaReact color="#61dafb" /> }, // React Blue
    { name: 'Tailwind CSS', percentage: 80, icon: <FaCss3Alt color="#38bdf8" /> }, // Tailwind Blue (Angular used here for placeholder)
    { name: 'Bootstrap', percentage: 99, icon: <FaCss3Alt color="#563d7c" /> }, // Purple (Bootstrap color)
  ]
};

const SkillsSection = () => {
  return (
    <section 
    id="Experience"
    className="py-10 px-4 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mt-12 mb-8">My Skills</h2>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
          
          {/* Languages Section */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-center mb-4">Languages</h3>
            <div className="space-y-6">
              {skills.languages.map((skill) => (
                <div key={skill.name} className="flex flex-col">
                  <div className="flex items-center mb-2">
                    <span className="mr-2">{skill.icon}</span>
                    <p className="font-medium text-start">{skill.name}</p>
                    <span className="ml-auto">{skill.percentage}%</span>
                  </div>
                  <div className="relative mb-4">
                    <div className="w-full h-2 bg-gray-300 rounded-full">
                      <div
                        className="h-2 rounded-full bg-blue-500"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Libraries/Frameworks Section */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-center mb-4">Libraries & Frameworks</h3>
            <div className="space-y-6">
              {skills.frameworks.map((skill) => (
                <div key={skill.name} className="flex flex-col">
                  <div className="flex items-center mb-2">
                    <span className="mr-2">{skill.icon}</span>
                    <p className="font-medium text-start">{skill.name}</p>
                    <span className="ml-auto">{skill.percentage}%</span>
                  </div>
                  <div className="relative mb-4">
                    <div className="w-full h-2 bg-gray-300 rounded-full">
                      <div
                        className="h-2 rounded-full bg-blue-500"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
