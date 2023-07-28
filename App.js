import { View, StyleSheet } from "react-native";
import BarraTitulo from "./components/BarraTitulo";
import Card from "./components/Card";
import Conteudo from "./components/Conteudo";

export default function App() {
  return (
    <View style={styles.container}>
      <BarraTitulo />
      <Card />
      <Conteudo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
