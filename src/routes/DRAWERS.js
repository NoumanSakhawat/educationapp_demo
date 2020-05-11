import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import GuestDrawer from '../components/GuestDrawer';
//SCREEN's
import Dashboard from "../screens/Dashboard";
import Login from "../screens/Login";
import STACKS from "./STACKS";
// import SignupHome from "../screens/Signup/SignupTypeSelection";


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


export default DRAWERS = {
    Dashboard() {
        return (<Drawer.Navigator
            drawerContent={(props) => <GuestDrawer {...props} />} >
            <Drawer.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignupHome" component={STACKS.Signup} />
        </Drawer.Navigator>)
    },
}//end of STACKS