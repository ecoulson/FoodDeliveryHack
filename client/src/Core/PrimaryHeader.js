import React from "react";
import "./PrimaryHeader.css";

export default class PirmaryHeader extends React.Component {
    render() {
        return <h1 id={`primary-header-${this.props.id}`} className="primary-header">{this.props.children}</h1>
    }
}