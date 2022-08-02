import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';
import PressBackWithTitle from '../../components/Reusable/PressBackWithTitle';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const YourOrders = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={{backgroundColor: 'white', height: '100%'}}>
      <PressBackWithTitle title="Your Orders" />
      <TouchableOpacity onPress={() => navigation.navigate('OrderStatus')}>
        <View
          style={{
            borderColor: '#D9D9D9',
            borderStyle: 'solid',
            borderWidth: 1,
            padding: 15,
            marginHorizontal: 20,
            borderRadius: 20,
            marginTop: 15,
            marginBottom: 15,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Image
                style={{height: 100, width: 110, borderRadius: 20}}
                source={{
                  uri: 'https://media.istockphoto.com/photos/homemade-turkey-thanksgiving-dinner-picture-id450705255?k=20&m=450705255&s=612x612&w=0&h=ZAi9vqhzYMCS4rbJRwy41MkVQdGC9AFUHVUE2qBuiY4=',
                }}
              />
            </View>
            <View style={{flex: 1}}>
              <Text style={{fontSize: 20, color: 'black', textAlign: 'center'}}>
                Vada Pav
              </Text>
              <Text style={{marginLeft: 10}}>
                Satsang Nagar Colony Aktha Varanasi
              </Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{color: 'black', textAlign: 'right', fontSize: 20}}>
                ₹ 110.00
              </Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: '#D9D9D9',
              padding: 1,
              marginHorizontal: 5,
              marginTop: 15,
            }}></View>

          <View style={{marginHorizontal: 5, marginTop: 10}}>
            <Text style={{color: '#625F5F', fontSize: 15}}>ITEMS</Text>
            <Text style={{color: 'black'}}>1 X Pav Bhaji with Gravy</Text>
            <Text style={{color: '#625F5F', fontSize: 15, marginTop: 10}}>
              ORDERED ON
            </Text>
            <Text style={{color: 'black'}}>02 July 2022 at 2:16 PM</Text>
          </View>

          <View
            style={{
              backgroundColor: '#D9D9D9',
              padding: 1,
              marginHorizontal: 5,
              marginTop: 15,
            }}></View>

          <View style={{marginHorizontal: 5, marginTop: 10}}>
            <Text style={{color: '#4AABE7', fontSize: 15, fontWeight: 'bold'}}>
              Delivered
              <Ionicons name="checkmark-done" size={18} color="#4AABE7" />
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('OrderStatus')}>
        <View
          style={{
            borderColor: '#D9D9D9',
            borderStyle: 'solid',
            borderWidth: 1,
            padding: 15,
            marginHorizontal: 20,
            borderRadius: 20,
            marginTop: 15,
            marginBottom: 15,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Image
                style={{height: 100, width: 110, borderRadius: 20}}
                source={{
                  uri: 'https://media.istockphoto.com/photos/homemade-turkey-thanksgiving-dinner-picture-id450705255?k=20&m=450705255&s=612x612&w=0&h=ZAi9vqhzYMCS4rbJRwy41MkVQdGC9AFUHVUE2qBuiY4=',
                }}
              />
            </View>
            <View style={{flex: 1}}>
              <Text style={{fontSize: 20, color: 'black', textAlign: 'center'}}>
                Vada Pav
              </Text>
              <Text style={{marginLeft: 10, color: 'black'}}>
                Satsang Nagar Colony Aktha Varanasi
              </Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{color: 'black', textAlign: 'right', fontSize: 20}}>
                ₹ 110.00
              </Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: '#D9D9D9',
              padding: 1,
              marginHorizontal: 5,
              marginTop: 15,
            }}></View>

          <View style={{marginHorizontal: 5, marginTop: 10}}>
            <Text style={{color: '#625F5F', fontSize: 15}}>ITEMS</Text>
            <Text style={{color: 'black'}}>1 X Pav Bhaji with Gravy</Text>
            <Text style={{color: '#625F5F', fontSize: 15, marginTop: 10}}>
              ORDERED ON
            </Text>
            <Text style={{color: 'black'}}>02 July 2022 at 2:16 PM</Text>
          </View>

          <View
            style={{
              backgroundColor: '#D9D9D9',
              padding: 1,
              marginHorizontal: 5,
              marginTop: 15,
            }}></View>

          <View style={{marginHorizontal: 5, marginTop: 10}}>
            <Text style={{color: '#4AABE7', fontSize: 15, fontWeight: 'bold'}}>
              Delivered
              <Ionicons name="checkmark-done" size={18} color="#4AABE7" />
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('OrderStatus')}>
        <View
          style={{
            borderColor: '#D9D9D9',
            borderStyle: 'solid',
            borderWidth: 1,
            padding: 15,
            marginHorizontal: 20,
            borderRadius: 20,
            marginTop: 15,
            marginBottom: 15,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Image
                style={{height: 100, width: 110, borderRadius: 20}}
                source={{
                  uri: 'https://media.istockphoto.com/photos/homemade-turkey-thanksgiving-dinner-picture-id450705255?k=20&m=450705255&s=612x612&w=0&h=ZAi9vqhzYMCS4rbJRwy41MkVQdGC9AFUHVUE2qBuiY4=',
                }}
              />
            </View>
            <View style={{flex: 1}}>
              <Text style={{fontSize: 20, color: 'black', textAlign: 'center'}}>
                Vada Pav
              </Text>
              <Text style={{marginLeft: 10}}>
                Satsang Nagar Colony Aktha Varanasi
              </Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{color: 'black', textAlign: 'right', fontSize: 20}}>
                ₹ 110.00
              </Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: '#D9D9D9',
              padding: 1,
              marginHorizontal: 5,
              marginTop: 15,
            }}></View>

          <View style={{marginHorizontal: 5, marginTop: 10}}>
            <Text style={{color: '#625F5F', fontSize: 15}}>ITEMS</Text>
            <Text style={{color: 'black'}}>1 X Pav Bhaji with Gravy</Text>
            <Text style={{color: '#625F5F', fontSize: 15, marginTop: 10}}>
              ORDERED ON
            </Text>
            <Text style={{color: 'black'}}>02 July 2022 at 2:16 PM</Text>
          </View>

          <View
            style={{
              backgroundColor: '#D9D9D9',
              padding: 1,
              marginHorizontal: 5,
              marginTop: 15,
            }}></View>

          <View style={{marginHorizontal: 5, marginTop: 10}}>
            <Text style={{color: '#4AABE7', fontSize: 15, fontWeight: 'bold'}}>
              Delivered
              <Ionicons name="checkmark-done" size={18} color="#4AABE7" />
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('OrderStatus')}>
        <View
          style={{
            borderColor: '#D9D9D9',
            borderStyle: 'solid',
            borderWidth: 1,
            padding: 15,
            marginHorizontal: 20,
            borderRadius: 20,
            marginTop: 15,
            marginBottom: 15,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Image
                style={{height: 100, width: 110, borderRadius: 20}}
                source={{
                  uri: 'https://media.istockphoto.com/photos/homemade-turkey-thanksgiving-dinner-picture-id450705255?k=20&m=450705255&s=612x612&w=0&h=ZAi9vqhzYMCS4rbJRwy41MkVQdGC9AFUHVUE2qBuiY4=',
                }}
              />
            </View>
            <View style={{flex: 1}}>
              <Text style={{fontSize: 20, color: 'black', textAlign: 'center'}}>
                Vada Pav
              </Text>
              <Text style={{marginLeft: 10}}>
                Satsang Nagar Colony Aktha Varanasi
              </Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{color: 'black', textAlign: 'right', fontSize: 20}}>
                ₹ 110.00
              </Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: '#D9D9D9',
              padding: 1,
              marginHorizontal: 5,
              marginTop: 15,
            }}></View>

          <View style={{marginHorizontal: 5, marginTop: 10}}>
            <Text style={{color: '#625F5F', fontSize: 15}}>ITEMS</Text>
            <Text style={{color: 'black'}}>1 X Pav Bhaji with Gravy</Text>
            <Text style={{color: '#625F5F', fontSize: 15, marginTop: 10}}>
              ORDERED ON
            </Text>
            <Text style={{color: 'black'}}>02 July 2022 at 2:16 PM</Text>
          </View>

          <View
            style={{
              backgroundColor: '#D9D9D9',
              padding: 1,
              marginHorizontal: 5,
              marginTop: 15,
            }}></View>

          <View style={{marginHorizontal: 5, marginTop: 10}}>
            <Text style={{color: '#4AABE7', fontSize: 15, fontWeight: 'bold'}}>
              Delivered
              <Ionicons name="checkmark-done" size={18} color="#4AABE7" />
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('OrderStatus')}>
        <View
          style={{
            borderColor: '#D9D9D9',
            borderStyle: 'solid',
            borderWidth: 1,
            padding: 15,
            marginHorizontal: 20,
            borderRadius: 20,
            marginTop: 15,
            marginBottom: 15,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Image
                style={{height: 100, width: 110, borderRadius: 20}}
                source={{
                  uri: 'https://media.istockphoto.com/photos/homemade-turkey-thanksgiving-dinner-picture-id450705255?k=20&m=450705255&s=612x612&w=0&h=ZAi9vqhzYMCS4rbJRwy41MkVQdGC9AFUHVUE2qBuiY4=',
                }}
              />
            </View>
            <View style={{flex: 1}}>
              <Text style={{fontSize: 20, color: 'black', textAlign: 'center'}}>
                Vada Pav
              </Text>
              <Text style={{marginLeft: 10}}>
                Satsang Nagar Colony Aktha Varanasi
              </Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{color: 'black', textAlign: 'right', fontSize: 20}}>
                ₹ 110.00
              </Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: '#D9D9D9',
              padding: 1,
              marginHorizontal: 5,
              marginTop: 15,
            }}></View>

          <View style={{marginHorizontal: 5, marginTop: 10}}>
            <Text style={{color: '#625F5F', fontSize: 15}}>ITEMS</Text>
            <Text style={{color: 'black'}}>1 X Pav Bhaji with Gravy</Text>
            <Text style={{color: '#625F5F', fontSize: 15, marginTop: 10}}>
              ORDERED ON
            </Text>
            <Text style={{color: 'black'}}>02 July 2022 at 2:16 PM</Text>
          </View>

          <View
            style={{
              backgroundColor: '#D9D9D9',
              padding: 1,
              marginHorizontal: 5,
              marginTop: 15,
            }}></View>

          <View style={{marginHorizontal: 5, marginTop: 10}}>
            <Text style={{color: '#4AABE7', fontSize: 15, fontWeight: 'bold'}}>
              Delivered
              <Ionicons name="checkmark-done" size={18} color="#4AABE7" />
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default YourOrders;
