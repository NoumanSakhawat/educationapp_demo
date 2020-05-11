import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
//SCREEN's
import SignupHome from "../screens/Signup/SignupHome";
import SignupTypeSelection from "../screens/Signup/SignupTypeSelection";
import SignupAffiliationRadioButton from "../screens/Signup/SignupAffiliationRadioButton";
import SignupAffiliationDropDown from "../screens/Signup/SignupAffiliationDropDown";
import SignupTermsPrivacy from "../screens/Signup/SignupTermsPrivacy";

const Stack = createStackNavigator();


export default STACKS = {
    Signup() {
        return (<Stack.Navigator initialRouteName={"SignupHome"} screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SignupHome" component={SignupHome} />
            <Stack.Screen name="SignupTypeSelection" component={SignupTypeSelection} />
            <Stack.Screen name="SignupAffiliationRadioButton" component={SignupAffiliationRadioButton} />
            <Stack.Screen name="SignupAffiliationDropDown" component={SignupAffiliationDropDown} />
            <Stack.Screen name="SignupTermsPrivacy" component={SignupTermsPrivacy} />
        </Stack.Navigator>)
    },
}//end of STACKS