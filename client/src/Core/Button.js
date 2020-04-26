import React from "react";
import "./Button.css";

export default class Button extends React.Component {
    render() {
        return (
            <button 
                onClick={this.props.onClick}
                id={`button-${this.props.id}`} 
                className="app-button">
                    {this.props.children}
            </button>
        )
    }
}