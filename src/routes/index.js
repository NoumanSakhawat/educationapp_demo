import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import React, { Component } from 'react';
import BrandSelection from "../screens/BrandSelection";
// screens Import

import STACKS from './STACKS';
import DRAWERS from './DRAWERS';
// screens Import End

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const initialRouteName = "BrandSelection";

console.disableYellowBox = true;

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            isLoggedIn: false
        };
    }

    setIsLoggedIn = (isLoggedIn) => { this.setState({ isLoggedIn }); }


    beforeLogin = () => {
        return (<Stack.Navigator initialRouteName={initialRouteName} screenOptions={{ headerShown: false }}>
            <Stack.Screen name="BrandSelection" component={BrandSelection} />
            <Stack.Screen name="Dashboard" component={DRAWERS.Dashboard} />
        </Stack.Navigator>)
    }

    render() {
        return (
            <NavigationContainer independent={true}>
                {this.beforeLogin()}
            </NavigationContainer>
        )
    }//end oF RENDER

    AfterLogin = () => {

    }
}//end of Class
