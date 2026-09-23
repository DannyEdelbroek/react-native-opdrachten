import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Polygon } from 'react-native-svg';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <SafeAreaView edges={['top']} style={styles.safeArea}>
        {/* Purple header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>I am rich</Text>

          <View style={styles.ribbon}>
            <Text style={styles.ribbonText}>I</Text>
          </View>
        </View>

        {/* Diamond */}
        <View style={styles.content}>
          <Svg
            width="100%"
            height="100%"
            viewBox="0 0 512 400"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Main outline */}
            <Polygon
              points="40,100 120,20 392,20 472,100 256,380"
              fill="#c5e8f2"
            />

            {/* ===== TOP ===== */}

            {/* Top-left crown */}
            <Polygon
              points="40,100 120,20 152,100"
              fill="#58b8d1"
            />

            <Polygon
              points="120,20 152,100 190,20"
              fill="#a9dce8"
            />

            <Polygon
              points="120,20 190,20 152,100"
              fill="#d9eff4"
            />

            <Polygon
              points="190,20 256,20 216,100"
              fill="#edf8fa"
            />

            <Polygon
              points="190,20 216,100 256,20"
              fill="#d7edf2"
            />

            <Polygon
              points="256,20 296,100 326,20"
              fill="#eaf7f9"
            />

            <Polygon
              points="256,20 326,20 296,100"
              fill="#d7edf2"
            />

            <Polygon
              points="326,20 392,20 360,100"
              fill="#dceff3"
            />

            <Polygon
              points="326,20 360,100 392,20"
              fill="#b9e1ea"
            />

            {/* Top-right crown */}
            <Polygon
              points="392,20 472,100 360,100"
              fill="#58b8d1"
            />

            <Polygon
              points="392,20 360,100 326,20"
              fill="#a9dce8"
            />

            {/* ===== LEFT SHOULDER ===== */}

            <Polygon
              points="40,100 152,100 104,196"
              fill="#b9e1ea"
            />

            <Polygon
              points="40,100 104,196 256,380"
              fill="#c9e9f1"
            />

            <Polygon
              points="152,100 104,196 184,196"
              fill="#9ed7e5"
            />

            <Polygon
              points="152,100 184,196 216,100"
              fill="#d9eff4"
            />

            {/* ===== RIGHT SHOULDER ===== */}

            <Polygon
              points="472,100 360,100 408,196"
              fill="#b9e1ea"
            />

            <Polygon
              points="472,100 408,196 256,380"
              fill="#c9e9f1"
            />

            <Polygon
              points="360,100 408,196 328,196"
              fill="#9ed7e5"
            />

            <Polygon
              points="360,100 328,196 296,100"
              fill="#d9eff4"
            />

            {/* ===== CENTER ===== */}

            <Polygon
              points="152,100 216,100 256,380 184,196"
              fill="#edf8fa"
            />

            <Polygon
              points="216,100 296,100 256,380"
              fill="#f5fbfc"
            />

            <Polygon
              points="296,100 328,196 256,380"
              fill="#e6f5f8"
            />

            {/* Center-left facet */}
            <Polygon
              points="104,196 184,196 256,380"
              fill="#b8e1eb"
            />

            {/* Center-right facet */}
            <Polygon
              points="184,196 256,380 328,196"
              fill="#d8eef3"
            />

            {/* Bottom center highlight */}
            <Polygon
              points="184,196 328,196 256,380"
              fill="#eaf7f9"
            />

            {/* Bottom-left facet */}
            <Polygon
              points="104,196 184,196 216,276"
              fill="#a9dce8"
            />

            {/* Bottom-right facet */}
            <Polygon
              points="328,196 256,380 296,276"
              fill="#a9dce8"
            />

            {/* Bottom point */}
            <Polygon
              points="104,196 216,276 256,380"
              fill="#c5e8f2"
            />

            <Polygon
              points="408,196 296,276 256,380"
              fill="#c5e8f2"
            />
          </Svg>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },

  safeArea: {
    flex: 1,
    width: '100%',
  },

  header: {
    height: 22,
    width: '100%',
    backgroundColor: '#9c27b0',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  headerText: {
    color: '#fff',
    fontSize: 8,
    fontWeight: '500',
    lineHeight: 10,
  },

  ribbon: {
    position: 'absolute',
    right: -1,
    top: 0,
    width: 14,
    height: 14,
    backgroundColor: '#e91e63',
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ rotate: '45deg' }],
  },

  ribbonText: {
    color: '#fff',
    fontSize: 6,
    fontWeight: '700',
    transform: [{ rotate: '-45deg' }],
  },

  content: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 48,
  },
});