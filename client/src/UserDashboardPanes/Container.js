import React from "react";
import "./Container.css";

export default class Container extends React.Component {
    render() {
        return (
            <div className="dashboard-container">
                {this.props.children}
            </div>
        )
    }
}