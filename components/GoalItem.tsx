import { StyleSheet, View, Text, Pressable } from 'react-native';

interface GoalItemProps {
  text: string;
  onDeleteItem: () => void;
}

function GoalItem({ text, onDeleteItem }: GoalItemProps) {
  return (
    <Pressable onPress={onDeleteItem}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
  },
});

export default GoalItem;
