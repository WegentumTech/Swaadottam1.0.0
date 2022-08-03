import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import PressBack from '../components/Reusable/PressBack';
import styles from '../styles/globalStyles';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {AuthKey} from '../helper/baseUrl';
import {AuthPassword} from '../helper/baseUrl';
import {BACKEND_URL} from '../helper/baseUrl';
import {SIMPLE_URL} from '../helper/baseUrl';
const Cart = () => {
  const [item, setItem] = useState(1);
  const navigation = useNavigation();
  const [datas, setDatas] = useState("")

  useEffect(() => {
    getCartData();
  }, []);

  const getCartData = async () => {
    const userId = await AsyncStorage.getItem('ActiveUserId');
    console.log(userId);

    try {
      axios
        .post(
          BACKEND_URL + 'getcart',
          {
            userid: userId,
          },
          {
            headers: {
              authkey: AuthKey,
              secretkey: AuthPassword,
            },
          },
        )
        .then(acc => {
          console.log(acc.data);
          setDatas(acc.data);

        })
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <PressBack />
      <ScrollView>
        <View style={{marginLeft: 10, marginTop: 30, flexDirection: 'row'}}>
          <Text style={styles.MainPageHead}>Your Order</Text>
          <Feather
            name="shopping-bag"
            size={20}
            color="black"
            style={{marginLeft: 20, marginTop: 3}}
          />
          <Text style={{color: 'black', marginLeft: 5, marginTop: 3}}>3</Text>
        </View>



        
        <View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                marginLeft: 15,
                marginTop: 20,
                flexDirection: 'row',
                flex: 1,
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('SingleMealScreen')}>
                <Image
                  style={styles.cartProductImage}
                  source={{
                    uri: 'https://images.contentstack.io/v3/assets/blt45c082eaf9747747/bltc1f5d681043ec5e0/5de0ba2ef1b4be78076c2a6a/Hot_meal_header_copy.jpg?width=1200&height=630&fit=crop',
                  }}
                />
              </TouchableOpacity>

              <View style={{flex: 1, marginLeft: 5}}>
                <Text
                  style={{fontWeight: 'bold', color: '#0A191E', fontSize: 18}}>
                  Fried Rice
                </Text>
                <Text style={{color: 'black'}}>
                  Lorem Ipsum some text some text some text
                </Text>
              </View>

              <View style={{flex: 1.5}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignSelf: 'center',
                    borderColor: '#F8774A',
                    borderWidth: 1.5,
                    borderStyle: 'solid',
                    borderRadius: 20,
                    paddingHorizontal: 20,
                  }}>
                  {item === 1 ? (
                    <Text
                      style={{
                        margin: 5,
                        fontSize: 20,
                        color: '#F8774A',
                        fontWeight: 'bold',
                      }}>
                      -
                    </Text>
                  ) : (
                    <Text
                      style={{
                        margin: 5,
                        fontSize: 20,
                        color: '#F8774A',
                        fontWeight: 'bold',
                      }}
                      onPress={() => setItem(item - 1)}>
                      -
                    </Text>
                  )}

                  <Text
                    style={{
                      margin: 5,
                      fontSize: 20,
                      color: '#F8774A',
                      fontWeight: 'bold',
                    }}>
                    {item}
                  </Text>
                  <Text
                    style={{
                      margin: 5,
                      fontSize: 20,
                      color: '#F8774A',
                      fontWeight: 'bold',
                    }}
                    onPress={() => setItem(item + 1)}>
                    +
                  </Text>
                </View>
              </View>
              <View style={{flex: 0.5, marginRight: 15}}>
                <Text
                  style={{alignSelf: 'flex-end', fontSize: 15, color: 'black'}}>
                  ₹100
                </Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                marginLeft: 15,
                marginTop: 20,
                flexDirection: 'row',
                flex: 1,
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('SingleMealScreen')}>
                <Image
                  style={styles.cartProductImage}
                  source={{
                    uri: 'https://images.contentstack.io/v3/assets/blt45c082eaf9747747/bltc1f5d681043ec5e0/5de0ba2ef1b4be78076c2a6a/Hot_meal_header_copy.jpg?width=1200&height=630&fit=crop',
                  }}
                />
              </TouchableOpacity>

              <View style={{flex: 1, marginLeft: 5}}>
                <Text
                  style={{fontWeight: 'bold', color: '#0A191E', fontSize: 18}}>
                  Fried Rice
                </Text>
                <Text style={{color: 'black'}}>
                  Lorem Ipsum some text some text some text
                </Text>
              </View>

              <View style={{flex: 1.5}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignSelf: 'center',
                    borderColor: '#F8774A',
                    borderWidth: 1.5,
                    borderStyle: 'solid',
                    borderRadius: 20,
                    paddingHorizontal: 20,
                  }}>
                  {item === 1 ? (
                    <Text
                      style={{
                        margin: 5,
                        fontSize: 20,
                        color: '#F8774A',
                        fontWeight: 'bold',
                      }}>
                      -
                    </Text>
                  ) : (
                    <Text
                      style={{
                        margin: 5,
                        fontSize: 20,
                        color: '#F8774A',
                        fontWeight: 'bold',
                      }}
                      onPress={() => setItem(item - 1)}>
                      -
                    </Text>
                  )}

                  <Text
                    style={{
                      margin: 5,
                      fontSize: 20,
                      color: '#F8774A',
                      fontWeight: 'bold',
                    }}>
                    {item}
                  </Text>
                  <Text
                    style={{
                      margin: 5,
                      fontSize: 20,
                      color: '#F8774A',
                      fontWeight: 'bold',
                    }}
                    onPress={() => setItem(item + 1)}>
                    +
                  </Text>
                </View>
              </View>
              <View style={{flex: 0.5, marginRight: 15}}>
                <Text
                  style={{alignSelf: 'flex-end', fontSize: 15, color: 'black'}}>
                  ₹100
                </Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                marginLeft: 15,
                marginTop: 20,
                flexDirection: 'row',
                flex: 1,
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('SingleMealScreen')}>
                <Image
                  style={styles.cartProductImage}
                  source={{
                    uri: 'https://images.contentstack.io/v3/assets/blt45c082eaf9747747/bltc1f5d681043ec5e0/5de0ba2ef1b4be78076c2a6a/Hot_meal_header_copy.jpg?width=1200&height=630&fit=crop',
                  }}
                />
              </TouchableOpacity>

              <View style={{flex: 1, marginLeft: 5}}>
                <Text
                  style={{fontWeight: 'bold', color: '#0A191E', fontSize: 18}}>
                  Fried Rice
                </Text>
                <Text style={{color: 'black'}}>
                  Lorem Ipsum some text some text some text
                </Text>
              </View>

              <View style={{flex: 1.5}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignSelf: 'center',
                    borderColor: '#F8774A',
                    borderWidth: 1.5,
                    borderStyle: 'solid',
                    borderRadius: 20,
                    paddingHorizontal: 20,
                  }}>
                  {item === 1 ? (
                    <Text
                      style={{
                        margin: 5,
                        fontSize: 20,
                        color: '#F8774A',
                        fontWeight: 'bold',
                      }}>
                      -
                    </Text>
                  ) : (
                    <Text
                      style={{
                        margin: 5,
                        fontSize: 20,
                        color: '#F8774A',
                        fontWeight: 'bold',
                      }}
                      onPress={() => setItem(item - 1)}>
                      -
                    </Text>
                  )}

                  <Text
                    style={{
                      margin: 5,
                      fontSize: 20,
                      color: '#F8774A',
                      fontWeight: 'bold',
                    }}>
                    {item}
                  </Text>
                  <Text
                    style={{
                      margin: 5,
                      fontSize: 20,
                      color: '#F8774A',
                      fontWeight: 'bold',
                    }}
                    onPress={() => setItem(item + 1)}>
                    +
                  </Text>
                </View>
              </View>
              <View style={{flex: 0.5, marginRight: 15}}>
                <Text
                  style={{alignSelf: 'flex-end', fontSize: 15, color: 'black'}}>
                  ₹100
                </Text>
              </View>
            </View>
          </View>
        </View>

       

        <TouchableOpacity
          style={{marginVertical: 20}}
          onPress={() => navigation.navigate('BillingAndPayment')}>
          <Text
            style={{
              backgroundColor: '#F8774A',
              padding: 10,
              color: 'white',
              fontWeight: 'bold',
              borderRadius: 20,
              textAlign: 'center',
              marginHorizontal: 120,
              marginTop: 10,
              fontSize: 20,
            }}>
            Payment <AntDesign name="arrowright" size={20} color="white" />
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

export default Cart;
