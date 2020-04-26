import React from "react";
import "./ViewOrderPane.css";
import PirmaryHeader from "../Core/PrimaryHeader";
import Button from "../Core/Button";
import SecondaryHeader from "../Core/SecondaryHeader";
import axios from "axios";

export default class ViewOrderPane extends React.Component {
    constructor(props) {
        super(props);
        this.createOrder = this.createOrder.bind(this);
    }

    render() {
        return (
            <div>
                <PirmaryHeader>Current Order</PirmaryHeader>
                <OrderContainer order={this.props.order}/>
                <SecondaryHeader id="sub-total">Sub Total: ${this.getTotal()}</SecondaryHeader>
                <Button onClick={this.createOrder} id="place-order">Place Order</Button>
            </div>
        )
    }

    createOrder() {
        axios.post("/api/order", {
            ...this.props.order
        }).then((payload) => {
            console.log(payload);
        })
    }

    getTotal() {
        if (this.props.order.items.length === 0) {
            return 0;
        }
        return this.props.order.items.reduce((sum, item) => {
            return sum + item.price
        }, 0)
    }
}

class OrderContainer extends React.Component {
    render() {
        return (
            <div className="order-container">
                {this.getOrders()}
            </div>
        )
    }

    getOrders() {
        return this.props.order.items.map((item, i) => {
            return (
                <div className="order-item-container" key={i}>
                    <h1>{item.name}</h1>
                    <h3>{item.description}</h3>
                    <h3>{item.price}</h3>
                </div>
            )
        })
    }
}