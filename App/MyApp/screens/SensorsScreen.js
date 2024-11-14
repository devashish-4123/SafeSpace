import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Appbar, List, Divider } from 'react-native-paper';

export default function SensorsScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    setHasPermission(true); 
  }, []);

  if (hasPermission === null) {
    return <Text>Checking camera status...</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <ScrollView style={styles.container}>
     <Appbar.Header style={{ backgroundColor: '#1ABC9C' }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Sensors" />
      </Appbar.Header>

      <View style={styles.row}>
        {/* Air Quality Indicator */}
        <View style={styles.box}>
          <MaterialIcons name="air" size={32} color="#3498db" />
          <Text style={styles.title}>Air Quality</Text>
          <Text style={styles.data}>AQI: 52</Text>
        </View>

        {/* Temperature Indicator */}
        <View style={styles.box}>
          <MaterialIcons name="thermostat" size={32} color="#e74c3c" />
          <Text style={styles.title}>Temperature</Text>
          <Text style={styles.data}>27°C</Text>
        </View>
      </View>

      <View style={styles.row}>
        {/* Noise Level Indicator */}
        <View style={styles.box}>
          <MaterialIcons name="volume-up" size={32} color="#2ecc71" />
          <Text style={styles.title}>Noise Level</Text>
          <Text style={styles.data}>65 dB</Text>
          <Text style={styles.threshold}>Threshold: 70 dB</Text>
        </View>

        {/* Gas Concentration */}
        <View style={styles.box}>
          <MaterialIcons name="cloud" size={32} color="#9b59b6" />
          <Text style={styles.title}>Gas Concentration</Text>
          <Text style={styles.data}>CO2: 400 ppm</Text>
          <Text style={styles.data}>NO2: 20 ppb</Text>
        </View>
      </View>

      {/* Camera Status Placeholder */}
      <View style={styles.cameraBox}>
        <Text style={styles.cameraTitle}>Camera Status</Text>
        <MaterialIcons name="camera" size={48} color="#34495e" />
        <Text style={styles.cameraStatus}>All systems normal</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f6fa' },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
  box: {
    flex: 1,
    margin: 8,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    alignItems: 'center',
  },
  title: { fontSize: 16, fontWeight: 'bold', color: '#2C3E50', marginTop: 8 },
  data: { fontSize: 14, color: '#34495e', marginTop: 4 },
  threshold: { fontSize: 12, color: '#e74c3c', marginTop: 4 },
  cameraBox: {
    marginVertical: 16,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    alignItems: 'center',
  },
  cameraTitle: { fontSize: 16, fontWeight: 'bold', color: '#2C3E50', marginBottom: 8 },
  cameraStatus: { fontSize: 14, color: '#34495e', marginTop: 4 },
});
