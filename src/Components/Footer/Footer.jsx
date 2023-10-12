import {BiCopyright} from 'react-icons/bi'
import './footer.css'

const Footer = () => {

  const newdate = new Date()
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  };
  const formattedDate = newdate.toLocaleDateString('en-US', options);
  
  return (
    <>
      <div className="footer-container">
        <div className="footer-location-container">
          <span className='footer-links'>Location : India</span>
          <span className='footer-links'>{formattedDate}</span>
        </div>

        <div className="footer-links-container">
          <a href='/' className='footer-links'>About</a>
          <a href='/' className='footer-links'>Advertising</a>
          <a href='/' className='footer-links'>Business</a>
          <a href='/' className='footer-links'>Privacy</a>
          <a href='/' className='footer-links'>Terms</a>
          <span className='footer-links'><BiCopyright/> All Right Reserved Poogle </span>
        </div>

      </div>
    </>
  )
}
export default Footer