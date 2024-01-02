
/*
import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { YOUTUBE_SEARCH_API } from "./constants";

const Head=()=>{
    const[searchQuery,setSearchQuery]=useState("");
    
    
    // console.log(searchQuery)
    

    useEffect(()=>{
        //make an api call after every key press
        //but if thedifference between 2 api calls is <200ms
        //decline api call
        const timer=setTimeout(() =>getSearchSuggestion(), 200);

        return ()=>{
            clearTimeout(timer);
        };
    },[searchQuery])

    
     * 
     * key-i
     * -render the component
     * -useEffect ()
     * -start timer =>make an api call after 200 ms
     * 
     * key-ip
     * destroy the component(useEffect return method)
     * re-render the component
     * useEffect()
     * start timer=>make an api call after 200 ms
     * 
     * 
     * 
     * setTimeout(200)-decline
     

    const getSearchSuggestion=async()=>{
        console.log("API CALL-"+searchQuery);
        const data=await fetch(YOUTUBE_SEARCH_API+searchQuery);
        const json=await data.json();
        console.log(json);
        console.log(json[1]);
       
       


    };
    
 const dispatch=useDispatch();
    const toggleMenuHandler=()=>{
        dispatch(toggleMenu())
    }
    return(
       <div className="grid grid-flow-col p-5 m-2 shadow-lg">
        <div className="flex col-span-1">
            <img 
            onClick={()=>toggleMenuHandler()}
            className="h-8 cursor-pointer"
            alt="menu"
            src="https://tse2.mm.bing.net/th?id=OIP.8t6YKcKu6faLA6Kx2cbERAHaHa&pid=Api&P=0&h=180"/>
            <a href="/">
            <img 
            className="h-8 mx-2"
            alt="youtube-logo" 
            src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"/>
            </a>
        </div>

        <div className="col-span-10 px-10">
          
            <input
            
             className=" px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
              type="text"
              value={searchQuery}
              onChange={(e)=>setSearchQuery(e.target.value)}
              
            
              />
               //blur means focus out
            <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">🔍</button>
       
        
        </div>

        <div className="col-span-1">
            <img 
            className="h-8"
            alt="user"
            src="https://www.nicepng.com/png/full/128-1280406_user-icon-png.png"/>

        </div>
       </div>
    )
};

export default Head;

*/


/*
// implement suggestion div
import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { YOUTUBE_SEARCH_API } from "./constants";

const Head=()=>{
    const[searchQuery,setSearchQuery]=useState("");
    const[suggetsions,setSuggestions]=useState([]);
    const[showSuggestions,setShowSuggestions]=useState(false);
    
    // console.log(searchQuery)
    

    useEffect(()=>{
        
        const timer=setTimeout(() =>getSearchSuggestion(), 200);

        return ()=>{
            clearTimeout(timer);
        };
    },[searchQuery])

    
     
     

    const getSearchSuggestion=async()=>{
        console.log("API CALL-"+searchQuery);
        const data=await fetch(YOUTUBE_SEARCH_API+searchQuery);
        const json=await data.json();
        console.log(json);
        console.log(json[1]);
        setSuggestions(json[1]);
       


    };
    
 const dispatch=useDispatch();
    const toggleMenuHandler=()=>{
        dispatch(toggleMenu())
    }
    return(
       <div className="grid grid-flow-col p-5 m-2 shadow-lg">
        <div className="flex col-span-1">
            <img 
            onClick={()=>toggleMenuHandler()}
            className="h-8 cursor-pointer"
            alt="menu"
            src="https://tse2.mm.bing.net/th?id=OIP.8t6YKcKu6faLA6Kx2cbERAHaHa&pid=Api&P=0&h=180"/>
            <a href="/">
            <img 
            className="h-8 mx-2"
            alt="youtube-logo" 
            src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"/>
            </a>
        </div>

        <div className="col-span-10 px-10">
            <div>
            <input
            
             className=" px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
              type="text"
              value={searchQuery}
              onChange={(e)=>setSearchQuery(e.target.value)}
              onFocus={()=>setShowSuggestions(true)}
              onBlur={()=>setShowSuggestions(false)}
            
              />
            //    //blur means focus out 
            <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">🔍</button>
        </div>
        {showSuggestions &&

        <div className="fixed bg-white py-2 px-5 w-[34rem] rounded-lg border border-gray-100">
            <ul>
                {suggetsions.map((s)=>(
                <li key={s} className="py-2 shadow-sm hover:bg-gray-100">🔍 {s}</li>
                ))}
            </ul>
        </div>}
        </div>

        <div className="col-span-1">
            <img 
            className="h-8"
            alt="user"
            src="https://www.nicepng.com/png/full/128-1280406_user-icon-png.png"/>

        </div>
       </div>
    )
};

export default Head;

*/

import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "./constants";
import { cacheResults } from "../utils/searchSlice";

const Head=()=>{
    const[searchQuery,setSearchQuery]=useState("");
    const[suggetsions,setSuggestions]=useState([]);
    const[showSuggestions,setShowSuggestions]=useState(false);
    
    
    
  const searchCache=useSelector(store=>store.search);
    
  //searchCache={
    // "iphone":["iphobe 11","iphone 14"]
//   }
// searchQuery=iphone

    useEffect(()=>{
        const timer=setTimeout(() =>{
        if(searchCache[searchQuery]){
            setSuggestions(searchCache[searchQuery])
        }
        else{
            getSearchSuggestion()
        }
    }, 200);
        

        return ()=>{
            clearTimeout(timer);
        };
    },[searchQuery])

    

    const getSearchSuggestion=async()=>{
        console.log("API CALL-"+searchQuery);
        
        
        const data=await fetch(YOUTUBE_SEARCH_API+searchQuery);
        const json=await data.json();
        console.log(json);
        console.log(json[1]);
        setSuggestions(json[1]);


        dispatch(cacheResults({
            [searchQuery]:json[1],
        }))
       


    };


    
 const dispatch=useDispatch();
    const toggleMenuHandler=()=>{
        dispatch(toggleMenu())
    }
    return(
       <div className="grid grid-flow-col p-5 m-2 shadow-lg">
        <div className="flex col-span-1">
            <img 
            onClick={()=>toggleMenuHandler()}
            className="h-8 cursor-pointer"
            alt="menu"
            src="https://tse2.mm.bing.net/th?id=OIP.8t6YKcKu6faLA6Kx2cbERAHaHa&pid=Api&P=0&h=180"/>
            <a href="/">
            <img 
            className="h-8 mx-2"
            alt="youtube-logo" 
            src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"/>
            </a>
        </div>

        <div className="col-span-10 px-10">
            <div>
            <input
            
             className=" px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
              type="text"
              value={searchQuery}
              onChange={(e)=>setSearchQuery(e.target.value)}
              onFocus={()=>setShowSuggestions(true)}
              onBlur={()=>setShowSuggestions(false)}
              
              
            
              />
              {/* //blur means focus out */}
            <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">🔍</button>
        </div>
        {showSuggestions &&

        <div className="fixed bg-white py-2 px-5 w-[34rem] rounded-lg border border-gray-100">
            <ul>
                {suggetsions.map((s)=>(
                <li key={s} className="py-2 shadow-sm hover:bg-gray-100">🔍 {s}</li>
                ))}
            </ul>
        </div>}
        </div>

        <div className="col-span-1">
            <img 
            className="h-8"
            alt="user"
            src="https://www.nicepng.com/png/full/128-1280406_user-icon-png.png"/>

        </div>
       </div>
    )
};

export default Head;