import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from '../../styles/globalStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const SingleMealScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Image
        style={styles.singleProductImage}
        source={require('../../assets/singleProduct.jpg')}
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
        <AntDesign onPress={()=>navigation.goBack()} name="arrowleft" size={20} color="black" />
      </View>
 

      <View
        style={{
          backgroundColor: 'white',
          height: '100%',
          marginTop: -40,
          borderRadius: 30,
        }}>
        <Text style={styles.singleProductHead}>Handi Paneer</Text>

        <View style={{marginHorizontal: 10,marginTop:10}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
           
            </View>

            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <Text style={styles.AddToCart}>
                Add To{' '}
                <FontAwesome5 name="shopping-basket" size={20} color="white" />
              </Text>
            </View>
          </View>
        </View>
      </View>














   






















    </View>
  );
};

export default SingleMealScreen;
