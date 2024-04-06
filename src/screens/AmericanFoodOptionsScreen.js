import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import RecipeCard from '../components/RecipeCard';
import { recipesByCategory } from '../Constant';

const AmericanFoodOptionsScreen = () => {
  const americanRecipes = recipesByCategory.American;

  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>
      <View style={{ marginTop: 22 }}>
       
      </View>

      <View style={{ marginTop: 22, flex: 1 }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>American Recipes</Text>
        <RecipeCard recipes={americanRecipes} />
      </View>
    </SafeAreaView>
  );
};

export default AmericanFoodOptionsScreen;

const styles = StyleSheet.create({});


