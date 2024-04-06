import React from 'react';
import { View, Text } from 'react-native';

const FoodOptionsScreen = ({ route }) => {
  const { category } = route.params;

  // Fetch food options based on the selected category

  return (
    <View>
      <Text>Food Options for {category}</Text>
      {/* Render food options here */}
    </View>
  );
};

export default FoodOptionsScreen;
