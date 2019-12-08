import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';

import api from '../services/api';

export default function Main() {

    const [pets, setPets] = useState([]);

    useEffect(() => {
        async function loadPets() {
            const response = await api.get('/pets')
            setPets(response.data);
        }
        loadPets();
    });

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.cardsContainer}>
                { pets.map( pet => (
                    <View key={pet._id} style={styles.card}>
                        <View style={styles.footer}>
                            <Text style={styles.name}>{pet.name}</Text>
                            <Text style={styles.raca}>{pet.raca}</Text>
                        </View>
                    </View>
                ))}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        alignItems: "center",
        justifyContent: "space-between"
    },
    cardsContainer: {
        flex: 1,
        alignSelf: "stretch",
        alignItems: "center",
        maxHeight: 500
    },
    card: {
        borderWidth: 1,
        borderColor: "#DDD",
        borderRadius: 8,
        margin: 30,
        overflow: "hidden"
    },
    footer: {
        backgroundColor: "#FFF",
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333"
    },
    raca: {
        fontSize: 14,
        color: "#999",
        marginTop: 5,
        lineHeight: 18
    }
});