import React from 'react'
import Sidebar from '../components/Sidebar'
import { Search, Mail, BookOpen } from 'lucide-react'

const skills = [
  { title: 'React.js', desc: 'Build dynamic UIs with components' },
  { title: 'Node.js', desc: 'Backend with JavaScript runtime' },
  { title: 'Public Speaking', desc: 'Improve stage confidence' },
  { title: 'Graphic Design', desc: 'Design with Canva & Figma' },
  { title: 'Time Management', desc: 'Organize and optimize time' },
  { title: 'Python', desc: 'Versatile coding for all domains' },
  { title: 'UX Design', desc: 'Craft seamless user experiences' },
  { title: 'Data Analysis', desc: 'Make sense of complex data' }
]

const Dashboard = () => {
  return (
    <div className="min-h-screen flex bg-gray-50">

      {/* Sidebar */}
      <div className="h-screen bg-white shadow-md">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Navbar */}
        <div className="w-full bg-white shadow px-6 py-4 flex items-center justify-end">
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search skills..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
            </div>
            <button
              title="Requests / Messages"
              className="p-2 rounded-full hover:bg-gray-100 transition"
            >
              <Mail className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Skills Section */}
        <div className="flex-1 p-6 overflow-y-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            📚 Trending / Recommended Courses
          </h2>

          {/* Creative Skill Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[500px] overflow-y-auto pr-2">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-3">
                  <BookOpen className="text-indigo-500" />
                  <h3 className="text-lg font-semibold text-gray-800">
                    {skill.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-500 mb-4">
                  {skill.desc}
                </p>
                <span className="inline-block text-xs bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full">
                  Recommended
                </span>
              </div>
            ))}
          </div>

          {/* Details Section */}
          <div className="mt-8 p-6 bg-white rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-700">💡 Course Details</h3>
            <p className="text-sm text-gray-500 mt-2">
              Click on a course to view its syllabus, duration, and mentor details.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
