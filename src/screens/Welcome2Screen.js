import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const Welcome2Screen= ({ navigation }) => {
	return (
		<View style={{ flex: 1, alignItems: "center" }}>
			<Image
				source={require("../../assets/images/Welcome.jpeg")}
				style={{ marginTop: 70 }}
			/>

<TouchableOpacity
    onPress={() => navigation.navigate("WelcomeScreen", { selectedCategory: 'Indian' },)}
    style={{
        backgroundColor: "#77B0AA",
        borderRadius: 18,
        paddingVertical: 20,
        marginTop: 115,
        width: "80%",
        alignItems: "center",
    }}
>
    <Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>
        Let's Begin
    </Text>
</TouchableOpacity>

		</View>
	);
};

export default Welcome2Screen;

const styles = StyleSheet.create({});