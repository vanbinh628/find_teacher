import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HorizontalCalendar from '../common/HorizontalCalendar';
import StarRating from 'react-native-star-rating';
import ItemClass from '../itemComponents/ItemClass';
import ItemDetail from '../itemComponents/ItemDetail';
const TheClasses = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <View >
            <ImageBackground style={styles.container_header} 
                source={{ uri: 'https://i1-giaitri.vnecdn.net/2020/12/14/ThuyChi1301-1607932684-7192-1607933017.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=CDi2AOCP8ULkJemwc2KkYw' }}
                imageStyle = {{opacity:0.6}}>
                <View style={styles.container_top_tab_bar}>
                    
                    <TouchableOpacity style={styles.button_back}>
                        <Ionicons name='arrow-back-outline' size={50} />
                    </TouchableOpacity>
                    <View  style={styles.container_title}>
                        <Text  style={styles.text_title}
                            numberOfLines = {1} >
                            How to learn redux
                        </Text>
                        <StarRating
                                    disabled={true}
                                    maxStars={5}
                                    rating={3}
                                    starSize={15}
                                    containerStyle={styles.topic_rating}
                                    fullStarColor='#FEAF34'
                                    emptyStarColor='#FEAF34'
                                    halfStarEnabled={true}
                                />
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.container_calendar}>
                <HorizontalCalendar
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                />
            </View>
            <ScrollView style={styles.container}>
                <SearchBar
                    inputStyle={{ backgroundColor: 'white', fontStyle: 'italic' }}
                    containerStyle={styles.search_bar}
                    inputContainerStyle={{ backgroundColor: 'white', height: 30 }}
                    placeholder="Search the location ..."
                />
                 
                 <ItemClass />
                 <ItemDetail title = 'Class Description'
                    detail = 'How you handle a customer'/>
                <ItemDetail title = 'Class Description'
                    detail = 'How you handle a customer'/>

            </ScrollView>
        </View>
    )
}
export default TheClasses;
const styles = StyleSheet.create({
    container: {
        padding: 8,
    },
    container_header: {
        width: '100%',
        height: 200,
        backgroundColor: '#00000099',
        justifyContent: 'flex-end'
    },
    container_top_tab_bar: {
        flexDirection: 'row',
        width: '100%',
        height: 50,
        marginBottom: 20,
        marginLeft: 15,
        marginRight: 15,
    },
    container_title: {
        height: 50,
        paddingLeft: 10,
        justifyContent:'space-between'
    },
    topic_rating: {
        width: 80,
    },
    text_title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FFF',
    },
    button_back: {
        width: 50,
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 5,
    },
    container_calendar: {
        width: '100%',
        height: 70,
        backgroundColor: 'white',
        borderBottomWidth: 0.5,
    },
    search_bar: {
        borderWidth: 2,
        borderRadius: 20,
        marginBottom: 10,
        backgroundColor: '#fff'
    },
}
);
