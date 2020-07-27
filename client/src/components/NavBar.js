import React, { Component } from "react";
import "./utilities.css";
import "./NavBar.css";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";


class NavBar extends Component {
    constructor(props) {
      super(props);
    }

    render(){
        return (
            <nav className="NavBar-container" id="NavBar">
            {/* <ScrollLink
            className="NavBar-link"
            to="home-page"
            spy={true}
            smooth={true}
            offset={-70}
            duration={700}
            >
                home
            </ScrollLink> */}
            <ScrollLink
            className="NavBar-link"
            to="about-page"
            spy={true}
            smooth={true}
            offset={-70}
            duration={700}
            >
                about
            </ScrollLink>
            <ScrollLink
            className="NavBar-link"
            to="project-page"
            spy={true}
            smooth={true}
            offset={-70}
            duration={700}
            >
                projects
            </ScrollLink>
            <ScrollLink
            className="NavBar-link"
            to="other-page"
            spy={true}
            smooth={true}
            offset={-70}
            duration={700}
            >
                other works
            </ScrollLink>
            </nav>
        )
    }
}

export default NavBar;