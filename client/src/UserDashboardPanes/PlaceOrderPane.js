import React from "react";
import "./PlaceOrderPane.css";
import Search from "./Search";
import Row from "../Layout/Row";
import Column from "../Layout/Column";
import SecondaryHeader from "../Core/SecondaryHeader";
import PirmaryHeader from "../Core/PrimaryHeader";
import Button from "../Core/Button";

export default class PlaceOrderPane extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurants: [],
            currentMenu: [],
            currentItem: null
        }
        this.setRestaurants = this.setRestaurants.bind(this);
        this.setCurrentMenu = this.setCurrentMenu.bind(this);
        this.setCurrentItem = this.setCurrentItem.bind(this);
        this.selectItem = this.selectItem.bind(this);
    }

    render() {
        return (
            <div className="place-order-pane">
                <Row id={"search"}>
                    <Search setRestaurants={this.setRestaurants}/>
                </Row>
                <Column id={"restaurant"} width="20%">
                    <SecondaryHeader id="user-restaurant">Restaurant</SecondaryHeader>
                    {this.getRestaurants()}
                </Column>
                <Column id={"menu"} width="20%">
                    <SecondaryHeader id="user-menu">Menu</SecondaryHeader>
                    {this.getMenu()}
                </Column>
                <Column id={"item"} width="60%">
                    {this.state.currentItem ? this.getItem() : null}
                </Column>
            </div>
        )
    }

    getRestaurants() {
        return this.state.restaurants.map((restaurant, i) => {
            return (
                <div 
                    onClick={this.setCurrentMenu(i)} 
                    className="restaurant-container" 
                    key={i}>
                        {restaurant.name}
                </div>
            );
        })
    }

    setRestaurants(restaurants) {
        this.setState({
            restaurants
        })
    }

    getMenu() {
        return this.state.currentMenu.map((menuItem, i) => {
            return <div onClick={this.setCurrentItem(i)} className="menu-item-container" key={i}>{menuItem.name}</div>
        })
    }

    setCurrentMenu(i) {
        return () => {
            this.props.setOrderRestaurant(this.state.restaurants[i]);
            this.setState({
                restaurant: this.state.restaurants[i],
                currentMenu: this.state.restaurants[i].menu
            })
        }
    }

    getItem() {
        return (
            <div className="item-display">
                <PirmaryHeader id="user-item-name">{this.state.currentItem.name}</PirmaryHeader>
                <SecondaryHeader id="user-item-description">{this.state.currentItem.description}</SecondaryHeader>
                <SecondaryHeader id="user-item-price">Price: ${this.state.currentItem.price}</SecondaryHeader>
                <Button onClick={this.selectItem} id="add-to-order">Add To Order</Button>
            </div>
        )
    }

    setCurrentItem(i) {
        return () => {
            this.setState({
                currentItem: this.state.currentMenu[i]
            })
        }
    }

    selectItem() {
        this.props.addToOrder(this.state.currentItem);
    }
}