import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import chicoHappy from './assets/chico-happy.jpg';
import chicoSad from './assets/chico-sad.jpg';
import { useState } from 'react';

export default function App() {

  const [isHappy, setIsHappy] = useState(false);
  const [countClick, setCountClick] = useState(0);

  const handleMood = () => {
    setIsHappy(prev => !prev);
    setCountClick(prev => prev + 1);
  };

  const handleMoodClick = () => {
    setCountClick(0);
  };

  return (
    <View style={[styles.container, { backgroundColor: isHappy ? "#6a0dad" : "#000" }]}>

      <TouchableOpacity onPress={handleMood}>
        <Image
          source={isHappy ? chicoHappy : chicoSad}
          style={{ width: isHappy ? 300 : 150, height: isHappy ? 250 : 150, borderColor: isHappy ? "blue" : "green", borderWidth: 5, borderRadius: 4 }}
        />
      </TouchableOpacity>

      <Text style={{ fontSize: 40, marginVertical: 30 }}>
        {isHappy ? '😁' : '😞'}
      </Text>

      <Text style={{ fontSize: 20, marginVertical: 30, color: "#fff" }}>
        {isHappy ? "Estou muy feliz" : "Estou muy triste"}
      </Text>

      <Button 
        title={isHappy ? "Deixar chico triste" : "Deixar chico feliz"} 
        onPress={handleMood} 
      />

      <Text style={{ fontSize: 18, color: "#fff", marginTop: 20, marginBottom: 15 }}>Você clicou: {countClick}</Text>

      {isHappy && (<Text style={{ fontSize: 18, color: "white", marginTop: 10, marginBottom: 20 }}>Acredite em si mesmo e você será imparável.</Text>)}

      {countClick >= 10 && (<Text style={{ fontSize: 22, color: "yellow", marginTop: 20 }}>PARA DE CLICAR</Text>)}

      <Button title="Resetar contador de cliques" onPress={handleMoodClick} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});