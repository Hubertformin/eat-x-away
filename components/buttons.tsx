import React from "react";
import {Text, TouchableOpacity, StyleSheet} from "react-native";
import {ThemePrimaryColor} from "../constants/Colors";

export function AppButton({onPress, title}: {onPress: any, title: string}) {
    return(
        <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    // ...
    appButtonContainer: {
        elevation: 8,
        backgroundColor: ThemePrimaryColor,
        borderRadius: 7,
        paddingVertical: 15,
        paddingHorizontal: 12,
    },
    appButtonText: {
        fontSize: 15,
        color: "#fff",
        alignSelf: "center",
    }
});