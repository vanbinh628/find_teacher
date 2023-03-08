import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import MessageBox from '../common/MessageBox';
import { useSelector, useDispatch } from 'react-redux';
import { setName, setPassword, getListTopic } from '../redux/action';
import ItemNotification from '../itemComponents/ItemNotification';
import ActivityNotification from './ActivityNotification';
import { Value } from 'react-native-reanimated';
const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [phone, setPhone] = useState('');
    return (
      <View style={styles.container}>
        <Text>{fullName}</Text>
        <Text>Full Name</Text>
        <TextInput style = {styles.text_input}
            onChangeText = {(value) => setFullName(value)}/>
        <Text>Email</Text>
        <TextInput style = {styles.text_input}
            onChangeText = {(value) => setEmail(value)}/>
        <Text>Password</Text>
        <TextInput style = {styles.text_input}
            secureTextEntry = {true}
            onChangeText = {(value) => setPassword(value)}/>
        <Text>Confirm Password</Text>
        <TextInput style = {styles.text_input}
            secureTextEntry = {true}
            onChangeText = {(value) => setConfirmPass(value)}/>
        <Text>Phone</Text>
        <TextInput style = {styles.text_input}
            onChangeText = {(value) => setPhone(value)}/>

        <View style = {styles.container_action}>
        <TouchableOpacity style = {styles.button_register}>
          <Text style = {styles.button_text_register}>Register</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
}
export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    backgroundColor:'#fff'
  },
  text_input: {
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    marginTop:5,
    fontSize: 16
  },
  text_content: {
    fontSize: 20,
    color: 'black'
  },
  container_action: {
    flexDirection:'row',
    justifyContent:'center' 
   },
  button_register:{
    width:160,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#6dcff6',
    borderRadius: 10,
  },
  button_text_register:{
    fontSize: 20,
    color:'white',
    fontWeight:'bold'
  }
});
