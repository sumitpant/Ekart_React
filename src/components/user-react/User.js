import React ,{ useEffect ,useState } from 'react'
import Navbar from '../navbar-react/Navbar'
import './User.css'
import { fetchAddresses } from '../../redux/thunk';
import { store } from '../../redux/store'
import { useSelector } from 'react-redux';
import {sendAddress} from '../../redux/thunk'



const User = () => {
    const {address} = useSelector(state => state.asyncreducer);
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [pincode, setPin] = useState();
    const [phoneNumber, setPhone] = useState();
    const [addr, setAddress] = useState();

    

    useEffect(() => {

        store.dispatch(fetchAddresses());
       
 
    }, [])

    const add =(e)=>{ 
       const name= e.target.name;
       const value = e.target.value;
       if(name ==='city'){
           setCity(value);

       }
       else if(name ==='state'){
           setState(value);
       }
       else if(name ==='pincode'){
           setPin(value);
       }
       else if(name ==='phoneNumber'){
           setPhone(value);
          
       }
       else{
           setAddress(value);
       }
    }
    const toDb =()=>{
        

        if(city!==undefined && state!==undefined && pincode!==undefined && phoneNumber!==undefined && addr!==undefined){
           
            const contact ={city ,state ,pincode ,phoneNumber,address:addr};
            store.dispatch(sendAddress(contact));
            

        }
    
    }
    return (
        <div>
            <Navbar/>
            <div className="add">
               

           
            <div className="address">
            <h4> Add Address</h4>
            
            <input type="text" placeholder="city" className="input" name ="city" onChange={(e)=>add(e)}/>
            <input type="text" placeholder="state" className="input" name ="state" onChange={(e)=>add(e)}/>
            <input type="text" placeholder="pincode" className="input" name ="pincode" onChange={(e)=>add(e)}/>
            <input type="text" placeholder="phonenumber" className="input" name ="phoneNumber" onChange={(e)=>add(e)}/>
            <textarea id="w3review" name="w3review" rows="4" cols="40" placeholder="Address" name="address" onChange={(e)=>add(e)}/>
            <button onClick={toDb}>Add Address</button>

            </div>

            <div className="saved__address">
              <h2>Saved address</h2>
              { address.length>0?address.map((data)=>{
                  return (<div className="address_div"  key ={data._id}>
                      <p className="add_line"> {data?.address}</p>
                      <p className="add_line"> {`${data?.city} ,${data?.pincode} ,${data?.state},${data?.phoneNumber}`}</p>
                  </div>)
              }): <div> You have 0 Saved Address ,Add Address</div>}
          
              

            </div>

            </div>

        </div>
    )
}

export default User
