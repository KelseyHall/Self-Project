import React from 'react'
import {BrowserRouter as Router,  NavLink }from 'react-router-dom'

const Header = () =>(
    
    <Router>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">Product Page</NavLink>
        <NavLink to="/">Add New Products</NavLink>
        <NavLink to="/">Edit Products</NavLink>
    </Router>
)

export {Header as default}

