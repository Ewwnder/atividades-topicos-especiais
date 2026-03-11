import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.card1}>🎉 Bem-vindos à aula! 🎉</Text>
      <Text style={styles.card2}>📝 Vamos aprender React Native</Text>
      <Text style={styles.card3}>🚀 Inline styles são fáceis de entender!</Text>
      <Text style={styles.card4}>🌈🎨 Alterar cores e tamanhos é divertido!</Text>
      <Text style={styles.card5}>✨ Desafio: tente recriar este layout!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#147BD1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card1:{
    fontSize: 24,
    color: '#FF6346',
    marginBottom: 20,
    fontWeight: 'bold'
  },
  card2:{
    width: '85%',
    fontSize: 20,
    borderRadius: 8,
    backgroundColor: '#E6F2FF',
    padding: 10,
    color: '#4682B4',
    marginBottom: 20
  },
  card3:{
    fontSize: 17,
    borderRadius: 4,
    backgroundColor: '#D4F5E1',
    padding: 5,
    color: '#4C9D6F',
    marginBottom: 30
  },
  card4:{
    width: '95%',
    fontSize: 20,
    borderRadius: 6,
    backgroundColor: '#FFF5E6',
    padding: 10,
    color: '#FFAA50',
    marginBottom: 20
  },
  card5:{
    fontSize: 14,
    borderRadius: 5,
    backgroundColor: '#F3E6FF',
    padding: 6,
    color: '#9D339F',
  },
});
