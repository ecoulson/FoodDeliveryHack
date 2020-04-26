import React from "react";
import "./Text.css";

export default class Text extends React.Component {
    render() {
        return (
            <p id={`id-${this.props.id}`} className="text">{this.props.children}</p>
        )
    }
}