import React,{useState, useEffect} from 'react'
import SearchFilter from './Search_filter'
import Search from './search';
// import Preloader from './components/pre';
import './style.css';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import Preloader from './components/pre';
//Splash cursor
import SplashCursor from './components/SplashCursor.jsx';
import NavBar from './components/navbar';
import ScrollToTop from './components/scrollToTop';
import Home from './components/Home/home.jsx';
import BookASite from './SIDEBAR.jsx';
import SpotsFilter from './sideFilter.jsx';
import Footer from './components/footer.jsx';


function App() {

  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  const otp = Math.floor(Math.random() * 900000) + 100000;
  console.log(otp);
  const otp1 = Math.random().toString().slice(2, 8);
  console.log(otp1); // Always 6 digits

  return (
      <Router>
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>

          {/* <SplashCursor /> */}
          <NavBar />
          <ScrollToTop />
          {/* <Home/> */}
          <Routes>
            <Route path="/" element={<Home />} />
          
          </Routes>
          <Footer/>
        </div>
      </Router>

  )
}
export default App;