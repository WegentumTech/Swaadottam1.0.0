import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from '../../styles/globalStyles';

const TopCategories = () => {
  //  roundFood.png
  return (
    <View>
      <View style={{marginHorizontal: 10}}>
        <Text style={styles.mainHeader}>Top Categories</Text>
        <Text style={styles.mainPara}>these are the latest offers</Text>
      </View>

      <ScrollView
        style={{marginTop: 10}}
        horizontal
        showsHorizontalScrollIndicator={false}>
        <View>
          <Image
            style={styles.roundFoodScrollable}
            source={require('../../assets/roundFood.png')}
          />
          <Text
            style={{
              textAlign: 'center',
              color: 'black',
              fontSize: 12,
              fontWeight: 'bold',
            }}>
            Chiken Biryani
          </Text>
        </View>
        <View>
          <Image
            style={styles.roundFoodScrollable}
            source={require('../../assets/roundFood.png')}
          />
          <Text
            style={{
              textAlign: 'center',
              color: 'black',
              fontSize: 12,
              fontWeight: 'bold',
            }}>
            Chiken Biryani
          </Text>
        </View>
        <View>
          <Image
            style={styles.roundFoodScrollable}
            source={require('../../assets/roundFood.png')}
          />
          <Text
            style={{
              textAlign: 'center',
              color: 'black',
              fontSize: 12,
              fontWeight: 'bold',
            }}>
            Chiken Biryani
          </Text>
        </View>
        <View>
          <Image
            style={styles.roundFoodScrollable}
            source={require('../../assets/roundFood.png')}
          />
          <Text
            style={{
              textAlign: 'center',
              color: 'black',
              fontSize: 12,
              fontWeight: 'bold',
            }}>
            Chiken Biryani
          </Text>
        </View>
        <View>
          <Image
            style={styles.roundFoodScrollable}
            source={require('../../assets/roundFood.png')}
          />
          <Text
            style={{
              textAlign: 'center',
              color: 'black',
              fontSize: 12,
              fontWeight: 'bold',
            }}>
            Chiken Biryani
          </Text>
        </View>
        <View>
          <Image
            style={styles.roundFoodScrollable}
            source={require('../../assets/roundFood.png')}
          />
          <Text
            style={{
              textAlign: 'center',
              color: 'black',
              fontSize: 12,
              fontWeight: 'bold',
            }}>
            Chiken Biryani
          </Text>
        </View>
        <View>
          <Image
            style={styles.roundFoodScrollable}
            source={require('../../assets/roundFood.png')}
          />
          <Text
            style={{
              textAlign: 'center',
              color: 'black',
              fontSize: 12,
              fontWeight: 'bold',
            }}>
            Chiken Biryani
          </Text>
        </View>
        <View>
          <Image
            style={styles.roundFoodScrollable}
            source={require('../../assets/roundFood.png')}
          />
          <Text
            style={{
              textAlign: 'center',
              color: 'black',
              fontSize: 12,
              fontWeight: 'bold',
            }}>
            Chiken Biryani
          </Text>
        </View>
        <View>
          <Image
            style={styles.roundFoodScrollable}
            source={require('../../assets/roundFood.png')}
          />
          <Text
            style={{
              textAlign: 'center',
              color: 'black',
              fontSize: 12,
              fontWeight: 'bold',
            }}>
            Chiken Biryani
          </Text>
        </View>
        <View>
          <Image
            style={styles.roundFoodScrollable}
            source={require('../../assets/roundFood.png')}
          />
          <Text
            style={{
              textAlign: 'center',
              color: 'black',
              fontSize: 12,
              fontWeight: 'bold',
            }}>
            Chiken Biryani
          </Text>
        </View>
        <View>
          <Image
            style={styles.roundFoodScrollable}
            source={require('../../assets/roundFood.png')}
          />
          <Text
            style={{
              textAlign: 'center',
              color: 'black',
              fontSize: 12,
              fontWeight: 'bold',
            }}>
            Chiken Biryani
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default TopCategories;
