import React from 'react';
import Container from '@material-ui/core/Container';
import logo from "../../images/logo.svg"
import '../Navbar/Navbar.css';



function Navbar() {
    
    return (
       <Container>
           <div className="logoContainer">
             <img src={logo} alt="logo" />
             <p>DMS</p>
           </div>
       </Container>
    )
}

export default Navbar
