import axios from 'axios';
import React ,{useEffect ,useState} from 'react';
import Items from '../items_react/Items'
import { useNavigate } from 'react-router';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import './Deals.css';




const Deals = () => {

    const [deals, setDeals] = useState();
    const [err,setErr] =useState();
    const navigate = useNavigate();
    const [loading ,setLoading] = useState(true);

    const getDeals =async()=>{
        
            try{
            const token =localStorage.getItem('accessToken')

            let res =await  axios.get('http://localhost:3031/deals',{ headers: {"Authorization" : `Bearer ${token}`} })
            
            setDeals(res.data.deals);
            setLoading(false);
            }
            catch(err){
                if(err?.response?.status ===401){
                   refresh();
                   
                }
            }

    }
    const refresh = async()=>{
         const refreshToken = localStorage.getItem('refreshToken')
         try{
            let res = await axios.post('http://localhost:3030/refresh',{
                refreshToken: refreshToken
              })
            
              localStorage.setItem('accessToken', res.data.accessToken);
             navigate('/deals');
              
         }
         catch(err){
             
            if(err?.response?.status ===401 || err?.response?.status ===500 ||  err?.response?.status ===403 ){
                localStorage.removeItem('accessToken')
               navigate('/login');
            }

         }
   
        
    }
    useEffect(() => {
        
        getDeals();

       
    },[])
    return (
        <div  className=" deals">
            {loading? <div className="load"><Loader type="ThreeDots" color="grey" height={50} width={50}/></div>:<div> </div>}
            <Items products ={deals}/> 
            
        </div>
    )
}

export default Deals
