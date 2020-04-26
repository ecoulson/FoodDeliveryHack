import React from "react";
import "./SignupPane.css";

export default class SignupPane extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            totalPanes: 4
        }
    }

    render() {
        return (
            <div className="layout-signup">
                {this.getPane()}
            </div>
        )
    }

    getPane() {
        return React.Children.toArray(this.props.children)[this.props.currentPane];
    }
}