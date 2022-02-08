import React from 'react';
import './Footer.css'
import shapBg from '../../../assets/Home/shape-bg.png';
;

;

 const Footer = () => {
  return (
      <div className='footer-container'>
          <div className='footer-parent'>
              <img 
              src={shapBg}  
              alt='no internet connection ' />
          </div>
      </div>
  )
};
export default Footer;