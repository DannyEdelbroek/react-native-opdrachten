import { CloudSun, CloudRainWind, CloudSnow, Cloudy} from 'lucide-react-native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // 1. Import de Picker

enum Weather {
  Sunny = 'Sunny',
  Cloudy = 'Cloudy',
  Rainy = 'Rainy',
  Snowy = 'Snowy',
}

export default function App() {
  // Stel het beginsel in op 'Sunny' met behulp van de enum
  const [currentWeather, setCurrentWeather] = useState(Weather.Sunny);

  // Functie om het weer te veranderen
  const changeWeather = () => {
    if (currentWeather === Weather.Sunny) setCurrentWeather(Weather.Cloudy);
    else if (currentWeather === Weather.Cloudy) setCurrentWeather(Weather.Rainy);
    else if (currentWeather === Weather.Rainy) setCurrentWeather(Weather.Snowy);
    else setCurrentWeather(Weather.Sunny);
  };

  const weatherIcon = (() => {
    switch (currentWeather) {
      case Weather.Sunny:
        return <CloudSun size={64} color="#000" style={styles.icon} />;
      case Weather.Cloudy:
        return <Cloudy size={64} color="#000" style={styles.icon} />;
      case Weather.Rainy:
        return <CloudRainWind size={64} color="#000" style={styles.icon} />;
      case Weather.Snowy:
        return <CloudSnow size={64} color="#000" style={styles.icon} />;
      default:
        return null;
    }
  })();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weersomstandigheden App</Text>

      {weatherIcon}

      {/* De tekstwidget die de huidige waarde van de enum toont */}
      <Text style={styles.weatherText}>
        Het huidige weer is: {currentWeather} 
      </Text>

      <Button title="Verander weer" onPress={changeWeather} />

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={currentWeather}
          onValueChange={(itemValue) => setCurrentWeather(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Zonnig (Sunny)" value={Weather.Sunny} />
          <Picker.Item label="Bewolkt (Cloudy)" value={Weather.Cloudy} />
          <Picker.Item label="Regenachtig (Rainy)" value={Weather.Rainy} />
          <Picker.Item label="Sneeuw (Snowy)" value={Weather.Snowy} />
        </Picker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  icon: {
    marginBottom: 20,
  },
  weatherText: {
    fontSize: 18,
    marginBottom: 20,
    color: '#333',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    overflow: 'hidden',
    marginVertical: 20,
  },
  picker: {
    height: 50,
    width: '100%',
  },
});