import React from "react";
import "./Navbar.css";
import Button from "./Button";

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id={this.props.id} className="navbar">
                {this.getNavbarElements()}
                {this.props.isMain ? 
                    <Button 
                        onClick={this.props.setState(this.props.navLinks.length)} 
                        id="sign-in">
                            Sign In
                    </Button> : 
                    null
                }
            </div>
        )
    }

    getNavbarElements() {
        return this.props.navLinks.map((navLink, i) => {
            return this.isActive(i) ?
                <NavLink key={i} onClick={this.props.setState(i)} isActive>{navLink}</NavLink> :
                <NavLink key={i} onClick={this.props.setState(i)}>{navLink}</NavLink>
        }) 
    }

    isActive(i) {
        return this.props.currentState === i;
    }
}

class NavLink extends React.Component {
    render() {
        if (this.props.isActive) {
            return <span onClick={this.props.onClick} className="navlink active">{this.props.children}</span>
        } else {
            return <span onClick={this.props.onClick} className="navlink">{this.props.children}</span>
        }
    }
}