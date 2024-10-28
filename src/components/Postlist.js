import React from 'react'
import Postitem from './Postitem'

export default function Postlist(props) {
    if(props.items.length === 0){
        <p>No Post Found</p>
    }
  
    return (
    <div>
      {props.items.map(item => (
        <Postitem 
            key={item.id} 
            id={item.id} 
            creator={item.creator.name} 
            image={item.image} 
            description={item.description} 
            tags={item.tags}
            location={item.location}
            categories={item.categories}
        />
      ))}
    </div>
  )
}
