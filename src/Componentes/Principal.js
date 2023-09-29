import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Image, Alert } from "react-native";
import { buscaUsuario } from "../Servicos/buscaUsuario";
import { Cabecalho } from './Cabecalho'
export function Principal() {
    const [nome, setNome] = useState('');
    const [usuario, setUsuario] = useState({});

    async function busca() {
        const resultado = await buscaUsuario();
        for (let c = 0; c < resultado.length; c++) {
            if (nome === resultado[c].name) {
                setUsuario(resultado[c]);
            }
        }

        setNome('');
    }

    return (
        <View style={estilos.container}>
            <Cabecalho />
            {usuario.name && (
                    <View style={estilos.dados}>
                        <Text style={estilos.textoDados}> Nome: {usuario.name}</Text>

                        <Image style={estilos.imagem} source={{ uri: `https://jojos-bizarre-api.netlify.app/assets/${usuario.image}` }} 
                        resizeMode="contain"
                        
                        />

                        <Text style={estilos.textoDados}> Nome Japônes: {usuario.japaneseName} </Text>
                        <Text style={estilos.textoDados}> Bordão: {usuario.catchphrase} </Text>
                        <Text style={estilos.textoDados}> Nacionalidade: {usuario.nationality} </Text>
                        <Text style={estilos.textoDados}> Habilidades: {usuario.abilities} </Text>
                        <Text style={estilos.textoDados}> Família: {usuario.family} </Text>
                        <Text style={estilos.textoDados}> Episódios: {usuario.chapter} </Text>
                    </View>
            )}
            <View>
                <TextInput style={estilos.textoInput} placeholder="Digite o nome do personagem" value={nome} onChangeText={setNome} />
                <Button title="Buscar" onPress={busca}></Button>
            </View>
        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    texto: {
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
    },
    textoDados: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
        
    },
    dados: {
        alignItems: 'center',
        borderColor: '#fff',
    },
    imagem: {
        height: 240,
        width: 240,
        borderRadius: 8, 
    },
    textoInput: {
        borderWidth: 1,
        height: 40,
        width: 300,
        margin: 8,
        backgroundColor: '#fff'
    }
});
