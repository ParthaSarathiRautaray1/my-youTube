import React from 'react'

const VideoCard = ({info}) => {
    //console.log(info); // == items or real data

    const {snippet , statistics } = info;

    const {channelTitle , title , thumbnails} = snippet
  return (
    <div className='p-2 m-2 w-72 shadow-lg'>
        <img className='rounded-lg '
         alt='thumbnail'
         src={thumbnails.medium.url}
        />

        <ul>
            <li className='font-semibold font-[Roboto] py-2'>{title}</li>
            <li className='font-medium font-[Roboto] text-[#AAAAAA]'>{channelTitle}</li>
            <li className='font-medium font-[Roboto] text-[#AAAAAA]'>{statistics.viewCount} views</li>
        </ul>
      
    </div>
  )
}

export default VideoCard
