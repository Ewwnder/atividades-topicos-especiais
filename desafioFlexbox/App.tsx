import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import avatar from './assets/avatar.png';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header} />

      <View style={styles.perfil}>
        <View style={styles.avatarContainer}>
          <Image source={avatar} style={styles.avatar} />
        </View>

        <View style={styles.boxNomes}>
          <Text style={styles.nome}>Nicolas Ferreira 'Ewwnder'</Text>
          <Text style={styles.bio}>Estudante de ADS</Text>
        </View>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.colunasInfos}>
          <View style={styles.boxInfos}>
            <Text style={styles.label}>Posts</Text>
          </View>
          <Text style={styles.numero}>0</Text>
        </View>

        <View style={styles.colunasInfos}>
          <View style={styles.boxInfos}>
            <Text style={styles.label}>Seguidores</Text>
          </View>
          <Text style={styles.numero}>41</Text>
        </View>

        <View style={styles.colunasInfos}>
          <View style={styles.boxInfos}>
            <Text style={styles.label}>Seguindo</Text>
          </View>
          <Text style={styles.numero}>245</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botaoTexto}>Seguir</Text>
      </TouchableOpacity>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#1a1a1a',
    width: '100%',
    height: 60,
    marginBottom: 40,
  },
  perfil: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatarContainer: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 15,
    marginBottom: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  boxNomes: {
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  nome: {
    fontSize: 22,
    fontWeight: '500',
  },
  bio: {
    fontSize: 18,
    color: '#333',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    width: '95%', 
    paddingHorizontal: 10,
    marginBottom: 50,
  },
  colunasInfos: {
    alignItems: 'center',
    flex: 1, 
  },
  boxInfos: {
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    minWidth: 100,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
  },
  numero: {
    fontSize: 20,
    fontWeight: '400',
  },
  botao: {
    borderWidth: 2,
    borderColor: '#000',
    paddingVertical: 15,
    width: '60%',
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#1fd43d'
  },
  botaoTexto: {
    fontSize: 24,
    color: '#000',
  },
});