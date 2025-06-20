import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


function formatTime(a: number) {
  if (a < 10) {
    return "0" + a
  }
  return a
}

export default function TimerScreen() {
  const { title } = useLocalSearchParams();

  const [isPlaying, setIsPlaying] = useState(false);
  const handleToggle = () => {
    setIsPlaying(!isPlaying);
  }

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // Adapted from: https://dev.to/yuridevat/how-to-create-a-timer-with-react-7b9
  const getTime = (initTime: number) => {
    const curTime: Date = new Date();
    const diff: number = curTime.getTime() - initTime;
    

    setHours(Math.trunc(diff / (100 * 60 * 60)) % 24);
    setMinutes(Math.floor(diff / (1000 * 60)) % 60);
    setSeconds(Math.trunc(diff / 1000) % 60);
  }

  useEffect(() => {
    const firstTime: number = Date.now();
    const interval = setInterval(() => getTime(firstTime), 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <View style={styles.container}>

      {/* Section 1: Timer info */}
      <View style={styles.habitTextContent}>
        {/* Section 1: Timer info */}
        <View>
        <TouchableOpacity onPress={handleToggle}>
          <Ionicons
            name={isPlaying ? 'pause-circle-outline' : 'play-circle-outline'}
            size={60}
            color="black"
            id="PlayPauseButton"
          />
        </TouchableOpacity>
        </View>


        <Text style={styles.title}>{title}</Text>
        <Text style={styles.timer}>{formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}</Text>
        <Text style={styles.goal}>Today's Goal: 2:00:00 +1.1%</Text>
      </View>

      {/* Section 2: Streak info */}
      <View style={styles.streakContent}>
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
  habitTextContent: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  streakContent: {
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
