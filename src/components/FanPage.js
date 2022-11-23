import React from 'react'
import { useState } from 'react'
import LikeCounter from './LikeCounter';
import '../style.css'

function FanPage() {
    const [brand, setBrand] = useState("")
    const [model, setModel] = useState('');
    const [brands, setBrands] = useState([
        {
            brand: "Apple",
            model: "iPhone 13"
        },{
            brand: "Samsung",
            model: "M30"
        },{
            brand: "Sony",
            model: "XY250"
        }
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setBrands([{brand: brand, model: model},...brands])
        setBrand("");
        setModel("");
    }
    
  return (
    <>
      <div className="cont-add-mobile">
        <input
          placeholder="Enter Mobile Brand"
          onChange={(e) => setBrand(e.target.value)}
        />
        <input
          placeholder="Enter Mobile Model"
          onChange={(e) => setModel(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Add Mobile
        </button>
      </div>
      <div className="mobile-card">
        {brands.map((data, index) => (
          <div key={index}>
            <LikeCounter key={index} brand={data.brand} model={data.model} />
          </div>
        ))}
      </div>
    </>
  );
}

export default FanPage