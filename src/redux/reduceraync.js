const initialState = {
        loading: false,
        products: [],
        error: '',
        address:[],
        success:''
    
}

export const asyncreducer = (state = initialState , action) => {
   
    switch (action.type) {

        case 'FETCH_PRODUCTS': {
            return {
                ...initialState,
                    ...state.product,
                    loading: true
                
            }

        }
        case 'FETCH_SUCCESS': {
            return {
                ...initialState,
                
                    products: action.payload,
                    loading: false,
                    error: ''
                
            }

        }
        case 'FETCH_FAILURE': {
            return {
                ...initialState,
            
                    products: [],
                    error: action.payload,
                    loading: false
                
            }

        }
        case 'FETCH_ADDRESS':{
            return{
                ...initialState,
                address:action.address

            }
        }
        case 'SUCCESS':{
            return {
                ...initialState,
                success: action.msg
            }
        } 
        
        default: return state;
    }
}