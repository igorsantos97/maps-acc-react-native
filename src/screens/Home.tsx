import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import PinInsert from '../imagens/Pin.png';
import { useNavigation } from '@react-navigation/native';

import { getData } from '../service';
import { InitialMarker, IAllUnits } from "../interfaces";

export default function Home() {
  const navigation = useNavigation();
  const [allUnits, setAllUnits] = useState<IAllUnits[]>([]);
  const [initialMapMarker, setInitialMapMarker] = useState<InitialMarker>({
    latitude: -23.628949249999998,
    longitude: -46.71006813701569,
    latitudeDelta: 0.008,
    longitudeDelta: 0.008,
  });

  useEffect(() => {
    getData.get('all').then(
      response => setAllUnits(response.data)
    );
  }, []);

  navigator.geolocation.getCurrentPosition(
    position => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;

    }
  );

  function handlePageDetails(id: number) {
    navigation.navigate('accenture', { id });
  }


  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={initialMapMarker}
      >

        {allUnits.map(unit => (
          <Marker
            key={unit.id}
            icon={PinInsert}
            coordinate={{
              latitude: unit.latitude,
              longitude: unit.longitude,
            }}
          >
            <Callout
              tooltip={true}
              onPress={() => handlePageDetails(unit.id)}
            >
              <View style={styles.calloutContainer}>
                <Text style={styles.calloutText}>{unit.name}</Text>
              </View>
            </Callout>
          </Marker>
        ))}


      </MapView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Texto qualquer</Text>
        <RectButton style={styles.findButton}>
          <Feather name="search" size={20} color={"#eee"} />
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
