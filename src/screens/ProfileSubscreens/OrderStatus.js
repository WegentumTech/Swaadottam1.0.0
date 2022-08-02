import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import PressBackWithTitle from '../../components/Reusable/PressBackWithTitle';
import styles from '../../styles/globalStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import StepIndicator from 'react-native-step-indicator';
import {TextInput} from 'react-native-gesture-handler';

const OrderStatus = () => {
  const [currentPosition, setCurrentPosition] = useState(3);

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
    <View>
      <PressBackWithTitle title="Order Status" />

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
    </View>
  );
};

export default OrderStatus;
