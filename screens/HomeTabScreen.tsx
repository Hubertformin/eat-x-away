import * as React from 'react';
import {ImageBackground, SafeAreaView, ScrollView, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Text, View } from '../components/Themed';
import {ThemePrimaryColor} from "../constants/Colors";
import {AppBar} from "../components/appBar";
import {EvilIcons} from "@expo/vector-icons";
import AppChips from "../components/chips";
import {formatCurrency} from "../utils/number";
import {useContext, useState} from "react";
import { BottomSheet } from 'react-native-btr';
import NumericInput from 'react-native-numeric-input'
import {ItemModel} from "../models/item";
import {AppButton} from "../components/buttons";
import {CartContext} from "../context/cartContext";
import {Notifier, NotifierComponents} from "react-native-notifier";

const mostOrdered: ItemModel[] = [
    {id: '1', name: 'Classic burger', unitPrice: 1500, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/go-eat-away.appspot.com/o/5OlIYjR?alt=media&token=3e246372-033e-4d97-ad4f-c14927da93c1'},
    {id: '2', name: 'Breaded chicken', unitPrice: 2500, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/go-eat-away.appspot.com/o/9xpNdNC?alt=media&token=61e7b8b3-bff6-4ecb-aedf-9f1488844e3e'},
    {id: '3', name: 'Cheese burger', unitPrice: 2000, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/go-eat-away.appspot.com/o/Hzqq7VE?alt=media&token=7e1a8cc4-2a60-4125-bd40-d9e5197646eb'},
    {id: '4', name: 'Bacon burger', unitPrice: 2000, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/go-eat-away.appspot.com/o/ixcc5H1?alt=media&token=a4ec46bb-c5f5-462c-97c1-252d80288ed9'},
];

export default function HomeTabScreen({navigation}) {
    const {addToCart} = useContext(CartContext);

    const [itemModalVisible, setItemModalVisible] = useState(false);
    const [addressModalVisible, setAddressModalVisible] = useState(false);
    const [menuItems, setMenuItems] = useState<ItemModel[]>(mostOrdered);
    const [selectedItem, setSelectedItem] = useState<ItemModel>();
    const [mostItems, setMostItems] = useState<ItemModel[]>(mostOrdered);

    const toggleItemBottomNav = (item: ItemModel) => {
        item.orderQuantity = 1;
        setSelectedItem(item);
        //Toggling the visibility state of the bottom sheet
        setItemModalVisible(!itemModalVisible);
    };

    const toggleAddressBottomNav = () => {
        //Toggling the visibility state of the bottom sheet
        setAddressModalVisible(!addressModalVisible);
    };

    const addItemToCart = () => {
        addToCart(selectedItem);
        setItemModalVisible(false);
        // show notification
        Notifier.showNotification({
            title: `${selectedItem?.name} was added to cart!`,
            // description: 'Check your internet connection, please',
            onPress: () => navigation.navigate('Cart'),
            Component: NotifierComponents.Alert,
            componentProps: {
                alertType: 'success',
            },
        });
    };

  return (
      <SafeAreaView style={{flex: 1, flexGrow: 1, backgroundColor: 'white'}}>
        <View style={styles.toolBar}>
          <AppBar navigation={navigation} />
          <View style={{paddingHorizontal: 15, marginTop: 7, paddingBottom: 10}}>
            <Text style={{color: ThemePrimaryColor, fontSize: 12, fontWeight: "500"}}>DELIVER TO</Text>
            <TouchableOpacity onPress={toggleAddressBottomNav}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{fontSize: 17}}>Maison Damas</Text><EvilIcons name="chevron-down" size={28} color="black" />
                </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container}>
          <ScrollView style={{ marginBottom: 100}}>

              <View style={styles.mostOrderContainer}>
                  <Text style={{fontSize: 16, fontWeight: "bold"}}>Most ordered</Text>
                  <ScrollView horizontal={true} style={{paddingVertical: 15}}>
                      {
                          mostItems.map(item => {
                              return(
                                  <TouchableOpacity key={`m-o-tclick-${item.id}`} onPress={() => toggleItemBottomNav(item)}>
                                      <View key={`m-o-v-${item.id}`} style={styles.mostOrderItem}>
                                          <ImageBackground  style={styles.mostOrderedImgBg}
                                                            key={`m-o-ibg-${item.id}`}
                                                            imageStyle={{ borderRadius: 7}}
                                                            source={{uri: item.imageUrl}}
                                          >
                                              <LinearGradient
                                                  // Background Linear Gradient
                                                  colors={['transparent', 'rgba(0,0,0,1)',]}
                                                  style={styles.mostOrderedImgBgOverlay}
                                              >
                                                  <Text key={`m-o-it-t-${item.id}`} style={{fontSize: 16, fontWeight: "500", color: 'white'}}>{item.name}</Text>
                                                  <Text key={`m-o-it-p-${item.id}`} style={{fontSize: 14, fontWeight: "500", color: ThemePrimaryColor}}>{formatCurrency(item.unitPrice)}</Text>
                                              </LinearGradient>
                                          </ImageBackground>
                                      </View>
                                  </TouchableOpacity>
                              );
                          })
                      }
                  </ScrollView>

              </View>

              <ScrollView horizontal={true} style={{paddingBottom: 10, paddingLeft: 15}}>
                  <AppChips text={'Burgers'} active={true} />
                  <AppChips text={'Sharwarma'} />
                  <AppChips text={'Ice cream'} />
                  <AppChips text={'Drinks'} />
                  <AppChips text={'Cocktails'} />
                  <AppChips text={'Natural fruit juice'} />
              </ScrollView>

              <View style={styles.browseItemContainer}>
                  <Text style={{fontSize: 16, marginBottom: 10, fontWeight: "bold"}}>Browse</Text>
                  {
                      menuItems.map(item => {
                          return(
                              <TouchableOpacity key={`b-o-tclick-${item.id}`} onPress={() => toggleItemBottomNav(item)}>
                                  <View key={`b-o-v-${item.id}`} style={styles.browseListItem}>
                                      <Image style={styles.browseListItemImg} source={{uri: item.imageUrl}} />
                                      <View style={{justifyContent: "center", backgroundColor: 'transparent', paddingHorizontal: 15}}>
                                          <Text key={`b-t-it-${item.id}`} style={{fontSize: 16, fontWeight: "500"}}>{item.name}</Text>
                                          <Text key={`b-p-it-${item.id}`} style={{fontSize: 14, fontWeight: "500", color: ThemePrimaryColor}}>{formatCurrency(item.unitPrice)}</Text>
                                      </View>
                                  </View>
                              </TouchableOpacity>
                          );
                      })
                  }

              </View>

          </ScrollView>

            <BottomSheet
                visible={itemModalVisible}
                //setting the visibility state of the bottom shee
                onBackButtonPress={toggleItemBottomNav}
                //Toggling the visibility state on the click of the back botton
                onBackdropPress={toggleItemBottomNav}
                //Toggling the visibility state on the clicking out side of the sheet
            >
                {/*Bottom Sheet inner View*/}
                <View style={styles.itemBottomNav}>
                    <View
                        style={{
                            flex: 1,
                            // flexDirection: 'column',
                            alignItems: "flex-start",
                            justifyContent: "space-between"
                        }}>
                        <View style={{flexDirection: 'row', alignSelf: "stretch"}}>
                            <Image style={{height: 71, width: 71, borderRadius: 50}} source={{uri: selectedItem?.imageUrl}} />
                            <View style={{justifyContent: "center", paddingHorizontal: 15}}>
                                <Text style={{fontSize: 17, fontWeight: "500"}}>{ selectedItem?.name}</Text>
                                <Text style={{fontSize: 20, fontWeight: "500", color: ThemePrimaryColor}}>{formatCurrency( selectedItem?.unitPrice)}</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignSelf: "stretch"}}>
                            <NumericInput borderColor={'transparent'}
                                          minValue={1}
                                          value={selectedItem?.orderQuantity}
                                          leftButtonBackgroundColor={'#F5F5F8'}
                                          rightButtonBackgroundColor={'#F5F5F8'}
                                          containerStyle={{backgroundColor: '#F5F5F8', paddingHorizontal: 20}}
                                          onChange={value => setSelectedItem({...selectedItem, orderQuantity: value})}
                            />
                            <AppButton style={{marginLeft: 10, paddingLeft: 45, paddingRight: 45}} onPress={() => addItemToCart()} title={'Add to cart'} />
                        </View>
                    </View>
                </View>
            </BottomSheet>
            {/*address bottom nav*/}
            <BottomSheet
                visible={addressModalVisible}
                //setting the visibility state of the bottom shee
                onBackButtonPress={toggleAddressBottomNav}
                //Toggling the visibility state on the click of the back botton
                onBackdropPress={toggleAddressBottomNav}
                //Toggling the visibility state on the clicking out side of the sheet
            >
                {/*Bottom Sheet inner View*/}
                <View style={styles.addressBottomNav}>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        }}>
                        <Text
                            style={{
                                textAlign: 'center',
                                padding: 20,
                                fontSize: 16,
                            }}>
                            Choose delivery location
                        </Text>
                    </View>
                </View>
            </BottomSheet>
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    toolBar: {
        flexGrow: 1
    },
    container: {
    // paddingHorizontal: 15,
    backgroundColor: 'white',
    flexGrow: 28,
  },
    mostOrderContainer: {
      paddingLeft: 15,
        paddingVertical: 20
    },
    mostOrderItem: {
      width: 146,
        height: 174,
        backgroundColor: '#000',
        borderRadius: 10,
        flex: 1,
        marginHorizontal: 7
    },
    mostOrderedImgBg: {
      flex: 1,
    },
    mostOrderedImgBgOverlay: {
        flex: 1,
        padding: 10,
        borderRadius: 7,
        justifyContent: "flex-end",
    },
    browseItemContainer: {
        paddingHorizontal: 15,
        paddingTop: 15,
    },
    browseListItem: {
      flexDirection: "row",
        backgroundColor: '#F9F9F9',
        borderRadius: 7,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginBottom: 15
    },
    browseListItemImg: {
      height: 60,
        width: 60,
        borderRadius: 7
    },
    addressBottomNav: {
        backgroundColor: '#fff',
        width: '100%',
        height: 350,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemBottomNav: {
        backgroundColor: '#fff',
        width: '100%',
        height: 210,
        padding: 30,
    },
});
