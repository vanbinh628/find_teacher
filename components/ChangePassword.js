import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setName, setPassword } from '../redux/action';
function ChangePassword ({navigation}){

  const onPressHandler = () => {
    navigation.navigate('Login');
  }

  const {name, password} = useSelector(state => state.user);


    return (
      <View style={styles.container}>
        <Text>Current password</Text>
        <TextInput style = {styles.text_input}
          value = {name}/>
        <Text>New password</Text>
        <TextInput style = {styles.text_input}/>
        <Text>Confirm password</Text>
        <TextInput style = {styles.text_input}/>
        
        <View style = {styles.container_action}>
        <TouchableOpacity style = {styles.button_cancel}>
          <Text style = {styles.button_text_cancel}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.button_update}
          onPress = {onPressHandler}>
          <Text style = {styles.button_text_update}>Update</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
}
export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom:45,
    backgroundColor:'white',
  },
  text_input: {
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    marginTop:5,
  },
  text_content: {
    fontSize: 20,
    color: 'black'
  },
  container_action: {
    flexDirection:'row',
    justifyContent:'center' 
   },
  button_cancel:{
    width:130,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 10,
    borderWidth:1,
    marginRight:8,
  },
  button_text_cancel:{
    fontSize: 20,
    fontWeight:'bold'
  },
  button_update:{
    width:130,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#6dcff6',
    borderRadius: 10,
    marginLeft:8,
  },
  button_text_update:{
    fontSize: 20,
    color:'white',
    fontWeight:'bold'
  }
});
