import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { SearchBar } from 'react-native-elements'
const TheClasses = () => {
    return (
        <View style={styles.container}>
            <SearchBar 
                 inputStyle={{backgroundColor: 'white', fontStyle: 'italic'}}
                 containerStyle={styles.search_bar}
                 inputContainerStyle={{backgroundColor: 'white', height: 30}}
                 placeholder="Search the location ..."
            />
            <View style={styles.container_class}>
                <View style={styles.infomation}>
                    <Text style={styles.text_title}>aaabc</Text>
                    <Text>abc</Text>
                    <Text>abc</Text>
                    <Text>abc</Text>
                </View>
                <View style={styles.button_status}>
                    <Text style={styles.text_title_button}>Book</Text>
                </View>
            </View>

            <View style={styles.container_class}>
                <View style={styles.infomation}>
                    <Text style={styles.text_title}>aaabc</Text>
                    <Text>abc</Text>
                    <Text>abc</Text>
                    <Text>abc</Text>
                </View>
                <View style={styles.button_status}>
                    <Text style={styles.text_title_button}>Book</Text>
                </View>
            </View>
        </View>
    )
}
export default TheClasses;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
    },
    search_bar: {
        borderWidth: 2,
        borderRadius: 20,
        marginBottom: 10,
        backgroundColor: '#fff'
    },
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
    text_title_button: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#6dcff6',
    },
}
);
