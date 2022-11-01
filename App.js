import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
  },
});

