import React from "react";
import {StyleSheet, TextInput, TextInputProps} from "react-native";
import {View, Text} from "react-native";

interface AppTextInputProps extends TextInputProps {
    label?: string;
}

export function AppInputGroup({ ...props}: AppTextInputProps) {
    return(
        <View style={styles.container}>
            <Text style={styles.label}>{props.label ? props.label : props.placeholder}</Text>
            <TextInput placeholder={props.placeholder} style={styles.input} { ...props} placeholderTextColor="#828282" />
        </View>
    )
}


/*export function AppMaskedInput({label}) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInputMask
                onChangeText={(formatted, extracted) => {
                    console.log(formatted)
                    console.log(extracted)
                }}
                style={styles.input}
                refInput={ref => {}}
                mask={"+1 ([000]) [000] [00] [00]"}
            />
        </View>
    );
}*/

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignSelf: "stretch",
        justifyContent: "center",
        paddingBottom: 25
    },
    label: {
        marginBottom: 5,
        marginLeft: 5
    },
    input: {
        backgroundColor: "#EAEAEC",
        paddingVertical: 10,
        paddingHorizontal: 15,
        // minWidth: 300,
        height: 50,
        display: "flex",
        borderRadius: 7,
    }
})