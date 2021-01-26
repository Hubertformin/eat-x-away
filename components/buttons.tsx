import React from "react";
import {Text, TouchableOpacity, StyleSheet, ActivityIndicator, View} from "react-native";
import {ThemePrimaryColor} from "../constants/Colors";

export function AppButton({onPress, title, loading = false}: {onPress: any, title: string, loading?: boolean}) {
    return !loading ? (
        <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
    ) : (
        <View style={styles.loadingAppButton}>
            <ActivityIndicator size="small" color="#fff" />
        </View>
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
    loadingAppButton: {
        elevation: 8,
        backgroundColor: ThemePrimaryColor,
        borderRadius: 7,
        paddingVertical: 15,
        paddingHorizontal: 12,
        opacity: 0.7
    },
    appButtonText: {
        fontSize: 15,
        color: "#fff",
        alignSelf: "center",
    }
});