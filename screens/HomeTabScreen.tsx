import * as React from 'react';
import {ImageBackground, SafeAreaView, ScrollView, StyleSheet, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Text, View } from '../components/Themed';
import {ThemePrimaryColor} from "../constants/Colors";
import {AppBar} from "../components/appBar";
import {EvilIcons} from "@expo/vector-icons";
import AppChips from "../components/chips";
import {formatCurrency} from "../utils/number";

const mostOrdered = [
    {id: '1', name: 'Classic burger', price: 1500, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/go-eat-away.appspot.com/o/5OlIYjR?alt=media&token=3e246372-033e-4d97-ad4f-c14927da93c1'},
    {id: '2', name: 'Breaded chicken', price: 2500, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/go-eat-away.appspot.com/o/9xpNdNC?alt=media&token=61e7b8b3-bff6-4ecb-aedf-9f1488844e3e'},
    {id: '3', name: 'Cheese burger', price: 2000, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/go-eat-away.appspot.com/o/Hzqq7VE?alt=media&token=7e1a8cc4-2a60-4125-bd40-d9e5197646eb'},
    {id: '4', name: 'Bacon burger', price: 2000, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/go-eat-away.appspot.com/o/ixcc5H1?alt=media&token=a4ec46bb-c5f5-462c-97c1-252d80288ed9'},
]

export default function HomeTabScreen() {
  return (
      <SafeAreaView style={{flex: 1, flexGrow: 1, backgroundColor: 'white'}}>
        <View style={styles.toolBar}>
          <AppBar />
          <View style={{paddingHorizontal: 15, marginTop: 7, paddingBottom: 10}}>
            <Text style={{color: ThemePrimaryColor, fontSize: 12, fontWeight: "500"}}>DELIVER TO</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontSize: 17}}>Maison Damas</Text><EvilIcons name="chevron-down" size={28} color="black" />
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <ScrollView style={{ marginBottom: 100}}>

              <View style={styles.mostOrderContainer}>
                  <Text style={{fontSize: 16, fontWeight: "bold"}}>Most ordered</Text>
                  <ScrollView horizontal={true} style={{paddingVertical: 15}}>
                      {
                          mostOrdered.map(item => {
                              return(
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
                                              {/*<Text key={`m-o-it-t-${item.id}`} style={{fontSize: 16, fontWeight: "500", color: 'white'}}>{item.name}</Text>*/}
                                              <Text key={`m-o-it-p-${item.id}`} style={{fontSize: 14, fontWeight: "500", color: ThemePrimaryColor}}>{formatCurrency(item.price)}</Text>
                                          </LinearGradient>
                                      </ImageBackground>
                                  </View>
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
                      mostOrdered.reverse().map(item => {
                          return(
                              <View key={`b-o-v-${item.id}`} style={styles.browseListItem}>
                                  <Image style={styles.browseListItemImg} source={{uri: item.imageUrl}} />
                                  <View style={{justifyContent: "center", backgroundColor: 'transparent', paddingHorizontal: 15}}>
                                      <Text key={`b-t-it-${item.id}`} style={{fontSize: 16, fontWeight: "500"}}>{item.name}</Text>
                                      <Text key={`b-p-it-${item.id}`} style={{fontSize: 14, fontWeight: "500", color: ThemePrimaryColor}}>{formatCurrency(item.price)}</Text>
                                  </View>
                              </View>
                          );
                      })
                  }

              </View>

          </ScrollView>
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
        backgroundColor: 'red',
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
    }
});
