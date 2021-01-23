import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

export default function OrdersTabScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Orders</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            {/*<EditScreenInfo path="/screens/TabOneScreen.tsx" />*/}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
