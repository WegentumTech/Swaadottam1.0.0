import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import PressBack from '../components/Reusable/PressBack';
import styles from '../styles/globalStyles';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const Cart = () => {
  const [item, setItem] = useState(1);
  const navigation = useNavigation();

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

      <View style={{marginHorizontal: 20, marginTop: 30}}>
        <TextInput
          placeholder="Enter Promo Code"
          placeholderTextColor="#838383"
          style={{
            width: '100%',
            height: 40,
            borderRadius: 30,
            elevation: 3,
            backgroundColor: 'white',
          }}
        />
        <TouchableOpacity>
          <Text
            style={{
              backgroundColor: '#F8774A',
              padding: 10,
              color: 'white',
              fontWeight: 'bold',
              borderRadius: 20,
              textAlign: 'center',
              marginHorizontal: 120,
              top: -40,
              right: -120,
            }}>
            Apply
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          shadowColor: 'black',
          shadowOffset: {width: 10, height: 10},
          shadowOpacity: 10,
          elevation: 2,
          marginHorizontal: 20,
          borderRadius: 20,
          padding: 10,
          backgroundColor: 'white',
          shadowRadius: 30,
        }}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Text style={{color: 'black', fontSize: 15}}>Subtotal</Text>
            <Text style={{color: 'black', fontSize: 15}}>Delivery</Text>
            <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>
              Total
            </Text>
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Text style={{color: 'black', fontSize: 15}}>₹225</Text>
            <Text style={{color: 'black', fontSize: 15}}>₹45</Text>
            <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
              ₹270
            </Text>
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
