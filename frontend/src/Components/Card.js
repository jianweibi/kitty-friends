import React, { useState } from 'react';
import { SuitHeart, SuitHeartFill } from 'react-bootstrap-icons';

export default function Card(props) {
  const cat = props.cat;
  const [isSaved, setIsSaved] = useState(false);

  function handleHeartClick() {
    console.log('handleHeartClick');
    setIsSaved(!isSaved);
  }

  return (
    <div className="card border-light m-3">
      <img src={cat.photo} className="card-img-top cat-pic" alt="..." />
      <div className="card-body shadow">
        <div className="card-text">Age: {cat.age}</div>
        <div className="card-text">Gender: {cat.gender}</div>
        <div className="card-text">Size: {cat.size}</div>
        <div className="card-text">Breed: {cat.breed}</div>
        <div className="card-text">default@gmail.com</div>
        <div className="card-text">Phone: 666-777-8888</div>
        {isSaved ? (
          <SuitHeartFill
            className="m-2 float-end heart heart-fill"
            onClick={handleHeartClick}
          />
        ) : (
          <SuitHeart
            className="m-2 float-end heart"
            onClick={handleHeartClick}
          />
        )}
      </div>
    </div>
  );
}