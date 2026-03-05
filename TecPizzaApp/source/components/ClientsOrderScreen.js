import React, { useState } from "react";
import { StyleSheet, SafeAreaView, Text, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function ClientsOrderScreen({ route }) {
    const navigation = useNavigation()
    const { orders } = route.params
    const [orderList, setOrderList] = useState(orders)

    const renderOrders = ({ item }) => {
        console.log(orderList)
        return (
            <SafeAreaView style={styles.CardItemContainer}>
                <Text style={styles.Text}>Ingrediente : {item.type}, Tamano: {item.size}</Text>
                <Text style={styles.Text}>Precio: {item.price} Total: {item.total}</Text>
            </SafeAreaView>
        )
    }
    return (
        <SafeAreaView style={styles.Container}>
            <Text style={styles.title}>Ordenes</Text>
            <FlatList
                data={orderList}
                keyExtractor={(item) => item.id}
                renderItem={renderOrders}
            />
            <SafeAreaView style={styles.Container}>
                <TouchableOpacity style={styles.Button} onPress={() => navigation.goBack()}>
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
            backgroundColor: '#fae18e',
            padding: 10
        },
        CardItemContainer: {
            marginBottom: 10,
            backgroundColor: '#f8f8f8',
            borderRadius: 10,
            overflow: 'hidden',
            borderColor: '#ddd',
            borderWidth: 1,
            padding: 10
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
            fontSize: 20,
            fontWeight: 'bold',
            padding: 10,
        },
        title: {
            fontSize: 18,
            fontWeight: 'bold',
            padding: 10,
            margin:10,
            textAlign: 'center'
        },
    }
)