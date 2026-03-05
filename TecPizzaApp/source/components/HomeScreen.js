import React, { useState } from "react";
import { StyleSheet, SafeAreaView, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';



export default function HomeScreen({ route }) {
    const { orders } = route.params
    const [orderList, setOrderList] = useState(orders)

    React.useEffect(()=>{
        if(route.params?.Orders){
            setOrderList(route.params.Orders)
        }
    },[route.params?.Orders])


    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.Container}>
            <Text style={styles.Text}>Menú Principal</Text>
            <SafeAreaView style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.Button}  onPress={()=>navigation.replace('Orders',{orders:orderList})}>
                    <Text style={styles.buttonText}>Empleados</Text>
                </TouchableOpacity >
                <TouchableOpacity style={styles.Button} onPress={()=>navigation.replace('Customer',{orders:orders})}>
                    <Text style={styles.buttonText}>Clientes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button} onPress={() => navigation.replace('Us')}>
                    <Text style={styles.buttonText}>Sobre nosotros</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button} onPress={() => navigation.replace('Login',{orderList})}>
                    <Text style={styles.buttonText}>Salir</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create(
    {
        Container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fae18e',
            marginBottom: 30
        },
        buttonsContainer: {
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            marginTop: 30,
            marginBottom: 20
        },
        Button: {
            backgroundColor: '#e93224',
            padding: 15,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 25
        },
        buttonText: {
            color: '#fff',
            fontSize: 16,
            fontWeight: 'bold',
            textAlign: 'center'
        },
        Text: {
            fontSize: 20
        },
    }
)