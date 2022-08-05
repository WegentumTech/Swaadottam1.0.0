import {View, Text, Image, TouchableOpacity, TextInput,ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import PressBackWithTitle from '../../components/Reusable/PressBackWithTitle';
import styles from '../../styles/globalStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import StepIndicator from 'react-native-step-indicator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {
  AuthKey,
  AuthPassword,
  BACKEND_URL,
  SIMPLE_URL,
} from '../../helper/baseUrl';

const OrderStatus = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [datas, setDatas] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const userId = await AsyncStorage.getItem('ActiveUserId');

    try {
      axios
        .post(
          BACKEND_URL + 'order',
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
        
          setCurrentPosition(Number(acc.data[0].order_status))
          

        })
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const labels = ['Registered', 'Cooking', 'On The Way', 'Delivered'];
  const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#fe7013',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#fe7013',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#fe7013',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#fe7013',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#fe7013',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#fe7013',
  };

  



  return (
    <ScrollView>
      <PressBackWithTitle title="Order Status" />
      {
        datas ?

      <View>
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
               {datas[0].order_for_name}
              </Text>
              <Text style={{marginLeft: 10, color: 'black'}}>
              {datas[0].address}
              </Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{color: 'green', textAlign: 'right', fontSize: 20}}>
                ₹ {datas[0].payment}
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



            {
              datas.map((hit)=>{
                return  <Text key={hit.id} style={{color: 'black'}}>{hit.quantity} X Pav Bhaji with Gravy</Text>
              })
            }




           
            <Text style={{color: '#625F5F', fontSize: 15, marginTop: 10}}>
              ORDERED ON
            </Text>
            <Text style={{color: 'black'}}>{datas[0].created_at}</Text>
          </View>

          <View
            style={{
              backgroundColor: '#D9D9D9',
              padding: 1,
              marginHorizontal: 5,
              marginTop: 15,
            }}></View>

          <View style={{marginTop: 30}}>
            <Text
              style={{
                color: 'black',
                marginBottom: 15,
                marginLeft: 10,
                fontSize: 18,
              }}>
              Current Status
            </Text>
            <StepIndicator
              stepCount={4}
              customStyles={customStyles}
              currentPosition={currentPosition}
              labels={labels}
            />
          </View>

          <View>
            <Text
              style={{
                marginLeft: 10,
                color: 'black',
                fontSize: 18,
                marginTop: 30,
              }}>
              Post Your Review
            </Text>

            <TextInput
              multiline={true}
              numberOfLines={4}
              style={styles.inputReview}
            />
            <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 10}}>
              <AntDesign name="star" size={18} color="#FF4D00" />
              <AntDesign name="star" size={18} color="#FF4D00" />
              <AntDesign name="star" size={18} color="#FF4D00" />
              <AntDesign name="star" size={18} color="#FF4D00" />
              <AntDesign name="staro" size={18} color="#FF4D00" />
            </View>

            <View
              style={{alignSelf: 'center', marginTop: 35, marginBottom: 35}}>
              <TouchableOpacity>
                <Text style={styles.button2}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

        :


        <></>
      }

    </ScrollView>
  );
};

export default OrderStatus;
