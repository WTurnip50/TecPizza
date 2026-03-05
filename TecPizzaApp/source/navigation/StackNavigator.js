import react from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../components/LoginScreen";
import HomeScreen from "../components/HomeScreen";
import CustomerScreen from "../components/CustomerScreen";
import OrderScreen from "../components/OrderScreen";
import ClientsOrderScreen from "../components/ClientsOrderScreen";
import AboutUs from "../components/AboutUs";

const Stack = createNativeStackNavigator()



export default function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen initialParams={{ orders: [] }} name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen initialParams={{ orders: [] }} name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen initialParams={{ orders: [] }} name="Customer" component={CustomerScreen} options={{ headerShown: false }} />
            <Stack.Screen initialParams={{ orders: [] }} name="Orders" component={ClientsOrderScreen} options={{ headerShown: false }} />
            <Stack.Screen initialParams={{ orders: [] }} name="NewOrder" component={OrderScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Us" component={AboutUs} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}