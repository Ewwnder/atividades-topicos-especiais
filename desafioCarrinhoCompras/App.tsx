import { useEffect, useReducer, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  StyleSheet,
} from "react-native";

type Produto = {
  id: number;
  nome: string;
  preco: number;
};

type Action =
  | { type: "ADICIONAR"; payload: Produto }
  | { type: "REMOVER"; payload: number };

function carrinhoReducer(state: Produto[], action: Action) {
  switch (action.type) {
    case "ADICIONAR":
      return [...state, action.payload];

    case "REMOVER":
      return state.filter((item, index) => index !== action.payload);

    default:
      return state;
  }
}

export default function App() {
  const [busca, setBusca] = useState("");
  const [carrinho, dispatch] = useReducer(carrinhoReducer, []);

  const produtos: Produto[] = [
    { id: 1, nome: "Arroz", preco: 18 },
    { id: 2, nome: "Feijão", preco: 7 },
    { id: 3, nome: "Óleo", preco: 7 },
    { id: 4, nome: "Café", preco: 26}
  ];

  useEffect(() => {
    console.log("Carrinho alterado: ", carrinho);
  }, [carrinho]);

  function adicionarProdutoCarrinho(produto: Produto) {
    dispatch({
      type: "ADICIONAR",
      payload: produto,
    });
  }

  function removerProdutoCarrinho(index: number) {
    dispatch({
      type: "REMOVER",
      payload: index,
    });
  }

  function calcularValorCarrinho() {
    return carrinho.reduce((total, item) => total + item.preco, 0);
  }

  const filtrarProdutos = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Carrinho de Compras (Ewwnder)</Text>

      <TextInput
        style={styles.input}
        placeholder="Informe um produto que deseje buscar"
        value={busca}
        onChangeText={setBusca}
      />

      <Text style={styles.subtitulo}>Produtos</Text>

      {filtrarProdutos.map((produto) => (
        <View key={produto.id} style={styles.card}>
          <View>
            <Text style={styles.nome}>{produto.nome}</Text>
            <Text>R$ {produto.preco}</Text>
          </View>

          <TouchableOpacity
            style={styles.botao}
            onPress={() => adicionarProdutoCarrinho(produto)}
          >
            <Text style={styles.textoBotao}>Adicionar</Text>
          </TouchableOpacity>
        </View>
      ))}

      <Text style={styles.subtitulo}>Carrinho</Text>

      <FlatList
        data={carrinho}
        keyExtractor={(_, index) => index.toString()}
        ListEmptyComponent={() => (
          <Text style={styles.vazio}>
            Nenhum produto no carrinho
          </Text>
        )}
        renderItem={({ item, index }) => (
          <View style={styles.itemCarrinho}>
            <View>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text>R$ {item.preco}</Text>
            </View>

            <TouchableOpacity
              style={styles.botaoRemover}
              onPress={() => removerProdutoCarrinho(index)}
            >
              <Text style={styles.textoBotao}>Remover</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <View style={styles.totalBox}>
        <Text style={styles.total}>
          Total: R$ {calcularValorCarrinho()}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F2F2F2",
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: "#AAA",
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },

  subtitulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },

  card: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    borderWidth: 1,
    borderColor: "#DDD",
  },

  nome: {
    fontSize: 18,
    fontWeight: "bold",
  },

  botao: {
    backgroundColor: "green",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
  },

  botaoRemover: {
    backgroundColor: "red",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
  },

  textoBotao: {
    color: "white",
    fontWeight: "bold",
  },

  itemCarrinho: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    borderWidth: 1,
    borderColor: "#DDD",
  },

  vazio: {
    textAlign: "center",
    marginTop: 10,
    color: "#777",
  },

  totalBox: {
    marginTop: 20,
    backgroundColor: "#C8A2C8",
    padding: 15,
    borderRadius: 10,
  },

  total: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
});