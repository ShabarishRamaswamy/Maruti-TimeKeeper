import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function TimerScreen() {
  const { title } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      {/* Section 1: Timer info */}
      <View style={styles.topSection}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.timer}>1:45:12</Text>
        <Text style={styles.goal}>Today's Goal: 2:00:00 +1.1%</Text>
      </View>

      {/* Section 2: Streak info */}
      <View style={styles.bottomSection}>
        <Text style={styles.streak}>🔥 5-Day Streak</Text>
        {/* You can add more streak info here later */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  topSection: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ccc',
    marginTop: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  timer: {
    fontSize: 48,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  goal: {
    fontSize: 16,
    color: '#444',
  },
  streak: {
    fontSize: 18,
    color: '#e67e22',
    fontWeight: 'bold',
  },
});
