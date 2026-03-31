import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  texto: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
  button: {
    width: "80%",
    borderWidth: 2,
    borderColor: "#00afef",
    borderRadius: 5,
    marginBottom: 25,
    paddingVertical: 8,
    backgroundColor: "#007ab3",
  },
  buttonPressed: {
    backgroundColor: "#005f8a",
    borderColor: "#008ac6",
    transform: [{ scale: 0.98 }],
  },
  input: {
    width: "80%",
    borderWidth: 2,
    borderColor: "#00afef",
    borderRadius: 5,
    marginBottom: 20,
    padding: 10,
    color: "#fff",
    textAlign: "center",
  }
})