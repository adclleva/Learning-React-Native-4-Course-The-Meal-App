import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

const CategoryMealsScreen = (props) => {
  const { navigation } = props;

  const categoryId = navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find(
    (category) => category.id == categoryId
  );

  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen!</Text>
      <Button
        title="Go to Category Details Screen"
        onPress={() => {
          navigation.navigate("MealDetail");
        }}
      />
      <Button
        title="Go Back"
        onPress={() => {
          // alternatively you can use pop() instead of goBack()
          // pop only works in stack navigators
          navigation.goBack();
        }}
      />
    </View>
  );
};

// you can also have the navigation as a function and return what we want
// we get the same navigation props that we get in our component props
CategoryMealsScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((category) => {
    return categoryId === category.id;
  });

  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoryMealsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
