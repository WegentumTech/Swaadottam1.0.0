import {View, Text, TouchableOpacity, Image,ScrollView} from 'react-native';
import React from 'react';
import PressBackWithTitle from '../../components/Reusable/PressBackWithTitle';
import styles from '../../styles/globalStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Wishlist = () => {
  return (
    <ScrollView>
      <PressBackWithTitle title="Wishlist" />

      <TouchableOpacity
        onPress={() => navigation.navigate('SingleMealScreen', {MealId: 1})}>
        <View style={{marginTop: 20}}>
          <View
            style={{
              marginHorizontal: 10,
              borderColor: '#C8C8C8',
              borderStyle: 'solid',
              borderWidth: 1,
              borderRadius: 20,
              paddingBottom: 30,
            }}>
            <Image
              source={require('../../assets/food-main.jpg')}
              style={styles.RecommendProducts}
            />
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                marginHorizontal: 10,
              }}>
              <View style={{flex: 1}}>
                <Text style={{color: '#333333', fontSize: 20}}>
                  Suhani Restaurant
                </Text>
                <Text style={{color: '#707070'}}>Chinnese, North Indian</Text>
              </View>

              <View style={{flex: 1}}>
                <Text
                  style={{
                    color: 'white',
                    backgroundColor: '#509807',
                    textAlign: 'right',
                    marginLeft: 120,
                    padding: 2,
                    borderRadius: 10,
                    fontSize: 15,
                    fontWeight: 'bold',
                  }}>
                  4.5 <Ionicons name="star" size={18} color="white" />
                </Text>
                <Text
                  style={{
                    textAlign: 'right',
                    marginTop: 10,
                    color: '#9E9E9E',
                  }}>
                  {' '}
                  <Fontisto name="fire" size={20} color="#D8553A" /> 145 cal
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 10,
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: '#333333',
                  marginTop: 8,
                  textDecorationLine: 'line-through',
                }}>
                ₹200
              </Text>
              <Text
                style={{
                  color: '#F88922',
                  fontSize: 20,
                  marginLeft: 6,
                  fontWeight: 'bold',
                }}>
                ₹100
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('SingleMealScreen', {MealId: 1})}>
        <View style={{marginTop: 20}}>
          <View
            style={{
              marginHorizontal: 10,
              borderColor: '#C8C8C8',
              borderStyle: 'solid',
              borderWidth: 1,
              borderRadius: 20,
              paddingBottom: 30,
            }}>
            <Image
              source={require('../../assets/food-main.jpg')}
              style={styles.RecommendProducts}
            />
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                marginHorizontal: 10,
              }}>
              <View style={{flex: 1}}>
                <Text style={{color: '#333333', fontSize: 20}}>
                  Suhani Restaurant
                </Text>
                <Text style={{color: '#707070'}}>Chinnese, North Indian</Text>
              </View>

              <View style={{flex: 1}}>
                <Text
                  style={{
                    color: 'white',
                    backgroundColor: '#509807',
                    textAlign: 'right',
                    marginLeft: 120,
                    padding: 2,
                    borderRadius: 10,
                    fontSize: 15,
                    fontWeight: 'bold',
                  }}>
                  4.5 <Ionicons name="star" size={18} color="white" />
                </Text>
                <Text
                  style={{
                    textAlign: 'right',
                    marginTop: 10,
                    color: '#9E9E9E',
                  }}>
                  {' '}
                  <Fontisto name="fire" size={20} color="#D8553A" /> 145 cal
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 10,
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: '#333333',
                  marginTop: 8,
                  textDecorationLine: 'line-through',
                }}>
                ₹200
              </Text>
              <Text
                style={{
                  color: '#F88922',
                  fontSize: 20,
                  marginLeft: 6,
                  fontWeight: 'bold',
                }}>
                ₹100
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('SingleMealScreen', {MealId: 1})}>
        <View style={{marginTop: 20}}>
          <View
            style={{
              marginHorizontal: 10,
              borderColor: '#C8C8C8',
              borderStyle: 'solid',
              borderWidth: 1,
              borderRadius: 20,
              paddingBottom: 30,
            }}>
            <Image
              source={require('../../assets/food-main.jpg')}
              style={styles.RecommendProducts}
            />
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                marginHorizontal: 10,
              }}>
              <View style={{flex: 1}}>
                <Text style={{color: '#333333', fontSize: 20}}>
                  Suhani Restaurant
                </Text>
                <Text style={{color: '#707070'}}>Chinnese, North Indian</Text>
              </View>

              <View style={{flex: 1}}>
                <Text
                  style={{
                    color: 'white',
                    backgroundColor: '#509807',
                    textAlign: 'right',
                    marginLeft: 120,
                    padding: 2,
                    borderRadius: 10,
                    fontSize: 15,
                    fontWeight: 'bold',
                  }}>
                  4.5 <Ionicons name="star" size={18} color="white" />
                </Text>
                <Text
                  style={{
                    textAlign: 'right',
                    marginTop: 10,
                    color: '#9E9E9E',
                  }}>
                  {' '}
                  <Fontisto name="fire" size={20} color="#D8553A" /> 145 cal
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 10,
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: '#333333',
                  marginTop: 8,
                  textDecorationLine: 'line-through',
                }}>
                ₹200
              </Text>
              <Text
                style={{
                  color: '#F88922',
                  fontSize: 20,
                  marginLeft: 6,
                  fontWeight: 'bold',
                }}>
                ₹100
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('SingleMealScreen', {MealId: 1})}>
        <View style={{marginTop: 20}}>
          <View
            style={{
              marginHorizontal: 10,
              borderColor: '#C8C8C8',
              borderStyle: 'solid',
              borderWidth: 1,
              borderRadius: 20,
              paddingBottom: 30,
            }}>
            <Image
              source={require('../../assets/food-main.jpg')}
              style={styles.RecommendProducts}
            />
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                marginHorizontal: 10,
              }}>
              <View style={{flex: 1}}>
                <Text style={{color: '#333333', fontSize: 20}}>
                  Suhani Restaurant
                </Text>
                <Text style={{color: '#707070'}}>Chinnese, North Indian</Text>
              </View>

              <View style={{flex: 1}}>
                <Text
                  style={{
                    color: 'white',
                    backgroundColor: '#509807',
                    textAlign: 'right',
                    marginLeft: 120,
                    padding: 2,
                    borderRadius: 10,
                    fontSize: 15,
                    fontWeight: 'bold',
                  }}>
                  4.5 <Ionicons name="star" size={18} color="white" />
                </Text>
                <Text
                  style={{
                    textAlign: 'right',
                    marginTop: 10,
                    color: '#9E9E9E',
                  }}>
                  {' '}
                  <Fontisto name="fire" size={20} color="#D8553A" /> 145 cal
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 10,
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: '#333333',
                  marginTop: 8,
                  textDecorationLine: 'line-through',
                }}>
                ₹200
              </Text>
              <Text
                style={{
                  color: '#F88922',
                  fontSize: 20,
                  marginLeft: 6,
                  fontWeight: 'bold',
                }}>
                ₹100
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('SingleMealScreen', {MealId: 1})}>
        <View style={{marginTop: 20}}>
          <View
            style={{
              marginHorizontal: 10,
              borderColor: '#C8C8C8',
              borderStyle: 'solid',
              borderWidth: 1,
              borderRadius: 20,
              paddingBottom: 30,
            }}>
            <Image
              source={require('../../assets/food-main.jpg')}
              style={styles.RecommendProducts}
            />
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                marginHorizontal: 10,
              }}>
              <View style={{flex: 1}}>
                <Text style={{color: '#333333', fontSize: 20}}>
                  Suhani Restaurant
                </Text>
                <Text style={{color: '#707070'}}>Chinnese, North Indian</Text>
              </View>

              <View style={{flex: 1}}>
                <Text
                  style={{
                    color: 'white',
                    backgroundColor: '#509807',
                    textAlign: 'right',
                    marginLeft: 120,
                    padding: 2,
                    borderRadius: 10,
                    fontSize: 15,
                    fontWeight: 'bold',
                  }}>
                  4.5 <Ionicons name="star" size={18} color="white" />
                </Text>
                <Text
                  style={{
                    textAlign: 'right',
                    marginTop: 10,
                    color: '#9E9E9E',
                  }}>
                  {' '}
                  <Fontisto name="fire" size={20} color="#D8553A" /> 145 cal
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 10,
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: '#333333',
                  marginTop: 8,
                  textDecorationLine: 'line-through',
                }}>
                ₹200
              </Text>
              <Text
                style={{
                  color: '#F88922',
                  fontSize: 20,
                  marginLeft: 6,
                  fontWeight: 'bold',
                }}>
                ₹100
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('SingleMealScreen', {MealId: 1})}>
        <View style={{marginTop: 20}}>
          <View
            style={{
              marginHorizontal: 10,
              borderColor: '#C8C8C8',
              borderStyle: 'solid',
              borderWidth: 1,
              borderRadius: 20,
              paddingBottom: 30,
            }}>
            <Image
              source={require('../../assets/food-main.jpg')}
              style={styles.RecommendProducts}
            />
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                marginHorizontal: 10,
              }}>
              <View style={{flex: 1}}>
                <Text style={{color: '#333333', fontSize: 20}}>
                  Suhani Restaurant
                </Text>
                <Text style={{color: '#707070'}}>Chinnese, North Indian</Text>
              </View>

              <View style={{flex: 1}}>
                <Text
                  style={{
                    color: 'white',
                    backgroundColor: '#509807',
                    textAlign: 'right',
                    marginLeft: 120,
                    padding: 2,
                    borderRadius: 10,
                    fontSize: 15,
                    fontWeight: 'bold',
                  }}>
                  4.5 <Ionicons name="star" size={18} color="white" />
                </Text>
                <Text
                  style={{
                    textAlign: 'right',
                    marginTop: 10,
                    color: '#9E9E9E',
                  }}>
                  {' '}
                  <Fontisto name="fire" size={20} color="#D8553A" /> 145 cal
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 10,
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: '#333333',
                  marginTop: 8,
                  textDecorationLine: 'line-through',
                }}>
                ₹200
              </Text>
              <Text
                style={{
                  color: '#F88922',
                  fontSize: 20,
                  marginLeft: 6,
                  fontWeight: 'bold',
                }}>
                ₹100
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
     
    </ScrollView>
  );
};

export default Wishlist;
