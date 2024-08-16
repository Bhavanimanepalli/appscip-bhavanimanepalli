import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='foot' style={{display:'flex',justifyContent:'space-between',backgroundColor:'black',padding:'10px',lineHeight:'60px',overflowX: 'auto'}}>
        <div style={{flex:'1',marginRight:'20px',marginTop:'40px',marginLeft:'50px'}}>
            <h3 style={{color:'white'}}>BE THE FIRST TO KNOW</h3>
            <p style={{color:'white'}}>Sign up for updates from metta muse</p>
            <input type="text" placeholder='Enter your e-mail' style={{marginRight:'10px',color:'white',height:'40px',width:'450px'}}/>
            <input type="text" placeholder='SUBSCRIBE' style={{color:'white', backgroundColor: 'transparent',
    border: '1px solid white',
    padding: '10px',
    borderRadius: '4px',}}/>
        </div>
        <div style={{flex:'1',marginTop:'40px',marginLeft:"10px",marginBottom:'30px'}}>
            <h2 style={{color:'white'}}>CONTACT US</h2>
            <p  style={{color:'white'}}>+44 221 133 5360</p>
            <p  style={{color:'white'}}>customercare@mettamuse.com</p>
            <h2  style={{color:'white'}}>CURRENCY</h2>
            <p  style={{color:'white'}}>USD</p>
            <p  style={{color:'white'}}>Transactions will be completed in Euros and a currency reference is available on hover</p>
        </div>
      </div>
      <hr style={{backgroundColor:'black',margin:'0px',padding:'0px'}} />
      
    <div className='footer' style={{ display: 'flex', justifyContent: 'space-between',backgroundColor:'black',padding:'10px',lineHeight:'60px',overflowX: 'auto' }}>
      <div style={{ flex: '1', marginRight: '20px',marginLeft:'50px',fontSize:"18px",fontFamily:'Simplon Norm' }}>
        <h2  style={{color:'white'}}>metta muse</h2>
        <p  style={{color:'white'}}>About us</p>
        <p  style={{color:'white'}}>Stories</p>
        <p  style={{color:'white'}}>Artisans</p>
        <p  style={{color:'white'}}>Boutiques</p>
        <p  style={{color:'white'}}>Contact us</p>
        <p  style={{color:'white'}}>EU Compiances Docs</p>
      </div>
      <div style={{ flex: '1', marginRight: '20px',fontSize:"18px",fontFamily:'Simplon Norm' }}>
      <h2  style={{color:'white'}}>metta muse</h2>
        <p  style={{color:'white'}}>About us</p>
        <p  style={{color:'white'}}>Stories</p>
        <p  style={{color:'white'}}>Artisans</p>
        <p  style={{color:'white'}}>Boutiques</p>
        <p  style={{color:'white'}}>Contact us</p>
        <p  style={{color:'white'}}>EU Compiances Docs</p>
      </div>
      <div >
        <h2 style={{ color: 'white' }}>FOLLOW US</h2>
      <div style={{ marginTop: '20px' }}>
      <img src="/images/Frame 28.png" alt="icons" />
      </div>
      <div style={{display:'flex'}}>
  
  <div>
  <h2 style={{color:'white'}}>metta muse ACCEPTS</h2>
    <img src="/images/Frame 136278.png" alt="accepted payment methods"/>
  </div>
</div>
      </div>
     
   </div>
 
    </>
   

    

   
  )
}

export default Footer