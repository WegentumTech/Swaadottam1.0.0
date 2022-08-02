import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import PressBack from '../components/Reusable/PressBack';
import styles from '../styles/globalStyles';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import RBSheet from 'react-native-raw-bottom-sheet';
import Toast from 'react-native-toast-message';

const EditProfile = () => {
  const [imageLink, setImageLink] = useState('');
  const refRBSheet = useRef();

  const clicked = () => {
    Toast.show({
      type: 'success',
      text1: 'Your Profile Is Updated',
      text2: 'You Can Go Back Now',
    });
  };

  const handleCameraOpen = async () => {
    const result = await launchCamera();
    console.log(result);
    setImageLink(result.assets[0].uri);
  };

  const handleGalleryOpen = async () => {
    const result = await launchImageLibrary();
    console.log(result);
    setImageLink(result.assets[0].uri);
  };

  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <Toast position="bottom" />
      <PressBack />

      <View style={{marginTop: 50}}>
        {imageLink ? (
          <Image
            source={{
              uri: imageLink,
            }}
            style={{
              width: 120,
              height: 120,
              borderRadius: 100,
              top: -45,
              alignSelf: 'center',
            }}
          />
        ) : (
          <Image
            source={{
              uri: 'https://instagram.fdel8-1.fna.fbcdn.net/v/t51.2885-19/280192147_514591870408592_8565636030206285504_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fdel8-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=Pvd4m2LW-RUAX_C5Cy1&edm=APU89FABAAAA&ccb=7-5&oh=00_AT_845unjkP3p96evdu6Ame3i3EhRxoBjcfciRXzaN_hyg&oe=62EF3609&_nc_sid=86f79a',
            }}
            style={{
              width: 120,
              height: 120,
              borderRadius: 100,
              top: -45,
              alignSelf: 'center',
            }}
          />
        )}
        <TouchableOpacity onPress={() => refRBSheet.current.open()}>
          <View
            style={{
              alignSelf: 'center',
              top: -90,
              left: 50,
              backgroundColor: '#F79320',
              padding: 5,
              borderRadius: 30,
            }}>
            <AntDesign name="camera" size={18} color="white" />
          </View>
        </TouchableOpacity>
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
            Full Name
          </Text>
        </View>

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
            Username
          </Text>
        </View>

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
            Email
          </Text>
        </View>

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

      <View style={{alignSelf: 'center', marginTop: 40}}>
        <TouchableOpacity onPress={clicked}>
          <Text style={styles.button2}>Save</Text>
        </TouchableOpacity>

        <RBSheet
          animationType="slide"
          height={130}
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={true}
          customStyles={{
            wrapper: {
              backgroundColor: 'transparent',
            },
            draggableIcon: {
              backgroundColor: '#86868C',
            },
          }}>
          <View>
            <View
              style={{
                marginHorizontal: 10,
                flexDirection: 'row',
                marginTop: 20,
              }}>
              <TouchableOpacity onPress={handleCameraOpen} style={{flex: 1}}>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                  <AntDesign name="camera" size={30} color="black" />
                  <Text
                    style={{fontSize: 18, color: 'black', fontWeight: 'bold'}}>
                    {'   '}Camera
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={handleGalleryOpen} style={{flex: 1}}>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                  <Entypo name="folder-images" size={30} color="black" />
                  <Text
                    style={{fontSize: 18, color: 'black', fontWeight: 'bold'}}>
                    {'   '}Gallery
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </RBSheet>
      </View>
    </View>
  );
};

export default EditProfile;
