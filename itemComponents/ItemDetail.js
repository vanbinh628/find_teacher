import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
const ItemDetail = (props) => {
    return (
        <View style={styles.container}>
          <Text style={styles.text_title} numberOfLines = {1}>{props.title}</Text>
          <Text style={styles.detail}>{props.detail}</Text>
        </View>
    );
}
export default ItemDetail;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingLeft:20,
        paddingRight: 20,
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        borderColor: '#F2F2F2'
    },
    text_title: {
        fontSize: 18,
        fontWeight: '800',
        color: '#000000',
    },

}
);
