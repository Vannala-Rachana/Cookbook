import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import RecipeCard from '../components/RecipeCard';
import { recipesByCategory } from '../Constant';

const MexicanFoodOptionsScreen = () => {
  const mexicanRecipes = recipesByCategory.Mexican;

  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>
      <View style={{ marginTop: 22 }}>
  
      </View>

      <View style={{ marginTop: 22, flex: 1 }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Mexican Recipes</Text>
        <RecipeCard recipes={mexicanRecipes} />
      </View>
    </SafeAreaView>
  );
};

export default MexicanFoodOptionsScreen;

const styles = StyleSheet.create({});
