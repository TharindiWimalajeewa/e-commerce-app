import React from 'react'
import './NewsLetter.css'

export default function NewsLetter() {
  return (
    <div className='newsLetter'>
        <h1>Get exclusive offers as our loyal customers</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input type='email' placeholder='Your Email Adderess'></input>
            <button>Subscribe</button>
        </div>
    </div>
  )
}
