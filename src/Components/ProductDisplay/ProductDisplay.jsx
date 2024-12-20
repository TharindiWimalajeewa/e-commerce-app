import React, { useContext } from 'react'
import './ProductDisplay.css'
import start_icon from '../Assets/star_icon.png'
import start_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Content/ShopContent'


const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} =useContext(ShopContext);

  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image}/>
                <img src={product.image}/>
                <img src={product.image}/>
                <img src={product.image}/>
            </div>

            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image}/>
            </div>
        </div>

        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
                <img src={start_icon} />
                <img src={start_icon} />
                <img src={start_icon} />
                <img src={start_icon} />
                <img src={start_dull_icon}/>
                <p>(122)</p>
            </div>

            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${product.old_price}</div>
                <div className="productdisplay-right-price-new">${product.new_price} </div>
            </div>
            <div className="productdisplay-right-description">
                Bla bla bla
            </div>

            <div className="productdisplay-right-size">
                <h4>Select size</h4>
                <div className="productdisplay-right-sizes">
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                    <div>8</div>
                    <div>9</div>
                    <div>10</div>
                </div>         
            </div>
        
        <button onClick={()=>{addToCart(product.id)}}>Add to cart</button>
        <p className='productdisplay-right-category'><span>Category :</span>Women , Heels</p>
        <p className='productdisplay-right-category'><span>Tags :</span>Modern , Latest</p>
    </div>
    </div>
  )
}

export default ProductDisplay
