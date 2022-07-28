import {View, Text} from 'react-native';
import React from 'react';
import TopHeader from '../components/Home/TopHeader';
import SearchBar from '../components/Home/SearchBar';
import OffersShow from '../components/Home/OffersShow';
import ExclusiveOffers from '../components/Home/ExclusiveOffers';
import TopCategories from '../components/Home/TopCategories';
import ScrollableProducts from '../components/Home/ScrollableProducts';
import Starters from '../components/Home/Starters';
import RecommendedProducts from '../components/Home/RecommendedProducts';

const Home = () => {
  return (
    <View>
      <TopHeader />
      <SearchBar />
      <OffersShow />
      <ExclusiveOffers />
      <TopCategories />
      <ScrollableProducts />
      <Starters />
      <RecommendedProducts />
    </View>
  );
};

export default Home;
