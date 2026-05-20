import { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'

import { StackNavigationProp } from '@react-navigation/stack'
import { StackParamList } from '../../../App';

type HomeScreenProps = {
    navigation: StackNavigationProp<StackParamList, 'Home'>;
}

export function HomeScreen({navigation}: HomeScreenProps){
    const [ inputValue, setInputValue ] = useState('')

    const navToUserScreen = () => {
        navigation.navigate('User', { username: inputValue })
    }

    return(
        <View>
            <TextInput
                placeholder='Digite seu nome aqui...'
                value={inputValue}
                onChangeText={(text) => setInputValue(text)}
            />
            <Button title='cadastrar' onPress={navToUserScreen}/>
        </View>
    )
}