import React from 'react'
import Sidebar from '../components/Dashboad/sidebar'
import '../pages/Dashboard.css'
import DashboardNav from '../components/Dashboad/DashboardNav'
import LayersIcon from '@material-ui/icons/Layers';
import BusinessIcon from '@material-ui/icons/Business';
import Line from '../images/line.svg'
import User from '../images/user.svg'
import Line2 from '../images/line2.svg'
import DashboardChart from '../components/DashboardChart';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import Line3 from '../images/line3.svg';


function Dashboard() {
    return (
        <div className="dashboard-wrapper">
            <div className="dashboard-wrapper-sidebar">
                <Sidebar />
            </div>
            <div className="dashboard-main">
                <DashboardNav />
                <div className="main-content">
                    <h5>Dashboard</h5>

                    <div className="row">
                        <div className="col-4">
                            <div className="card first-card">
                                <div className="row">
                                    <div className="col-md-9">
                                        <div className="first-cardText">
                                            <h6>Total Exchange <br /> Pool Orders</h6>
                                            <div className="numberLine">
                                                <h4>504</h4>
                                                <img src={Line} className="graph-line" alt="Line" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="layer-section">
                                            <LayersIcon className="layer-icon" />
                                            <small>Today</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card second-card">
                                <div className="row">
                                    <div className="col-md-9">
                                        <div className="first-cardText">
                                            <h6>Total  <br /> Companies</h6>
                                            <div className="numberLine">
                                                <h4>504</h4>
                                                <img src={Line} className="graph-line" alt="Line" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="layer-section">
                                            <BusinessIcon className="company-icon" />
                                            <small>Today</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card third-card">
                                <div className="thirdCard-details">
                                    <h1>120</h1>
                                    <small>Companies sent orders <br />to delivery pool today.</small>
                                    <img src={User} className="user2" alt="User2" /> <br />
                                    <span>+84%</span>
                                    <img src={Line2} className="line2" alt="Line2" />
                                    <small>Comapred to yesterday</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="card last-card">
                                <DashboardChart />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-4">
                            <div className="card first-card">
                                <div className="row">
                                    <div className="col-md-9">
                                        <div className="first-cardText">
                                            <h6>Total Exchange <br /> Pool Orders</h6>
                                            <div className="numberLine">
                                                <h4>504</h4>
                                                <img src={Line} className="graph-line" alt="Line" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="layer-section">
                                            <RemoveShoppingCartIcon className="cart-icon" />
                                            <small>Today</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card first-card">
                                <div className="row">
                                    <div className="col-md-9">
                                        <div className="first-cardText">
                                            <h6>Total Exchange <br /> Pool Orders</h6>
                                            <div className="numberLine">
                                                <h4>504</h4>
                                                <img src={Line} className="graph-line" alt="Line" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="layer-section">
                                            <LayersIcon className="layer2-icon" />
                                            <small>Today</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                        <div className="card exchange-card">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="first">
                                            <h6 style={{marginBottom: '-3px;'}}>Exchange Pool today</h6>
                                            <small>Most Orders picked by</small>
                                            <img src={User} className="user2" alt="User2" />
                                            <h6>FZ Deliveries</h6>
                                            <small>Allen Lagos</small>
                                            <h4>504</h4>
                                            <small>Orders</small>
                                            <h4 style={{marginTop: '15px'}}>267</h4>
                                            <small>Pushed to pool</small>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="line3-section" style={{marginTop: '140px'}}>
                                          <h3>340,000</h3>
                                          <img src={Line3} className="line3" alt="Line" />   
                                            <small>Compared to Yesterday</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                          <div className="card">

                          </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )

}

export default Dashboard;
