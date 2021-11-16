import React,{useState} from 'react'
import './ItemDetail.css'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Navbar from '../navbar-react/Navbar'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/action';
import Snackbar from '@mui/material/Snackbar';

const ItemDetail = () => {
    const [open, setOpen] = useState(false);
   let param = useParams();
   const dispatch = useDispatch();
  let res =[]
    const {loading , products, error} = useSelector(state => state.asyncreducer);
    (function () {
      
       res= products.filter((data)=>data.id.toString() === param.item)
      
      
    })()
    const toCart = (e) => {
        e.preventDefault();
       setOpen(true);
     let id =res[0].id;
      let title =res[0].title;
     let price= res[0].price;
    let rating= res[0].rating;
    let image = res[0].image;
       dispatch(addToCart({ id, title, price, rating, image }));


    }
    const handleClose = () => {

        setOpen(false);
    }

    return (
        <>
            <Navbar/>
            <div className="detail">
            <div className="detail_img">
                <img src ={res[0].image} className="img_det"/>
              
            </div>
            <div className="details">
                <div className="titles">
               <h1> {res[0].title}</h1>
                </div>
                <div className="price">
                   <h3> &#x20b9; {res[0].price} </h3>
                </div>
                <div className="description">
                   <p> {res[0].description}</p>

                    
                      
                </div>
                <div className="det_options">
                <button>Buy</button>
                    <button onClick={(e) => toCart(e)}>Cart</button>
                    </div>

            </div>
            
        </div>
        <Snackbar
                open={open}
                autoHideDuration={1000}
                onClose={handleClose}
                message={` added to cart`}
            />
        </>
    )
}

export default ItemDetail
