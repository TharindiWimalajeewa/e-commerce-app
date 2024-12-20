import React from 'react'
import './NewCollections.css'
import new_collections from '../Assets/new_collections'
import {Item} from '../Items/Item';


export default function NewCollections() {
  return (
    <div className='new-collections'>
      <h1>New Collections</h1>
      <hr></hr>
      <div className="collections">
        {new_collections.map((item,i)=>{return (
        <Item 
        key={i} 
        id = {item.id} 
        image={item.image} 
        name={item.name} 
        new_price={item.new_price} 
        old_price={item.old_price}/>)
        })}
      </div>
    </div>
  )
}
