import Footer from './components/Footer';
import Header from './components/Header'
import Login from './pages/Login'
import Principal from './pages/Principal'
import Twofa from './pages/Twofa'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (

    <Router>
        <Header />
          <Routes>
            <Route path="/" exact element={<Login />}></Route>
            <Route path="/Principal" element={<Principal />}></Route>
            <Route path="/Twofa" element={<Twofa />}></Route>
          </Routes>
        <Footer/>
    </Router>


  )
}

export default App
