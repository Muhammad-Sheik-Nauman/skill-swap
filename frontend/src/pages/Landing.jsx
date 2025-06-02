import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

const Landing = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12">
      
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-2">SkillSwap</h1>
        <p className="text-xl text-blue-500 font-medium mb-6">Peer Learning Marketplace</p>
        <Button className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition"
        onClick={() => navigate("/auth")}
        >
          Get Started
        </Button>
      </div>

      {/* Features Section */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4"> Our Features</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl w-full">
        <div className="bg-gray-100 rounded-xl h-40 shadow-sm flex items-center justify-center text-gray-500">
          Feature 1
        </div>
        <div className="bg-gray-100 rounded-xl h-40 shadow-sm flex items-center justify-center text-gray-500">
          Feature 2
        </div>
        <div className="bg-gray-100 rounded-xl h-40 shadow-sm flex items-center justify-center text-gray-500">
          Feature 3
        </div>
      </div>
    </div>
  )
}

export default Landing