import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import RecipeCard from '../components/RecipeCard';
import { recipesByCategory } from '../Constant';

const ChineseFoodOptionsScreen = () => {
  const chineseRecipes = recipesByCategory.Chinese;

  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>
      <View style={{ marginTop: 22 }}>
       
      </View>

      <View style={{ marginTop: 22, flex: 1 }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Chinese Recipes</Text>
        <RecipeCard recipes={chineseRecipes} />
      </View>
    </SafeAreaView>
  );
};

export default ChineseFoodOptionsScreen;

const styles = StyleSheet.create({});
