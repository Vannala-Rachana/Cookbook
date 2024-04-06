import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome2Screen from '../screens/Welcome2Screen';
import WelcomeScreen from '../screens/WelcomeScreen';
import RecipeListScreen from '../screens/RecipeListScreen';
import IndianFoodOptionsScreen from '../screens/IndianFoodOptionsScreen';
import ChineseFoodOptionsScreen from '../screens/ChineseFoodOptionsScreen';
import ItalianFoodOptionsScreen from '../screens/ItalianFoodOptionsScreen';
import MexicanFoodOptionsScreen from '../screens/MexicanFoodOptionsScreen';
import AmericanFoodOptionsScreen from '../screens/AmericanFoodOptionsScreen';
import RecipeDetailsScreen from '../screens/RecipeDetailsScreen';  // Ensure correct path

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome2Screen">
                <Stack.Screen name="Welcome2Screen" component={Welcome2Screen} options={{ headerShown: false }} />
                <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="RecipeList" component={RecipeListScreen} options={{ headerShown: false }} />
                <Stack.Screen name="IndianFoodOptionsScreen" component={IndianFoodOptionsScreen} />
                <Stack.Screen name="ChineseFoodOptionsScreen" component={ChineseFoodOptionsScreen} />
                <Stack.Screen name="ItalianFoodOptionsScreen" component={ItalianFoodOptionsScreen} />
                <Stack.Screen name="MexicanFoodOptionsScreen" component={MexicanFoodOptionsScreen} />
                <Stack.Screen name="AmericanFoodOptionsScreen" component={AmericanFoodOptionsScreen} />
                <Stack.Screen name="RecipeDetails" component={RecipeDetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;

