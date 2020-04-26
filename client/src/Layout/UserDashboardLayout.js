import React from "react";
import Navbar from "../Core/Navbar";
import PlaceOrderPane from "../UserDashboardPanes/PlaceOrderPane";
import ViewOrderPane from "../UserDashboardPanes/ViewOrderPane";
import Container from "../UserDashboardPanes/Container";
import "./UserDashboardLayout.css";
import Column from "./Column";

export default class DashboardLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPane: 0,
            order: {
                restaurant: "",
                items: []
            }
        }
        this.setPane = this.setPane.bind(this);
        this.setOrderRestaurant = this.setOrderRestaurant.bind(this);
        this.addToOrder = this.addToOrder.bind(this);
    }

    render() {
        return (
            <div className="dashboard-layout">
                <Column width="100%">
                    <Navbar
                        currentState={this.state.currentPane} 
                        navLinks={["Place Order", "View Order"]}
                        setState={this.setPane}
                        />
                    <Container>
                        {this.getPane()}
                    </Container>
                </Column>
            </div>
        );
    }

    getPane() {
        if (this.state.currentPane === 0) {
            return <PlaceOrderPane 
                        setOrderRestaurant={this.setOrderRestaurant} 
                        addToOrder={this.addToOrder}
                        />
        }
        if (this.state.currentPane === 1) {
            return <ViewOrderPane order={this.state.order}/>
        }
    }

    setPane(id) {
        return () => {
            this.setState({
                currentPane: id
            });
        }
    }

    setOrderRestaurant(restaurant) {
        this.state.order.restaurant = restaurant._id;
        this.setState({
            order: this.state.order
        });
    }

    addToOrder(item) {
        this.state.order.items.push(item);
        this.setState({
            order: this.state.order
        }, () => {
            console.log(this.state);
        })
    }
}