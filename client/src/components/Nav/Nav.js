import React from "react";

const Nav = () => {

    <div className="container">
        <ul className="sidenav" id="slide-out">
            <li>
                <div className="user-view">
                    <img className="circle" />
                    <ul>
                        <li className="white-text">Noah Yong Simon</li>
                        <li className="white-text">Noah@noah.com</li>
                        <li className="white-text">(555)555-5555</li>
                    </ul>
                </div>
            </li>
            <li>
                <a href="/">My Answers</a>
            </li>
            <li>
                <div className="divider"></div>
            </li>
            <li><a href="/">30 Second Pitch</a></li>
            <li><a href="/">What are your skills?</a></li>
            <li><a href="/">What skills are you looking for?</a></li>
            <li><a href="/">What do you value?</a></li>
            <li><a href="/">What is your passion?</a></li>
        </ul>
        <a href="/" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
    </div>

}

export default Nav;
