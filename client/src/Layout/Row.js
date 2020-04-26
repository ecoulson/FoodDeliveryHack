import React from "react";
import "./Row.css";

export default class Row extends React.Component {
    render() {
        return (
            <div id={`row-${this.props.id}`} style={this.getStyle()} className="layout-row">
                {this.props.children}
            </div>
        )
    }

    getStyle() {
        return {
            backgroundColor: this.props.color,
            height: this.props.height
        }   
    }
}