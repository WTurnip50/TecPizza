import React,{useState} from "react";
import { StyleSheet, SafeAreaView, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function CustomerScreen({route}){
    const { orders} = route.params
    const[orderList, setOrderList]=useState(orders)

    React.useEffect(()=>{
        if(route.params?.Orders){
            setOrderList(route.params.Orders)
        }
    },[route.params?.Orders])

    const navigation = useNavigation()
    return(
        <SafeAreaView style={styles.Container}>
            <Text style={styles.Text}>Menú de clientes</Text>
            <SafeAreaView style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('Home',{orders:orderList})}>
                    <Text style={styles.buttonText}>Volver al Menu</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('NewOrder',{onReturn:(Orders)=>setOrderList(Orders),orders:orderList})}>
                    <Text style={styles.buttonText}>Realizar una Orden</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button} onPress={() => navigation.replace('Login',{orders})}>
                    <Text style={styles.buttonText}>Salir</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </SafeAreaView>
    )
}const styles = StyleSheet.create(
    {
        Container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 30,
            backgroundColor : '#fae18e',
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
            padding: 25,
            borderRadius: 10,
            margin: 25
        },
        buttonText: {
            color: '#fff',
            fontSize: 16,
            fontWeight: 'bold'
        },
        Text: {
            fontSize: 20
        },
    }
)