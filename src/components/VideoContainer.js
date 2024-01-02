import React, { useState,useEffect } from "react";
import { YOUTUBE_VIDEOS_API } from "./constants";
import VideoCard,{AdVideoCard} from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer=()=>{
    const [videos,setVideos]=useState([]);


    const getVideos=async()=>{
        const data=await fetch(YOUTUBE_VIDEOS_API);
        const json=await data.json();
        console.log(json);
        console.log(json?.items)
        setVideos(json?.items)


    }

    useEffect(()=>{
        getVideos()
    },[])

    console.log(videos)
    return(
        <>
      
        
         <div className="flex flex-wrap">
            {videos[0]&&<AdVideoCard info={videos[0]}/>} 
            {videos.map((obj)=>(
              <Link to={"/watch?v="+obj.id} key={obj.id}> <VideoCard  info={obj}/></Link>
            ))}
          
            </div> 
        </> 
    )
};

export default VideoContainer;


