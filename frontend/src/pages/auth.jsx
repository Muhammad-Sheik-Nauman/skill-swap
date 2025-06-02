import { useState, useRef } from 'react'
import axios from 'axios'

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const handleLoginInfo = (e) => {
    e.preventDefault()
    const email = emailRef.current.value
    const password = passwordRef.current.value
    axios
      .post(
        isLogin
          ? 'http://localhost:3000/api/v1/login'
          : 'http://localhost:3000/api/v1/register',
        { email, password }
      )
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          console.error('Error:', error.response.data)
        } else {
          console.error('Error:', error.message)
        }
      })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          {isLogin ? 'Login to SkillSwap' : 'Create an Account'}
        </h2>
        <form className="space-y-4" onSubmit={handleLoginInfo}>
          <div>
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              name="email"
              ref={emailRef}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              name="password"
              ref={passwordRef}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
          >
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-6">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 hover:underline cursor-pointer"
          >
            {isLogin ? 'Register' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  )
}

export default Auth
