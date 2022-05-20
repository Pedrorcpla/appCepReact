import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Cep from './components/Cep';
import Api from './components/Api'

export default function App() {
  const [cep, setCep] = useState(0);
  const [inputCep, setInputCep] = useState(0);
	
  async function carregaCep(){
	  const response = await Api.get('ws/'+inputCep+'/json/');
	  
	  setCep(response.data);
  };
	
  return (
    <View style={styles.container}>
    	<View style={styles.bloco}>
			<Text  style={styles.texto}>Informe seu CEP:</Text>
	  		<TextInput
				style={styles.input}
				placeholder="Ex: 11750000"
				onChangeText={(data)=>setInputCep(data)}
			/>
			
			<TouchableOpacity 
				style={styles.botao}
				onPress={carregaCep}
			>
				<Text style={styles.textoBotao}>Buscar</Text>
			</TouchableOpacity>
			
			<Cep data={cep} />
    	</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bloco: {
	borderRadius: 10,
	backgroundColor: '#fff',
	  
	width: '98%',
	height: '50vh',
	  
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'space-evenly',
  },
  texto: {
	fontSize: 20,  
  },
  input: {
	fontSize: 20, 
	  
	borderWidth: 1,
	borderColor: 'blue',
	borderRadius: 10,
	  
	height: '5vh',
	width: '90%',
	padding: '2%',
  },
  botao: {
	width: '90%',
	backgroundColor: 'blue',
	borderRadius: 10,
	height: '5vh',
	alignItems: 'center',
	justifyContent: 'center',
  },
  textoBotao: {
	fontSize: 20, 
	color: '#fff',
  }
});
