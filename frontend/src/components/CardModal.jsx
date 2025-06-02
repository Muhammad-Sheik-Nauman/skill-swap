import React from 'react'

const CardModal = ({ onClose, skill }) => {

return (
    <div>
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                <h2 className="text-xl font-semibold mb-4">Skill Details - {skill?.title}</h2>
                <p className="text-gray-700 mb-4">{skill?.desc}</p>
                <div className='flex items-center justify-between mt-6'>
                    <button
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                    onClick={onClose}
                >
                    Close
                </button>
                <button className="bg-black text-white py-2 px-4 rounded hover:bg-slate-700 transition">
                    <span className="ml-2">Book Now</span>
                </button>
                </div>
                
            </div>
        </div>
    </div>
)
}

export default CardModal