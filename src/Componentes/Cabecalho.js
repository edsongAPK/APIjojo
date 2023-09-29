import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export function Cabecalho() {
    return (
        <View>
           <Image style={estilos.logo} source={{ uri: `https://logos-world.net/wp-content/uploads/2022/01/Jojos-Bizarre-Adventure-anime-Logo-2012.png` }} 
                        resizeMode="contain"
                    />

            <Text style={estilos.texto}>API JOJO</Text>
            <Text style={estilos.texto}>Personagens</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    texto: {
        color: 'black',
        fontSize: 18,
    },
    
    logo: {
        justifyContent: 'center',
        height: 160,
        width: 160,
        borderRadius: 8,
    },
    
})
