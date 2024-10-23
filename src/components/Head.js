import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'


const Head = () => {
     

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

            <img className='h-10 mx-2'
                 alt="youtubeLogo"
                src="https://tse1.mm.bing.net/th?id=OIP.0_aOiO4Dndju46KWX82BJgHaFX&pid=Api&P=0&h=180"
            />
           
        </div>

        {/* Search bar middle part */}

        <div className='col-span-10 px-96'>
            <input className='w-1/2 border border-gray-500 p-2 rounded-l-full' 
                type="text"
                placeholder="Search" />
            <button className='border border-gray-500 p-2 font-bold rounded-r-full
            '>Search</button>
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
