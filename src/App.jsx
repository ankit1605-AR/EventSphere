import React, { useEffect } from 'react'
import Navbar from './components/common/Navbar'
import { Route, Routes, useLocation } from 'react-router'
import Footer from './components/common/Footer'
import NotFound from './pages/NotFound'
import HomePage from './pages/HomePage'
import EventDetailsPage from './pages/EventDetailsPage'
import { Toaster } from 'sonner'
import FavoritesPage from './pages/FavoritesPage'
import ExplorePage from './pages/ExplorePage'

function ScrollToTop() {
  const { pathName } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [{ pathName }]);
}


function App() {
  return (
    <div className="min-h-screen border-2 border-black flex flex-col bg-[#FAF9F5] text-stone-900 selection:bg-orange-200 selection:text-red-900">
      <ScrollToTop />
      <Navbar />
      <div className='flex-1'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/events/:slug' element={<EventDetailsPage />} />
          <Route path='/favorites' element={<FavoritesPage />} />
          <Route path='/explore' element={<ExplorePage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
      <Toaster
        richColors
        toastOptions={{
          style: {
            borderRadius: "1rem",
            border: "1px solid #EBE8DF",
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontSize: "13px",
          },
        }}
      />
    </div>
  )
}

export default App