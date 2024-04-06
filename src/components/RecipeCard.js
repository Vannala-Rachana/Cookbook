// RecipeCard.js
import React from 'react';
import { FlatList, StyleSheet, Text, View, Image, Pressable } from "react-native";
import { colors } from "../Constant";
import { useNavigation } from "@react-navigation/native";

const RecipeCard = ({ recipes }) => {
    const navigation = useNavigation();

    return (
        <View>
            <FlatList
                data={recipes}
                renderItem={({ item }) => (
                    <Pressable
                        onPress={() => navigation.navigate("RecipeDetails", { item: item })}
                        style={styles.cardContainer}
                    >
                        <Image
                            source={item.image}
                            style={{ width: 150, height: 150, resizeMode: "cover", borderRadius: 10 }}
                        />
                        <Text style={styles.recipeName}>{item.name}</Text>
                        <Text style={styles.duration}>Duration: {item.time}</Text>
                    </Pressable>
                )}
                numColumns={2}
                columnWrapperStyle={{
                    justifyContent: "space-between",
                }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: colors.COLOR_LIGHT,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 7,
        borderRadius: 16,
        marginVertical: 16,
        alignItems: "center",
        paddingHorizontal: 8,
        paddingVertical: 26,
    },
    recipeName: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 10,
    },
    duration: {
        fontSize: 14,
        marginTop: 6,
    },
});

export default RecipeCard;
