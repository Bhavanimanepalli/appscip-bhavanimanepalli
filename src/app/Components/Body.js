import React, { useEffect, useState } from 'react';
import "./Bodymodule.css"
function Body() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (data.length === 0) return <p>No data available.</p>;

  return (
    <div>

       <select id="options"  style={{marginLeft:"700px",marginTop:'30px',height:'30px',borderRadius:'20px',padding:'5px',fontSize:'15px',width:'160px'}} >
        <option value="NEWEST FIRST">RECOMMENDED</option>
        <option value="NEWEST FIRST">NEWEST FIRST</option>
        <option value="NEWEST FIRST">POPULAR</option>
        <option value="NEWEST FIRST">PRICE:HIGH TO LOW</option>
        <option value="NEWEST FIRST">PRICE:LOW TO HIGH</option>

      
       </select>
    
      <div className='parentDiv'>
        {data.map((value) => (
          <div key={value.id} className='card'>
            <div className='card-body'>
              <img src={value.image} alt="Product Image" height={"200px"} width={"200px"}  />
              <h3>{value.title}</h3>
              <p>Price: ${value.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Body;
