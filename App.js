import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>

        <View style={styles.items}>

          {/* This is where the tasks will go! */}
          
          {/*Essas tasks na verade são pequenos componenetes 
          No caso apresenrado o componete foi exibido 3 vezes */}
          <Task text={'Taks 1'}/>
          <Task text={'Taks 2'}/>
          <Task text={'Taks 3'}/>
        </View>

      </View>
      {/* Itremos adicionar as tarefa aqui! */}
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding " : "heigth"}style={styles.writeTaskWraper}>
        <TextInput style={styles.input} placeholder={'Escreva uma tarefa!'}/>

        <TouchableOpacity>
          <View style={styles.addWrapper}>

            <Text style={styles.addText}>+</Text>

          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  
  tasksWrapper: {
     
    paddingTop: 80,
    paddingHorizontal:20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  
  items: {
    marginTop:30,
  },writeTaskWraper:{
    position:'absolute',
    bottom:60,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'

  },
  input:{
    paddingVertical:15,
    paddingHorizontal: 15,
    backgroundColor:'#ffff',
    borderRadius: 60,
    width:250,

},
  addWrapper:{},
  addText:{},
});

