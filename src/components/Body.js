import React ,{useState, useEffect} from 'react'
import VideoContainer from './VideoContainer'
import { youtube_api } from '../utils/constants';
import formatNumber from '../utils/viewsKMB';
import youtubeDurationToUseful from '../utils/ytb_duration';

const Body = () => {

  const [videoContent,setVideoContent] = useState([]);

  //[0].snippet.description

  useEffect(()=>{
    fetchData();
  }, [])
  
  const fetchData = async () => {
    const youtube_data = await fetch(youtube_api);
    const json = await youtube_data.json();
    setVideoContent(json?.items);
    console.log(json?.items);
  }


  

  if(videoContent.length === 0)
   return;
  else
  {
    return (
      <div className='  flex flex-wrap' >
          {
            videoContent.map((videoDetail) => (
              <VideoContainer 
              videoThumnail = {videoDetail.snippet.thumbnails.standard.url}
              videoDesc = {videoDetail.snippet.description}
              channel = {videoDetail.snippet.channelTitle}
              durationinSec = {youtubeDurationToUseful(videoDetail.contentDetails.duration)} 
              views = {formatNumber(videoDetail.statistics.viewCount)}/>
            ))
          }
          
      </div>
    )
  }
  
  
}

export default Body