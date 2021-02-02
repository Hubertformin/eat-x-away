import {Image, StyleSheet, TouchableOpacity} from "react-native";
import {ThemePrimaryColor} from "../constants/Colors";
import {View, Text} from "./Themed";
import * as React from "react";
import {Feather} from "@expo/vector-icons";
import {useContext} from "react";
import {CartContext} from "../context/cartContext";

export function AppBar({style = {}, navigation}) {
    const {cart} = useContext(CartContext);
    return (
        <View style={{...style, ...styles.container}}>
            <View style={styles.titleContainer}>
                <Image style={styles.logoImg} source={require('../assets/images/logo-45.png')} />
                <Text style={styles.title}>Eat</Text><Text style={{...styles.title, color: ThemePrimaryColor}}>Away</Text>
            </View>
            <View style={{position: "relative"}}>
                <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                    <Feather name="shopping-bag" size={28} color="#666666" />
                    {
                        cart.length > 0 ? <View style={{position: "absolute", backgroundColor: 'red', height: 10, width: 10, borderRadius: 50, top: -1, right: -1}}/> : null
                    }
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    logoImg: {
        height: 35,

    },
    titleContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
