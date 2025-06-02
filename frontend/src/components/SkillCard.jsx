import React from 'react'

const SkillCard = ({ title }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md text-center hover:shadow-lg transition">
      <h3 className="text-md font-semibold text-gray-700">{title}</h3>
    </div>
  )
}

export default SkillCard
