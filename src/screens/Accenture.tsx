import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from "@expo/vector-icons";

import AccentureLogo from '../imagens/Accenture.png';


export default function Accenture() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={AccentureLogo}
        width={60}
        height={232}
      />
      <Text style={styles.title}>Accenture</Text>
      <Text style={styles.paragraph}>Texto complementar</Text>

      <RectButton
        style={styles.contactButton}
        onPress={() => alert('Olá')}
      >
        <Text style={styles.contactText}>Entrar em contato</Text>
        <Feather name="send" size={20} />
      </RectButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  logo: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 24,
    textAlign: 'center',
    color: '#b8b8b8',
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'left',
    color: '#b8b8b8',
  },
  contactButton: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    color: '#a100FF',
    marginBottom: 20,
  },
  contactText: {
    color: '#a100FF',
    fontSize: 18,
    marginRight: 18,
  }
});