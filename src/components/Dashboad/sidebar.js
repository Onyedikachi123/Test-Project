import React from 'react'
import '../Dashboad/sidebar.css';
import logo from "../../images/logo.svg"
import {SidebarData} from '../Dashboad/sidebarData'

function Sidebar() {
    return (
        <div className="sidebar-wrapper">
           <div className="sidebar-logo">
            <img src={logo} alt="logo" /> 
           </div>
           <ul className="SidebarList">
            {SidebarData.map((val, key) => {
                return (
                   <li key={key} className="row" 
                   id={window.location.pathname === val.link ? "active" : ""}
                   onClick={()=> {window.location.pathname = val.link}}>
                    
                    <div id="icon">{val.icon}</div>
                    <div id="title">{val.title}</div>
                   </li>
                )
            })}
            </ul>
        </div>
    )
}

export default Sidebar;
