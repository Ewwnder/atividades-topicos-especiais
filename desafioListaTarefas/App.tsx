import React, { useState, useReducer } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const listener = (state:any, action:any) => {
  switch(action.type){
    case 'add-new-task':
      return{
        tasks:[...state.tasks, {name:action.inputValue, isDone:false}]
      }
    default:
      return state
  }
}


export default function App() {
  const [ state, dispatch ] = useReducer(listener, {tasks:[]})
  const [ inputValue, setInputValue ] = useState('')
  
  const handleAddTask = () => {
    //console.log(inputValue)
    dispatch({type:'add-new-task', inputValue})
    setInputValue('')
  }

  return (
    <View style={styles.container}>
      <View style={styles.inline}>
        <TextInput
          style={styles.enter}
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
        ></TextInput>
        <Button title="adicionar tarefa" onPress={handleAddTask}></Button>
      </View>

    {state.tasks.map((task:any) => <Text style={[styles.enter, {marginTop:10, textAlign:'center', paddingVertical: 10}]}>{task.name}</Text>)}
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4939BA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  big:{
    fontSize: 40,
    fontWeight: 800
  },
  inline: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'center'
  },
  enter: {
    borderColor: "#fff",
    borderWidth: 1,
    backgroundColor: '#5450D6',
    width: '80%',
    color: 'white'
  }
});
