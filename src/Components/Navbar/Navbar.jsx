import './navbar.css'
import { NavLink} from 'react-router-dom'
import poogle from '../../assets/Poogle.png'
import poogleDark from '../../assets/poogleDark.png'
import { useNavigate , useParams} from 'react-router-dom'

const Navbar = ({darkMode, setDarkMode, result}) => {

  const navigate = useNavigate()
  
  return (
    <>
      <div className="navbar-container">

        {/* <button className='back-btn' onClick={()=>navigate(-1)}>Go to Home</button> */}

      <div className="nav-box">
      <a onClick={()=>navigate(-1)} to={``}>Go Back 👈</a>

      </div>

      <div className="nav-box tilt-right">
      <NavLink to={``}>Search Results 🌏</NavLink>

      </div>

      <div className="nav-box tilt-left">
      <NavLink to={`images`}>Images ⛺</NavLink>

      </div>

      <div className="nav-box tilt-left">
        <NavLink to={`videos`}>Videos 📺</NavLink>
      </div>

      </div>
      
    </>
  )
}
export default Navbar