import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { calendarEvents } from '../data/dailyPlans';

export default function CalendarScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Calendar</Text>
      <Text style={styles.subtitle}>Your planned activities</Text>

      {calendarEvents.map((event) => (
        <View key={event.id} style={styles.eventCard}>
          <View style={[styles.dot, { backgroundColor: event.color }]} />
          <View style={styles.eventInfo}>
            <Text style={styles.day}>{event.day}</Text>
            <Text style={styles.eventTitle}>{event.title}</Text>
            <Text style={styles.eventTime}>{event.time}</Text>
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
  eventCard: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center'
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 14
  },
  eventInfo: {
    flex: 1
  },
  day: {
    color: '#4F46E5',
    fontWeight: '700',
    fontSize: 12,
    marginBottom: 4
  },
  eventTitle: {
    color: '#111827',
    fontSize: 18,
    fontWeight: '600'
  },
  eventTime: {
    color: '#6B7280',
    marginTop: 4
  }
});
