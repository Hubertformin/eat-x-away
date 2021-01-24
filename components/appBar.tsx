import {Image, StyleSheet} from "react-native";
import {LobsterText} from "./StyledText";
import {ThemePrimaryColor} from "../constants/Colors";
import {View} from "./Themed";
import * as React from "react";

export function AppBar() {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Image style={styles.logoImg} source={require('../assets/images/logo-45.png')} />
                <LobsterText style={styles.title}>Eat</LobsterText><LobsterText style={{...styles.title, color: ThemePrimaryColor}}>Away</LobsterText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 25,
        paddingHorizontal: 15,
        height: 75
    },
    logoImg: {
        height: 45,

    },
    titleContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
});
