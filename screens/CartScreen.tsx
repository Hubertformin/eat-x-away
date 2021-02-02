import React, {useContext} from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from "react-native";
import {ThemePrimaryColor} from "../constants/Colors";
import {CartContext} from "../context/cartContext";
import {formatCurrency} from "../utils/number";
import NumericInput from "react-native-numeric-input";
import {Feather} from "@expo/vector-icons";
import {AppButton} from "../components/buttons";
import {translate} from "../i18n";

const CartStack = createStackNavigator();

export default function CartScreen() {
    return(
        <CartStack.Navigator>
            <CartStack.Screen
                name="Cart"
                component={CartComponent}
                options={{title: 'My Cart', headerBackTitleVisible: false}}
            />
        </CartStack.Navigator>
    )
}

const CartComponent = ({navigation}) => {
    const {cart, setCartItems, removeItem, cartAmount} = useContext(CartContext);

    function updateItemQty(index: number, value: number) {
        const _cart = cart;
        _cart[index].orderQuantity = value;
        setCartItems([..._cart]);
    }

    return(
      <View style={styles.view}>
          <View style={styles.itemsContainer}>
              <ScrollView>
                  {
                      cart.map((item, index) => {
                          return(
                              <View key={`cart-o-v-${item.id}`} style={styles.listContainer}>
                                  <View key={`b-o-v-${item.id}`} style={styles.listItem}>
                                      <Image style={styles.listItemImg} source={{uri: item.imageUrl}} />
                                      <View style={{justifyContent: "center", backgroundColor: 'transparent', paddingHorizontal: 15}}>
                                          <Text key={`b-t-it-${item.id}`} style={{fontSize: 16, fontWeight: "500"}}>{item.name}</Text>
                                          <Text key={`b-p-it-${item.id}`} style={{fontSize: 14, fontWeight: "500", color: ThemePrimaryColor}}>{formatCurrency(item.orderQuantity * item.unitPrice)}</Text>
                                          <NumericInput borderColor={'transparent'}
                                                        minValue={1}
                                                        value={item.orderQuantity}
                                                        leftButtonBackgroundColor={'#fff'}
                                                        rightButtonBackgroundColor={'#fff'}
                                                        containerStyle={{backgroundColor: '#fff', marginTop: 7}}
                                                        onChange={value => updateItemQty(index, value)}
                                          />
                                      </View>
                                  </View>
                                  <TouchableOpacity onPress={() => removeItem(item.id)}>
                                      <Feather name="trash" style={{marginRight: 5}} size={20} color="black" />
                                  </TouchableOpacity>
                              </View>
                          );
                      })
                  }
              </ScrollView>
          </View>
          <View style={styles.totalPreview}>
              <Text>Subtotal</Text>
              <Text style={styles.subTotal}>{formatCurrency(cartAmount)}</Text>
              <AppButton title={'Checkout'} onPress={() => {}} />
          </View>
      </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        padding: 15,
        backgroundColor: 'white',
    },
    itemsContainer: {
        flexGrow: 25
    },
    totalPreview: {
        flexGrow: 1,
        borderRadius: 7,
        backgroundColor: '#F9F9F9',
        padding: 15,
        justifyContent: 'flex-end'
    },
    listContainer: {
        flexDirection: "row",
        backgroundColor: '#F9F9F9',
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 7,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginBottom: 15
    },
    listItem: {
        flexDirection: "row",
    },
    listItemImg: {
        height: 73,
        width: 73,
        borderRadius: 7
    },
    subTotal: {
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 5
    }
});
