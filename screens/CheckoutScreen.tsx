import React, {useContext} from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {Text, View} from "../components/Themed";
import  styles from '../styles/checkout';
import {Image, ScrollView, TouchableOpacity} from "react-native";
import {formatCurrency} from "../utils/number";
import {AppButton} from "../components/buttons";
import {CartContext} from "../context/cartContext";
import {ThemePrimaryColor} from "../constants/Colors";
import NumericInput from "react-native-numeric-input";
import {EvilIcons, Feather} from "@expo/vector-icons";

const CheckOutStack = createStackNavigator();

function CheckoutScreen() {
    return(
        <CheckOutStack.Navigator>
            <CheckOutStack.Screen
                name="Checkout"
                component={CheckoutComponent}
                options={{title: 'Checkout', headerBackTitleVisible: false}}
             />
        </CheckOutStack.Navigator>
    );
}

const CheckoutComponent = ({navigation}) => {
    const {cart, setCartItems, removeItem, cartAmount} = useContext(CartContext);

    return(
        <>
            <View style={styles.body}>
                <View style={styles.paymentContainer}>
                    <View style={{marginBottom: 30}}>
                        <Text>Payment</Text>
                        <View style={styles.listContainer}>
                            <Image style={styles.listItemImg} source={require("../assets/images/cash-on-delivery.png")} />
                            <View style={{justifyContent: "center", backgroundColor: 'transparent', paddingLeft: 15, width: '87%'}}>
                                <Text style={{fontSize: 16, fontWeight: "600"}}>Cash on Delivery</Text>
                                <Text style={{fontSize: 14, fontWeight: "500", color: '#828282'}}>
                                    The payment will be collected by the courier on delivery
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text>Delivery</Text>
                        <View style={styles.listContainer}>
                            <Image style={styles.listItemImg} source={require("../assets/images/map-pin.png")} />
                            <View style={{justifyContent: "center", backgroundColor: 'transparent', paddingLeft: 10, width: '87%'}}>
                                <View style={{flexDirection: 'row', backgroundColor: 'transparent', alignItems: 'center'}}>
                                    <Text style={{fontSize: 16, fontWeight: "600"}}>Maison Damas</Text>
                                    <EvilIcons name="chevron-down" size={28} color="black" />
                                </View>
                                <Text numberOfLines={3} style={{fontSize: 14, fontWeight: "500", color: '#828282'}}>
                                    Maison damas behind the pharmarcy on delivery
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.totalPreview}>
                    <View style={{justifyContent: "center", backgroundColor: 'transparent', marginBottom: 15, width: '100%'}}>
                        <Text style={{fontSize: 16, fontWeight: "600", marginBottom: 5}}>Delivery fee</Text>
                        <Text style={{fontSize: 14, fontWeight: "500", color: '#828282'}}>
                            The delivery fee will be available once the your order is confirmed
                        </Text>
                    </View>
                    <Text>Subtotal</Text>
                    <Text style={styles.subTotal}>{formatCurrency(cartAmount)}</Text>
                    <AppButton title={'Place your order'} onPress={() => {navigation.navigate('Checkout')}} />
                </View>
            </View>
        </>
    );
};

export default CheckoutScreen;
