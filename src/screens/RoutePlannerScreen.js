import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function RoutePlannerScreen() {
  const routeHighlights = [
    { label: 'Commute', value: '18 min', color: '#4F46E5' },
    { label: 'Errands', value: '2 stops', color: '#10B981' },
    { label: 'Energy', value: 'Medium', color: '#F59E0B' }
  ];

  const nextStops = [
    { id: 1, name: 'School drop-off', eta: '08:40', mode: 'Drive' },
    { id: 2, name: 'Office arrival', eta: '09:25', mode: 'Transit' },
    { id: 3, name: 'Grocery pickup', eta: '18:10', mode: 'Drive' }
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Route planner</Text>

      <View style={styles.summaryRow}>
        {routeHighlights.map((item) => (
          <View
            key={item.label}
            style={[styles.summaryBox, { backgroundColor: item.color }]}
          >
            <Text style={styles.summaryLabel}>{item.label}</Text>
            <Text style={styles.summaryValue}>{item.value}</Text>
          </View>
        ))}
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Suggested route</Text>

        {nextStops.map((stop) => (
          <View key={stop.id} style={styles.stopRow}>
            <View style={styles.stopDot} />
            <View style={styles.stopText}>
              <Text style={styles.stopName}>{stop.name}</Text>
              <Text style={styles.stopMeta}>{stop.mode}</Text>
            </View>
            <Text style={styles.eta}>{stop.eta}</Text>
          </View>
        ))}
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Route notes</Text>
        <Text style={styles.note}>
          Leave 10 minutes earlier for the morning school run due to traffic.
        </Text>
        <Text style={styles.note}>
          Store the grocery list in the checklist to reduce stop time after work.
        </Text>
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
    fontWeight: '700',
    marginBottom: 18
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18
  },
  summaryBox: {
    flex: 1,
    borderRadius: 14,
    padding: 14,
    marginHorizontal: 4
  },
  summaryLabel: {
    color: '#fff',
    fontSize: 12,
    opacity: 0.9
  },
  summaryValue: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 8
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    marginBottom: 18
  },
  cardTitle: {
    color: '#111827',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 14
  },
  stopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14
  },
  stopDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#4F46E5',
    marginRight: 12
  },
  stopText: {
    flex: 1
  },
  stopName: {
    color: '#111827',
    fontWeight: '600'
  },
  stopMeta: {
    color: '#6B7280',
    fontSize: 12,
    marginTop: 2
  },
  eta: {
    color: '#4F46E5',
    fontWeight: '700'
  },
  note: {
    color: '#4B5563',
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 10
  }
});
