import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import client, { urlFor } from "../sanity";

const Categories = () => {
  const [category, setcategory] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `
      *[_type=="category"]
    `
      )
      .then((data) => setcategory(data));
    // .then((data) => {
    //   setfeatureCategories(data);
    // });
  }, []);

  return (
    <ScrollView horizontal className="space-x-2  px-4 pt-2.5">
      {category?.map((category) => (
        <CategoryCard
          key={category._id}
          id={category._id}
          title={category.name}
          imageUrl={urlFor(category.image).url()}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
