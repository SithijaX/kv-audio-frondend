import { useState } from 'react'
import './App.css'
import AdminPage from './pages/admin/adminPage.jsx'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from './pages/home/homePage.jsx';
import Testing from './components/testing.jsx';
import LoginPage from './pages/login/loginPage.jsx';
import toast, { Toaster } from 'react-hot-toast';



function App() {

  return (
    <BrowserRouter>
    <Toaster />
      <Routes>
        
        <Route path='/test' element={<Testing />} />
        <Route path= '/admin/*' element={<AdminPage />} />
        <Route path= '/login' element={<LoginPage />} />
        <Route path='/home/*' element={<HomePage />} />
        <Route path='/*' element={<HomePage />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
