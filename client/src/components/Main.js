import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
// import Contact from "../pages/Contact";
class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div>
            <Routes>
                <Route path="register" element={<Register />} />
                <Route path="/" element={<Register />} />
                <Route path="login" element={<Login />} />
                <Route path="profile" element={<Profile />} />
                <Route path="home" element={<Home />} />
                {/* <Route path="/contact" element={<Contact />} /> */}
            </Routes>
        </div>
        );
    }
}
export default Main;