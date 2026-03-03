import React, {useState}from "react";
import { SafeAreaView, TextInput, Text, Image, TouchableOpacity,ToastAndroid, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen({route}){
    const [User,SetUser] = useState('')
    const [Password,SetPassword] = useState('')
    const navigation = useNavigation()
    const users = [
        {user: 'admin', password:'admin'},
        {user: 'israel', password:'1234'},
        {user: 'juan', password:'juan2345'}
    ]
    const {orders:[]}=route.params
    const Login = () =>{
        users.forEach(element => {
            if(User === element.user && Password === element.password){
                navigation.replace('Home',{orders : [{}]})
            }
        });
    }
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.titleText}>Bienvenido a TecPizza App</Text>
            <Image style={styles.image} 
            source={
                {uri:'https://i.pinimg.com/originals/a6/b6/6d/a6b66d3f9779533d44e25b02379eea29.jpg'}
                }>
            </Image>
            <Text style={styles.text}>Iniciar sesion en la app</Text>
            <TextInput 
            style={styles.textInput}
            placeholder="user"
            keyboardType="email-address"
            onChangeText={SetUser}
            ></TextInput>
            <TextInput 
            style={styles.textInput}
            placeholder="Password"
            keyboardType="visible-password"
            onChangeText={SetPassword}
            ></TextInput>
            <TouchableOpacity style={styles.button} onPress={Login}>
                <Text style={styles.buttonText}>Iniciar Sesion</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create(
    {
        container:{
            flex: 1,
            backgroundColor : '#fae18e',
            alignItems : 'center',
            justifyContent : 'center'
        },
        titleText:{
            fontSize:20,
            fontWeight:'bold',
            padding:20
        },
        image:{
            width:200,
            height:200,
            margin:30
        },
        button:{
            backgroundColor: '#e93224',
            padding : 15,
            borderRadius : 10,
            margin:25
        },
        buttonText:{
            color:'#fff',
            fontSize: 16,
            fontWeight: 'bold'
        },
        text:{
            fontSize :18
        },
        textInput:{
            width : '80%',
            backgroundColor: '#fff',
            borderWidth: 1,
            borderRadius: 5,
            padding: 10,
            margin: 15
        }
    }
)
