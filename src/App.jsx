import { useState } from 'react'
import Header from './components/Header'
import Login from './pages/Login';
import Principal from './pages/Principal';
import Twofa from './pages/Twofa'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-200 min-h-screen">
      <Header/>

      <section className="w-5/6 mx-auto px-8 pt-10">
        <Router>
          <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/Principal" element={<Principal/>}></Route>
            <Route path="/Twofa" element={<Twofa/>}></Route>
          </Routes>
        </Router>

      </section>

    </div>
  )
}

export default App
