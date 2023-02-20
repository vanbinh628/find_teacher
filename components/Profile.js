import React, { useState } from 'react';
import {useDispatch} from 'react-redux'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { getUserInformation } from '../redux/action';
const Profile = ({navigation}) => {
    const dispatch = useDispatch();

    const onPressHandler = () => {
        dispatch(getUserInformation())
        navigation.navigate('EditProfile');
    }

    return (
        <View>
            <View style={styles.container_profile}>
                <View style={styles.container_infor}>
                    <Image style={styles.image_view}
                        source={require('../jupiter_leo.jpg')} />
                    <View style={styles.container_text}>
                        <Text style={styles.text_name}>Gia Han</Text>
                        <Text>email@gmail.com</Text>
                        <TouchableOpacity onPress={onPressHandler}>
                            <Text style={styles.text_change_pass}>Edit your profile</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.container_bottom}>
                    <View style={styles.view1}>
                        <Text style={styles.text_large}>Total Class</Text>
                        <Text style={styles.text_number}>13</Text>
                    </View>
                    <View style={styles.view1}>
                        <Text style={styles.text_large}>Remain Class</Text>
                        <Text style={styles.text_number}>13</Text>
                    </View>
                </View>
            </View>

            <TouchableOpacity style = {styles.button}>
                <Text style = {styles.text_logout}>Log out</Text>
            </TouchableOpacity>
        </View>
    );

}
export default Profile;
const styles = StyleSheet.create({
    container_profile: {
        backgroundColor: '#ffff',
        padding: 20,
        borderRadius: 10
    },
    container_infor: {
        flexDirection: 'row',
        paddingTop: 15,
    },
    image_view: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
        marginRight: 30
    },
    container_text: {
        flexDirection: 'column',
    },
    container_bottom: {
        flexDirection: 'row',
    },
    view1: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor:'#dddddd',
        paddingTop: 10
    },
    text_name: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    },
    text_change_pass: {
        color: '#6dcff6',
        fontWeight: '800',
        marginTop: 15
    },
    text_large: {
        fontSize: 20,
        color: 'black',
    },
    text_number: {
        fontSize: 23,
        fontWeight: 'bold',
        color: 'black',
    },

    button: {
        backgroundColor:'#ffff',
        marginTop: 20,
        padding: 30,
        borderRadius: 10,
        alignItems: 'center'
    },
    text_logout: {
        fontSize: 23,
        color: 'red',
    },
})
