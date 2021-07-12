import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white"style={{textDecoration:'none'}}>
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-white" style={{textDecoration:'none'}}>
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/appointment" className="text-white" style={{textDecoration:'none'}}>
                        <FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/allPatients" className="text-white" style={{textDecoration:'none'}}>
                        <FontAwesomeIcon icon={faUsers} /> <span>AllPatients</span>
                    </Link>
                </li>
                <li>
                    <Link to="/prescriptions" className="text-white" style={{textDecoration:'none'}}>
                        <FontAwesomeIcon icon={faFileAlt} /> <span>Prescriptions</span>
                    </Link>
                </li>
                <li>
                        <Link to="/addDoctor" className="text-white" style={{textDecoration:'none'}}>
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Add Doctor</span>
                        </Link>
                    </li>
   
                <li>
                    <Link to="/setting" className="text-white" style={{textDecoration:'none'}}>
                      <FontAwesomeIcon icon={faCog} /> <span>Setting</span>
                    </Link>
                </li>
            </ul>
            <div>
                <Link to="/" className="text-white" style={{textDecoration:'none'}}>
                    <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;