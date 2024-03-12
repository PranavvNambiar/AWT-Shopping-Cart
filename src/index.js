import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import SideNav from './components/SideNav.jsx';

// const Header = () => {
//   return (<u><i><h1>BOOK STORE</h1></i></u>)
// }

export const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <SideNav />
      </div>
      <Footer />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  <App />
</>);
