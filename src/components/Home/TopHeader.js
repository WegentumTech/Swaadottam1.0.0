import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../../styles/globalStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const TopHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={{flexDirection: 'row', marginHorizontal: 10, marginTop: 10}}>
      <View style={{flex: 1}}>
        <Ionicons name="location" size={35} color="#FCA785" />
      </View>
      <View style={{flex: 8}}>
        <Text style={styles.liveAddressFirst}>Jahumandi Rathyatra</Text>
        <Text style={styles.liveAddressSecond}>Varanasi</Text>
      </View>
      <View style={{flex: 1.3}}>
        {/* <Text style={{alignSelf: 'flex-end'}}>menu</Text> */}
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image
            style={styles.countryFlagicon}
            source={require('../../assets/menu.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopHeader;
