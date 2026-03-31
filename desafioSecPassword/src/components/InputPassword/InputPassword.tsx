import React from "react";
import { TextInput } from "react-native";

import { styles } from "./InputPasswordStyles";

interface inputPasswordProps{
    pass: string
}

export function InputPassword(props: inputPasswordProps){
    return(
        <TextInput
            placeholder="PASSWORD"
            placeholderTextColor={'#cecece'}
            style={styles.inputPass}
            value={props.pass}
        />
    )
}