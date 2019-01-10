import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Component from "./screens/SignUp";
import { SignedOut, SignedIn } from "./router";

export default class App extends React.Component {
    render() {
        return <SignedIn />;
    }
}