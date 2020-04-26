import React from "react";
import PrimaryHeader from "../Core/PrimaryHeader";
import TextInput from "../Core/TextInput";
import FormContainer from "./FormContainer"
import "./RestaurantPane.css";
import Button from "../Core/Button";
import axios from "axios";
import Navbar from "../Core/Navbar";

export default class RestaurantPane extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                name: "",
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
        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPhoneNumberChange = this.onPhoneNumberChange.bind(this);
        this.registerRestaurant = this.registerRestaurant.bind(this);
        this.changeFormState = this.changeFormState.bind(this);
        this.onPostalAddress1Change = this.onPostalAddress1Change.bind(this);
        this.onPostalAddress2Change = this.onPostalAddress2Change.bind(this);
        this.onCityChange = this.onCityChange.bind(this);
        this.onZipChange = this.onZipChange.bind(this);
        this.onCountryChange = this.onCountryChange.bind(this);
    }

    render() {
        return (
            <div className="restaurant-pane">
                <PrimaryHeader>Register As A restaurant!</PrimaryHeader>
                <FormContainer>
                    <Navbar id="pane-nav"
                            currentState={this.state.formState} 
                            navLinks={["Business", "Address", "Hours", "Menu"]} 
                            setState={this.changeFormState}/>
                    {this.getCurrentFormState()}
                </FormContainer>
            </div>
        )
    }

    getCurrentFormState() {
        if (this.state.formState === 0) {
            return (
                <>
                    <TextInput 
                        groupName="restaurant" 
                        value={this.state.form.name} 
                        onChange={this.onNameChange} 
                        name="Name"/>
                    <TextInput 
                        groupName="restaurant" 
                        value={this.state.form.email}
                        onChange={this.onEmailChange}
                        name="Email"/>
                    <TextInput 
                        groupName="restaurant" 
                        value={this.state.form.phoneNumber}
                        onChange={this.onPhoneNumberChange} 
                        name="Phone Number"/>
                    <Button id="restaurant-button" onClick={this.changeFormState(1)}>Next</Button>
                </>
            )
        }
        if (this.state.formState === 1) {
            return (
                <>
                    <TextInput 
                        groupName="restaurant"
                        onChange={this.onPostalAddress1Change}
                        value={this.state.form.postalAddress1}
                        name="Postal Address 1"/>
                    <TextInput 
                        groupName="restaurant"
                        onChange={this.onPostalAddress2Change}
                        value={this.state.form.postalAddress2}
                        name="Postal Address 2"/>
                    <TextInput 
                        groupName="restaurant"
                        onChange={this.onCityChange}
                        value={this.state.form.city}
                        name="City"/>
                    <TextInput 
                        groupName="restaurant"
                        onChange={this.onZipChange}
                        value={this.state.form.zipCode}
                        name="Zip Code"/>
                    <TextInput 
                        groupName="restaurant"
                        value={this.state.form.country}
                        onChange={this.onCountryChange}
                        name="Country"/>
                    <Button id="restaurant-button" onClick={this.changeFormState(2)}>Next</Button>
                </>
            )
        }
        if (this.state.formState === 2) {
            return (
                <>
                    <TextInput 
                        groupName="restaurant"
                        onChange={this.onPostalAddress1Change}
                        value={this.state.form.postalAddress1}
                        name="Breakfast (HH:MM - HH:MM)"/>
                    <TextInput 
                        groupName="restaurant"
                        onChange={this.onPostalAddress1Change}
                        value={this.state.form.postalAddress1}
                        name="Lunch (HH:MM - HH:MM)"/>
                    <TextInput 
                        groupName="restaurant"
                        onChange={this.onPostalAddress1Change}
                        value={this.state.form.postalAddress1}
                        name="Dinner (HH:MM - HH:MM)"/>
                    <Button id="restaurant-button" onClick={this.changeFormState(3)}>Next</Button>
                </>
            )
        }
        if (this.state.formState === 3) {
            return (
                <>
                    <Button id="restaurant-button">Add Menu Item</Button>
                    <br></br>
                    <Button id="restaurant-button" onClick={this.registerRestaurant}>Register</Button>
                </>
            )
        }
    }

    changeFormState(state) {
        return () => {
            this.setState({
                formState: state
            })
        }
    }

    onNameChange(event) {
        this.state.form.name = event.target.value
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

    registerRestaurant() {
        console.log(this.getRestaurant())
        axios.post("/api/restaurant/", {
            ...this.getRestaurant()
        })
    }

    getRestaurant() {
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