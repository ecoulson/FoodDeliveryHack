import React from "react";
import PirmaryHeader from "../Core/PrimaryHeader";
import SecondaryHeader from "../Core/SecondaryHeader";
import FormContainer from "./FormContainer";
import "./AboutPane.css";
import Text from "../Core/Text";

export default class AboutPane extends React.Component {
    render() {
        return (
            <div className="about-pane">
                <PirmaryHeader>Food Delivery Hack!</PirmaryHeader>
                <FormContainer>
                    <SecondaryHeader id="title">Mission</SecondaryHeader>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus dictum at tempor. Nibh tellus molestie nunc non blandit. Ultricies integer quis auctor elit sed vulputate mi sit. Arcu dui vivamus arcu felis. Cursus mattis molestie a iaculis at erat pellentesque. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Neque vitae tempus quam pellentesque. Odio aenean sed adipiscing diam donec adipiscing tristique risus nec. At consectetur lorem donec massa. Nunc id cursus metus aliquam. Massa eget egestas purus viverra accumsan in nisl nisi scelerisque. Morbi tristique senectus et netus et malesuada fames ac. Sed id semper risus in. Commodo ullamcorper a lacus vestibulum sed arcu non odio euismod. Viverra mauris in aliquam sem fringilla.</Text>
                </FormContainer>
            </div>
        )
    }
}