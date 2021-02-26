import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { Feather } from "@expo/vector-icons";

import LogoAccenture from '../imagens/Accenture.png';
import { contactSend } from '../service';

import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

// import { Container } from './styles';

export default function Contact() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [text, setText] = useState('');
  const [isSendMessage, setIsSendMessage] = useState(false);

  function sendAccentureMessage() {

    const postData = {
      name,
      email,
      phone,
      text,
    };
    contactSend.post('', postData).then(
      response => {
        setIsSendMessage(true);
        setName('');
        setEmail('');
        setPhone('');
        setText('');
      }
    );
  }

  function handleOpenStorage() {
    navigation.navigate('storage')
  }

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {isSendMessage ? (
          <>
            <Text style={styles.sendText}>Sua mensagem</Text>
            <Text style={styles.sendText}>Foi enviada</Text>
            <LottieView
              source={require('../animations/gradientBall.json')}
              style={styles.animationContent}
              autoPlay
            />
          </>
        ) : (
            <>
              <Image
                style={styles.logoAccenture}
                source={LogoAccenture}
              />

              <Text style={styles.titleForm}>Fomulário de contato</Text>
              <View>
                <Text style={styles.labelForm}>Seu nome:</Text>
                <TextInput
                  style={styles.inputForm}
                  value={name}
                  onChangeText={(text) => setName(text)}
                />
                <Text style={styles.labelForm}>Seu telefone:</Text>
                <TextInput
                  style={styles.inputForm}
                  value={phone}
                  onChangeText={(text) => setPhone(text)}
                />
                <Text style={styles.labelForm}>Seu email:</Text>
                <TextInput
                  style={styles.inputForm}
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                />
                <Text style={styles.labelForm}>Deixe sua mensagem:</Text>
                <TextInput
                  style={styles.inputFormMultiline}
                  value={text}
                  onChangeText={(text) => setText(text)}
                  multiline
                />
                <RectButton style={styles.sendButton} onPress={sendAccentureMessage}>
                  <Text style={styles.textSendButton}>Enviar mensagem</Text>
                  <Feather name="send" size={20} color="#fff" />
                </RectButton>
                <RectButton style={styles.sendButton} onPress={handleOpenStorage}>
                  <Text style={styles.textSendButton}>Abrir Storage</Text>
                  <Feather name="database" size={20} color="#fff" />
                </RectButton>
              </View>
            </>
          )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').height,
  },

  logoAccenture: {
    marginVertical: 12,
    width: 200,
    height: 52,
  },
  scrollView: {
    width: Dimensions.get('window').width,
  },
  sendText: {
    color: '#a100ff',
    fontSize: 24,
  },
  animationContent: {
    height: 200,
  },
  titleForm: {
    marginBottom: 10,
    fontSize: 20,
    color: '#333',
  },
  labelForm: {
    marginTop: 4,
  },
  inputForm: {
    height: 50,
    width: 350,
    borderColor: '#b3b3b3',
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 2,
    paddingHorizontal: 12,
    marginTop: 4,
    marginBottom: 10,
  },
  inputFormMultiline: {
    height: 120,
    width: 350,
    borderColor: '#b3b3b3',
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 2,
    paddingHorizontal: 12,
    marginTop: 4,
    marginBottom: 10,
  },
  sendButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
    marginTop: 20,
    backgroundColor: '#a100ff',
    padding: 14,
    borderRadius: 4,
  },
  textSendButton: {
    fontSize: 20,
    marginRight: 12,
    color: '#fff',
  },
});
