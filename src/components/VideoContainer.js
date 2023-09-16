import React from 'react'

const VideoContainer = (props) => {

  const videoThumbnail = props.videoThumnail;
  const videoDesc = props.videoDesc;
  const channel = props.channel;
  const videoDurationSec = props.durationinSec;
  const views = props.views;


  return (
    <div className='w-[380px] h-[348px] m-1 shadow-md hover:bg-slate-300'>
      <div className='relative'> 
        <img className = 'w-[370px] h-[208px] rounded-lg' src={videoThumbnail} alt="img vdo" />
        <div className = 'text-bold absolute bottom-1 right-3 w-10 h-5 bg-black text-white'>
        {videoDurationSec} 
        </div>
      </div>
      
      <div className = ' font-bold'> {videoDesc.substring(0, 60)} ... </div>
      <h2 className = 'text-bold font-medium text-stone-400'> {channel} </h2>
      <h2 className = 'text-bold font-medium'> {views} views</h2>
    </div>
  )
}

export default VideoContainer;

