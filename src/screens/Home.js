import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import TopHeader from '../components/Home/TopHeader';
import SearchBar from '../components/Home/SearchBar';
import OffersShow from '../components/Home/OffersShow';
import ExclusiveOffers from '../components/Home/ExclusiveOffers';
import TopCategories from '../components/Home/TopCategories';
import ScrollableProducts from '../components/Home/ScrollableProducts';
import Starters from '../components/Home/Starters';
import RecommendedProducts from '../components/Home/RecommendedProducts';
import styles from '../styles/globalStyles';

const Home = () => {
  return (
    <ScrollView style={styles.backScreen}>
      <TopHeader />
      <SearchBar />
      <OffersShow />
      <View style={styles.divider}></View>
      <ExclusiveOffers />
      <View style={styles.divider}></View>
      <TopCategories />
      <ScrollableProducts />
      <Starters />
      <RecommendedProducts />
    </ScrollView>
  );
};

export default Home;
