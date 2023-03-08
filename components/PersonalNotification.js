import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, RefreshControl, View, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchNotifications} from '../redux/action/ActionNotification';
import ItemNotification from '../itemComponents/ItemNotification';

const PersonalNotification = () => {
    const {notifications, isLoading} = useSelector(state=>state.notis);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchNotifications())
    },[])
    
    const arrayTitle = ['Waiting for accept', 'On Going', 'Upcomming']
    return (
        <ScrollView style={styles.container} 
            refreshControl = {<RefreshControl style = {{width:'100%', height:80}} refreshing = {isLoading} />}>
            {arrayTitle.map(item=>
                <View>
                <Text style = {styles.text_title}>{item}</Text>    
                <FlatList
                    data={notifications}
                    renderItem={({ item }) => 
                        <ItemNotification time={item.time}
                            location={item.location}
                            uriImage = {item.uriImage}
                            nameTeacher = {item.nameTeacher}
                            lesson = {item.lesson}
                            type={item.typeButton} />
                    } />
            </View>   
            )}
        </ScrollView>
    )
}
export default PersonalNotification;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    container_infor: {
        flexDirection: 'row',
        paddingTop: 15,
    },
    text_title: {
        fontSize: 20,
        fontWeight: '800',
        color: '#000000',
    },
});