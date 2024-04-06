// CategoriesFilter.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CategoriesFilter = () => {
    const navigation = useNavigation();

    const handleCategoryPress = (category) => {
        navigation.navigate(`${category}FoodOptionsScreen`);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => handleCategoryPress('Indian')}>
                <Text style={styles.category}>Indian</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleCategoryPress('Chinese')}>
                <Text style={styles.category}>Chinese</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleCategoryPress('Italian')}>
                <Text style={styles.category}>Italian</Text>
            </TouchableOpacity>
            {/* Add more categories as needed */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    category: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
});

export default CategoriesFilter;
