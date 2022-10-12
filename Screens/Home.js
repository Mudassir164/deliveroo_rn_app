import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import SafeArea from "../theme/SafeArea";
import Header from "../Components/Header";
import SearchBar from "../Components/SearchBar";
import Categories from "../Components/Categories";
import FeaturedRow from "../Components/FeaturedRow";
import client from "../sanity";
const Home = () => {
  const [featureCategories, setfeatureCategories] = useState([]);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    client
      .fetch(
        `
      *[_type=="featured"]{
        ...,
        restaurants[]->{
          ...,
          dishes[]->
        }
      }
    `
      )
      .then((data) => {
        setfeatureCategories(data);
      });
  }, []);
  //  (featureCategories);
  return (
    <SafeArea>
      <Header />
      <SearchBar />
      <ScrollView className="bg-gray-200">
        <Categories />
        {featureCategories?.map((category) => {
          return (
            <FeaturedRow
              id={category._id}
              key={category._id}
              title={category.name}
              description={category.short_description}
            />
          );
        })}
        {/* <FeaturedRow
          title="Tasty Discount"
          description="Everyone's been enjoying these juicy discounts!"
        />

        <FeaturedRow
          title="Offers near you"
          description="Why not support your local resturant tonight!"
        /> */}
      </ScrollView>
    </SafeArea>
  );
};

export default Home;

// const styles = StyleSheet.create({});
