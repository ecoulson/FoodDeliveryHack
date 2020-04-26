import React from "react";
import "./FormContainer.css";

export default class FormContainer extends React.Component {
    render() {
        return (
            <div className="form-container">
                {this.props.children}
            </div>
        )
    }
}