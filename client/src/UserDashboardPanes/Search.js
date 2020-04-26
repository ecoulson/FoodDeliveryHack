import React from "react";
import TextInput from "../Core/TextInput";

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
        this.handleSearchInput.bind(this);
    }

    render() {
        return <TextInput 
            onChange={this.handleSearchInput}
            value={this.state.name}
            name={"Search for restaurants"}
            />
    }

    handleSearchInput(event) {
        this.setState({
            name: event.target.value
        })
    }
}