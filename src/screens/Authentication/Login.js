import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from '../../styles/globalStyles';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const [mobileNumber, setMobileNumber] = useState('');
  const [message, setMessage] = useState(null);

  const handleSendOTP = () => {
    if (mobileNumber.mobileNumber.length < 10) {
      return setMessage('Please Rechek Your Number');
    }
    setMessage("")












    // navigation.navigate('VerifyOtp', {
    //   Number: mobileNumber.mobileNumber,
    //   ReveviedOtp: '4567',
    // });




















    
  };

  return (
    <View style={styles.backScreen}>
      <Image
        style={styles.loginImageLogo}
        source={require('../../assets/loginIllustrator.webp')}
      />

      <View>
        <Text style={styles.mainHeaderBoldText}>Enter Your Phone Number</Text>

        <View style={{marginHorizontal: 60}}>
          <Text style={styles.paraHeaderBoldTextAligned}>
            We will send and SMS message to verify your phone number.
          </Text>
        </View>
      </View>

      <View style={{marginTop: 35, marginHorizontal: 20}}>
        <Text style={styles.loginTopHeading}>Enter Mobile Number</Text>
      </View>

      <View style={{flexDirection: 'row', marginHorizontal: 20}}>
        <View style={styles.countryCodeAndImageBox}>
          <Image
            style={styles.countryFlagicon}
            source={require('../../assets/Flag_of_India.png')}
          />

          <Text style={styles.inputBoxCountryCode}>+91</Text>
        </View>

        <TextInput
          keyboardType="number-pad"
          placeholder="00000..."
          placeholderTextColor="#8c8989"
          maxLength={10}
          style={{
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            width: '75%',
            borderColor: message === 'Please Rechek Your Number'?'red':"#7D7D7D",
            borderRadius: 5,
            fontWeight: 'bold',
            fontSize: 18,
            color: 'black',
          }}
          onChangeText={text => {
            setMobileNumber({mobileNumber: text});
          }}
        />
      </View>

      <Text style={styles.errorMessage}>{message}</Text>

      <View style={{alignSelf: 'center', marginTop: 30}}>
        <TouchableOpacity onPress={handleSendOTP}>
          <Text style={styles.button1}>Get OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
