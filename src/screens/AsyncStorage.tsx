import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Dimensions, Text, View } from 'react-native';
import { IAllUnits } from '../interfaces';

// import { Container } from './styles';

export default function AsyncStorageComponent() {
  const [hasStorage, setHasStorage] = useState<IAllUnits>();
  const getData = async () => {
    try {
      const storageValue = await AsyncStorage.getItem('@accentureUnit');
      if (storageValue !== null) {
        return storageValue !== null ? JSON.parse(storageValue) : null;
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getData().then(
      response => setHasStorage(response)
    )
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.container}>Async Storage</Text>
      <Text>{hasStorage?.name}</Text>
      <Text>{hasStorage?.country}</Text>
      <Text>{hasStorage?.state}</Text>
      <Text>{hasStorage?.city}</Text>
    </View>
  );
};


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