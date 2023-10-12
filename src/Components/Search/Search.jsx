import { useEffect, useState } from "react"
import Navbar from "../Navbar/Navbar"
import { Route, Routes, Link, Outlet } from "react-router-dom"
import {useParams} from 'react-router-dom'

const Search = ({darkMode, setDarkMode}) => {
  
  const {result} = useParams()
  
  return (
    <div className={darkMode? 'dark' : 'light'}>
      <div className="search-container">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} result={result}/>
        <br />
        <Outlet context={[result]}/>
        
    </div>
    </div>
  )
}
export default Search
