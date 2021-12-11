import React from 'react'
import {Link} from "react-router-dom";

import './styles/Sidebar.css'

const Sidebar = () => (
    <div className='sidebar'>
        <ul>
            <li><Link to="/">Welcome</Link></li>
            <li><Link to="/homes">Home Plans</Link></li>
            <li><Link to="/lots">Lots</Link></li>
        </ul>
    </div>
)

export default Sidebar