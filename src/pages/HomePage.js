import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import CustomBtn from '../components/CustomBtn';
import DeliveryMan from '../images/deliveryman.svg'
import '../pages/HomePage.css';
import Register from '../components/Register';


function HomePage() {
    return (
        <>
            <Navbar />
            <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-6 hero-text">
                  <img src={DeliveryMan} alt="Delivery Man" />
                <h4>Let’s help you manage your riders and  delivery systems.</h4> 
                <p>Every logistics company whether it’s a multi-national branding corporation or a regular local deserves the basic standard necessities in achieving a high service delivery</p>
                 <CustomBtn txt="Get Start"/>
              </div>
              <div className="col-6 hero-form">
               <Register />
              </div>
              </div>
            </div>
        </>
            )
}

export default HomePage;
