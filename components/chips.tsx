import React from "react";
import {View, StyleSheet, Text} from "react-native";
import {ThemePrimaryColor, ThemePrimaryColorLight} from "../constants/Colors";


export default function AppChips({text, active = false}) {
    return (
      <View style={active ? styles.activeContainer : styles.container}>
          <Text style={active ? styles.activeText : styles.text}>{text}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: ThemePrimaryColorLight,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginHorizontal: 5,
        borderRadius: 50
    },
    activeContainer: {
        backgroundColor: ThemePrimaryColor,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginHorizontal: 5,
        borderRadius: 50
    },
    text: {
        color: ThemePrimaryColor
    },
    activeText: {
        color: 'white'
    }
});