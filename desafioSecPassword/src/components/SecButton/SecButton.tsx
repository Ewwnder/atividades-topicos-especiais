import React, { useState } from "react";
import { View, Text, Pressable, Alert, TextInput } from "react-native";
import * as Clipboard from "expo-clipboard";

import { styles } from "./SecButtonSyles"
import { InputPassword } from "../InputPassword/InputPassword";
import { passwordService } from "../../services/PasswordService"

export function SecButton() {
  const [pass, setPass] = useState("");
  const [length, setLength] = useState("15");

  function handlePassword() {
    const size = Number(length)

    if (!size || isNaN(size) || size<=0) {
      Alert.alert("Erro", "Informe um tamanho válido!");
      return;
    }
    const token = passwordService(size);
    setPass(token);
  }

  async function copyPassword() {
    if (!pass) {
      Alert.alert("Atenção", "Não há senha para copiar!");
      return;
    }
    await Clipboard.setStringAsync(pass);
    Alert.alert("Copiado!", "Senha copiada para a área de transferência ✅");
  }

  return (
    <View style={{ alignItems: "center", width: "100%" }}>
      <InputPassword pass={pass} />

      <TextInput
        style={styles.input}
        value={length}
        onChangeText={setLength}
        keyboardType="numeric"
        placeholder="Tamanho da senha"
        placeholderTextColor={'#cecece'}
      />

      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
        onPress={handlePassword}
      >
        <Text style={styles.texto}>GERAR SENHA 🙊</Text>
      </Pressable>

      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
        onPress={copyPassword}
      >
        <Text style={styles.texto}>COPIAR 🗒️</Text>
      </Pressable>
    </View>
  );
}