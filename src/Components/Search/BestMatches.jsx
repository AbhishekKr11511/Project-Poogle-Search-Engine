// import {process} from 'dotenv'
import { useEffect, useState } from "react"
import { Route, Routes, Link, Outlet } from "react-router-dom"
import { useOutletContext } from "react-router-dom"

const BestMatches = () => {

    const outletContext = useOutletContext()
    const searchResults = outletContext[0]
    const [resultArray, setResultArray] = useState({})
  
    useEffect(()=>{
      const url = `https://google-web-search1.p.rapidapi.com/?query=${searchResults}&limit=20&related_keywords=true`;
      const options = {
        method: 'GET',
        headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_MY_API_KEY,
      'X-RapidAPI-Host': import.meta.env.VITE_SEARCH_ENDPOINT,
        }
      };
  
      fetch(url, options).then((response)=>response.json()).then((responseText)=> setResultArray(responseText))
      
    },[])

    const matches = resultArray?.results
    
  return (
    <>
    {matches?.map((item,index)=>{
          return <ResultEntry title={item?.title} url={item?.url} description={item?.description} key={index}/>
        })}
    </>
  )
}
export default BestMatches


const ResultEntry = ({title, url, description }) => {

    return (
      <div className="results-list-item" style={{ padding : '5px', border: '4px solid var(--clr-grey)', borderRadius: '10px', fontFamily: 'var(--font-fair)'}}>
          <Link to={url}>
            <h2>{title}</h2>
            <h3>{url}</h3>
          </Link>
            <h4>{description}</h4>
        </div>
    )
  }