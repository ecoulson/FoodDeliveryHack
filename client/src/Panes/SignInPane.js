import React from "react";
import PirmaryHeader from "../Core/PrimaryHeader";
import FormContainer from "./FormContainer";
import TextInput from "../Core/TextInput";
import Button from "../Core/Button";

export default class SignInPane extends React.Component {
    render() {
        return (
            <div className="sign-in-pane">
                <PirmaryHeader>Sign In!</PirmaryHeader>
                <FormContainer>
                    <TextInput name="Username"></TextInput>
                    <TextInput name="Password"></TextInput>
                    <Button>Sign In</Button>
                </FormContainer>
            </div>
        );
    }
}