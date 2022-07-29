import {View, Text, TextInput} from 'react-native';
import React,{useState,useEffect,useRef} from 'react';
import styles from '../styles/globalStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Tags from '../components/Home/Tags';
import { useNavigation } from '@react-navigation/native';


const SearchScreen = () => {
    const navigation = useNavigation();
  
    
  const pin1Ref = useRef(null);


  return (
    <View style={{paddingTop: 20, backgroundColor: '#E38922', height: '100%'}}>
      <View style={{flexDirection: 'row', marginHorizontal: 10}}>
        <Text style={{flex: 1}}>
          <AntDesign
          onPress={()=>navigation.goBack()}
            name="leftcircle"
            style={{borderRadius: 10}}
            size={35}
            color="white"
          />
        </Text>
        <Text style={styles.searchHeading}>Search Your Food</Text>
      </View>

      <View style={{alignItems: 'center', marginTop: 10}}>
        <TextInput
        autoFocus
          style={styles.inputBox}
          placeholder="   Search foods which you like"
          placeholderTextColor="#4F4F4F"
        />
      </View>

      <Tags />

      <View
        style={{
          backgroundColor: 'white',
          height: '100%',
          marginTop: 20,
          borderRadius: 50,
        }}></View>
    </View>
  );
};

export default SearchScreen;
