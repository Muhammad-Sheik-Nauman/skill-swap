import React from 'react'

const CardModal = ({ onClose, skill }) => {
  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-gray-800 bg-opacity-90 rounded-lg shadow-lg p-6 w-96 text-gray-200">
          <h2 className="text-xl font-semibold mb-4">Skill Details - {skill?.title}</h2>
          <p className="mb-4">{skill?.desc}</p>
          <div className="flex items-center justify-between mt-6">
            <button
              className="bg-gray-600 hover:bg-gray-700 text-gray-200 py-2 px-4 rounded transition"
              onClick={onClose}
            >
              Close
            </button>
            <button className="bg-gray-900 hover:bg-gray-700 text-gray-200 py-2 px-4 rounded transition">
              <span className="ml-2">Book Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardModal
