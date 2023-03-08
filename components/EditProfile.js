import React, { useState, useEffect } from 'react';
import { useSelector} from 'react-redux';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
function EditProfile({ navigation }) {

    const { userInfo } = useSelector((state) => state.userInfo)

    const onPressHandler = () => {
        navigation.navigate('ChangePassword');
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.container_infor}>
                <Image style={styles.image_view}
                    source={{uri: userInfo.image }} />
                <View style={styles.container_text}>
                    <Text style={styles.text_name}>{userInfo.fullName}</Text>
                    <Text>{userInfo.email}</Text>
                    <TouchableOpacity onPress={onPressHandler}>
                        <Text style={styles.text_change_pass}>change Password</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
            <Text>Full Name</Text>
            <TextInput style={styles.text_input} value = {userInfo.fullName}/>
            <Text>Username</Text>
            <TextInput style={styles.text_input} value = {userInfo.userName}/>
            <Text>Email</Text>
            <TextInput style={styles.text_input} value = {userInfo.email}/>
            <Text>Phone</Text>
            <TextInput style={styles.text_input} value = {userInfo.phone}
                keyboardType='number-pad' />

            <View style={styles.container_action}>
                <TouchableOpacity style={styles.button_cancel}>
                    <Text style={styles.button_text_cancel}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button_update}
                    onPress={onPressHandler}>
                    <Text style={styles.button_text_update}>Update</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
export default EditProfile;

const styles = StyleSheet.create({
    container: {
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 10,
        paddingBottom: 45,
        backgroundColor: 'white',
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
    text_input: {
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 20,
    },
    text_content: {
        fontSize: 20,
        color: 'black'
    },
    container_action: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    button_cancel: {
        width: 130,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        marginRight: 8,
    },
    button_text_cancel: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    button_update: {
        width: 130,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6dcff6',
        borderRadius: 10,
        marginLeft: 8,
    },
    button_text_update: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    }
});
