import React from "react";
import PrimaryHeader from "../Core/PrimaryHeader";
import TextInput from "../Core/TextInput";
import FormContainer from "./FormContainer"
import "./DriverPane.css";
import Button from "../Core/Button";
import axios from "axios";
import Navbar from "../Core/Navbar";

export default class DriverPane extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                firstName: "",
                lastName: "",
                email: "",
                phoneNumber: "",
                postalAddress1: "",
                postalAddress2: "",
                city: "",
                zipCode: "",
                country: "",
            },
            formState: 0
        }
        this.onFirstNameChange = this.onFirstNameChange.bind(this);
        this.onLastNameChange = this.onLastNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPhoneNumberChange = this.onPhoneNumberChange.bind(this);
        this.registerDriver = this.registerDriver.bind(this);
        this.changeFormState = this.changeFormState.bind(this);
        this.onPostalAddress1Change = this.onPostalAddress1Change.bind(this);
        this.onPostalAddress2Change = this.onPostalAddress2Change.bind(this);
        this.onCityChange = this.onCityChange.bind(this);
        this.onZipChange = this.onZipChange.bind(this);
        this.onCountryChange = this.onCountryChange.bind(this);
    }

    render() {
        return (
            <div className="driver-pane">
                <PrimaryHeader>Register As A Driver!</PrimaryHeader>
                <FormContainer>
                    <Navbar id="pane-nav"
                        currentState={this.state.formState} 
                        navLinks={["Personal", "Address"]} 
                        setState={this.changeFormState}/>
                    {this.getCurrentFormState()}
                </FormContainer>
            </div>
        )
    }

    getCurrentFormState() {
        return this.state.formState === 0 ?
            (
                <>
                    <TextInput 
                        groupName="driver" 
                        value={this.state.form.firstName} 
                        onChange={this.onFirstNameChange} 
                        name="First Name"/>
                    <TextInput 
                        groupName="driver"
                        value={this.state.form.lastName} 
                        onChange={this.onLastNameChange}
                        name="Last Name"
                        />
                    <TextInput 
                        groupName="driver" 
                        value={this.state.form.email}
                        onChange={this.onEmailChange}
                        name="Email"/>
                    <TextInput 
                        groupName="driver" 
                        value={this.state.form.phoneNumber}
                        onChange={this.onPhoneNumberChange} 
                        name="Phone Number"/>
                    <Button id="driver-button" onClick={this.changeFormState(1)}>Address</Button>
                </>
            ) :
            (
                <>
                    <TextInput 
                        groupName="driver"
                        onChange={this.onPostalAddress1Change}
                        value={this.state.form.postalAddress1}
                        name="Postal Address 1"/>
                    <TextInput 
                        groupName="driver"
                        onChange={this.onPostalAddress2Change}
                        value={this.state.form.postalAddress2}
                        name="Postal Address 2"/>
                    <TextInput 
                        groupName="driver"
                        onChange={this.onCityChange}
                        value={this.state.form.city}
                        name="City"/>
                    <TextInput 
                        groupName="driver"
                        onChange={this.onZipChange}
                        value={this.state.form.zipCode}
                        name="Zip Code"/>
                    <TextInput 
                        groupName="driver"
                        value={this.state.form.country}
                        onChange={this.onCountryChange}
                        name="Country"/>
                    <Button id="driver-button" onClick={this.registerDriver}>Register</Button>
                </>
            );
    }

    changeFormState(id) {
        return () => {
            this.setState({
                formState: id
            })
        }
    }

    onFirstNameChange(event) {
        this.state.form.firstName = event.target.value
        this.setState({
            form: this.state.form
        })
    }

    onLastNameChange(event) {
        this.state.form.lastName = event.target.value
        this.setState({
            form: this.state.form
        })
    }

    onEmailChange(event) {
        this.state.form.email = event.target.value
        this.setState({
            form: this.state.form
        })
    }

    onPhoneNumberChange(event) {
        this.state.form.phoneNumber = event.target.value
        this.setState({
            form: this.state.form
        })
    }

    onPostalAddress1Change(event) {
        this.state.form.postalAddress1 = event.target.value
        this.setState({
            form: this.state.form
        })
    }

    onPostalAddress2Change(event) {
        this.state.form.postalAddress2 = event.target.value
        this.setState({
            form: this.state.form
        })
    }

    onCityChange(event) {
        this.state.form.city = event.target.value
        this.setState({
            form: this.state.form
        })
    }

    onZipChange(event) {
        this.state.form.zipCode = event.target.value
        this.setState({
            form: this.state.form
        })
    }

    onCountryChange(event) {
        this.state.form.country = event.target.value
        this.setState({
            form: this.state.form
        })
    }

    registerDriver() {
        console.log(this.getDriverData())
        axios.post("/api/driver/", {
            ...this.getDriverData()
        })
    }

    getDriverData() {
        return {
            firstName: this.state.form.firstName,
            lastName: this.state.form.lastName,
            email: this.state.form.email,
            phoneNumber: this.state.form.phoneNumber,
            location: {
                address: this.getAddress()
            }
        }
    }

    getAddress() {
        return `${this.state.form.postalAddress1} ${this.state.form.postalAddress2} ${this.state.form.city} ${this.state.form.zipCode} ${this.state.form.country}`
    }
}