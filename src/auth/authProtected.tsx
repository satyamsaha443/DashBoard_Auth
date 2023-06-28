import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './home';
import Login from './login';

type Props = {}

export default function AuthProtected({}: Props) {
    const [auth,setAuth] = useState('');
    useEffect(() => {
        const token = localStorage.getItem('token') 
        if(token && token.length > 2){
            setAuth(token) 
        }else{
            setAuth("")
        }
    },[])
  return (
    <div>
       <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
    </Router>
    </div>
  )
}