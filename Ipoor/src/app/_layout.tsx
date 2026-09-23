import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Polygon } from 'react-native-svg';

export default function HomeScreen() {
  return (
    <View style={styles.page}>
      <View style={styles.phoneFrame}>
        <SafeAreaView edges={['top']} style={styles.safeArea}>

          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>I Am Poor</Text>
          </View>

          {/* Blue screen */}
          <View style={styles.screen}>

            {/* Coal */}
            <Svg
              width={220}
              height={190}
              viewBox="0 0 220 190"
            >
              {/* Main coal shape */}
              <Polygon
                points="
                  20,75
                  35,45
                  62,43
                  82,20
                  110,32
                  135,48
                  160,55
                  185,78
                  190,105
                  188,135
                  165,150
                  140,153
                  125,177
                  95,182
                  72,167
                  45,160
                  38,140
                  20,125
                  15,98
                "
                fill="#202b30"
              />

              {/* Top left grey area */}
              <Polygon
                points="
                  25,75
                  42,68
                  58,70
                  72,78
                  55,82
                  38,79
                "
                fill="#9ba1a5"
              />

              {/* Top middle grey area */}
              <Polygon
                points="
                  108,66
                  135,57
                  150,62
                  139,82
                  125,91
                  98,95
                  112,85
                "
                fill="#aeb3b6"
              />

              {/* Top dark area */}
              <Polygon
                points="
                  62,43
                  82,20
                  110,32
                  135,48
                  160,55
                  145,66
                  115,62
                  92,52
                "
                fill="#29363b"
              />

              {/* Left dark shadow */}
              <Polygon
                points="
                  20,75
                  38,79
                  55,82
                  72,94
                  62,112
                  43,108
                  28,98
                "
                fill="#182328"
              />

              {/* Bottom left shadow */}
              <Polygon
                points="
                  38,108
                  62,112
                  82,126
                  70,145
                  48,138
                  38,120
                "
                fill="#151f23"
              />

              {/* Bottom middle grey */}
              <Polygon
                points="
                  88,112
                  108,101
                  128,108
                  115,122
                  95,134
                  83,129
                "
                fill="#a8afb3"
              />

              {/* Bottom dark */}
              <Polygon
                points="
                  70,145
                  95,134
                  115,145
                  140,153
                  125,177
                  95,182
                  72,167
                "
                fill="#172227"
              />

              {/* Right shadow */}
              <Polygon
                points="
                  150,62
                  175,75
                  188,94
                  185,119
                  165,130
                  145,126
                  139,105
                  157,88
                "
                fill="#172226"
              />

              {/* Right grey reflection */}
              <Polygon
                points="
                  160,55
                  175,75
                  157,88
                  139,105
                  125,108
                  139,82
                  150,62
                "
                fill="#9fa6aa"
              />
            </Svg>

          </View>
        </SafeAreaView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#444444',
    alignItems: 'center',
    justifyContent: 'center',
  },

  phoneFrame: {
    width: 330,
    height: 560,
    backgroundColor: '#111111',
    borderRadius: 28,
    padding: 4,
    overflow: 'hidden',
  },

  safeArea: {
    flex: 1,
    backgroundColor: '#08bdd0',
    borderRadius: 24,
    overflow: 'hidden',
  },

  header: {
    height: 53,
    backgroundColor: '#006b6b',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },

  screen: {
    flex: 1,
    backgroundColor: '#10bfd1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});