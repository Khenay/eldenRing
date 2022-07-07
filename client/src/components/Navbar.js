import React, { Component } from "react";
import { BrowserRouter, Link, Navigate } from "react-router-dom";

class Navbar extends Component {

    render() {
        return (
            <div>
               

                    
                    
                   

            
                <nav id="inicio">
                    <ul>
                        <li><Link to={"/register"} id="historia">Register</Link></li>
                        <li><Link to={"/login"} id="hobbies">Login</Link></li>
                        <li> <Link to={"/profile"} id="contacto">Profile</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navbar;