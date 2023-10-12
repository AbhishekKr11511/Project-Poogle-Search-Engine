import { Route, Routes} from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Notfound from './Notfound'

import Home from './Components/Home/Home'
import Search from './Components/Search/Search'
import Images from './Components/Images/Images'
import Videos from './Components/Videos/Videos'
import BestMatches from './Components/Search/BestMatches'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <>
    
    <button className='glow-on-hover' onClick={()=>setDarkMode(!darkMode)}>{darkMode? '🌞' : '🌑'}</button>
    <div className={darkMode? 'dark' : 'light'}>
      <Routes>
          <Route path="/" element={<Home darkMode={darkMode} setDarkMode={setDarkMode}/>}/>

          <Route path="/search/:result" element={<Search darkMode={darkMode} setDarkMode={setDarkMode}/>}>
            <Route index element={<BestMatches/>}/>
            <Route path='images' element={<Images/>}/>
            <Route path='videos' element={<Videos/>}/>
          </Route>

          
          <Route path="*" element={<Notfound/>} />
      </Routes>
    </div>
    </>
    
  )
}

export default App
