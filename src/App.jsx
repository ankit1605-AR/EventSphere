import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'
import HomePage from './pages/HomePage'

function App() {
  return (
    <div className="min-h-screen border-2 border-black flex flex-col bg-[#FAF9F5] text-stone-900 selection:bg-orange-200 selection:text-red-900">
      <Navbar />
      <div className='flex-1'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App