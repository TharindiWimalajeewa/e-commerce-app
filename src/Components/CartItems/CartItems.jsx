import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Content/ShopContent.jsx'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const {getTotalCartAmount, all_product,cartItems,removeFromCart} = useContext(ShopContext);

    console.log('cartItems:', cartItems);
    console.log('all_product:', all_product);

    return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
        
        {all_product.map((e)=>{
            if(cartItems[e.id]>0)
            {
                return (<div>
                    <div className="cartitems-format cartitems-format-main">
                    <img src={e.image} className='carticon-product-icon'/>  
                    <p>{e.name}</p>  
                    <p>${e.new_price}</p>
                    <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                    <p>${e.new_price*cartItems[e.id]}</p>  
                    <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}}/>
                    </div>
                    <hr/>
                </div>
                );
            }
            return null;
        })}

        <div className="cartitems-down">
            <div className="cartitems-total">
                <h2>Cart Total</h2>
                <div>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr/>
                    <div className="cartitems-total-item">
                        <p>Shipping fee</p>
                        <p>Free</p>
                    </div>
                    <hr/>
                    <div className="cartitems-total-item">
                        <h4>Total</h4>
                        <h4>${getTotalCartAmount()}</h4>
                    </div>
                </div>
                <button>Proceed to Checkout</button>
            </div>

        </div>

    </div>
)
}

export default CartItems

// import React, { useContext } from 'react';
// import './CartItems.css';
// import { ShopContext } from '../../Content/ShopContent';
// import remove_icon from '../Assets/cart_cross_icon.png';

// const CartItems = () => {
//     const { all_product, cartItems, removeFromCart } = useContext(ShopContext);

//     // Debugging logs
//     console.log('CartItems:', cartItems);
//     console.log('all_product:', all_product);

//     return (
//         <div className="cartitems">
//             <div className="cartitems-format-main">
//                 <p>Products</p>
//                 <p>Title</p>
//                 <p>Price</p>
//                 <p>Quantity</p>
//                 <p>Total</p>
//                 <p>Remove</p>
//             </div>
//             <hr />

//             {all_product.map((e) => {
//                 // Defensive check
//                 if (cartItems && cartItems[e.id] > 0) {
//                     return (
//                         <div key={e.id}>
//                             <div className="cartitems-format">
//                                 <img src={e.image} className="carticon-product-icon" alt={e.name} />
//                                 <p>{e.name}</p>
//                                 <p>${e.new_price}</p>
//                                 <button className="cartitems-quantity">{cartItems[e.id]}</button>
//                                 <p>${e.new_price * cartItems[e.id]}</p>
//                                 <img src={remove_icon} onClick={() => removeFromCart(e.id)} alt="Remove" />
//                             </div>
//                             <hr />
//                         </div>
//                     );
//                 }
//                 return null; // Return null if condition is not met
//             })}
//         </div>
//     );
// };

// export default CartItems;

