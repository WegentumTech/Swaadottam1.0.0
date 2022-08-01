import {
  View,
  Text,
  Image,
  Alert,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from '../../styles/globalStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import RecommendedProducts from '../../components/Reusable/RecommendedProducts';
import axios from 'axios';
import {AuthKey} from '../../helper/baseUrl';
import {AuthPassword} from '../../helper/baseUrl';
import {BACKEND_URL} from '../../helper/baseUrl';
import {SIMPLE_URL} from '../../helper/baseUrl';
import {useRoute} from '@react-navigation/native';

const SingleMealScreen = () => {
  const navigation = useNavigation();
  const [number, setNumber] = useState(1);
  const [datas, setDatas] = useState('');

  const route = useRoute();

  console.log(route.params.MealId);

  useEffect(() => {
    try {
      axios
        .post(
          BACKEND_URL + 'product',
          {
            productid: route.params.MealId,
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
  }, []);

  return (
    <ScrollView>
      <Image
        style={styles.singleProductImage}
        source={{uri: SIMPLE_URL + datas.meal_image}}
      />

      <View
        style={{
          backgroundColor: 'white',
          position: 'absolute',
          borderRadius: 10,
          padding: 10,
          top: 15,
          left: 18,
        }}>
        <AntDesign
          onPress={() => navigation.goBack()}
          name="arrowleft"
          size={20}
          color="black"
        />
      </View>

      <View
        style={{
          backgroundColor: 'white',
          height: '100%',
          marginTop: -40,
          borderRadius: 30,
        }}>
        <View style={styles.singleProductHead}>
          <Text style={{fontSize: 20, color: '#4A4A4A', fontWeight: 'bold'}}>
            {datas.meal_name}
          </Text>
          <Text style={{color: '#4A4A4A', fontSize: 16}}>
            ₹ {datas.meal_price}
          </Text>
        </View>

        <View style={{marginHorizontal: 10, marginTop: 10}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: '#F8774A',
                  borderRadius: 30,
                  marginRight: 50,
                  paddingLeft: 10,
                }}>
                {number === 1 ? (
                  <Text
                    style={{
                      // color: 'black',
                      fontWeight: 'bold',
                      margin: 5,
                      // backgroundColor: 'white',
                      padding: 8,
                      borderRadius: 10,
                      fontSize: 15,
                    }}>
                    <AntDesign name="minuscircle" size={20} color="white" />
                  </Text>
                ) : (
                  <Text
                    onPress={() => setNumber(number - 1)}
                    style={{
                      // color: 'black',
                      fontWeight: 'bold',
                      margin: 5,
                      // backgroundColor: 'white',
                      padding: 8,
                      borderRadius: 10,
                      fontSize: 15,
                    }}>
                    <AntDesign name="minuscircle" size={20} color="white" />
                  </Text>
                )}

                <Text
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                    margin: 5,
                    marginTop: 10,
                    fontSize: 20,
                  }}>
                  {number}
                </Text>
                <Text
                  onPress={() => setNumber(number + 1)}
                  style={{
                    // color: 'black',
                    fontWeight: 'bold',
                    margin: 5,
                    // backgroundColor: 'white',
                    padding: 8,
                    borderRadius: 10,
                    fontSize: 15,
                  }}>
                  <AntDesign name="pluscircle" size={20} color="white" />
                </Text>
              </View>
            </View>

            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                <Text style={styles.AddToCart}>
                  Add To{' '}
                  <FontAwesome5
                    name="shopping-basket"
                    size={20}
                    color="white"
                  />
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{marginLeft: 20, marginTop: 25}}>
          <Text style={{color: '#5E5959', fontSize: 20, fontWeight: 'bold'}}>
            Description
          </Text>

          <Text style={{color: '#5E5959'}}>{datas.meal_description}</Text>
        </View>

        <View style={{marginVertical: 10}}></View>
        <RecommendedProducts />
      </View>
    </ScrollView>
  );
};

export default SingleMealScreen;
