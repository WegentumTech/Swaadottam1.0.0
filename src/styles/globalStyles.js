import {StyleSheet} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  tinyLogo: {
    width: '100%',
    height: 100,
    marginHorizontal: 5,
    marginBottom: 100,
  },
  loginImageLogo: {
    width: 210,
    height: 210,
    alignSelf: 'center',
    marginTop: 50,
  },
  backScreen: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  mainHeaderBoldText: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    marginBottom:5
  },
  paraHeaderBoldTextAligned: {
    textAlign: 'center',
    color: 'black',
  },
  loginTopHeading: {
    color: 'black',
    fontSize: 19,
    // fontWeight:"bold"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '75%',
    borderColor: '#7D7D7D',
    borderRadius: 5,
    fontWeight:"bold",
    fontSize:18,
    color:"black"
    
  },
  otpInputBox: {
    height: 40,
    margin: 5,
    borderWidth: 1,
    padding: 10,
    width: 40,
    borderColor: '#7D7D7D',
    borderRadius: 5,
    fontWeight:"bold",
    fontSize:18,
    color:"black",
    textAlign:"center"
    
  },

  inputBoxCountryCode: {
    fontSize: 20,
    color: 'black',
    marginLeft:5,
    fontWeight:"bold"
  },
  countryFlagicon: {
    width: 30,
    height: 30,
    marginLeft:8
  },
  countryCodeAndImageBox: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#7D7D7D',
    borderRadius: 5,
    marginTop: 13,
    marginBottom: 13,
    padding: 3,
    width:"25%"
  },

  button1: {
    backgroundColor: '#FF9933',
    padding: 10,
    color: 'black',
    fontWeight: 'bold',
    borderRadius:8,
    width:180,
    textAlign:"center",
    fontSize:18
  },


  resendOtpText:{
    textAlign:'center',
    marginTop:18,
    color:"black"
  },
  resenButton:{
    color:"#FF9933",
    fontWeight:"bold"
  },
  errorMessage:{
    color:"red",
    alignSelf:"center"

  },
  inputError: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '75%',
    borderColor: 'red',
    borderRadius: 5,
    fontWeight:"bold",
    fontSize:18,
    color:"red"
    
  },
});
export default styles;
