import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements'

const ActivityNotification = () => {
    return (
        <View style={styles.container}>
            <View style={styles.container_title}>
                <Text style={styles.text_noti}>Mask as all seen</Text>
            </View>
            <View style={styles.container_item}>
                <View style={styles.container_image}>
                    <Image
                        style={styles.image}
                        source={require(`../jupiter_leo.jpg`)} />
                </View>
                <View style={styles.infomation}>
                    <Text style={styles.text_title}>Calle ander</Text>
                    <Text>10:00-11:00</Text>
                    <Text>the coffe house</Text>
                    <Text style={styles.text_link}>Lesson</Text>
                </View>
            </View>

            <View style={styles.container_item}>
                <View style={styles.container_image}>
                    <Image
                        style={styles.image}
                        source={require(`../jupiter_leo.jpg`)} />
                </View>
                <View style={styles.infomation}>
                    <Text style={styles.text_title}>Calle ander</Text>
                    <Text>10:00-11:00</Text>
                    <Text>the coffe house</Text>
                    <Text style={styles.text_link}>Lesson</Text>
                </View>
            </View>
            <View style={styles.container_item}>
                <View style={styles.container_image}>
                    <Image
                        style={styles.image}
                        source={require(`../jupiter_leo.jpg`)} />
                </View>
                <View style={styles.infomation}>
                    <Text style={styles.text_title}>Calle ander</Text>
                    <Text>10:00-11:00</Text>
                    <Text>the coffe house</Text>
                    <Text style={styles.text_link}>Lesson</Text>
                </View>
            </View>
        </View>
    )
}
export default ActivityNotification;
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingBottom: 10,
        margin: 15
    },
    container_title: {
        height: 50,
        paddingRight: 10,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    text_noti: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#6dcff6',
    },
    container_item: {
        padding: 8,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#e4ebee',
        backgroundColor: '#ffffff'
    },
    infomation: {
        flex: 0.8,
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

