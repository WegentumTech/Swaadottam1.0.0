import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../../styles/globalStyles';
import {useRoute} from '@react-navigation/native';

const VerifyOtp = () => {
  const route = useRoute();

  const UserNumber = route.params.Number;
  const OTP = route.params.ReveviedOtp;

  console.log(UserNumber, OTP);

  const handleResendOtp = () => {
    console.log('send otp again');
  };

  return (
    <View style={styles.backScreen}>
      <Image
        style={styles.loginImageLogo}
        source={require('../../assets/loginIllustrator.webp')}
      />

      <View>
        <Text style={styles.mainHeaderBoldText}>OTP Verification</Text>

        <View style={{marginHorizontal: 60}}>
          <Text style={styles.paraHeaderBoldTextAligned}>
            Enter the OTP sent to <Text>+91{UserNumber}</Text>
          </Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 20}}>
        <TextInput
          maxLength={1}
          keyboardType="number-pad"
          style={styles.otpInputBox}
        />
        <TextInput
          maxLength={1}
          keyboardType="number-pad"
          style={styles.otpInputBox}
        />
        <TextInput
          maxLength={1}
          keyboardType="number-pad"
          style={styles.otpInputBox}
        />
        <TextInput
          maxLength={1}
          keyboardType="number-pad"
          style={styles.otpInputBox}
        />
      </View>

      <Text style={styles.resendOtpText}>
        Didn’t received OTP?{' '}
        <Text onPress={handleResendOtp} style={styles.resenButton}>
          RESEND
        </Text>
      </Text>

      <View style={{alignSelf: 'center', marginTop: 30}}>
        <TouchableOpacity>
          <Text style={styles.button1}>Verify & Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VerifyOtp;
