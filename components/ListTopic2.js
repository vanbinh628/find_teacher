import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, FlatList, RefreshControl, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getListTopic } from '../redux/action';
const ListTopic2 = () => {

  const { topic, topicRefreshing } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getListTopic())
  }, [])

  const onPressHandler = () => {
      dispatch(getListTopic())
      console.log(topic)
  }
  console.log(topic)
  return (
    <View style={styles.container}>
      <TextInput style={styles.text_input} />
      <Button title='click' onPress={onPressHandler}/>
      <ScrollView 
          refreshControl={<RefreshControl refreshing = {topicRefreshing}/>}>

        <FlatList
          data={topic}
          renderItem={({ item }) => (
            <View style={styles.container_item}>
              <Image source={{uri:item.linkImage}} style={styles.image_item} />
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
export default ListTopic2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  text_input: {
    height: 30,
    borderWidth: 2,
    borderRadius: 20,
    marginBottom: 10,
  },

  container_item: {
    height: 150,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 5
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
    color: 'blue',
    marginTop: 5,
  }
});
