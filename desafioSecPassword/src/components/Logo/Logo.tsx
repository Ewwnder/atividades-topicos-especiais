import React from "react";
import { View, Text, Image } from "react-native";

import { styles } from "./LogoStyles";
import logoPassword from "../../../assets/logo-app.png"

export function Logo(){
    return(
        <View>
            <Text style={styles.title}>PASWORD GENERATOR</Text>

            <Image
                source={logoPassword}
                style={styles.imageSize}
            />
        </View>
    )
}