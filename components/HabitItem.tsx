import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HabitItem({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggle = () => {
    setIsPlaying(!isPlaying); // only toggle play/pause
  };

  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={handleToggle}>
        <Ionicons
          name={isPlaying ? 'pause-circle-outline' : 'play-circle-outline'}
          size={28}
          color="black"
          id="PlayPauseButton"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress} style={styles.textContainer}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    marginVertical: 6,
    borderRadius: 8,
    backgroundColor: '#eee',
  },
  textContainer: {
    marginLeft: 12,
    flex: 1,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
});
