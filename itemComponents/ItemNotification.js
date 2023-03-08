import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
const ItemNotification = (props) => {
    return (
        <View style={styles.container_item}>
            <View style={styles.container_image}>
                <Image
                    style={styles.image}
                    source={{uri: props.uriImage}} />
            </View>
            <View style={styles.infomation}>
                <Text style={styles.text_title}>{props.time}</Text>
                <Text style={styles.text_title}>{props.location}</Text>
                <Text>{props.nameTeacher}</Text>
                <TouchableOpacity>
                    <Text style={styles.text_link}>{props.lesson}</Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.container_button}>
                <TouchableOpacity style = {styleTheme(props.type).button}>
                    <Text style = {styles.text_title_button}>{props.type}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default ItemNotification;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
    },
    container_item: {
        padding: 8,
        flexDirection: 'row',
        borderRadius: 10,
        borderLeftWidth: 10,
        borderColor: '#6dcff6',
        backgroundColor: '#ffffff',
        marginBottom: 8,
        marginTop:8,
    },
    infomation: {
        flex: 0.55,
    },
    text_title: {
        fontSize: 16,
        fontWeight: '800',
        color: '#000000',
    },
    text_link: {
        color: '#6dcff6',
    },
    container_image: {
        flex: 0.2,
        justifyContent: 'center',
        alignContent: 'center',
        marginRight: 15,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 40,
    },
    text_title_button: {
        color: '#fff',
    },
    container_button: {
        flex: 0.25,
        justifyContent: 'center',
    }
}
);

const styleTheme = (type) => StyleSheet.create({
    button: {
        padding: 10,
        backgroundColor: type === 'Check In' ? '#3cba54' : '#c4c4c4',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems:'center'
    },
})
