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
            currentPane: 0
        }
        this.setPane = this.setPane.bind(this);
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
            return <PlaceOrderPane />
        }
        if (this.state.currentPane === 1) {
            return <ViewOrderPane />
        }
    }

    setPane(id) {
        return () => {
            this.setState({
                currentPane: id
            });
        }
    }
}