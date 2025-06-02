import React from 'react'
import Sidebar from '../components/Sidebar'
import SkillCard from '../components/Skillcard'
const skills = [
  'React.js', 'Node.js', 'Public Speaking',
  'Graphic Design', 'Time Management',
  'Python', 'UX Design', 'Data Analysis'
]

const Dashboard = () => {
  return (
    <div className="min-h-screen flex">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto bg-gray-50">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Skills to Learn – Trending / Recommended
        </h1>

        {/* Scrollable Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[500px] overflow-y-auto pr-2">
          {skills.map((skill, idx) => (
            <SkillCard key={idx} title={skill} />
          ))}
        </div>

        {/* Title Details Section */}
        <div className="mt-6 p-4 bg-white rounded-xl shadow-md">
          <h2 className="text-lg font-semibold text-gray-700">Title Details</h2>
          <p className="text-sm text-gray-500 mt-2">
            Click on a skill to view detailed information here.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
