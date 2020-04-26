import React from "react";
import TextInput from "../Core/TextInput";
import axios from "axios";

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
        this.handleSearchInput = this.handleSearchInput.bind(this);
        this.getAllRestaurants();
    }

    render() {
        return <TextInput
            groupName="search"
            onChange={this.handleSearchInput}
            value={this.state.name}
            name={"Search for restaurants"}
            />
    }

    handleSearchInput(event) {
        this.getRestaurants(event.target.value);
        this.setState({
            name: event.target.value
        })
    }

    getAllRestaurants() {
        axios.get(`/api/restaurant/`).then((payload) => {
            this.props.setRestaurants(payload.data);
        })
    }

    getRestaurants(name) {
        axios.get(`/api/restaurant/search/${name}`).then((payload) => {
            this.props.setRestaurants(payload.data);
        })
    }
}