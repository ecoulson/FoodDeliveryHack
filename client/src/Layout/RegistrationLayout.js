import React from "react";
import Column from "./Column";
import Row from "./Row";
import Button from "../Core/Button";
import SignupPane from "../RegistrationPanes/SignupPane";
import DriverPane from "../RegistrationPanes/DriverPane";
import UserPane from "../RegistrationPanes/UserPane";
import RestaurantPane from "../RegistrationPanes/RestaurantPane";
import AboutPane from "../RegistrationPanes/AboutPane";
import SignInPane from "../RegistrationPanes/SignInPane";
import SecondaryHeader from "../Core/SecondaryHeader";

import "./RegistrationLayout.css"; 

export default class PageLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayColumnState: 0
        }
        this.setDisplayColumnState = this.setDisplayColumnState.bind(this);
        this.specialSetDisplayColumnState = this.specialSetDisplayColumnState.bind(this);
    }

    render() {
        return (
            <div className="registration-layout">
                <Column id={1} width="50%">
                    <SignupPane currentPane={this.state.displayColumnState}>
                        <AboutPane>
                            <Button id="login" onClick={this.setDisplayColumnState(4)}>Log In</Button>
                        </AboutPane>
                        <UserPane />
                        <DriverPane />
                        <RestaurantPane />
                        <SignInPane handleLogin={this.props.handleLogin}/>
                    </SignupPane>
                </Column>
                <Column id={2} width="50%">
                    <Row id={1} height="33.33333%">
                        <SecondaryHeader>Seniors</SecondaryHeader>
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

    specialSetDisplayColumnState(id) {
        return this.setDisplayColumnState(0);
    }

    setDisplayColumnState(id) {
        return () => {
            this.setState({
                displayColumnState: id
            })
        }
    }
}