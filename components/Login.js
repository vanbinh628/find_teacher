import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import MessageBox from './MessageBox';
import { useSelector, useDispatch } from 'react-redux';
import { setName, setPassword, getListTopic } from '../redux/action';
const Login = ({navigation}) => {
  const notificaiton = 'user name or pass is wrong';

  const isTrueName = 'vansun1996';
  const isTruePass = '123456'

  const {name, password} = useSelector(state => state.userReducer);
  const dispatch = useDispatch()
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isShowMessBox, setIsShowMessBox] = useState(false);

  const onPressHandler = () => {

    if(userName.trim() === isTrueName && userPassword === isTruePass) {
      dispatch(setName(userName));
      dispatch(setPassword(userPassword));
      dispatch(getListTopic())
      navigation.navigate('Bottom_Navigation');
    } else {
      setIsShowMessBox(true);
    }
  }
    return (
      

      <View style={styles.container}>
        <Text>{name}</Text>
        <MessageBox isShowMessageBox = {isShowMessBox}
          onPressCloseMessageBox = {()=>setIsShowMessBox(false)}
          type = 'Information'
          title = {notificaiton}/>
        <TextInput style = {styles.text_input}
            placeholder = 'User Name'
            onChangeText={(value) => setUserName(value)}/>
        <TextInput style = {styles.text_input}
            placeholder = 'password'
            secureTextEntry={true}
            onChangeText={(value) => setUserPassword(value)}/>
        
        <View style = {styles.container_action}>
        <TouchableOpacity style = {styles.button_register}>
          <Text style = {styles.button_text_register}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.button_Login}
          onPress = {onPressHandler}>
          <Text style = {styles.button_text_Login}>Login</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
}
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    backgroundColor:'white'
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
    width:140,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 10,
    borderWidth:1,
    borderColor: '#ffff'
  },
  button_text_register:{
    fontSize: 20,
    fontWeight:'bold'
  },
  button_Login:{
    width:140,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#6dcff6',
    borderRadius: 10,
  },
  button_text_Login:{
    fontSize: 20,
    color:'white',
    fontWeight:'bold'
  }
});
