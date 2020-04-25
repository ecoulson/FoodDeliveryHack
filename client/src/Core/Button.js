import React from "react";
import "./Button.css";

export default class Button extends React.Component {
    render() {
        return (
            <button class="app-button">{this.props.children}</button>
        )
    }
}