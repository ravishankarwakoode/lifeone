import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert
} from 'react-native';

export default function AddTaskScreen() {
  const [taskName, setTaskName] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');

  const handleSave = () => {
    if (!taskName || !time || !location) {
      Alert.alert('Please fill in all task details');
      return;
    }

    Alert.alert('Task added successfully');
    setTaskName('');
    setTime('');
    setLocation('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add task</Text>
      <Text style={styles.subtitle}>Create a new activity for your route</Text>

      <TextInput
        style={styles.input}
        placeholder="Task name"
        value={taskName}
        onChangeText={setTaskName}
      />

      <TextInput
        style={styles.input}
        placeholder="Time"
        value={time}
        onChangeText={setTime}
      />

      <TextInput
        style={styles.input}
        placeholder="Location"
        value={location}
        onChangeText={setLocation}
      />

      <TouchableOpacity style={styles.primaryButton} onPress={handleSave}>
        <Text style={styles.primaryButtonText}>Save task</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 20,
    paddingTop: 60
  },
  title: {
    color: '#111827',
    fontSize: 30,
    fontWeight: '700'
  },
  subtitle: {
    color: '#6B7280',
    marginTop: 6,
    marginBottom: 22,
    fontSize: 15
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB'
  },
  primaryButton: {
    backgroundColor: '#4F46E5',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center'
  },
  primaryButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 17
  }
});
