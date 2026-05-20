import { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'

import { StackNavigationProp } from '@react-navigation/stack'
import { StackParamList } from '../../../App';

type HomeScreenProps = {
    navigation: StackNavigationProp<StackParamList, 'Home'>;
}

export function HomeScreen({navigation}: HomeScreenProps){
    
    const [username, setUsername] = useState('')
    const [idade, setIdade] = useState('')
    const [email, setEmail] = useState('')
    const [cidade, setCidade] = useState('')

    const navToUserScreen = () => {
        navigation.navigate('User', { 
            username,
            idade,
            email,
            cidade
        })
    }

    return(
        <View>
            <TextInput
                placeholder='Digite seu nome aqui...'
                value={username}
                onChangeText={setUsername}
            />

            <TextInput
                placeholder='Digite sua idade aqui...'
                value={idade}
                onChangeText={setIdade}
                keyboardType='numeric'
            />

            <TextInput
                placeholder='Digite seu email aqui...'
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                placeholder='Digite sua cidade aqui...'
                value={cidade}
                onChangeText={setCidade}
            />

            <Button title='cadastrar' onPress={navToUserScreen}/>
        </View>
    )
}