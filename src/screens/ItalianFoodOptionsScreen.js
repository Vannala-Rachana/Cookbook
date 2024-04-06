import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import RecipeCard from '../components/RecipeCard';
import { recipesByCategory } from '../Constant';

const ItalianFoodOptionsScreen = () => {
  const italianRecipes = recipesByCategory.Italian;

  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>
      <View style={{ marginTop: 22 }}>
    
      </View>

      <View style={{ marginTop: 22, flex: 1 }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Italian Recipes</Text>
        <RecipeCard recipes={italianRecipes} />
      </View>
    </SafeAreaView>
  );
};

export default ItalianFoodOptionsScreen;

const styles = StyleSheet.create({});

