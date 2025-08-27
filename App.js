import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);

  const handleIncrement = () => {
    setContador(contador + 1);
  };

  const handleDecrement = () => {
    contador > 0 && setContador(contador - 1);
  };

  const handleReset = () => {
    setContador(0);
  };

  return (
    <View style={styles.container}>
      {/* Container com fundo branco + imagem sobreposta */}
      <ImageBackground 
        source={require('./assets/PacMen.png')} 
        style={styles.containerCont}
        imageStyle={{ borderRadius: 20, opacity: 0.90 }} // imagem suave sobre o branco
      >
        <View style={styles.innerContent}>
          <Text style={styles.title}>🍕 Contador 🍕</Text>
          <Text></Text>
          <Text></Text>
          <Text style={styles.CounterText}>{contador}</Text>
        </View>
      </ImageBackground>

      {/* Botões */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonDecrement} onPress={handleDecrement}>
          <Text style={styles.buttonText}>Diminuir</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonIncrement} onPress={handleIncrement}>
          <Text style={styles.buttonText}>Mais umaa 🍕</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
        <Text style={styles.buttonText}>Zerar</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#010101',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerCont: {
    width: 280,
    height: 220,
    borderRadius: 20,
    marginBottom: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff", // fundo branco sólido
    overflow: "hidden", // garante que a imagem respeite as bordas
    // sombra iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    // sombra Android
    elevation: 10,
  },
  innerContent: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#000",
  },
  CounterText: {
    fontSize: 64,
    fontWeight: "bold",
    color: "#007bff",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    marginBottom: 20,
    gap: 10,
  },
  buttonIncrement: {
    backgroundColor: "#28a745", // verde
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonDecrement: {
    backgroundColor: "#ffc107", // amarelo
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  resetButton: {
    backgroundColor: "#dc3545", // vermelho
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
