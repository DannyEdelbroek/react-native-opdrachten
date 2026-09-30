import React, { useState } from 'react';
import Slider from '@react-native-community/slider';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  SafeAreaView,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [height, setHeight] = useState(181);
  const [weight, setWeight] = useState(63);
  const [age, setAge] = useState(26);
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const result = weight / (heightInMeters * heightInMeters);

    setBmi(Number(result.toFixed(1)));
  };

  const increaseWeight = () => {
    setWeight((value) => value + 1);
  };

  const decreaseWeight = () => {
    if (weight > 1) {
      setWeight((value) => value - 1);
    }
  };

  const increaseAge = () => {
    setAge((value) => value + 1);
  };

  const decreaseAge = () => {
    if (age > 1) {
      setAge((value) => value - 1);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.page}>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>BMI CALCULATOR</Text>
        </View>

        <View style={styles.content}>

          {/* Gender */}
          <View style={styles.genderRow}>

            <Pressable
              style={[
                styles.genderCard,
                gender === 'male' && styles.selectedCard,
              ]}
              onPress={() => setGender('male')}
            >
              <Text style={styles.genderIcon}>♂</Text>
              <Text style={styles.genderText}>MALE</Text>
            </Pressable>

            <Pressable
              style={[
                styles.genderCard,
                gender === 'female' && styles.selectedCard,
              ]}
              onPress={() => setGender('female')}
            >
              <Text style={styles.genderIcon}>♀</Text>
              <Text style={styles.genderText}>FEMALE</Text>
            </Pressable>

          </View>

          {/* Height */}
          <View style={styles.heightCard}>
            <Text style={styles.label}>HEIGHT</Text>

            <View style={styles.heightValueRow}>
              <Text style={styles.heightValue}>{height}</Text>
              <Text style={styles.cm}>cm</Text>
            </View>

              <Slider
                style={styles.sliderContainer}
                minimumValue={100}
                maximumValue={220}
                value={height}
                onValueChange={(value) => setHeight(Math.round(value))}
                minimumTrackTintColor="#EF3D68"
                maximumTrackTintColor="#A9A9B2"
                thumbTintColor="#EF3D68"
              />
            
          </View>

          {/* Weight and Age */}
          <View style={styles.bottomRow}>

            {/* Weight */}
            <View style={styles.smallCard}>
              <Text style={styles.label}>WEIGHT</Text>

              <Text style={styles.number}>
                {weight}
              </Text>

              <View style={styles.buttonRow}>
                <Pressable
                  style={styles.roundButton}
                  onPress={decreaseWeight}
                >
                  <Text style={styles.buttonText}>−</Text>
                </Pressable>

                <Pressable
                  style={styles.roundButton}
                  onPress={increaseWeight}
                >
                  <Text style={styles.buttonText}>+</Text>
                </Pressable>
              </View>
            </View>

            {/* Age */}
            <View style={styles.smallCard}>
              <Text style={styles.label}>AGE</Text>

              <Text style={styles.number}>
                {age}
              </Text>

              <View style={styles.buttonRow}>
                <Pressable
                  style={styles.roundButton}
                  onPress={decreaseAge}
                >
                  <Text style={styles.buttonText}>−</Text>
                </Pressable>

                <Pressable
                  style={styles.roundButton}
                  onPress={increaseAge}
                >
                  <Text style={styles.buttonText}>+</Text>
                </Pressable>
              </View>
            </View>

          </View>

          {/* BMI result */}
          {bmi !== null && (
            <View style={styles.resultCard}>
              <Text style={styles.resultLabel}>YOUR BMI</Text>
              <Text style={styles.result}>{bmi}</Text>
            </View>
          )}

        </View>

        {/* Calculate */}
        <Pressable
          style={styles.calculateButton}
          onPress={calculateBMI}
        >
          <Text style={styles.calculateText}>
            CALCULATE
          </Text>
        </Pressable>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#171A31',
  },

  page: {
    flex: 1,
    backgroundColor: '#171A31',
  },

  header: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#242741',
  },

  title: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },

  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },

  genderRow: {
    flexDirection: 'row',
    gap: 18,
  },

  genderCard: {
    flex: 1,
    height: 135,
    backgroundColor: '#303146',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },

  selectedCard: {
    backgroundColor: '#EF3D68',
  },

  genderIcon: {
    color: '#FFFFFF',
    fontSize: 55,
    lineHeight: 60,
    fontWeight: 'bold',
  },

  genderText: {
    color: '#A8A8B5',
    fontSize: 12,
    marginTop: 8,
  },

  heightCard: {
    height: 133,
    backgroundColor: '#303146',
    borderRadius: 6,
    marginTop: 20,
    alignItems: 'center',
    paddingTop: 30,
  },

  label: {
    color: '#A7A7B3',
    fontSize: 12,
    fontWeight: '500',
  },

  heightValueRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 2,
  },

  heightValue: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: 'bold',
  },

  cm: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 7,
    marginLeft: 2,
  },

  sliderContainer: {
    width: '85%',
    height: 30,
    marginTop: 5,
    justifyContent: 'center',
  },

  sliderBackground: {
    position: 'absolute',
    width: '100%',
    height: 2,
    backgroundColor: '#A9A9B2',
  },

  sliderActive: {
    position: 'absolute',
    height: 2,
    backgroundColor: '#EF3D68',
  },

  sliderThumb: {
    position: 'absolute',
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#EF3D68',
    marginLeft: -4,
  },

  bottomRow: {
    flexDirection: 'row',
    gap: 18,
    marginTop: 20,
  },

  smallCard: {
    flex: 1,
    height: 133,
    backgroundColor: '#303146',
    borderRadius: 6,
    alignItems: 'center',
    paddingTop: 24,
  },

  number: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: 0,
  },

  buttonRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 4,
  },

  roundButton: {
    width: 37,
    height: 37,
    borderRadius: 20,
    backgroundColor: '#646578',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 27,
    lineHeight: 30,
    fontWeight: '500',
  },

  resultCard: {
    backgroundColor: '#303146',
    borderRadius: 6,
    marginTop: 15,
    paddingVertical: 12,
    alignItems: 'center',
  },

  resultLabel: {
    color: '#A7A7B3',
    fontSize: 11,
  },

  result: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
  },

  calculateButton: {
    height: 55,
    backgroundColor: '#EF3D68',
    justifyContent: 'center',
    alignItems: 'center',
  },

  calculateText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});