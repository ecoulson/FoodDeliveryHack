import React from "react";
import "./TextInput.css";

export default class TextInput extends React.Component {
    render() {
        return (
            <>
                <span className="primary-input-label">{this.props.name}</span>
                <input
                    type={this.props.type}
                    onChange={this.props.onChange} 
                    placeholder={`${this.props.name}...`}
                    value={this.props.value}
                    className={`primary-input input-group-${this.props.groupName}`}/>
            </>
        )
    }
}