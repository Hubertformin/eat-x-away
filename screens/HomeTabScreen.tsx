import * as React from 'react';
import {StyleSheet} from 'react-native';

import { Text, View } from '../components/Themed';
import {ThemePrimaryColor} from "../constants/Colors";
import {AppBar} from "../components/appBar";

export default function HomeTabScreen() {
  return (
    <View>
      <AppBar />
      <View style={{backgroundColor: ThemePrimaryColor, flexGrow: 1}}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 35,
    paddingHorizontal: 15
  },
  logoImg: {
    height: 45,

  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
