import React from "react";
import { View, Button, Text, Pressable } from "react-native";

import { styles } from "./SecButtonSyles";

export function SecButton(){

    function Pressionar(){
        console.log("Gerador de senha pressionado!")
    }

    return(
        <View>
            <Button
                title="GERAR SENHA 🙊"
                onPress={Pressionar}
            />

            <Pressable>
                <Text style={styles.secButton} onPress={Pressionar}>GERAR SENHA 🙊</Text>
            </Pressable>

            <Pressable>
                <Text style={styles.secButton} onPress={Pressionar}>COPIAR 🗒️</Text>
            </Pressable>
        </View>


    )
}