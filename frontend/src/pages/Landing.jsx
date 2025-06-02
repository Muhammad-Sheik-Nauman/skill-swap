import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

const Landing = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col items-center justify-center px-6 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-700 mb-2 drop-shadow-lg">SkillSwap</h1>
        <p className="text-xl md:text-2xl text-blue-500 font-medium mb-2">Peer Learning Marketplace</p>
        <p className="text-md md:text-lg text-gray-500 mb-6">Unlock your potential by sharing and learning new skills with peers worldwide.</p>
        <Button className="bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-transform hover:scale-105 text-lg font-semibold"
        onClick={() => navigate("/auth")}
        >
          Get Started
        </Button>
      </div>

      {/* Features Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-700 mb-4">Our Features</h2>
        <p className="text-gray-500 max-w-xl mx-auto">Discover what makes SkillSwap unique and how it empowers you to grow and connect.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl w-full mb-12">
        <div className="bg-white rounded-xl h-44 shadow-md flex flex-col items-center justify-center text-blue-600 p-6 hover:shadow-xl transition">
          <svg className="w-12 h-12 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4"/></svg>
          <h3 className="font-bold text-lg mb-1">Skill Exchange</h3>
          <p className="text-gray-500 text-sm">Trade your skills with others and learn something new every day.</p>
        </div>
        <div className="bg-white rounded-xl h-44 shadow-md flex flex-col items-center justify-center text-blue-600 p-6 hover:shadow-xl transition">
          <svg className="w-12 h-12 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>
          <h3 className="font-bold text-lg mb-1">Verified Profiles</h3>
          <p className="text-gray-500 text-sm">Connect with trusted peers through verified user profiles and reviews.</p>
        </div>
        <div className="bg-white rounded-xl h-44 shadow-md flex flex-col items-center justify-center text-blue-600 p-6 hover:shadow-xl transition">
          <svg className="w-12 h-12 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-4V6a4 4 0 00-8 0v4m12 0a4 4 0 01-8 0"/></svg>
          <h3 className="font-bold text-lg mb-1">Community Support</h3>
          <p className="text-gray-500 text-sm">Join a vibrant community and get help or feedback anytime.</p>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-blue-600 rounded-2xl shadow-lg px-8 py-8 text-center text-white max-w-2xl w-full animate-fade-in-up">
        <h3 className="text-2xl font-bold mb-2">Ready to start your learning journey?</h3>
        <p className="mb-4">Sign up now and connect with peers to exchange skills and knowledge!</p>
        <Button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-100 transition"
          onClick={() => navigate("/auth")}
        >
          Join SkillSwap
        </Button>
      </div>
    </div>
  )
}

export default Landing