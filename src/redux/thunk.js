import axios from 'axios';
import { fetchProduct ,fetchSuccess ,fetchFailed, fetchAddress ,cartItems,addToCart, removeItem ,success} from './action';

let token = localStorage.getItem('accessToken');

export const fetchProducts =()=>{
    return function(dispatch){
        dispatch(fetchProduct())
        axios.get('http://localhost:3031/get-all').then(response=>{
            dispatch(fetchSuccess(response.data));
            
        
        }).catch(error=>{
          
              dispatch(fetchFailed(error.message));
        })
    }
}

export const fetchAddresses =()=>{
    return function(dispatch){
        dispatch(fetchProduct())
        axios.get('http://localhost:3032/getaddress',{ headers: {"Authorization" : `Bearer ${token}`} })
        .then(response=>{

            dispatch(fetchAddress(response.data.address))
        }).catch(error=>{
            dispatch(fetchFailed(error.message));
        })
    }
}

export const sendToDb = (product)=>{

    return function(dispatch){
        axios.post('http://localhost:3031/add-cart',{
           product:product
        },{ headers: {"Authorization" : `Bearer ${token}`} }
        
        ).then(response=>{
            dispatch(cartItems())
        }).catch(error=>{
            dispatch(fetchFailed(error.message));
        })
    }
}

export const getCartItems =()=>{
    
    return function (dispatch) {
        dispatch(fetchProduct())
        
        axios.get('http://localhost:3031/cart-item',
        { headers: {"Authorization" : `Bearer ${token}`} }
        ).then(response=>{
            dispatch(addToCart(response.data.cart));
            
        
        }).catch(error=>{
          
              dispatch(fetchFailed(error.message));
        })

    }

}
export const removeCartItem =(id)=>{
    return function(dispatch){
        dispatch(fetchProduct())
        
        axios.post('http://localhost:3031/delete-cart',{
            id: id
        },{ headers: {"Authorization" : `Bearer ${token}`} } 
        ).then(response=>{
            dispatch(removeItem(response.data.msg));
        
        }
        ).catch(err=> dispatch(fetchFailed(err.message)));
    }

}

export const sendAddress =(contact)=>{
    return function(dispatch){
        axios.post('http://localhost:3032/add-address',{contact:contact},{headers: {"Authorization" : `Bearer ${token}`}}).then(response=>{
            dispatch(success(response.data.msg));
        }).catch(err=>{
            dispatch(fetchFailed(err.message))
        })
    }
}