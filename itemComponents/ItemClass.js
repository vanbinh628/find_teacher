import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
const ItemClass = () => {
    return (
        <View style={styles.container_class}>
            <View style={styles.infomation}>
                <Text style={styles.text_title} numberOfLines={1}>aaabc</Text>
                <Text>abc</Text>
                <Text>abc</Text>
                <Text>abc</Text>
            </View>
            <View style={styles.button_status}>
                <TouchableOpacity>
                    <Text style={stylesTheme('Book').text_button}>Book</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default ItemClass;

const styles = StyleSheet.create({
    container_class: {
        padding: 15,
        marginBottom: 20,
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: '#ffffff'
    },
    infomation: {
        flex: 0.7
    },
    text_title: {
        fontSize: 18,
        fontWeight: '800',
        color: '#000000',
    },
    button_status: {
        flex: 0.3,
        borderLeftWidth: 0.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
}
);
const stylesTheme = (type) => StyleSheet.create({
        text_button: {
            fontSize: 24,
            fontWeight: 'bold',
            color: type === 'Book' ? '#6DCFF6' : 
                        type === 'Booked' ? '#3CBA54' : '#F1F1F1'
        }
})
