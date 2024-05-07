import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import Booklist from "./Booklist"
function SideNav() {
    return (

      <Router>
      <nav id='sidenav'>
        <ul>
          <li><Link to="/">Home</Link></li> 
          {/* //! "home" linkk */}
          <li><Link to="/new">New Arrivals</Link></li> 
          {/* //! "new" linkk */}
          <li><Link to="/register">Registration</Link></li> 
          {/* //! "register" linkk */}
          <li><Link to="/categories">Categories</Link></li>
           {/* //! "categories" linkk */}
          <li><Link to="/cart">Cart</Link></li>
           {/* //! "cart" link */}
        </ul>
      </nav>
      
      <Routes>
        {/* <Route path="/" element={<Booklist/>}> */}
          <Route path='/' element={<Booklist/>} />
          <Route path="new"/>
          <Route path="register" element={<RegistrationForm/>}/>
          <Route path="categories"/>
          <Route path="cart"/>
        {/* </Route> */}
      </Routes>
      </Router>
    );
  }
  
export default SideNav;
