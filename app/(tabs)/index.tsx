import { useRouter } from 'expo-router';
import { FlatList, StyleSheet, View } from 'react-native';
import HabitItem from '../../components/HabitItem';

const habits = [
  { id: '1', title: 'Read Book' },
  { id: '2', title: 'Workout' },
  { id: '3', title: 'Code' },
  { id: '4', title: 'Prepare meals' },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.mainView}>
      <FlatList
        data={habits}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <HabitItem title={item.title} onPress={() => router.push({ pathname: '/timer', params: { title: item.title } })} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: { flex: 1, padding: 16 }
})
