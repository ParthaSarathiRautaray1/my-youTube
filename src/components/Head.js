import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { YOUTUBE_SEARCH_API } from '../utils/constant'
import { cacheResults } from '../utils/searchSlice'


const Head = () => {

    const [searchQuery , setSearchQuery] = useState("")

    const [suggestion , setSuggestion] = useState([])

    const [showSuggestion , setShowSuggestion] = useState(false)
    
    const searchCache = useSelector((store) => store.search)


    

    useEffect(()=>{

        const timer = setTimeout(() => {
            if(searchCache[searchQuery]){
                setSuggestion(searchCache[searchQuery]);
            } else{
                getSearchSuggestions()

            }
        }, 200 ) 

        return () =>{
            clearTimeout(timer)
        }

        

    },[searchQuery])



    const getSearchSuggestions = async () => {
        console.log("api call-" + searchQuery);
        
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
        const json = await data.json()
        setSuggestion(json[1])
        //console.log(json[1]); //contain suggestion in a format of array having 5 suggestion


        dispatch(
            cacheResults({
                [searchQuery]:json[1],
        }))
        
    }
    
     

    // toggleMenuHandler
    const dispatch = useDispatch()

    const toggleMenuHandler = () =>{
        dispatch(toggleMenu())
    }

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>

        {/* hamburger and youbuelogo left part */}
        <div  className='flex col-span-1'>
            <img onClick={() => toggleMenuHandler()}
            
                className='h-10 cursor-pointer'
                alt="menu"
                src='https://tse3.mm.bing.net/th?id=OIP.Au0_7mpqZMtQeoRL4iFkqAHaHa&pid=Api&P=0&h=180' 
            />

            <a href='/'>
            <img  
                className='h-10 mx-2'
                alt="youtubeLogo"
                src="https://tse1.mm.bing.net/th?id=OIP.0_aOiO4Dndju46KWX82BJgHaFX&pid=Api&P=0&h=180"
            />

            </a>
           
        </div>

        {/* Search bar middle part */}

        <div className='col-span-10 px-96'>
            <div>
                <input className=' px-5 w-1/2 border border-gray-500 p-2 rounded-l-full' 
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(event) => {
                        setSearchQuery(event.target.value)
                    }}
                    onFocus={() => setShowSuggestion(true)}
                    onBlur={() => setShowSuggestion(false)}
                    
                    />
                
                <button className='border border-gray-500 p-2 font-bold rounded-r-full
                '>Search</button>

            </div>
{/* showing suggestion */}


            {showSuggestion && (<div className='absolute  py-2 px-5 w-96 rounded-md bg-white border border-gray-400'>
                <ul>
                    {suggestion.map((s) => {
                        return <li key={s} 
                            className='py-3 px-2 shadow-sm hover:bg-gray-100 hover:rounded-md'>
                                {s}
                        </li>
                    })}
                    

                </ul>
            </div>
            )}
            
        </div>

        {/* userlogo right part */}
        <div className='col-span-1'>
            <img className='h-8' 
                
                alt='accountLogo'
                src='https://tse4.mm.bing.net/th?id=OIP.jixXH_Els1MXBRmKFdMQPAHaHa&pid=Api&P=0&h=180'
             />
        </div>
      
    </div>
  )
}

export default Head
