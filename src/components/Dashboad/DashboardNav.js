import React from 'react'
import { Search } from '@material-ui/icons';
import User from '../../images/user.svg';
import '../Dashboad/DashboardNav.css';

function DashboardNav() {
    return (
        <div className="header">
           <div className="input-wrapper">
               <div className="inner-input">
                 <Search className="icon" />
                  <input placeholder="search" />
               </div>
           </div>
            <div className="user-details">
               <img src={User} alt="user" />
               <div className="admin-details">
                 <h6>John</h6>
                 <p>Admin</p>
               </div>
            </div> 
        </div>
    )
}

export default DashboardNav;
