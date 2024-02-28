import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RegistrationForm from './test4';
import Booklist from "./index"
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
// const SideNav = () => (
//   <div style={{ width: 240 }}>
//   <Sidenav defaultOpenKeys={['5', '6']}>
//     <Sidenav.Body>
//       <Nav activeKey="1">
//         <Nav.Item eventKey="1">
//           Home
//         </Nav.Item>
//         <Nav.Item eventKey="2" >
//           New Arrivals
//         </Nav.Item>
//         <Nav.Item eventKey="3" >
//           Registration
//         </Nav.Item>
//         <Nav.Item eventKey="4" >
//           Categories
//         </Nav.Item>
//         <Nav.Item eventKey="5" icon={PlusIcon}>
//           Cart
//         </Nav.Item>
//       </Nav>
//     </Sidenav.Body>
//   </Sidenav>
// </div>
// );
  
export default SideNav;
