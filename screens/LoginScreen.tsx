import {StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {AppInputGroup} from "../components/appInput";
import {ThemePrimaryColor} from "../constants/Colors";
import {AppButton} from "../components/buttons";
import {translate} from "../i18n";

const LoginStack = createStackNavigator();

export default function LoginScreen() {
    return (
       <LoginStack.Navigator>
           <LoginStack.Screen
               name={"Login"}
               component={LoginComponent}
               options={{headerShown: false}}
           />
       </LoginStack.Navigator>
    )
}

const LoginComponent = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../assets/images/logo-45.png')} />
                <View style={{height: 20}} />
                {/*<LobsterText style={styles.title}>EatAWay</LobsterText>*/}
                <Text style={styles.subtitle}>{translate('login.title')}</Text>
                <Text>{translate('login.text')}</Text>
            </View>
            <View style={{height: 30}} />
            <AppInputGroup placeholder={translate('emailLabel')} />
            <AppInputGroup placeholder={translate('passwordLabel')} secureTextEntry={true} />
            <View style={{flexDirection: "row",justifyContent: "flex-end"}}><Text>{translate('login.forgotPassword')}</Text></View>
            <View style={{height: 20}} />
            <AppButton title={translate('signIn')} onPress={() => {}} />
            <View style={{flexDirection: "row", paddingVertical: 15}}>
                <Text style={{fontSize: 15, marginRight: 5}}>{translate('login.noAccount')}</Text>
                <TouchableOpacity onPress={() => {navigation.navigate('SignUp')}}><Text style={{color: ThemePrimaryColor, fontSize: 15}}>{translate('signUp')}</Text></TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        // alignItems: "center",
        paddingHorizontal: 25,
        alignSelf: "stretch",
        justifyContent: "center"
    },
    header: {
        flexDirection: "column",
        alignItems: "center",
        alignSelf: "stretch",
        justifyContent: "center"
    },
    title: {
      color: ThemePrimaryColor,
        fontWeight: "500",
        fontSize: 28,
        marginBottom: 15
    },
    subtitle: {
      fontWeight: "bold",
      fontSize: 22,
        marginBottom: 5
    },
})