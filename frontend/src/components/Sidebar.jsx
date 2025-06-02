import { useNavigate } from "react-router-dom";


const Sidebar = () => {
  const Navigate = useNavigate();
  return (
    <div className="w-64 min-h-full bg-blue-100 p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold text-blue-800 mb-8">SkillSwap</h2>
        <ul className="space-y-4 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer" onClick={() => Navigate("/skill")}>Add Skills</li>
          <li className="hover:text-blue-600 cursor-pointer" onClick={() => Navigate("/profile")}>User Profile</li>
        </ul>
      </div>
      <button className="mt-8 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600">
        Logout
      </button>
    </div>
  )
}

export default Sidebar
