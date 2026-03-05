import React, { useState } from "react";
import { StyleSheet, Text, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import { useNavigation } from '@react-navigation/native';

export default function OrderScreen({ route }) {
    const navigation = useNavigation()
    const { orders,onReturn } = route.params
    const [orderList, setOrderList] = useState([])
    React.useEffect(() => {
        if (route.params?.Orders) {
            setOrderList(route.params.Orders)
        }
    }, [route.params?.Orders])

    const pizzas = [
        { label: 'Pepperoni', value: '1' },
        { label: 'Hawaiana', value: '2' },
        { label: 'Queso', value: '3' },
        { label: 'Tres carnes', value: '4' }
    ]
    const tamaños = [
        { label: 'Individual', value: '1' },
        { label: 'Chica', value: '2' },
        { label: 'Mediana', value: '3' },
        { label: 'Grande', value: '4' },
        { label: 'Extra Grande', value: '5' }
    ]
    const [value, setValue] = useState(null);
    const [value2, setValue2] = useState(null);
    const [type, setTipo] = useState('')
    const [size, setSize] = useState('')
    const [precio, setPrecio] = useState(0)
    const [cantidad, setCantidad] = useState('');
    const [total, setTotal] = useState('')

    const getTipe = (val) => {
        if (val === '1') {
            setTipo('Pepperoni')
            console.log(type)
        }
        if (val == '2') {
            setTipo('Hawaiana')
            console.log(type)
        }
        if (val == '3') {
            setTipo('Queso')
            console.log(type)
        }
        if (val == '4') {
            setTipo('Tres carnes')
            console.log(type)
        }
    }
    const getSize = (val) => {
        console.log(val)
        if (val === '1') {
            setSize('Individual')
            console.log(size)
            setPrecio(45)
        }
        if (val === '2') {
            setSize('Chica')
            console.log(size)
            setPrecio(70)
        }
        if (val === '3') {
            setSize('Mediana')
            console.log(size)
            setPrecio(100)
        }
        if (val === '4') {
            setSize('Grande')
            console.log(size)
            setPrecio(120)
        }
        if (val === '5') {
            setSize('Extra Grande')
            console.log(size)
            setPrecio(150)
        }
    }
    const saveOrder = () => {
        if (value != null && value2 != null) {
            const label1 = pizzas.find(element => element.value === value)
            const label2 = tamaños.find(element => element.value === value)
            getTipe(label1.value)
            getSize(label2.value)
            const precioFinal = (parseFloat(cantidad * precio))
            const newOrder = { id: orders.length,type: type, size: size, price: precio, total: precioFinal }

            if (newOrder.price === 0) {
                console.log(newOrder)
            } else {
                const Orders = [...orders, newOrder]
                console.log(Orders)
                onReturn(Orders)
                navigation.goBack()
            }

        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Nueva orden</Text>
            <SafeAreaView style={styles.dropdownContainer}>
                <Text style={styles.text}>Ingredientes</Text>
                <Dropdown
                    style={styles.dropdown}
                    data={pizzas}
                    labelField={'label'}
                    valueField={'value'}
                    placeholder="Elige los ingredientes"
                    value={value}
                    onChange={item => setValue(item.value)}
                ></Dropdown>
                <Text style={styles.text}>Tamano</Text>
                <Dropdown
                    style={styles.dropdown}
                    data={tamaños}
                    labelField={'label'}
                    valueField={'value'}
                    placeholder="Elige la medida"
                    value={value2}
                    onChange={item => setValue2(item.value)}
                ></Dropdown>
                <TextInput
                    style={styles.input}
                    placeholder="Introduce la cantidad a ordenar"
                    keyboardType="decimal-pad"
                    onChangeText={setCantidad}>
                </TextInput>
                <TouchableOpacity style={styles.button} onPress={saveOrder}>
                    <Text style={styles.buttonText}>Guardar orden</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
         backgroundColor : '#fae18e',
    },
    dropdownContainer: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '95%',
        marginVertical: 40,
    },
    dropdown: {
        height: 50,
        width: '90%',
        padding: 15,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        marginHorizontal: 5,
         backgroundColor : '#fff',
    },
    input: {
        width: '80%',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginTop: 30,
        marginBottom: 30,
        backgroundColor: '#fff'
    },
    button: {
         backgroundColor: '#e93224',
        padding: 15,
        borderRadius: 10
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        padding: 15,
        justifyContent: 'center'
    }
})