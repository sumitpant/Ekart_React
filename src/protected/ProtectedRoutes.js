
import React from 'react'
import {Navigate } from 'react-router-dom'
import Deals from '../components/deals_react/Deals'

const ProtectedRoutes = ({element:Element,...props }) => {
    let token = localStorage.getItem('accessToken');
    return token ? <Deals/>:<Navigate to ='/login'/>

}

export default ProtectedRoutes
