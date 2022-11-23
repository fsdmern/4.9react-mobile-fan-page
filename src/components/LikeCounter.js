import React from 'react'
import { useState } from 'react';
import '../style.css'

function LikeCounter(props) {
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);
  return (
    <div className="mobile-card-items">
      <h2 className='model'>{props.model}</h2>
      <h4 className='brand'>By {props.brand}</h4>
      <button onClick={() => setLike(like + 1)}>👍 {like}</button>
      <button onClick={() => setDislike(dislike + 1)}>👎 {dislike}</button>
    </div>
  );
}

export default LikeCounter