import React from "react";
import PirmaryHeader from "../Core/PrimaryHeader";
import FormContainer from "./FormContainer";
import TextInput from "../Core/TextInput";
import Button from "../Core/Button";

export default class SignInPane extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        }
        this.handlePassword = this.handlePassword.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    render() {
        return (
            <div className="sign-in-pane">
                <PirmaryHeader>Sign In!</PirmaryHeader>
                <FormContainer>
                    <TextInput 
                        value={this.state.username} 
                        name="Username"
                        onChange={this.handleUsername}/>
                    <TextInput 
                        type="password"
                        value={this.state.password}
                        onChange={this.handlePassword}
                        name="Password"/>
                    <Button onClick={this.handleLogin}>Sign In</Button>
                </FormContainer>
            </div>
        );
    }

    handleUsername(event) {
        this.setState({
            username: event.target.value
        })
    }

    handlePassword(event) {
        this.setState({
            password: event.target.value
        })
    }

    handleLogin() {
        this.props.handleLogin(this.state);
    }
}