import React,{useEffect} from 'react'
import { useSelector } from 'react-redux'
import Item from '../item-react/Item';
import Items from '../items_react/Items';
import Navbar from '../navbar-react/Navbar';
import {store} from '../../redux/store'
import { getCartItems } from '../../redux/thunk';
import './Cart.css'

const Cart = () => {
    const cart = useSelector(state => state.reducer.cart);
   

    useEffect(() => {
        store.dispatch(getCartItems())
    
    }, [])

    if(cart.length >0){
    return (
        
        <div>
            <div className="cart_nav">
            <Navbar/>
            </div>
          <div className="cart">
              {cart?.map(data => <Item  key ={data.id} id ={data.id} title ={data.title} price ={data.price} rating={data.rating} image={data.image}  flag ={false}/>)}
          </div>
        </div>
    )
    }
    else {
        return (
            <div >
                <Navbar/>
                <h1>Add Items to the cart</h1>
            </div>
        )
    }
}

export default Cart
