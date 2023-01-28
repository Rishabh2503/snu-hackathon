import React from 'react'
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom'

import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import HomePage from './components/pages/HomePage'
import Warehouses from './components/pages/Warehouse'

import './App.css'
import Item from './components/pages/Item'

export default function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path="/" element={ <LandingPage /> } />
                    <Route path="/login" element={ <LoginPage /> } />
                    <Route path="/register" element={ <RegisterPage /> } />
                    <Route path="/forget-password" element={ <ForgetPasswordPage /> } />
                    <Route path="/home" element={ <HomePage /> } />
                    <Route path="/warehouse" element={ <Warehouses /> } />
                    <Route path="/item" element={ <Item /> } />
                    
                </Routes>
                
            </div>
        </Router>
    )
}

