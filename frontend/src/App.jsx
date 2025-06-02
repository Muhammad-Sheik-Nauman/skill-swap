import './App.css'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Auth from './pages/auth'
import UserDashboard from './pages/skillDashboard'
import ErrorPage from './pages/ErrorPage'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/skill" element={<UserDashboard />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
