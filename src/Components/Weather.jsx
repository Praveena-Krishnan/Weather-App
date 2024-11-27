import React from 'react'
import './Weather.css'
import search_icon from '../assets/search.png';

const Weather = () => {
  return (
    <div className='weather'>
        <div className='search-bar'>
            <input type='text' placeholder='Search'></input>
            <img src={search_icon} alt=""></img>
        </div>
        <h1>Weather</h1>
    </div>
  )
}

export default Weather