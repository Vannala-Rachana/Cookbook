import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native';
import CategoriesFilter from '../components/CategoriesFilter';
import RecipeCard from '../components/RecipeCard';

const RecipeListScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>
            <View style={{ marginTop: 22 }}>
                <Text style={{ fontSize: 22, fontWeight: "bold" }}>Categories</Text>
                {/* Categories list */}
                <CategoriesFilter />
            </View>

            {/* Recipe List Filter */}
            <ScrollView style={{ marginTop: 22, flex: 1 }}>
                <Text style={{ fontSize: 22, fontWeight: "bold" }}>Indian</Text>
                <RecipeCard category="Indian" />

                <Text style={{ fontSize: 22, fontWeight: "bold", marginTop: 20 }}>Chinese</Text>
                <RecipeCard category="Chinese" />

                {/* Repeat this for other categories like Italian, Mexican, etc. */}
            </ScrollView>
        </SafeAreaView>
    );
};

export default RecipeListScreen;

const styles = StyleSheet.create({});
