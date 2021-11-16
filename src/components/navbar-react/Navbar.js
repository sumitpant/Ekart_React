import React,{useState} from 'react'
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import SearchIcon from '@mui/icons-material/Search';
import {useSelector} from 'react-redux';
import { useNavigate} from 'react-router-dom'

const Navbar = () => {
    let token =localStorage.getItem('accessToken');
    const [icon, setIcon] = useState(true);
    const login = useSelector(state => state.reducer.login);
    const loginc = useSelector(state => state.reducer);
    let name =localStorage.getItem('name')
  

    const navigate = useNavigate();
    const open=()=>{
        if(icon){
            document.getElementById("nav__items").style.display="block";
            document.getElementById("navbar").style.width="45%";
            setIcon(false);
        }
        else{
            document.getElementById("nav__items").style.display="none";
            document.getElementById("navbar").style.width=0;
            
            setIcon(true);
        }
       
    }
    const loginCheck =()=>{
        if(token){
            navigate('/user')
            
        }
        else{
            navigate('/login')
        }
    }

    const logout =()=>{
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('name')
            navigate('/');

    }
    return (
        <div className="navbar" id ="navbar">
        <div className="navbar__items">
            <div className ="logo">
                <p className="name"> Ekart</p>

            </div>
              <div className="nav__items" id ="nav__items">
              <div  className=" search__div" >
               
                <input type="text"  className ="text__search" placeholder="Search..."/>
                <SearchIcon/>

              </div>

                <div  className="list" onClick ={()=>{navigate('/')}} >
                <IconButton disableRipple disableFocusRipple style ={{padding: 0}} >
                    <HomeIcon fontSize="small"/>
                </IconButton>
                <small> Home</small>
                     </div>
                <div className="list"  >
                <IconButton disableRipple disableFocusRipple style ={{padding: 0}}>
                    <ContentPasteIcon fontSize="small"/>
                   
                </IconButton>
                <small> Orders</small>
                
                </div>
            <div className="list" onClick ={()=>{navigate('/cart')}}>
                <IconButton disableRipple disableFocusRipple style ={{padding: 0}} >
                    <ShoppingCartIcon fontSize="small"/>
                   
                </IconButton>
                <small> Cart</small>
                </div>
        
              
                <div className="list" onClick ={loginCheck}>
                <IconButton disableRipple disableFocusRipple style ={{padding: 0}}>
                    <PersonIcon fontSize="small"/>
                </IconButton>
                    {name?<small> {name}</small>:<small>User</small>}
                </div>
             
             {token?
                <div className="list"  onClick ={logout}>
                <IconButton disableRipple disableFocusRipple style ={{padding: 0}}  >
                    <LoginIcon fontSize="small" />
                   
                </IconButton>
                
                </div>:<div></div>
}
               
              </div>
              <div className="expand">
              <IconButton onClick={open} >
                      {icon?<MenuIcon/> : <CloseIcon/> }
                  </IconButton>

              </div>

        </div>

        
        
    </div>
    )
}

export default Navbar
