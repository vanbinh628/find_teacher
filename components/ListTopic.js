import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, FlatList, RefreshControl } from 'react-native';
import { SearchBar } from 'react-native-elements';

import { useSelector, useDispatch } from 'react-redux';
import { fetchTopics } from '../redux/action/ActionTopic'
const ListTopic = () => {
  const { topics, isLoading } = useSelector(state => state.topics);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopics());
  }, []);

  console.log(topics)
  return (
    <View style={styles.container}>
      <SearchBar style= {styles.searchbar} 
        containerStyle={styles.searchcontainer} 
        inputContainerStyle = {styles.inputContainer}
        placeholder = 'Search the location'/>
      <ScrollView refreshControl={<RefreshControl refreshing = {isLoading} />}>

        <FlatList
          data={topics}
          renderItem={({ item }) => (
            <View style={[shadow,styles.container_item]}>
              <Image source={{ uri: 'https://i.pinimg.com/736x/0f/13/84/0f1384d228306f1d5aef48f4ecc143e1.jpg' }} style={styles.image_item} />
              <View style={styles.container_texts}>
                <Text style={styles.text_title}>{item.title}</Text>
                <Text style={styles.text_content}>{item.content}</Text>
                <Text style={styles.text_hashtag}>{item.hashtag}</Text>
              </View>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    </View>
  );
}
export default ListTopic;

const shadow = {
  shadowColor: '#000',
  shadowRadius: 10,
  shadowOpacity: 0.6,
  elevation: 5,
  shadowOffset: {
    width: 0,
    height: 4
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: 'white'
  },
  searchcontainer: {
    backgroundColor:'transparent',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
  },
  searchbar: {
    width: "100%",
    backgroundColor: 'white', //no effect
    borderWidth: 0, //no effect
    shadowColor: 'white', //no effect
  },
  inputContainer: {
    height: 35 ,backgroundColor:'white', borderWidth: 1,  borderRadius: 20,
  },

  container_item: {
    height: 150,
    flexDirection: 'row',
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor:'white'
  },
  image_item: {
    backgroundColor: 'blue',
    height: 150,
    flex: 0.4,
    borderRadius: 10,
  },
  container_texts: {
    flex: 0.6,
    paddingRight: 8,
    paddingLeft: 8,
    paddingTop: 5,
    paddingBottom: 5

  },
  text_title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 5,
  },
  text_content: {
    fontSize: 20,
    color: 'black'
  },
  text_hashtag: {
    fontSize: 20,
    color: '#6dcff6',
    marginTop: 5,
  }
});
