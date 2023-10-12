// import {process} from 'dotenv'
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom"
import { useState } from "react";
import { Link } from "react-router-dom";
import Loading from '../Loading'

const Images = () => {

  const outletContext = useOutletContext()
  const searchImages = outletContext[0]
  const [images, setimages] = useState(undefined);

  useEffect(()=>{
    const url = `https://bing-image-search1.p.rapidapi.com/images/search?q=${searchImages}&count=100`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_MY_API_KEY,
        'X-RapidAPI-Host': import.meta.env.VITE_IMAGE_ENDPOINT,
      }
    };

    fetch(url, options).then(response=> response.json()).then(result=> setimages(result?.value))
  },[])


  
  return (
    <>
    <div style={{display: 'grid', gridTemplateColumns : 'repeat(5, 1fr)', gridAutoFlow: 'row', gap: '10px', padding: '10px'}}>
      {images?.map((item, index)=>{
        return <SingleThumbail contentUrl={item?.contentUrl} thumbnailUrl={item?.thumbnailUrl} name={item?.name} key={index} hostPageUrl={item?.hostPageUrl}/>
      })}
    </div>
    </>
  )
}
export default Images

const SingleThumbail = ({contentUrl, thumbnailUrl, name, hostPageUrl}) => {
  return <div className="image-container" style={{border: '5px solid var(--clr-grey)', borderRadius:'5px', width: '450px', height: '500px'}}>
      <Link to={contentUrl} style={{display: 'flex', flexDirection: 'column', padding: 5}}>
        <img src={thumbnailUrl} alt={thumbnailUrl} width={'100%'} height={'350'} style={{border: '4px double var(--clr-dim-white)'}}/>
        <h4>{hostPageUrl}</h4>
        <h3 style={{width: '100%', fontFamily: 'var(--font-fair)'}}>{name}</h3>

      </Link>
  </div>
}