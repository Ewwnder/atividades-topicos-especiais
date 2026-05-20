import { View, Text } from 'react-native'

import { RouteProp } from '@react-navigation/native'
import { StackParamList } from '../../../App'

type UserScreenProps = {
    route: RouteProp<StackParamList, 'User'>
}

export function UserScreen({route}: UserScreenProps){
    const { username } = route.params
    return(
        <View>
            <Text>Bem vindo: {username}</Text>
        </View>
    )
}