import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const PaymentSucess = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={{alignSelf: 'center', marginTop: 200}}>
        <Image
          style={{width: 150, height: 120}}
          source={require('../assets/payment_success.png')}
        />
      </View>
      <Text
        style={{
          textAlign: 'center',
          marginTop: 15,
          fontSize: 25,
          fontWeight: 'bold',
          color: '#7AC043',
        }}>
        Your Order Is Placed
      </Text>

      <Text style={{textAlign: 'center', color: '#7AC043'}}>
        You Can Track Your Order By Clicking Below
      </Text>

      <TouchableOpacity onPress={() => navigation.navigate('YourOrders')}>
        <Text
          style={{
            backgroundColor: '#7AC043',
            marginHorizontal: 80,
            textAlign: 'center',
            color: 'white',
            padding: 10,
            fontSize: 18,
            borderRadius: 10,
            marginTop: 30,
          }}>
          Go To Your Orders
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentSucess;
