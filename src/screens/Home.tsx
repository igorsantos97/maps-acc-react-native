import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import PinInsert from '../imagens/Pin.png';
import { useNavigation } from '@react-navigation/native';

export default function Home() {

  const navigation = useNavigation()
  function handlePageDetails() {
    navigation.navigate('accenture');
  }

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -23.533840,
          longitude: -46.912750,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >

        <Marker
          icon={PinInsert}
          coordinate={{
            latitude: -23.533840,
            longitude: -46.912750,
          }}
        >
          <Callout
            tooltip={true}
            onPress={handlePageDetails}
          >
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>Detalhes</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Texto qualquer</Text>
        <RectButton style={styles.findButton}>
          <Feather name="search" size={20} color={"#"} />
        </RectButton>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  calloutContainer: {
    backgroundColor: 'rgba(255,255,255, 0.8)',
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    borderRadius: 16,
    justifyContent: 'center',
    marginBottom: 10,
  },
  calloutText: {
    color: '#84e',
    textAlign: 'center'
  },
  footer: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 24,
    backgroundColor: '#fff',
    borderRadius: 20,
    height: 56,
    paddingLeft: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerText: {
    color: '#778',
  },
  findButton: {
    height: 56,
    backgroundColor: '#a100ff',
    width: 56,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
