import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import ReactModalLogin from 'react-modal-login';
import './Header.css';
import logo from '../../assets/logo.svg';

export default function Header(){

    return(
        <div className="header">
           <img src={logo} className="logo" alt="logo" />
            
            <div className="btn-class" >
                <Button className="bookShow-btn" variant="contained" color="primary" className="bookShow-btn" style={{ marginRight:"10px" }} >BookShow</Button>
                <Button className="login-button" variant="contained" color="default"  >Login</Button>
            </div>
  
        </div>
    )
}