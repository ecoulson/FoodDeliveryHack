import React from "react";
import "./PlaceOrderPane.css";
import Search from "./Search";
import Row from "../Layout/Row";
import ResultList from "./ResultList";

export default class PlaceOrderPane extends React.Component {
    render() {
        return (
            <div className="place-order-pane">
                <Row id={1}>
                    <Search />
                </Row>
                <ResultList>
                    
                </ResultList>
            </div>
        )
    }
}