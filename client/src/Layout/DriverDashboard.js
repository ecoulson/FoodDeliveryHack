import React from "react";
import "./DriverDashboard.css";
import Column from "./Column";
import PirmaryHeader from "../Core/PrimaryHeader";
import axios from "axios";
import Button from "../Core/Button";

export default class DriverDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            availableOrders: [],
            acceptedOrders: [],
        }
        this.displayAvailable = this.displayAvailable.bind(this);
    }

    componentDidMount() {
        this.getAvailableOrders();
        this.getAcceptedOrders();
    }

    render() {
        console.log(this.state);
        return (
            <div className="dashboard-layout">
                <Column width="50%">
                    <PirmaryHeader>Accepted Orders</PirmaryHeader>
                    <div className="scrollable-container">
                        {this.displayAccepted()}
                    </div>
                </Column>
                <Column width="50%">
                    <PirmaryHeader>Available Orders</PirmaryHeader>
                    <div className="scrollable-container">
                        {this.displayAvailable()}
                    </div>
                </Column>
            </div>  
        )
    }

    displayAccepted() {
        return this.state.acceptedOrders.map((order, i) => {
            console.log(order);
            return (
                <div key={i} className="driver-order-container">
                    <span>{order.restaurant.location.address}</span>
                    {!order.pickedUp ? 
                        <Button onClick={this.pickUp(order)}>Pick Up</Button> : 
                        <Button>Delivered</Button>}
                </div>
            )
        })
    }

    pickUp(order) {
        return () => {
            axios.put(`api/driver/pickup/${order._id}`).then((payload) => {
                console.log(order._id);
                order.pickedUp = true
                this.setState({
                    acceptedOrders: this.state.acceptedOrders
                })
            })
        } 
    }
    
    accept(order) {
        return () => {
            axios.put(`api/driver/${this.props.userID}`, {
                ...order,
                restaurant: order.restaurant._id
            }).then(() => {
                axios.put(`api/driver/accept/${order._id}`).then(() => {
                    this.state.acceptedOrders.push(order);
                    this.state.availableOrders.splice(this.state.availableOrders.indexOf(order), 1);
                    this.setState({
                        acceptedOrders: this.state.acceptedOrders,
                        availableOrders: this.state.availableOrders
                    }) 
                })
            })
        }
    }

    displayAvailable() {
        return this.state.availableOrders.map((order, i) => {
            return (
                <div key={i} className="driver-order-container">
                    <span>{order.restaurant.location.address}</span>
                    <Button onClick={this.accept(order)}>Accept</Button>
                </div>
            )
        })
    }

    getAvailableOrders() {
        axios.get(`/api/driver/nearme/`).then(async (payload) => {
            for (let order of payload.data) {
                if (order.restaurant) {
                    order.restaurant = await this.getRestaurant(order);
                }
            }
            this.setState({
                availableOrders: payload.data.filter((order) => !order.accepted)
            })
        })
    }

    async getRestaurant(order) {
        return axios.get(`/api/restaurant/${order.restaurant}`).then((payload) => {
            return payload.data
        });
    }

    getAcceptedOrders() {
        axios.get(`/api/driver?=${this.props.userID}`).then(async (payload) => {
            for (let order of payload.data[0].orders) {
                order.restaurant = await this.getRestaurant(order);
            }
            this.setState({
                acceptedOrders: payload.data[0].orders
            })
        })
    }
}