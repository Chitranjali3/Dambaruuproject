import React, { useEffect, useState } from "react";
import {
    Image,
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
const Home = () => {
    const [recipes, setRecipes] = useState([]);
    const navigation = useNavigation();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://api.npoint.io/32399b015cfb1d04b83e"
                );
                if (!response.ok) {
                    throw new Error('Failed to fetch recipes');
                }
                const data = await response.json();
                setRecipes(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    const renderRecipeItem = (recipe) => (
        <TouchableOpacity
            style={styles.item}
            key={recipe.id}
            onPress={() => navigation.navigate("Video")}
        >
            <Image
                source={{
                    uri: recipe.url,
                }}
                style={styles.thumbnail}
            />
            <View style={styles.text}>
                <Text style={styles.title}>{recipe.title}</Text>
                <Text style={styles.cuisine}>{recipe.Recipe.cuisine}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <ScrollView style={styles.container}>
            <View style={styles.recipe}>
                {recipes.map(renderRecipeItem)}
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 10,
        paddingTop: 20,
    },
    recipe: {
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        paddingHorizontal: 5,
    },
    item: {
        width: "48%", // Adjust based on the desired spacing
        backgroundColor: "#fff",
        aspectRatio: 0.8, 
        marginBottom: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    thumbnail: {
        width: "100%",
        borderRadius: 10,
        marginBottom: 10,
        height: 120,
    },
    text: {
        paddingHorizontal: 10,
        paddingBottom: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
    },
    cuisine: {
        fontSize: 14,
        color: "#888",
    },
});
export default Home;
