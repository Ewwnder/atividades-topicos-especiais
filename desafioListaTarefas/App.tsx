import React, { useState, useReducer } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Alert } from 'react-native';

const listener = (state:any, action:any) => {
  switch(action.type) {

    case "adicionar-tarefa":
      return {
        ...state,
        tasks: [...state.tasks, { id: state.nextId, name: action.inputValue, selected: false }],
        nextId: state.nextId + 1
      };
    
    case "toggle-selecionar":
      return {
        ...state,
        tasks: state.tasks.map((task:any) => task.id === action.id ? { ...task, selected: !task.selected } : task)
      };
      
    case "excluir-tarefa":
      return {
        ...state,
        tasks: state.tasks.filter((task:any) => !task.selected)
      };
      
    default:
      return state;
  }
};

export default function App() {
  const [ state, dispatch ] = useReducer(listener, { tasks:[], nextId:1 });
  const [ inputValue, setInputValue ] = useState('');
  
  const handleAddTask = () => {
    if (!inputValue.trim()) return;
    dispatch({ type: 'adicionar-tarefa', inputValue });
    setInputValue('');
  };

  const handleDelete = () => {
    const hasSelected = state.tasks.some((task:any) => task.selected);

    if (!hasSelected) {
      Alert.alert("Atenção", "Selecione ao menos uma tarefa que deseja excluir :)");
      return;
    }

    dispatch({ type: 'excluir-tarefa' });
  };

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Lista de Tarefas</Text>

      <View style={styles.formato}>
        <TextInput
          style={styles.enter}
          placeholder="Informe uma tarefa"
          placeholderTextColor="#ccc"
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
        />
        <View style={styles.botaoAdicionar}>
          <Button title="+" onPress={handleAddTask} />
        </View>
      </View>

      <View style={styles.lista}>
        {state.tasks.map((task:any) => 
          <TouchableOpacity
            key={task.id}
            onPress={() => dispatch({ type: 'toggle-selecionar', id: task.id })}
            style={[styles.atividade, task.selected && styles.selecionar]}
          >
            <Text style={styles.texto}>
              {task.selected ? '☑️ ' : '⬜ '} {task.name}
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.excluir}>
        <Button title="Excluir selecionadas" onPress={handleDelete} />
      </View>

      <View style={{ flex: 1 }} />

      <View style={styles.footer}>
        <Text>Feito por Nicolas Ap (Ewwnder)</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4939BA',
    alignItems: 'center',
    paddingTop: 80,
  },

  titulo: {
    fontSize: 26,
    color: '#fff',
    marginBottom: 20,
    fontWeight: 'bold'
  },

  formato: {
    flexDirection: 'row',
    width: '80%',
    marginBottom: 20
  },

  enter: {
    flex: 1,
    borderColor: "#fff",
    borderWidth: 1,
    backgroundColor: '#5450D6',
    color: 'white',
    padding: 10,
    borderRadius: 8
  },

  botaoAdicionar: {
    marginLeft: 10,
    justifyContent: 'center'
  },

  lista: {
    width: '80%',
    marginBottom: 20
  },

  atividade: {
    padding: 12,
    backgroundColor: '#5F5BE3',
    borderRadius: 8,
    marginBottom: 10
  },

  selecionar: {
    backgroundColor: '#E30000'
  },

  texto: {
    color: 'white',
    fontSize: 16
  },

  excluir: {
    width: '80%'
  },

  footer: {
    width: '100%',
    padding: 10,
    backgroundColor: "#fff",
    alignItems: 'center'
  }
});