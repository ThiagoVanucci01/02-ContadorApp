import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View,  } from 'react-native';

export default function App() {
  //contador vai comçar no 0
  const [contador,setContador] = useState(0)
//acrecentar mais 1
  const handleIncrement = () => {
    setContador(contador+1);
  };
    const handleDecrement = () => {
      //se o contador for maior que 0 subtrai 1
      contador>0 && setContador(contador-1);
  };

  const handleReset = () => {
    //fala que a varialvel é zero
     setContador(0);
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador</Text>
      <Text style={styles.CounterText} >{contador}</Text>
      <View style={styles.buttonContainer}>
        {/* quando clicar acontece o const do handleincrement la em cima */}
        <TouchableOpacity style={styles.button} onPress={handleIncrement} >
          <Text style={styles.buttonText}>Aumentar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleDecrement} >
          <Text style={styles.buttonText}>Diminuir</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={handleReset}>
      <Text style={styles.buttonText}>Zerar </Text> 
      </TouchableOpacity>
      <StatusBar style='auto'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize:32,
    fontWeight:"bold",
marginBottom:20,
  
  },
  CounterText:{
    fontSize:64,
    fontWeight:"bold",
    color:"#333",
    marginBotton:30,
  },
  button:{
backgroundColor:"#007bff",
paddingVertical:15,
paddingHorizontal:40,
borderRadius:10,

  },
  buttonText:{
    color:"#fff",
    fontSize:18,
    fontWeight:"bold",
  },
  buttonContainer:{
    flexDirection:"row-reverse",
marginBottom:20,
gap:6,

  },
  resetButton:{
    backgroundColor:"#dc3545"
  },

});
