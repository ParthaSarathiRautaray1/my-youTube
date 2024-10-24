import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const isMenuOpne = useSelector((store) => store.app.isMenuOpen)

  if(!isMenuOpne) return null;

  return (
    <div className='p-5 shadow-lg w-48'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li>Shorts</li>
        <li>Download</li>
        <li>Liked</li>
        <li>WatchLater</li>
      </ul>

      <h1 className='font-bold pt-5'>Subcriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Technology</li>
        <li>Business</li>
      </ul>

      <h1 className='font-bold pt-5'>WatchLater</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Technology</li>
        <li>Business</li>
      </ul>
    </div>
  )
}

export default Sidebar
