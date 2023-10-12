import { useState } from 'react'
import poogle from '../../assets/Poogle.png'
import poogleDark from '../../assets/poogleDark.png'
import Footer from '../Footer/Footer'
import './home.css'
// import {FaMagnifyingGlass} from 'react-icons/fa6'
import {PiAirplaneBold} from 'react-icons/pi'
import { Link, Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Home = ({darkMode, setDarkMode}) => {

  const [searchInput, setsearchInput] = useState('');
  const navigate = useNavigate()
  
  return (
      
      <div className="home-container">
        <div className="home-logo-contianer">
          {darkMode? <img src={poogleDark} alt="Home" className='poogle-logo'/>: <img src={poogle} alt="Home" className='poogle-logo'/>}
        </div>

        <form className='input-search-container' onSubmit={()=>navigate(`/search/`+searchInput)}>
          <input type="text" className={`input-search ${darkMode? 'dark': 'light'}`} placeholder='Search & stuff....' onChange={(e)=>setsearchInput(e.target.value)}/>
          <br />
          <div className='search-btns-container'>

            {/* This is solution for This */}
              <button className='search-btns-1' onClick={()=>navigate(`/search/`+searchInput)} > Search</button>
              <button className='search-btns-2' role='button'>I don't feel so good</button>
            
          </div>
        </form>

        <Footer/>
        
      </div>
  )
}
export default Home