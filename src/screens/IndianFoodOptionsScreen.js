import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native';
import CategoriesFilter from '../components/CategoriesFilter';
import RecipeCard from '../components/RecipeCard';
import { recipesByCategory } from '../Constant';

const IndianFoodOptionsScreen = () => {
  const indianRecipes = recipesByCategory.Indian;

  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>
      <View style={{ marginTop: 22 }}>
        
      </View>

      <View style={{ marginTop: 22, flex: 1 }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Indian Recipes</Text>
        <RecipeCard recipes={indianRecipes} />
      </View>
    </SafeAreaView>
  );
};

export default IndianFoodOptionsScreen;

const styles = StyleSheet.create({});


