import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../styles/globalStyles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={{backgroundColor: '#F26227', height: '100%'}}>
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

        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            top: -35,
            color: 'black',
            fontWeight: 'bold',
          }}>
          Kumar Nitesh
        </Text>
        <Text style={{textAlign: 'center', top: -35, color: 'black'}}>
          @nitesh786
        </Text>

        <View>
          <TouchableOpacity style={styles.profileModules}>
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

          <TouchableOpacity style={styles.profileModules}>
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

          <TouchableOpacity style={styles.profileModules}>
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

          <TouchableOpacity style={styles.profileModules}>
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

          <TouchableOpacity style={styles.profileModules}>
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

        <View style={{alignSelf: 'center', marginTop: 50}}>
          <TouchableOpacity>
            <Text style={styles.button2}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Profile;
