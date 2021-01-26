import {StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import React, {useState} from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {AppInputGroup} from "../components/appInput";
import {ThemePrimaryColor} from "../constants/Colors";
import {AppButton} from "../components/buttons";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {UserModel} from "../models/user";
import {translate} from "../i18n";

const SignUpStack = createStackNavigator();

export default function SignUpScreen() {
    return (
        <SignUpStack.Navigator>
            <SignUpStack.Screen
                name={"Login"}
                component={SignUpComponent}
                options={{headerShown: false}}
            />
        </SignUpStack.Navigator>
    )
}


const SignUpComponent = ({navigation}) => {
    const [userForm, setUserForm] = useState<UserModel>({});
    const [loading, setLoading] = useState<boolean>(false);

    function createAccount() {
        // console.log(userForm);
        navigation.navigate('Root');
    }

    return (
        <KeyboardAwareScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={require('../assets/images/logo-45.png')} />
                    <View style={{height: 20}} />
                    {/*<LobsterText style={styles.title}>EatAWay</LobsterText>*/}
                    <Text style={styles.subtitle}>{translate('signUpView.title')}</Text>
                    <Text>{translate('signUpView.text')}</Text>
                </View>
                <View style={{height: 30}} />
                <AppInputGroup
                    placeholder={translate('nameLabel')}
                    onChangeText={(text) => {
                        setUserForm({...userForm, name: text});
                    }}
                />

                <AppInputGroup
                    placeholder={translate('emailLabel')}
                    onChangeText={(text) => {
                        setUserForm({...userForm, email: text});
                    }}
                />

                <AppInputGroup
                    placeholder={translate('passwordLabel')}
                    secureTextEntry={true}
                    onChangeText={(text) => {
                        setUserForm({...userForm, password: text});
                    }}
                />

                <AppInputGroup
                    label={translate('phoneNumberLabel')}
                    placeholder="+237 6XX XX XX XX"
                    keyboardType="phone-pad"
                    onChangeText={(text) => {
                        setUserForm({...userForm, phoneNumber: text});
                    }}
                />

                <AppButton title={translate('signUpView.actionBtn')} loading={loading} onPress={createAccount} />

                <View style={{flexDirection: "row", paddingVertical: 15}}>
                    <Text style={{fontSize: 15, marginRight: 5}}>{translate('signUpView.haveAccount')}</Text>
                    <TouchableOpacity onPress={() => {navigation.navigate('Login')}}><Text style={{color: ThemePrimaryColor, fontSize: 15}}>{translate('signIn')}</Text></TouchableOpacity>
                </View>
            </View>
        </KeyboardAwareScrollView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        // alignItems: "center",
        paddingHorizontal: 25,
        paddingTop: 35,
        // alignSelf: "stretch",
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