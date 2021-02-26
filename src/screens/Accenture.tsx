import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { Feather } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';

import AccentureLogo from '../imagens/Accenture.png';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getData } from "../service";

import { GetUnit, HeaderProps, IAllUnits } from "../interfaces";

export default function Accenture({ title }: HeaderProps) {

  const storageData = async (value: string) => {
    try {
      await AsyncStorage.setItem('@accentureUnit', value);
    } catch (e) {
      console.log(e);
    }
  }

  const navigation = useNavigation();
  const route = useRoute();
  const params = route.params as GetUnit;

  const [unit, setUnit] = useState<IAllUnits>();

  console.log(params.id);

  useEffect(() => {
    getData.get(`find?id=${params.id}`).then(
      response => {
        setUnit(response.data);
        storageData(JSON.stringify(response.data));
      }
    );
  }, [params.id]);


  function handlePushContact() {
    navigation.navigate('contact');
  }

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Image
          style={styles.topImage}
          source={{ uri: unit?.profile }}
        />
        <Image
          style={styles.logo}
          source={AccentureLogo}
          width={60}
          height={232}
        />
        <Text style={styles.title}>{unit?.name}</Text>
        <Text style={styles.paragraph}>{unit?.describle}</Text>

        <Text style={styles.details}>País: {unit?.country}</Text>
        <Text style={styles.details}>Estado: {unit?.state}</Text>
        <Text style={styles.details}>Cidade: {unit?.city}</Text>
        {/* <Text style={styles.details}>Endereço: {unit?.address.number}</Text> */}

        <RectButton style={styles.contactButton} onPress={handlePushContact}>
          <Text style={styles.contactText}>Entrar em contato</Text>
          <Feather name="send" size={20} color="#a100ff" />
        </RectButton>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    width: Dimensions.get('window').width,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  logo: {
    width: 200,
    height: 52,
    marginVertical: 40,

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
    marginBottom: 8,
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
  },
  topImage: {
    width: Dimensions.get('window').width,
    height: 300,
  },
  details: {
    marginVertical: 6,
    color: '#a1a1a1'
  }
});