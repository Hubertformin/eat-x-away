import React from "react";
import {Text, TouchableOpacity, StyleSheet, ActivityIndicator, View, StyleProp, ViewStyle} from "react-native";
import {ThemePrimaryColor} from "../constants/Colors";

export function AppButton({onPress, title, loading = false, style = {}}: {onPress: any, title: string, loading?: boolean, style?: any}) {
    return !loading ? (
        <TouchableOpacity onPress={onPress} style={{...style, ...styles.appButtonContainer}}>
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
