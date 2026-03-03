import React from "react";
import { StyleSheet,SafeAreaView, Text,TouchableOpacity,Button, TextInput } from "react-native";
import { useNavigation } from '@react-navigation/native';


export default function HomeScreen(){
     const navigation = useNavigation()
    const goBack = ()=>{
        navigation.replace('Login')
    }
    return(
        <SafeAreaView style={styles.Container}>
            <Text style={styles.Text}>Menú Principal</Text>
            <SafeAreaView style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.Button}>
                <Text style={styles.buttonText}>Employed</Text>
            </TouchableOpacity >
            <TouchableOpacity style={styles.Button}>
                <Text style={styles.buttonText}>Customer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button}>
                <Text style={styles.buttonText}>About us</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button} onPress={goBack}>
                <Text style={styles.buttonText}>Exit</Text>
            </TouchableOpacity>
            </SafeAreaView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create(
    {
        Container:{
            flex:1,
            alignItems:'center',
            justifyContent:'center',
            marginBottom:30
        },
        buttonsContainer: {
            flexDirection: 'column',
            justifyContent:'space-between',
            alignItems:'center',
            width: '100%',
            marginTop:30,
            marginBottom: 20
        },
        Button :{
            backgroundColor: '#007bff',
            padding : 25,
            borderRadius : 10,
            margin:25
        },
         buttonText:{
            color:'#fff',
            fontSize: 16,
            fontWeight: 'bold'
        },
        Text : {
            fontSize : 20
        },
    }
)