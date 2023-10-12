import ReactPlayer from "react-player"
// import {process} from 'dotenv'
import { useState, useEffect } from "react"
import { useOutletContext } from "react-router-dom"
import Loading from "../Loading"
import { Link } from "react-router-dom"
import millify from "millify"
import {BsPlayCircleFill} from 'react-icons/bs'


const Videos = () => {

  const outletContext = useOutletContext()
  const searchVideos = outletContext[0]
  const [videos, setvideos] = useState(undefined);
  
  useEffect(()=>{
    const url = `https://youtube-data8.p.rapidapi.com/search/?q=${searchVideos}&hl=en&gl=US`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_MY_API_KEY,
        'X-RapidAPI-Host': import.meta.env.VITE_VIDEO_ENDPOINT
      }
    };

    fetch(url, options).then(response=> response.json()).then(result=> setvideos(result?.contents))
  },[])

  console.log(videos)
  
  return (
    <>
        <div className="video-tabs-container" style={{display: 'flex', fontFamily: 'var(--font-fair)', flexDirection: 'column', }}>
          {videos?.map((item, index) => {
            if(item?.type==='video') {return (
              <SingleThumbnail key={index} thumbnail={item?.video?.thumbnails[1]?.url} title={item?.video?.title} description={item?.video?.descriptionSnippet} link={`https://www.youtube.com/watch?v=${item?.video?.videoId}`} views={millify(item?.video?.stats.views)} channel={item?.video?.author?.title}/>
            )}
          })}
        </div>
    </>
  )
}

const SingleThumbnail = (props) => {

  const {thumbnail, title, description, link, views, channel} = props
  
  return (
    <Link to={link}>
    <div className="single-thumbnail" style={{display : 'flex', padding: '1rem'}}>
      <div className="thumbnail-image" style={{position: 'relative'}}>
        <img src={thumbnail} alt='Video Thumnail' width='400px' />
        <BsPlayCircleFill style={{position: 'absolute', left: '44%', top: '38%', zIndex: '10', color: 'white', fontSize: '3rem'}}/>
      </div>
      <div className="video-info" style={{padding: '2rem'}}>
        <h3 style={{padding: '0.5rem', fontFamily: 'var(--font-nice)'}}>{views}</h3>
        <h2 >{title}</h2>
        <h3 style={{padding: '0.5rem', fontFamily: 'var(--font-nice)'}}>{channel}</h3>
        <p >{description}</p>
      </div>
    </div>
    <hr />
  </Link>
  )
}

export default Videos