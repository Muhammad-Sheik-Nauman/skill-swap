import './App.css'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthPage from './pages/auth'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
