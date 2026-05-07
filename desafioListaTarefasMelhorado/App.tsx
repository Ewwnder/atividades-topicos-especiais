import { StatusBar } from 'expo-status-bar';
import { useEffect, useReducer, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'adicionar-tarefa':
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: state.nextId,
            nome: action.inputValue,
            completed: false,
          },
        ],
        nextId: state.nextId + 1,
      };

    case 'toggle-concluir':
      return {
        ...state,
        tasks: state.tasks.map((task: any) =>
          task.id === action.id
            ? { ...task, completed: !task.completed }
            : task
        ),
      };

    case 'remover':
      return {
        ...state,
        tasks: state.tasks.filter((task: any) => task.id !== action.id),
      };

    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, {
    tasks: [],
    nextId: 1,
  });

  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    console.log('Lista atualizada:', state.tasks);
  }, [state.tasks]);

  const handleAddTask = () => {
    if (!inputValue.trim()) return;

    dispatch({
      type: 'adicionar-tarefa',
      inputValue,
    });

    setInputValue('');
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/1828/1828817.png',
        }}
        style={styles.icon}
      />

      <Text style={styles.titulo}>Lista de Tarefas</Text>

      <Text style={styles.contador}>
        Total de tarefas: {state.tasks.length}
      </Text>

      <View style={styles.formulario}>
        <TextInput
          style={styles.input}
          placeholder="Informe uma tarefa"
          placeholderTextColor="#ccc"
          value={inputValue}
          onChangeText={setInputValue}
        />

        <View style={styles.botaoAdicionar}>
          <Button title="+" onPress={handleAddTask} />
        </View>
      </View>

      <View style={styles.lista}>
        {state.tasks.map((task: any) => (
          <View
            key={task.id}
            style={[
              styles.card,
              task.completed && styles.cardConcluido,
            ]}
          >
            <TouchableOpacity
              onPress={() =>
                dispatch({
                  type: 'toggle-concluir',
                  id: task.id,
                })
              }
            >
              <Ionicons
                name={
                  task.completed
                    ? 'checkbox'
                    : 'square-outline'
                }
                size={24}
                color="white"
              />
            </TouchableOpacity>

            <Text style={styles.texto}>
              {task.nome}
            </Text>

            <TouchableOpacity
              onPress={() =>
                dispatch({
                  type: 'remover',
                  id: task.id,
                })
              }
            >
              <Ionicons
                name="trash"
                size={24}
                color="white"
              />
            </TouchableOpacity>
          </View>
        ))}
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
    paddingTop: 60,
  },

  icon: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },

  titulo: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 5,
  },

  contador: {
    color: '#fff',
    marginBottom: 15,
  },

  formulario: {
    flexDirection: 'row',
    width: '80%',
    marginBottom: 20,
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#5450D6',
    color: '#fff',
    padding: 10,
    borderRadius: 8,
  },

  botaoAdicionar: {
    marginLeft: 10,
    justifyContent: 'center',
  },

  lista: {
    width: '80%',
  },

  card: {
    backgroundColor: '#5F5BE3',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  cardConcluido: {
    backgroundColor: '#2ecc71',
  },

  texto: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    marginHorizontal: 10,
  },

  footer: {
    width: '100%',
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});