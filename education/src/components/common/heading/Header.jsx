import React from 'react'
import Head from './Head'
import "./header.css"
import { useState } from "react";


import {
    Link, NavLink
} from "react-router-dom";
const Header = () => {
    const [click, setClick] = useState(false)
    return (
        <>
            <Head />
            <header>
                <nav className="flexSB">
                    <ul className={click ? "mobile-nav" : "flexSB"} onClick={() => setClick(false)}>
                        <li>
                            <NavLink to="/" activeClassName="active" exact> Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/course" activeClassName="active">All Course</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" activeClassName="active"> About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/team" activeClassName="active">Team</NavLink>
                        </li>
                        <li>
                            <NavLink to="/pricing" activeClassName="active">Pricing</NavLink>
                        </li>
                        <li>
                            <NavLink to="/journal" activeClassName="active">Journal</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                        </li>
                    </ul>
                    <div className="start">
                        <div className="button">GET CERTIFICATE</div>
                    </div>
                    <button className="toggle" onClick={() => setClick(!click)}>
                        {click ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
                    </button>
                </nav>
            </header>
        </>
    )
}

export default Header