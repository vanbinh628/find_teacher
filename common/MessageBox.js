import React, { Component } from "react";
import {Modal, View, Text, TouchableOpacity, StyleSheet} from "react-native";

const MessageBox = (props) => {
    return (
        <Modal
          transparent
          animationType='fade'
          visible = {props.isShowMessageBox}
          onRequestClose = {props.onHandleCloseMessageBox}>
          <View style = {styles.messagebox_view}>
            <View style = {styles.messagebox_modal}>
                <View style = {stylesTheme(props.type).messagebox_title} >
                  <Text style = {styles.text_title}>{props.type}</Text>
                </View>
                <View style = {styles.messagebox_body}>
                  <Text style = {styles.text_message}>{props.title}</Text>
                </View>
                <TouchableOpacity style = {stylesTheme(props.type).messagebox_action}
                                  onPress = {props.onPressCloseMessageBox}>
                  <Text style = {styles.text_title}>OK</Text>
                </TouchableOpacity>
            </View>
          </View>
        </Modal>
    );
}


const styles = StyleSheet.create({
    messagebox_view: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#00000099'
    },
    messagebox_modal: {
      width:300,
      height:200,
      backgroundColor: 'white',
      borderRadius: 18,
    },
    text_title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white'
    },
    messagebox_body: {
      height:95,
      padding:15
    },
    text_message: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'black'
    },
  });

  const stylesTheme = (type) => StyleSheet.create({
    messagebox_title: {
        height:50,
        backgroundColor: type === "Warning" ?'#FF6600' : '#6dcff6' ,
        borderTopEndRadius: 18,
        borderTopStartRadius: 18,
        paddingLeft:15,
        justifyContent: 'center'
      },
      messagebox_action: {
        height:40,
        backgroundColor: type === "Warning" ?'#FF6600' : '#6dcff6' ,
        borderRadius:8,
        marginLeft:10,
        marginRight:10,
        marginBottom:10,
        justifyContent: 'center',
        alignItems: 'center'
      }
  });

export default MessageBox;