import React, { useEffect ,useState ,useCallback } from 'react'
import Navbar from '../navbar-react/Navbar'
import Image from '../image-react/Image'
import { useSelector } from 'react-redux'
import { GETALL } from '../../networkCall';
import axios from 'axios';
import Items from '../items_react/Items';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { store } from '../../redux/store'; 
import { fetchProducts} from '../../redux/thunk'
import './Home.css';


const Home = () => {
   
    

     const {loading , products, error} = useSelector(state => state.asyncreducer)

    
    useEffect(() => {


     store.dispatch(fetchProducts())
 
    },[])
    return (
        <div className="home">
            <Navbar />
            <div className="div__image">
                <Image />
            </div>
            
           {loading? <div className="load"><Loader type="ThreeDots" color="grey" height={50} width={50}/></div>:<div>
            <div className="div__products_top">

                <Items products ={ products.slice(0,4)} />
                
            </div>
            <div className="div__products">
            <Items products ={ products?.slice(5,9)} />
            </div>
            <div className="div__products">

            <Items products ={ products?.slice(10,14)}/>
            </div>
            </div>
}
           
               
          

        </div>
    )
}

export default Home
