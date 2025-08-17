import { useState } from 'react'
import './App.css'
import AdminPage from './pages/admin/adminPage.jsx'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from './pages/home/homePage.jsx';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path= '/admin/*' element={<AdminPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/*' element={<HomePage />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
