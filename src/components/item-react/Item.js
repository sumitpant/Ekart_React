import React, { useState, useEffect } from 'react'
import "./Item.css";
import Snackbar from '@mui/material/Snackbar';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/action';
import {store } from '../../redux/store'
import { sendToDb ,removeCartItem } from '../../redux/thunk';
import { useNavigate  } from 'react-router-dom'


const Item = ({ id, title, price, rating, image, flag ,description,category }) => {
    let token = localStorage.getItem('accessToken')
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const handleClose = () => {

        setOpen(false);
    }

    
     const stars = () => {
       return  Array(Math.round(rating)).fill().map((_,i)=>{
              return <span key ={i} style ={{color:' #FFB81C'}}> &#9734;</span>
         })
    

    }
    const toCart = (e) => {
        e.preventDefault();
        if(!token){
            navigate('/login');
        }
        else{

            setOpen(true);
          
            store.dispatch(sendToDb({id, title, price, rating, image,description,category}))
        }


    }
    const click = () => {

        navigate(`/detail/${id}`)

    }
    const remove =(e)=>{
        e.preventDefault();
        store.dispatch( removeCartItem (id))

    }



    return (
        <>
            <div className="item" >
                <div className="item__image" onClick={click}>
                    <img src={image} className="img" alt={title} />
                </div>
                <div className="item__details">
                    <h4 className="item__title">{title.substring(0, 15)}</h4>
                    <span>  &#x20b9;{price}</span>
                     <span>{stars()}  </span>
                    <div className="options">
                        {flag ?
                            <button onClick={(e) => toCart(e)}>Add to Cart</button>
                            : <button onClick={(e) => remove(e)}>Remove from Cart</button>}

                        <button > Buy</button>
                    </div>

                </div>


            </div>
            <Snackbar
                open={open}
                autoHideDuration={1000}
                onClose={handleClose}
                message={`${title} added to cart`}
            />
        </>
    )
}

export default Item
