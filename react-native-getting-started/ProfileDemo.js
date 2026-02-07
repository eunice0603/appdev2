import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';

export default function App() {
  return (
    <ImageBackground
      source={{
        uri: 'https://i.pinimg.com/736x/05/f3/11/05f311d010eb473c544629b73ec952e7.jpg',
      }}
      style={styles.container}
    >
      <View style={styles.card}>
        <View style={styles.headerBg} />

        <View style={styles.avatarWrapper}>
          <Image
            source={{
              uri: 'https://i.pinimg.com/736x/bd/7c/fc/bd7cfc3ca7d5e3f7dc2c4d699479c055.jpg', 
            }}
            style={styles.avatar}
          />
        </View>

        <View style={styles.content}>
          <Text style={styles.name}>Eunice Dela Rama Lugtu</Text>
          <Text style={styles.location}>BS Information Systems • Section B</Text>

          <Text style={styles.dividerEmoji}>🎀 🎀 🎀</Text>

          <Text style={styles.bio}>
            Loves reading fictional books and enjoys calm, cozy moments.
          </Text>

          <View style={styles.statsRow}>
            <View style={styles.stat}>
              <View style={styles.statIconCircle}>
                <Text style={styles.statNumber}>20</Text>
              </View>
              <Text style={styles.statLabel}>Age</Text>
            </View>

            <View style={styles.stat}>
              <View style={styles.statIconCircle}>
                <Text style={styles.statNumber}>📚</Text>
              </View>
              <Text style={styles.statLabel}>Hobby</Text>
            </View>

            <View style={styles.stat}>
              <View style={styles.statIconCircle}>
                <Text style={styles.statNumber}>😤</Text>
              </View>
              <Text style={styles.statLabel}>Peeves</Text>
            </View>
          </View>

          <View style={styles.peevesBox}>
            <Text style={styles.peeveHeader}>Pet Peeves 👎🏻</Text>
            <View style={styles.peeveList}>
              <Text style={styles.peeve}>Hindi nakikinig sa iba</Text>
              <Text style={styles.peeve}>Hindi nilulugar ang pagbibiro</Text>
              <Text style={styles.peeve}>Iniisip niya na siya lang ang tama</Text>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: 'rgba(255, 250, 250, 0.95)',
    borderRadius: 40,
    overflow: 'hidden',
    elevation: 15,
    shadowColor: '#fb7185',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  headerBg: {
    height: 110,
    backgroundColor: '#ffdae3',
  },
  avatarWrapper: {
    marginTop: -55,
    alignSelf: 'center',
    padding: 5,
    backgroundColor: '#ffffff',
    borderRadius: 65,
    elevation: 5,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 3,
    borderColor: '#ffdae3',
  },
  content: {
    paddingHorizontal: 25,
    paddingBottom: 30,
    paddingTop: 10,
    alignItems: 'center',
  },
  name: {
    fontSize: 22,
    fontWeight: '800',
    color: '#a44a5f',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  location: {
    fontSize: 13,
    color: '#d6899a',
    marginTop: 4,
    fontWeight: '600',
  },
  dividerEmoji: {
    fontSize: 12,
    marginVertical: 12,
    opacity: 0.6,
  },
  bio: {
    fontSize: 15,
    fontStyle: 'italic',
    color: '#7a4a56',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: 25,
  },
  stat: {
    alignItems: 'center',
  },
  statIconCircle: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#fff0f3',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
    borderWidth: 1,
    borderColor: '#ffdae3',
  },
  statNumber: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#ff748c',
  },
  statLabel: {
    fontSize: 11,
    color: '#d6899a',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  peevesBox: {
    width: '100%',
    backgroundColor: '#ffffff',
    padding: 18,
    borderRadius: 25,
    borderWidth: 1.5,
    borderColor: '#ffdae3',
    alignItems: 'center',
  },
  peeveHeader: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ff748c',
    marginBottom: 10,
    textAlign: 'center',
  },
  peeveList: {
    alignItems: 'center',
  },
  peeve: {
    fontSize: 13,
    color: '#915d6a',
    lineHeight: 20,
    textAlign: 'center',
    marginBottom: 4,
    fontWeight: '500',
  },
});