import React from "react";
import { View } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";

import { onSignIn } from "../auth";

export default ({ navigation }) => (
    <View style={{ paddingVertical: 20 }}>
        <Card title="SIGN IN">
            <FormLabel>Email</FormLabel>
            <FormInput placeholder="Email address..." />
            <FormLabel>Password</FormLabel>
            <FormInput secureTextEntry placeholder="Password..." />
            <Button
                buttonStyle={{ marginTop: 20 }}
                backgroundColor="#4CAF50"
                title="SIGN IN"
                onPress={() => onSignIn()}
            />
            <Button
                buttonStyle={{ marginTop: 20 }}
                backgroundColor="#00BCD4"
                title="SIGN UP"
                onPress={() => navigation.navigate("SignUp")}
            />
        </Card>
    </View>
);