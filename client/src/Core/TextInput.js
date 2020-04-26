import React from "react";
import "./TextInput.css";

export default class TextInput extends React.Component {
    render() {
        return (
            <div>
                <span className="primary-input-label">{this.props.name}</span>
                <input 
                    onChange={this.props.onChange} 
                    placeholder={`${this.props.name}...`}
                    value={this.props.value}
                    className={`primary-input input-group-${this.props.groupName}`}/>
            </div>
        )
    }
}