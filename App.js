import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'

export default function App(){
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  function handleSubmit(){
    const alt = altura / 100;
    const imc = peso / (alt * alt);
    if(imc < 18.6){
      alert(`Você está abaixo do peso: ` + imc.toFixed(2));
    }else if(imc >= 18.6 && imc < 24.9){
      alert(`Peso ideal: ` + imc.toFixed(2));
      
    }else if(imc >= 24.9 && imc < 34.9){
      alert(`Levemente acima do peso: ` + imc.toFixed(2));

    }
  }

  return(
      <View style={style.container}>
        <Text style={style.title}>Calcule seu IMC</Text>
        <TextInput
          style={style.input}
          value={peso}
          onChangeText={(peso)=>{
             setPeso(peso)
          }}
          placeholder='peso (Kg)'
          keyboardType='numeric'
        />
        <TextInput
          style={style.input}
          value={altura}
          onChangeText={(altura)=>{
             setAltura(altura)
          }}
          placeholder='Altura (cm)'
          keyboardType='numeric'
        />
        <TouchableOpacity 
        style={style.btn}
        onPress={handleSubmit}
        >
          <Text style={style.btnText}>Calcular</Text>
        </TouchableOpacity>
      </View>
  );
}

const style = StyleSheet.create({
  container:{
    flex:1,
  },
  title:{
    textAlign: 'center',
    marginTop: 50,
    fontSize: 30
  },
  input:{
    backgroundColor: '#eee',
    borderRadius:10,
    margin:15,
    padding: 10,
    color: '#424242',
    fontSize: 20
  },
  btn:{
    backgroundColor:'#138061',
    borderRadius:10,
    margin: 15,
    padding: 20
  },
  btnText:{
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20
  }
})