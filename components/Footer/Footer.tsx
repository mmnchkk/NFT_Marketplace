import React from 'react'
import "./Footer.css"
import { Button } from '../index'

const Footer = () => {
  return (
    <div>
      <footer className='footer'>
        <div className='footer-wrap'>
          <div className='footer-explore'>
            <p><span className='space-mono'>Explore</span></p>
            <div className='footer-items'>
              <p className='footer-item'>Marketplace</p>
              <p className='footer-item'>Rankings</p>
              <p className='footer-item'>Connect a wallet</p>
            </div>
          </div>
          <div className='footer-join'>
            <p><span className='space-mono'>Join Our Weekly Digest</span></p>
            <p className='footer-desc'>Get exclusive promotions &amp; updates<br/>straight to your inbox.</p>
            <Button/>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer