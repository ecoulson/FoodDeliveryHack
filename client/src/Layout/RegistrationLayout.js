import React from "react";
import Column from "./Column";
import Row from "./Row";
import Button from "../Core/Button";
import SignupPane from "../Panes/SignupPane";
import DriverPane from "../Panes/DriverPane";
import UserPane from "../Panes/UserPane";
import RestaurantPane from "../Panes/RestaurantPane";
import AboutPane from "../Panes/AboutPane";
import Navbar from "../Core/Navbar";
import SignInPane from "../Panes/SignInPane";
import SecondaryHeader from "../Core/SecondaryHeader";

import "./RegistrationLayout.css"; 

export default class PageLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayColumnState: 0
        }
        this.setDisplayColumnState = this.setDisplayColumnState.bind(this);
    }

    render() {
        return (
            <div className="registration-layout">
                <Column id={1} width="50%">
                    <SignupPane currentPane={this.state.displayColumnState}>
                        <AboutPane />
                        <UserPane />
                        <DriverPane />
                        <RestaurantPane />
                        <SignInPane handleLogin={this.props.handleLogin}/>
                    </SignupPane>
                </Column>
                <Column id={2} width="50%">
                    <Row id={1} height="33.33333%" color="#5D6CDD">
                        <Navbar
                            isMain 
                            currentState={this.state.displayColumnState} 
                            navLinks={["About", "User", "Driver", "Restaurant"]}
                            setState={this.setDisplayColumnState}
                            />
                        <SecondaryHeader>Elders</SecondaryHeader>
                        <Button 
                            onClick={this.setDisplayColumnState(1)} 
                            id="user">
                                Create An Account To Order!
                        </Button>
                    </Row>
                    <Row id={2} height="33.33333%" color="#83EA8D">
                        <SecondaryHeader>Drivers</SecondaryHeader>
                        <Button 
                            onClick={this.setDisplayColumnState(2)} 
                            id="driver">
                                Sign Up To Drive!
                        </Button>
                    </Row>
                    <Row id={3} height="33.33333%" color="#FF5967">
                        <SecondaryHeader>Restaurants</SecondaryHeader>
                        <Button 
                            onClick={this.setDisplayColumnState(3)} 
                            id="restaurant">
                                Register Your Restaurant!
                        </Button>
                    </Row>
                </Column>
            </div>
        )
    }

    setDisplayColumnState(id) {
        return () => {
            this.setState({
                displayColumnState: id
            })
        }
    }
}