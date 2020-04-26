import React from "react";
import "./SecondaryHeader.css";

export default class SecondaryHeader extends React.Component {
    render() {
        return <h1 id={`secondary-header-${this.props.id}`} className="secondary-header">{this.props.children}</h1>
    }
}