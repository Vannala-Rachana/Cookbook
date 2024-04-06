import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const categories = ['Indian', 'Chinese', 'Italian', 'Mexican', 'American'];

const NavigateScreen = ({ navigation }) => {
  
  const handleCategoryPress = (category) => {
    navigation.navigate(`${category}FoodOptionsScreen`, { category });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Category:</Text>
      {categories.map((category) => (
        <TouchableOpacity 
          key={category} 
          style={styles.categoryButton}
          onPress={() => handleCategoryPress(category)}
        >
          <Text style={styles.categoryText}>{category}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  categoryButton: {
    backgroundColor: '#007bff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  categoryText: {
    fontSize: 18,
    color: '#ffffff',
  },
});

export default NavigateScreen;
