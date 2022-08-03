import { View, Text ,TouchableOpacity,Image,ScrollView} from 'react-native'
import React from 'react'
import PressBackWithTitle from '../components/Reusable/PressBackWithTitle'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/globalStyles';
const Starter = () => {
  const navigation = useNavigation();

  return (
    <View>
      <ScrollView>
      <PressBackWithTitle title="Starter" />
      <View
          style={{
            flexDirection: 'row',
            borderStyle: 'solid',
            borderColor: '#C8C8C8',
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
            margin:5
          }}>
          <Image
            style={{width: 100, height: 100, flex: 1, marginTop: 5}}
            source={require('../assets/pepsi.png')}
          />
          <View style={{flex: 1}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#333333',
                marginTop: 10,
              }}>
              Pepsi
            </Text>
            <Text style={{color: '#C8C8C8'}}>
              Lorem ipsum dollar {'\n'}is simply a demo text.
            </Text>
          </View>
          <Text style={{color: '#079D49', fontSize: 20, flex: 1}}>₹250</Text>
        </View>
      <View
          style={{
            flexDirection: 'row',
            borderStyle: 'solid',
            borderColor: '#C8C8C8',
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
            margin:5
          }}>
          <Image
            style={{width: 100, height: 100, flex: 1, marginTop: 5}}
            source={require('../assets/pepsi.png')}
          />
          <View style={{flex: 1}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#333333',
                marginTop: 10,
              }}>
              Pepsi
            </Text>
            <Text style={{color: '#C8C8C8'}}>
              Lorem ipsum dollar {'\n'}is simply a demo text.
            </Text>
          </View>
          <Text style={{color: '#079D49', fontSize: 20, flex: 1}}>₹250</Text>
        </View>
      <View
          style={{
            flexDirection: 'row',
            borderStyle: 'solid',
            borderColor: '#C8C8C8',
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
            margin:5
          }}>
          <Image
            style={{width: 100, height: 100, flex: 1, marginTop: 5}}
            source={require('../assets/pepsi.png')}
          />
          <View style={{flex: 1}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#333333',
                marginTop: 10,
              }}>
              Pepsi
            </Text>
            <Text style={{color: '#C8C8C8'}}>
              Lorem ipsum dollar {'\n'}is simply a demo text.
            </Text>
          </View>
          <Text style={{color: '#079D49', fontSize: 20, flex: 1}}>₹250</Text>
        </View>
      <View
          style={{
            flexDirection: 'row',
            borderStyle: 'solid',
            borderColor: '#C8C8C8',
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
            margin:5
          }}>
          <Image
            style={{width: 100, height: 100, flex: 1, marginTop: 5}}
            source={require('../assets/pepsi.png')}
          />
          <View style={{flex: 1}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#333333',
                marginTop: 10,
              }}>
              Pepsi
            </Text>
            <Text style={{color: '#C8C8C8'}}>
              Lorem ipsum dollar {'\n'}is simply a demo text.
            </Text>
          </View>
          <Text style={{color: '#079D49', fontSize: 20, flex: 1}}>₹250</Text>
        </View>
      <View
          style={{
            flexDirection: 'row',
            borderStyle: 'solid',
            borderColor: '#C8C8C8',
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
            margin:5
          }}>
          <Image
            style={{width: 100, height: 100, flex: 1, marginTop: 5}}
            source={require('../assets/pepsi.png')}
          />
          <View style={{flex: 1}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#333333',
                marginTop: 10,
              }}>
              Pepsi
            </Text>
            <Text style={{color: '#C8C8C8'}}>
              Lorem ipsum dollar {'\n'}is simply a demo text.
            </Text>
          </View>
          <Text style={{color: '#079D49', fontSize: 20, flex: 1}}>₹250</Text>
        </View>
      <View
          style={{
            flexDirection: 'row',
            borderStyle: 'solid',
            borderColor: '#C8C8C8',
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
            margin:5
          }}>
          <Image
            style={{width: 100, height: 100, flex: 1, marginTop: 5}}
            source={require('../assets/pepsi.png')}
          />
          <View style={{flex: 1}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#333333',
                marginTop: 10,
              }}>
              Pepsi
            </Text>
            <Text style={{color: '#C8C8C8'}}>
              Lorem ipsum dollar {'\n'}is simply a demo text.
            </Text>
          </View>
          <Text style={{color: '#079D49', fontSize: 20, flex: 1}}>₹250</Text>
        </View>
      <View
          style={{
            flexDirection: 'row',
            borderStyle: 'solid',
            borderColor: '#C8C8C8',
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
            margin:5
          }}>
          <Image
            style={{width: 100, height: 100, flex: 1, marginTop: 5}}
            source={require('../assets/pepsi.png')}
          />
          <View style={{flex: 1}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#333333',
                marginTop: 10,
              }}>
              Pepsi
            </Text>
            <Text style={{color: '#C8C8C8'}}>
              Lorem ipsum dollar {'\n'}is simply a demo text.
            </Text>
          </View>
          <Text style={{color: '#079D49', fontSize: 20, flex: 1}}>₹250</Text>
        </View>

      </ScrollView>

    </View>
  )
}

export default Starter