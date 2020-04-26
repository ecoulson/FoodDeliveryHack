import React from "react";
import PrimaryHeader from "../Core/PrimaryHeader";
import TextInput from "../Core/TextInput";
import FormContainer from "./FormContainer"
import "./RestaurantPane.css";
import Button from "../Core/Button";
import axios from "axios";
import Navbar from "../Core/Navbar";
import SecondaryHeader from "../Core/SecondaryHeader";

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
                breakfastStart: "",
                breakfastEnd: "",
                lunchStart: "",
                lunchEnd: "",
                dinnerStart: "",
                dinnerEnd: "",
                menu: []
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
        this.onBreakfastStartChange = this.onBreakfastStartChange.bind(this);
        this.onBreakfastEndChange = this.onBreakfastEndChange.bind(this);
        this.onLunchStartChange = this.onLunchStartChange.bind(this);
        this.onLunchEndChange = this.onLunchEndChange.bind(this);
        this.onDinnerStartChange = this.onDinnerStartChange.bind(this);
        this.onDinnerEndChange = this.onDinnerEndChange.bind(this);
        this.addMenuItem = this.addMenuItem.bind(this);
        this.handleMenuItemNameChange = this.handleMenuItemNameChange.bind(this);
        this.handleMenuItemDescriptionChange = this.handleMenuItemDescriptionChange.bind(this);
        this.handleMenuItemPriceChange = this.handleMenuItemPriceChange.bind(this);
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
                    <div className="hour-container">
                        <div>
                            <TextInput 
                                groupName="restaurant"
                                onChange={this.onBreakfastStartChange}
                                value={this.state.form.breakfastStart}
                                name="Breakfast Start"/>
                        </div>
                        <div>
                            <TextInput 
                                groupName="restaurant"
                                onChange={this.onBreakfastEndChange}
                                value={this.state.form.breakfastEnd}
                                name="Breakfast End"/>
                        </div>
                    </div>
                    <div className="hour-container">
                        <div>
                            <TextInput 
                                groupName="restaurant"
                                onChange={this.onLunchStartChange}
                                value={this.state.form.lunchStart}
                                name="Lunch Start"/>
                        </div>
                        <div>
                            <TextInput 
                                groupName="restaurant"
                                onChange={this.onLunchEndChange}
                                value={this.state.form.lunchEnd}
                                name="Lunch End"/>
                        </div>
                    </div>
                    <div className="hour-container">
                        <div>
                            <TextInput 
                                groupName="restaurant"
                                onChange={this.onDinnerStartChange}
                                value={this.state.form.dinnerStart}
                                name="Dinner Start"/>
                        </div>
                        <div>
                            <TextInput 
                                groupName="restaurant"
                                onChange={this.onDinnerEndChange}
                                value={this.state.form.dinnerEnd}
                                name="Dinner End"/>
                        </div>
                    </div>
                    <Button id="restaurant-button" onClick={this.changeFormState(3)}>Next</Button>
                </>
            )
        }
        if (this.state.formState === 3) {
            return (
                <>
                    {
                        this.getMenuItems()
                    }
                    <Button id="restaurant-button" onClick={this.registerRestaurant}>Register</Button>
                </>
            )
        }
    }

    addMenuItem() {
        this.state.form.menu.push({
            name: "",
            description: "",
            price: ""
        });
        this.setState({
            form: this.state.form
        })
    }

    getMenuItems() {
        return (
            <MenuItemContainer>
            <Button id="restaurant-button" onClick={this.addMenuItem}>Add Menu Item</Button>
            {
                this.state.form.menu.map((item, i) => {
                    return <MenuItem 
                        onNameChange={this.handleMenuItemNameChange(i)} 
                        onDescriptionChange={this.handleMenuItemDescriptionChange(i)} 
                        onPriceChange={this.handleMenuItemPriceChange(i)} 
                        key={i} 
                        item={item}/>
                })
            }
            </MenuItemContainer>
        )
    }

    handleMenuItemNameChange(id) {
        return (event) => {
            this.state.form.menu[id].name = event.target.value
            this.setState({
                form: this.state.form
            });
        }
    }

    handleMenuItemDescriptionChange(id) {
        return (event) => {
            this.state.form.menu[id].description = event.target.value
            this.setState({
                form: this.state.form
            });
        }
    }

    handleMenuItemPriceChange(id) {
        return (event) => {
            this.state.form.menu[id].price = event.target.value
            this.setState({
                form: this.state.form
            });
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

    onBreakfastStartChange(event) {
        this.state.form.breakfastStart = event.target.value
        this.setState({
            form: this.state.form
        })
    }

    onBreakfastEndChange(event) {
        this.state.form.breakfastEnd = event.target.value
        this.setState({
            form: this.state.form
        })
    }

    onLunchStartChange(event) {
        this.state.form.lunchStart = event.target.value
        this.setState({
            form: this.state.form
        })
    }

    onLunchEndChange(event) {
        this.state.form.lunchEnd = event.target.value
        this.setState({
            form: this.state.form
        })
    }

    onDinnerStartChange(event) {
        this.state.form.dinnerStart = event.target.value
        this.setState({
            form: this.state.form
        })
    }

    onDinnerEndChange(event) {
        this.state.form.dinnerEnd = event.target.value
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
            name: this.state.form.name,
            email: this.state.form.email,
            phoneNumber: this.state.form.phoneNumber,
            location: {
                address: this.getAddress()
            },
            hours: {
                breakfast: [this.state.form.breakfastStart, this.state.form.breakfastEnd],
                lunch: [this.state.form.lunchStart, this.state.form.lunchEnd],
                dinner: [this.state.form.dinnerStart, this.state.form.dinnerEnd]
            },
            menu: this.state.form.menu
        }
    }

    getAddress() {
        return `${this.state.form.postalAddress1} ${this.state.form.postalAddress2} ${this.state.form.city} ${this.state.form.zipCode} ${this.state.form.country}`
    }
}

class MenuItemContainer extends React.Component {
    render() {
        return (
            <div className="menu-item-container">
                {this.props.children}
            </div>
        )
    }
}

class MenuItem extends React.Component {
    render() {
        return (
            <div className="menu-item">
                <SecondaryHeader>{this.props.item.name}</SecondaryHeader>
                <TextInput 
                    onChange={this.props.onNameChange}
                    value={this.props.item.name} 
                    name="Name"/>
                <TextInput 
                    onChange={this.props.onDescriptionChange}
                    value={this.props.item.description} 
                    name="Description"/>
                <TextInput 
                    onChange={this.props.onPriceChange}
                    value={this.props.item.price}
                    name="Price"/>
            </div>
        )
    }
}