import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function RouteDetailScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Route details</Text>
      <Text style={styles.subtitle}>School run to office</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Start</Text>
        <Text style={styles.value}>Home, 14 North Street</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Destination</Text>
        <Text style={styles.value}>Office, 207 Market Ave</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Estimated time</Text>
        <Text style={styles.value}>18 minutes</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Traffic condition</Text>
        <Text style={styles.value}>Medium, avoid 8:30 AM peak</Text>
      </View>
    </ScrollView>
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
    marginBottom: 18,
    fontSize: 15
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 18,
    marginBottom: 14
  },
  label: {
    color: '#6B7280',
    fontSize: 12,
    marginBottom: 8
  },
  value: {
    color: '#111827',
    fontSize: 18,
    fontWeight: '600'
  }
});
