export const login =( username)=>{
    return {
        type:'LOGIN',
        login:true,
        username: username,
        msg:''
    }
} 

export const addToCart =( product)=>{
    return {
        type:'ADDTOCART',
        product: product
    }

}

export const fetchProduct =()=>{
    return {
        type :'FETCH_PRODUCTS',
        loading:true,

    }
}

export const fetchSuccess =(products)=>{
    return {
        type :'FETCH_SUCCESS',
        payload: products

    }

}
export const fetchFailed =(error)=>{
    return {
        type :'FETCH_FAILED',
        payload: error

    }

}

export const fetchAddress =(address)=>{
    return {
        type: 'FETCH_ADDRESS',
        address: address
    }
}
export  const cartItems =()=>{
    return {
        type: 'CART_ITEM'
    }
}

export const removeItem =(msg)=>{
    return {
        type: 'REMOVE_ITEM',
        msg:msg
    }
}

export const success =(msg)=>{
    return {
        type: 'SUCCESS',
        msg:msg
    }
}