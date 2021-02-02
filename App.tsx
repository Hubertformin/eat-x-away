import { StatusBar } from 'expo-status-bar';
import React from 'react';
// @ts-ignore
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { NotifierWrapper } from 'react-native-notifier';
import CartContextProvider from "./context/cartContext";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
        <CartContextProvider>
          <NotifierWrapper>
            <SafeAreaProvider>
              <Navigation colorScheme={"light"} />
              <StatusBar style="dark" />
            </SafeAreaProvider>
          </NotifierWrapper>
        </CartContextProvider>
    );
  }
}
