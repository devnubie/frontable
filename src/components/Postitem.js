import React from 'react';
import { Link } from 'react-router-dom';

export default function Postitem(props) {
  return (
    <Link to={`/assets/${props.id}`}>
        <div className='postitem'>
            <img src={props.image} alt={props.title}/>
            <div className='postitem-info'>
                <h1>{props.creator}</h1>
            </div>
        </div>
    </Link>
  )
}
