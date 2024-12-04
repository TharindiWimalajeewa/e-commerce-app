import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Content/ShopContent'
import dropdown_icon from'../Components/Assets/dropdown_icon.png'
import { Item } from '../Components/Items/Item'

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <div className="banner-image">
      <img src={props.banner}></img>
      </div>
      
      <div className="shopcategory-indexSort">
        <p>
          <b>Showing 1-12</b> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon}/>
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,i)=>{
          if (props.category===item.category){
            return <Item key={i} 
            id = {item.id} 
            image={item.image} 
            name={item.name} 
            new_price={item.new_price} 
            old_price={item.old_price}/>
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
