import react from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../components/LoginScreen";
import HomeScreen from "../components/HomeScreen";
import AboutUs from "../components/AboutUs";

const Stack = createNativeStackNavigator()



export default function StackNavigator(){
    return(
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen initialParams={{orders:[{}]}}name="Login" component={LoginScreen} options={{headerShown: false}}/>
            <Stack.Screen initialParams={{orders:[{}]}} name="Home" component={HomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Us" component={AboutUs} options={{headerShown: false}}/>

        </Stack.Navigator>
    )
}