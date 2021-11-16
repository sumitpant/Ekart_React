
export const initialState ={
    login: {
        flag: false,
        username :"User"
    },
    cart:[],

    open :false
}

export const reducer =(state =initialState , action)=>{
 
    switch(action.type){
        case "LOGIN":{
            return {
                ...initialState,
                login:{flag :action.login,
                       username :action.username
                }
            }
        }
        case "ADDTOCART":{
            
            return{
                ...initialState,
                cart:action.product
                
            }
        }
        case "CART_ITEM":{
            return {
                ...initialState
            }
        }
        case 'REMOVE_ITEM':{
            return {
                ...initialState,
                msg :action.msg
                
            }
        }



        default: return state;
    }

}


