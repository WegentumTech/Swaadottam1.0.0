import {View, Text} from 'react-native';
import React from 'react';
import styles from '../../styles/globalStyles';

const TopHeader = () => {
  return (
    <View style={{flexDirection: 'row', marginHorizontal: 10, marginTop: 10}}>
      <View style={{flex: 1}}>
        <Text>icon</Text>
      </View>
      <View style={{flex: 8}}>
        <Text style={styles.liveAddressFirst}>Jahumandi Rathyatra</Text>
        <Text style={styles.liveAddressSecond}>Varanasi</Text>
      </View>
      <View style={{flex: 1}}>
        <Text style={{alignSelf: 'flex-end'}}>menu</Text>
      </View>
    </View>
  );
};

export default TopHeader;
