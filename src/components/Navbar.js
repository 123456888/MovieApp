import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="navbar navbarOne">
            <nav className="navbar navbar-expand-lg">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/home" style={{ textDecoration: "none" }}><a className=" text-white navOne" href="a">Home</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/ticket" style={{ textDecoration: "none" }}><a className=" text-white navOne" href="a">Book Ticket</a></Link>
                        </li>
                    </ul>
                </div>
            </nav >
        </div >
    )
}

export default Navbar