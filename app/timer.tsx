import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function TimerScreen() {
  const { title } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.timer}>1:45:12</Text>
      <Text style={styles.goal}>Today's Goal: 2:00:00 +1.1%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 26, marginBottom: 16 },
  timer: { fontSize: 40 },
  goal: { marginTop: 18, fontSize: 18 },
});
