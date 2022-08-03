import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from '../styles/globalStyles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthKey} from '../helper/baseUrl';
import {AuthPassword} from '../helper/baseUrl';
import {BACKEND_URL} from '../helper/baseUrl';
import {SIMPLE_URL} from '../helper/baseUrl';

import axios from 'axios';
const Profile = () => {
  const navigation = useNavigation();

  const [userFullName, setUserFullName] = useState('');
  const [userContactNumber, setUserContactNumber] = useState('');
  const [userImage, setUserImage] = useState('');

  useEffect(() => {
    GetUserId();
  }, []);

  const GetUserId = async () => {
    const userId = await AsyncStorage.getItem('ActiveUserId');
    console.log(userId);

    try {
      axios
        .post(
          BACKEND_URL + 'getuser',
          {
            user_id: userId,
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
          setUserFullName(acc.data.name);
          setUserContactNumber(acc.data.mobile);
          setUserImage(acc.data.profile_photo);
        })
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView style={{backgroundColor: '#F26227', height: '100%'}}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: 'white',
            padding: 10,
            borderRadius: 10,
            top: 20,
            left: 16,
          }}>
          <View>
            <AntDesign name="arrowleft" size={18} color="black" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('EditProfile')}
          style={{
            backgroundColor: 'white',
            padding: 10,
            borderRadius: 10,
            right: 10,
            position: 'absolute',
            top: 20,
          }}>
          <View>
            <Feather name="edit" size={18} color="black" />
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          backgroundColor: 'white',
          height: '100%',
          marginTop: 100,
          borderRadius: 50,
        }}>
        <Image
          source={{
            uri:  !userImage ? "https://cdn.wallpaperdirect.com/asset/img/product/157207/tiled/metropolitan-stories-plain-slate-grey-wallpaper-tiled-157207.jpg" :  SIMPLE_URL + userImage,
          }}
          style={{
            width: 120,
            height: 120,
            borderRadius: 100,
            top: -45,
            alignSelf: 'center',
          }}
        />

        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            top: -35,
            color: 'black',
            fontWeight: 'bold',
          }}>
          {!userFullName ? "Loading Your Name":userFullName}
        </Text>
        <Text style={{textAlign: 'center', top: -35, color: 'black'}}>
          +91{!userContactNumber ? ".........." :userContactNumber}
        </Text>

        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('YourOrders')}
            style={styles.profileModules}>
            <Text style={{color: 'black', flex: 1, fontWeight: 'bold'}}>
              Your Orders
            </Text>
            <View style={{marginTop: 1, flex: 1}}>
              <AntDesign
                name="right"
                size={18}
                color="black"
                style={{alignSelf: 'flex-end'}}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Referal')}
            style={styles.profileModules}>
            <Text style={{color: 'black', flex: 1, fontWeight: 'bold'}}>
              Referal’s & Earnings
            </Text>
            <View style={{marginTop: 1, flex: 1}}>
              <AntDesign
                name="right"
                size={18}
                color="black"
                style={{alignSelf: 'flex-end'}}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Preferences')}
            style={styles.profileModules}>
            <Text style={{color: 'black', flex: 1, fontWeight: 'bold'}}>
              My Preferences
            </Text>
            <View style={{marginTop: 1, flex: 1}}>
              <AntDesign
                name="right"
                size={18}
                color="black"
                style={{alignSelf: 'flex-end'}}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Help')}
            style={styles.profileModules}>
            <Text style={{color: 'black', flex: 1, fontWeight: 'bold'}}>
              Help
            </Text>
            <View style={{marginTop: 1, flex: 1}}>
              <AntDesign
                name="right"
                size={18}
                color="black"
                style={{alignSelf: 'flex-end'}}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Wishlist')}
            style={styles.profileModules}>
            <Text style={{color: 'black', flex: 1, fontWeight: 'bold'}}>
              Wishlist
            </Text>
            <View style={{marginTop: 1, flex: 1}}>
              <AntDesign
                name="right"
                size={18}
                color="black"
                style={{alignSelf: 'flex-end'}}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={{alignSelf: 'center', marginTop: 50, marginBottom: 50}}>
          <TouchableOpacity>
            <Text style={styles.button2}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
