import {View, Text, ScrollView, TextInput,TouchableOpacity} from 'react-native';
import React from 'react';
import PressBack from './Reusable/PressBack';
import styles from '../styles/globalStyles';

const BillingAndPayment = () => {
  return (
    <View View style={{backgroundColor: 'white', height: '100%'}}>
      <PressBack />
      <ScrollView>
        <Text
          style={{
            color: '#0A191E',
            fontSize: 20,
            marginLeft: 20,
            marginTop: 20,
            fontWeight: 'bold',
          }}>
          Billing & Payment
        </Text>

        <View style={{marginHorizontal: 30, marginTop: 20}}>
          <View>
            <TextInput style={styles.billingInput} />
            <Text
              style={{
                color: 'black',
                backgroundColor: 'white',
                position: 'absolute',
                top: 5,
                left: 12,
              }}>
              Billing Name
            </Text>
          </View>
        </View>

        <View style={{marginHorizontal: 30, marginTop: 20}}>
          <View>
            <TextInput style={styles.billingInput} />
            <Text
              style={{
                color: 'black',
                backgroundColor: 'white',
                position: 'absolute',
                top: 5,
                left: 12,
              }}>
              Address
            </Text>
          </View>
        </View>

        <View style={{marginHorizontal: 30, marginTop: 20}}>
          <View>
            <TextInput style={styles.billingInput} />
            <Text
              style={{
                color: 'black',
                backgroundColor: 'white',
                position: 'absolute',
                top: 5,
                left: 12,
              }}>
              Contact Number
            </Text>
          </View>
        </View>

        <View style={{marginHorizontal: 30, marginTop: 20}}>
          <View>
            <TextInput style={styles.billingInput} />
            <Text
              style={{
                color: 'black',
                backgroundColor: 'white',
                position: 'absolute',
                top: 5,
                left: 12,
              }}>
              Area Code
            </Text>
          </View>
        </View>

        <View style={{marginHorizontal: 30, marginTop: 20}}>
          <View>
            <TextInput
              multiline={true}
              numberOfLines={4}
              style={styles.billingInput}
            />
            <Text
              style={{
                color: 'black',
                backgroundColor: 'white',
                position: 'absolute',
                top: 5,
                left: 12,
              }}>
              Remark
            </Text>
          </View>
        </View>

        <View style={{alignSelf: 'center', marginTop: 20}}>
            <TouchableOpacity>
          <Text style={styles.button2}>Submit</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default BillingAndPayment;
