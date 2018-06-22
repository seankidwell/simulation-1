import React from 'react';

export default function Product(props) {
  return (
    <div>
      {props.name}
      {props.price}
      {props.img}
      <button onClick={props.removeProduct}>Delete</button>
    </div>
  )
}