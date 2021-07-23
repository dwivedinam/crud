/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Link ,NavLink} from 'react-router-dom';
import AddUsers from './AddUsers';

const Navbar = () => {

     return(
         <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
        <p className="nav-link " >react User</p>
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" exact to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" exact to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink Link className="nav-link " aria-current="page" exact to="/contact">Contacts</NavLink>
              </li>
             
            </ul>
           
          </div>
          <Link  className="btn btn-outline-light mr-2" to ="/faq">FAQ</Link>
          <Link  className="btn btn-outline-light" to ="/adduser/add">Add User</Link>
        </div>
      </nav>
    </>
     )

    
}







export default Navbar;