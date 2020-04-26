import React from "react";
import "./Column.css";

export default class Column extends React.Component {
    render() {
        return (
            <div id={`column-${this.props.id}`} style={this.getStyle()} className="layout-column">
                {this.props.children}
            </div>
        )
    }

    getStyle() {
        return {
            backgroundColor: this.props.color,
            width: this.props.width
        }   
    }
}