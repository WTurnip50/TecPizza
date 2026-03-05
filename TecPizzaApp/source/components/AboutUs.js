import React from "react";
import { StyleSheet, SafeAreaView, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';


export default function AboutUs() {
    const navigation = useNavigation()

    const goBackToHome = () => {
        navigation.goBack()
    }

    const goBackToLogin = () => {
        navigation.replace('Login')
    }
    return (
        <SafeAreaView style={styles.Container}>
            <Text>Acerca de TecPizza App</Text>
            <Text>En TecPizza App nos comprometemos a cuidar tu informacion</Text>
            <Text>Nuestra mision es ofrecer a los estudiantes del tecnologico</Text>
            <Text>Pizzas artesanales de buena calidad y precio accesible</Text>
            <TouchableOpacity
                style={styles.Button}
                onPress={goBackToHome}
            >
                <Text style={styles.buttonText}>Volver a pantalla anterior</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.Button}
                onPress={goBackToLogin}
            >
                <Text style={styles.buttonText}>Salir</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create(
    {
        Container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
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