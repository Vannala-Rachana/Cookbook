import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import CategoriesFilter from "../components/CategoriesFilter";
import RecipeCard from "../components/RecipeCard";
import { useNavigation } from '@react-navigation/native';
import { recipesByCategory } from '../Constant';

const RecipeListScreen = () => {
    const navigation = useNavigation();
    const indianRecipes = recipesByCategory.Indian;
    const handleCategoryPress = (category) => {
        navigation.navigate(`${category}FoodOptionsScreen`);
    };

    return (
        <SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>
            <View style={{ marginTop: 22 }}>
                <Text style={{ fontSize: 22, fontWeight: "bold" }}>Categories</Text>
                {/* Categories list */}<Text></Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {["Indian", "Chinese", "Mexican", "Italian", "American"].map((category) => (
                        <TouchableOpacity 
                            key={category}
                            style={styles.categoryButton}
                            onPress={() => handleCategoryPress(category)}
                        >
                            <Text style={styles.categoryButtonText}>{category}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            {/* Recipe List Filter */}
            <View style={{ marginTop: 22, flex: 1 }}>
                <Text style={{ fontSize: 22, fontWeight: "bold" }}>Recipes</Text>
                {/* Recipes list */}
                <RecipeCard recipes={indianRecipes} />
                <RecipeCard />

                
            </View>
        </SafeAreaView>
    );
};

export default RecipeListScreen;

const styles = StyleSheet.create({
    categoryButton: {
        backgroundColor: '#77B0AA',
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 10,
        marginRight: 10,
    },
    categoryButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
});
