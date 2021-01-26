import {Image, StyleSheet} from "react-native";
import {LobsterText} from "./StyledText";
import {ThemePrimaryColor} from "../constants/Colors";
import {View, Text} from "./Themed";
import * as React from "react";
import {Zocial} from "@expo/vector-icons";

export function AppBar({style = {}}) {
    return (
        <View style={{...style, ...styles.container}}>
            <View style={styles.titleContainer}>
                <Image style={styles.logoImg} source={require('../assets/images/logo-45.png')} />
                <Text style={styles.title}>Eat</Text><Text style={{...styles.title, color: ThemePrimaryColor}}>Away</Text>
            </View>
            <View>
                <Zocial name="cart" size={24} color={'#666666'} />
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
