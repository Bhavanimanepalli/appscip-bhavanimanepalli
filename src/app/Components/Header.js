import React from 'react'

import "./Headermodule.css"

const Header = () => {
  return (
<>

  <div className="container">
  <div className="item">
    <img src="/images/Logo.png" alt="Logo"/>
  </div>
  <div className="items">
    LOGO
  </div>
  <div className="itemss">
    <img src="/images/Icons.png" alt="Icons"/>
  </div>
</div>
<div >
<ul className='list'>
  <li>SHOP</li>
  <li>SKILLS</li>
  <li>STORIES</li>
  <li>ABOUT</li>
  <li>CONTACT US</li>
</ul>
<hr></hr>
</div >
<h1 className='head'>
  DISCOVER OUR PRODUCTS
</h1>

<span className='span-left-margin'> Lorem ipsum dolor sit amet consecutetur.Amet est posuere rhoncus </span><br></br>
<span className='span-right-margin'>  scelerisque.Dolor integer scelerisque nibh amet mi ut elementum dolor.</span>
<hr></hr>

</>
  )
}

export default Header