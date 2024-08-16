import React, { useState } from 'react';

const Hidefilters = () => {
  const [showFilters, setShowFilters] = useState(true);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="hide-filters-container"   style={{ marginTop: '10px' }}> 
          <p style={{ fontSize: '28px', marginBottom: '40px',marginLeft:'10px', fontWeight:'700'}}>3425 items</p>
       
      <button style={{width:'150px',height:'50px',marginBottom:'40px',borderRadius:'10px'}} onClick={toggleFilters} className="toggle-button">
        {showFilters ? 'Hide Filters' : 'Show Filters'} 
      </button>
      
      {showFilters && (
        <div className="filters-section">
        
          <div className='filter-item' style={{lineHeight:'40px'}}>
            <label style={{marginRight:'40px'}}>IDEAL FOR</label>
            <select id="options"/>
            <p>All</p><hr></hr>
          </div>
          <hr />
          <div className='filter-item' style={{lineHeight:'40px'}}>
            <label style={{marginRight:'40px'}}>OCCASION</label>
            <select id="options"/>
            <p>All</p><hr></hr>
          </div>
          <hr />
          <div className='filter-item' style={{lineHeight:'40px'}}>
            <label style={{marginRight:'70px'}}>WORK</label>
            <select id="options"/>
            <p>All</p><hr></hr>
          </div>
          <hr />
          <div className='filter-item' style={{lineHeight:'40px'}}>
            <label style={{marginRight:'40px'}}>SEGMENT</label>
            <select id="options" />
            <p>All</p><hr></hr>
          </div>
          <div className='filter-item' style={{lineHeight:'40px'}}>
            <label style={{marginRight:'90px'}}>SUITAABLE FOR</label>
            <select id="options"/>
            <p>All</p><hr></hr>
          </div>
          <div className='filter-item' style={{lineHeight:'40px'}}>
            <label style={{marginRight:'50px'}}>RAW MATERIALS</label>
            <select id="options"/>
            <p>All</p><hr></hr>
          </div>
          <div className='filter-item' style={{lineHeight:'40px'}}>
            <label style={{marginRight:'50px'}}>PATTERN</label>
            <select id="options"/>
            <p>All</p><hr></hr>
          </div>
        </div>
        
      )}
    </div>
  );
};

export default Hidefilters;




