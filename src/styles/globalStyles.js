import {StyleSheet} from 'react-native';

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
    alignSelf: 'flex-end',
  },
  mainHeaderBoldText: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  paraHeaderBoldTextAligned: {
    textAlign: 'center',
    color: '#605D5D',
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
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
  otpInputBox: {
    height: 40,
    margin: 5,
    borderWidth: 1,
    padding: 10,
    width: 40,
    borderColor: '#7D7D7D',
    borderRadius: 5,
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },

  inputBoxCountryCode: {
    fontSize: 20,
    color: 'black',
    marginLeft: 5,
    fontWeight: 'bold',
  },
  countryFlagicon: {
    width: 30,
    height: 30,
    marginLeft: 8,
  },
  countryCodeAndImageBox: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#7D7D7D',
    borderRadius: 5,
    marginTop: 13,
    marginBottom: 13,
    padding: 3,
    width: '25%',
    paddingTop: 5,
  },

  button1: {
    backgroundColor: '#FF9933',
    padding: 10,
    color: 'black',
    fontWeight: 'bold',
    borderRadius: 8,
    width: 180,
    textAlign: 'center',
    fontSize: 18,
  },

  resendOtpText: {
    textAlign: 'center',
    marginTop: 18,
    color: 'black',
  },
  resenButton: {
    color: '#FF9933',
    fontWeight: 'bold',
  },
  errorMessage: {
    color: 'red',
    alignSelf: 'center',
  },
  inputError: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '75%',
    borderColor: 'red',
    borderRadius: 5,
    fontWeight: 'bold',
    fontSize: 18,
    color: 'red',
  },
  liveAddressFirst: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15,
  },
  liveAddressSecond: {
    color: '#B2B2B2',
  },
  searchInputBox: {
    marginLeft: 10,
    color: '#4F4F4F',
    fontWeight: 'bold',
  },

  searchBarHomeScreenBox: {
    flexDirection: 'row',
    marginHorizontal: 8,
    marginTop: 15,
    backgroundColor: '#F3F3F3',
    padding: 10,
    borderRadius: 10,
  },
  mainHeader: {
    fontWeight: 'bold',
    color: '#3B3D52',
    fontSize: 22,
  },
  mainPara: {
    fontSize: 15,
    color: '#74747A',
  },

  homeBannerOne: {
    width: '100%',
    height: 175,
    marginTop: 10,
    borderRadius: 10,
  },
  homeBannerTwo: {
    width: '95%',
    height: 160,
    marginTop: 10,
    borderRadius: 20,
    marginRight: 10,
  },
  homeBannerThree: {
    width: '100%',
    height: 160,
    marginTop: 10,
    borderRadius: 20,
    // marginLeft:10,
  },
  divider: {
    padding: 2.8,
    backgroundColor: '#F2F3F5',
    marginVertical: 20,
    marginHorizontal: 15,
    borderRadius: 5,
  },
  ExclusiveOffersBox: {
    backgroundColor: '#C80019',
    padding: 28,
    width: '30%',
    borderRadius: 15,
    height: 60,
    marginTop: 30,
  },
  ExclusiveOffersUpper: {
    position: 'relative',
    width: 50,
    height: 50,
    top: -99,
    left: 38,
    backgroundColor: '#FE5656',
    borderRadius: 30,
    padding: 20,
  },
  roundFoodScrollable: {
    height: 80,
    width: 80,
    margin: 5,
    borderRadius: 20,
  },
  ScrollableProducts: {
    width: 180,
    height: 100,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  randomScrollableProductHead: {
    fontSize: 20,
    color: '#333333',
  },

  randomScrollableProductPara: {
    color: '#707070',
  },
  SideButton: {
    fontSize: 20,
    color: '#74747A',
    borderStyle: 'solid',
    borderColor: '#C8C8C8',
    borderWidth: 1,
    textAlign: 'center',
    borderRadius: 10,
    padding: 5,
  },
  starterImages: {
    flex: 1,
    height: 120,
    elevation: 10,
  },
  RecommendProducts: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  searchHeading: {
    flex: 3,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  inputBox: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '90%',
    borderColor: 'white',
    borderRadius: 10,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#4F4F4F',
    backgroundColor: 'white',
    // paddingHorizontal:10
  },
  tagStyle: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    margin: 5,
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 7,
    borderRadius: 15,
  },
  singleProductImage: {
    width: '100%',
    height: 300,
  },
  singleProductHead: {
    backgroundColor: 'white',
    elevation: 10,
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 20,
    marginRight: 150,

    top: -30,
    left: 15,
  },
  AddToCart: {
    backgroundColor: '#F8774A',
    padding: 12,
    color: 'white',
    fontWeight: 'bold',
    borderRadius: 20,
    width: 120,
    textAlign: 'center',
  },
  PressBack: {
    backgroundColor: '#F8774A',
    borderRadius: 10,
    padding: 10,
    marginRight: 340,
    marginTop: 10,
  },
  MainPageHead: {
    color: '#0A191E',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cartProductImage: {
    width: 100,
    height: 100,
    borderRadius: 20,
    flex: 1,
  },
  billingInput: {
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
    marginTop: 15,
    color: 'black',
  },
  button2: {
    backgroundColor: '#F8774A',
    padding: 10,
    color: 'white',
    fontWeight: 'bold',
    borderRadius: 25,
    width: 180,
    textAlign: 'center',
    fontSize: 18,
  },
  categoryItemImage: {
    width: '100%',
    height: 130,
    opacity: 0.7,
    backgroundColor: 'black',
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: {height: 10, width: 10},
    shadowOpacity: 5,
  },
  profileModules: {
    backgroundColor: '#F5F5F8',
    marginHorizontal: 20,
    color: 'black',
    padding: 20,
    borderRadius: 20,
    fontWeight: 'bold',
    elevation: 2,
    marginTop:15,
    flexDirection:"row"
  },
  referandearnimage: {
    width: "30%",
    height: 120,
    position:"absolute",
    alignSelf:"flex-end",
    marginTop:35,
    right:15
  },
  inputReview: {
    // height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '90%',
    borderColor: 'white',
    borderRadius: 10,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#4F4F4F',
    backgroundColor: 'white',
  },
  button2Disabled: {
    backgroundColor: '#949494',
    padding: 10,
    color: 'white',
    fontWeight: 'bold',
    borderRadius: 25,
    width: 180,
    textAlign: 'center',
    fontSize: 18,
  },
});
export default styles;
