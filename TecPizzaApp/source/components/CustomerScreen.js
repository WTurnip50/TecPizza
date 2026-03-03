import React from "react";
import { StyleSheet, SafeAreaView, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function CustomerScreen(){
    return(
        <SafeAreaView style={styles.Container}>
            <Text style={styles.Text}>Menú de clientes</Text>
            <SafeAreaView style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.buttonText}>Volver al Menu</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('Us')}>
                    <Text style={styles.buttonText}>Realizar una Orden</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button} onPress={() => navigation.replace('Login')}>
                    <Text style={styles.buttonText}>Salir</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </SafeAreaView>
    )
}