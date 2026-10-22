import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { dailyRoute } from '../data/dailyPlans';

export default function HomeScreen() {
  const completed = dailyRoute.filter((item) => item.completed).length;
  const total = dailyRoute.length;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.greeting}>Good morning</Text>
      <Text style={styles.title}>Your daily route</Text>

      <View style={styles.summaryCard}>
        <Text style={styles.summaryValue}>{completed}/{total}</Text>
        <Text style={styles.summaryLabel}>Completed tasks</Text>
      </View>

      {dailyRoute.map((item) => (
        <View key={item.id} style={styles.routeCard}>
          <View style={styles.timeBox}>
            <Text style={styles.timeText}>{item.time}</Text>
          </View>

          <View style={styles.routeInfo}>
            <Text style={styles.routeTitle}>{item.title}</Text>
            <Text style={styles.routeMeta}>{item.location}</Text>
            <Text style={styles.routeType}>{item.type}</Text>
          </View>

          <View
            style={[
              styles.statusBadge,
              item.completed ? styles.completed : styles.pending
            ]}
          >
            <Text style={styles.statusText}>
              {item.completed ? 'Done' : 'Next'}
            </Text>
          </View>
        </View>
      ))}
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
  greeting: {
    color: '#6B7280',
    fontSize: 16,
    marginBottom: 6
  },
  title: {
    color: '#111827',
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 18
  },
  summaryCard: {
    backgroundColor: '#4F46E5',
    borderRadius: 18,
    padding: 18,
    marginBottom: 20
  },
  summaryValue: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '700'
  },
  summaryLabel: {
    color: '#E0E7FF',
    fontSize: 14,
    marginTop: 4
  },
  routeCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 14,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 }
  },
  timeBox: {
    backgroundColor: '#EEF2FF',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    width: 72
  },
  timeText: {
    color: '#3730A3',
    fontWeight: '700',
    textAlign: 'center'
  },
  routeInfo: {
    flex: 1,
    marginLeft: 12
  },
  routeTitle: {
    color: '#111827',
    fontSize: 16,
    fontWeight: '600'
  },
  routeMeta: {
    color: '#6B7280',
    fontSize: 13,
    marginTop: 2
  },
  routeType: {
    color: '#8B5CF6',
    fontSize: 12,
    marginTop: 4
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10
  },
  completed: {
    backgroundColor: '#DCFCE7'
  },
  pending: {
    backgroundColor: '#F3F4F6'
  },
  statusText: {
    color: '#111827',
    fontSize: 12,
    fontWeight: '600'
  }
});
