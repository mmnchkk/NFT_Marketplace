import React from 'react'
import "./Button.css"
import Mail from './button-img.svg'

const Button = () => {
  return (
    <div>
      <div className='subscribe'>
        <input type="email" placeholder='Enter your email here' required />
        <button><img src={Mail} alt="" />Subscribe</button>
      </div>
    </div>
  )
}

export default Button