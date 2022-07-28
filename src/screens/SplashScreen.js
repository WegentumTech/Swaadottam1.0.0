import {View, Text,Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from "../styles/globalStyles";
const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View  style={{flex:1}}>
    <View style={{flex:1,justifyContent:"center"}} >

    <Image
      style={styles.tinyLogo}
      source={require('../assets/SplashLogo.png')}
      />
    
      </View>
  </View>
  );
};

export default SplashScreen;
