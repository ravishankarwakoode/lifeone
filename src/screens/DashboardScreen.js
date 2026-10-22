import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { dashboardMetrics, upcomingTrips } from '../data/dailyPlans';

export default function DashboardScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <Text style={styles.subtitle}>Overview of your daily life routing</Text>

      <View style={styles.metricsRow}>
        {dashboardMetrics.map((metric) => (
          <View key={metric.label} style={[styles.metricCard, { backgroundColor: metric.color }]}>
            <Text style={styles.metricLabel}>{metric.label}</Text>
            <Text style={styles.metricValue}>{metric.value}</Text>
            <Text style={styles.metricChange}>{metric.change}</Text>
          </View>
        ))}
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Upcoming trips</Text>
        {upcomingTrips.map((trip) => (
          <View key={trip.id} style={styles.tripRow}>
            <View>
              <Text style={styles.tripTitle}>{trip.title}</Text>
              <Text style={styles.tripMeta}>{trip.time}</Text>
            </View>
            <View style={styles.tripRight}>
              <Text style={styles.tripDuration}>{trip.duration}</Text>
              <Text style={styles.tripStatus}>{trip.status}</Text>
            </View>
          </View>
        ))}
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
  metricsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  metricCard: {
    width: '31%',
    borderRadius: 16,
    padding: 16,
    marginBottom: 10
  },
  metricLabel: {
    fontSize: 12,
    color: '#fff',
    opacity: 0.9
  },
  metricValue: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    marginTop: 10
  },
  metricChange: {
    fontSize: 11,
    color: '#ECFDF5',
    marginTop: 8
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 18,
    marginBottom: 16
  },
  cardTitle: {
    color: '#111827',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12
  },
  tripRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6'
  },
  tripTitle: {
    color: '#111827',
    fontSize: 16,
    fontWeight: '600'
  },
  tripMeta: {
    color: '#6B7280',
    marginTop: 4,
    fontSize: 12
  },
  tripRight: {
    alignItems: 'flex-end'
  },
  tripDuration: {
    color: '#4F46E5',
    fontWeight: '700'
  },
  tripStatus: {
    color: '#10B981',
    fontSize: 12,
    marginTop: 4
  }
});
