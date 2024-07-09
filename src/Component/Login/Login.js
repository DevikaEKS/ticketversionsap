import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import "./Login.css";

function Login() {
  return (
    <div className='container-fluid loginbg d-flex justify-content-center align-items-center vh-100'>
      <div className='crd p-5'>
        <form>
          <h1 className='loginwrd text-center'>Login</h1>
          <div className="form-group">
            <label htmlFor="username" className="text-white">Username</label>
            <input
              className='form-control'
              type="text"
              id="username" 
              name="username"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="text-light">Password</label>
            <input
              className='form-control'
              type="password"
              id="password"
              name="password"
              placeholder="Enter a strong password"
            />
          </div>
          <div className="form-group button-container">
            <button type="submit" className="rounded-3 logbutton mt-3">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
