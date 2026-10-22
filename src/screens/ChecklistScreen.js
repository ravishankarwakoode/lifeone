import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { checklist } from '../data/dailyPlans';

export default function ChecklistScreen() {
  const completed = checklist.filter((item) => item.done).length;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Checklist</Text>

      <View style={styles.progressCard}>
        <Text style={styles.progressValue}>{completed}/{checklist.length}</Text>
        <Text style={styles.progressLabel}>Items finished</Text>
      </View>

      {checklist.map((item) => (
        <View key={item.id} style={styles.itemRow}>
          <View
            style={[
              styles.checkBox,
              item.done ? styles.checkBoxDone : styles.checkBoxPending
            ]}
          >
            {item.done ? <Text style={styles.checkMark}>✓</Text> : null}
          </View>

          <Text
            style={[
              styles.itemText,
              item.done ? styles.itemDone : styles.itemPending
            ]}
          >
            {item.title}
          </Text>
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
    fontWeight: '700',
    marginBottom: 18
  },
  progressCard: {
    backgroundColor: '#10B981',
    borderRadius: 16,
    padding: 18,
    marginBottom: 20
  },
  progressValue: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '700'
  },
  progressLabel: {
    color: '#D1FAE5',
    fontSize: 14,
    marginTop: 6
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    marginBottom: 12
  },
  checkBox: {
    width: 23,
    height: 23,
    borderRadius: 6,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkBoxDone: {
    backgroundColor: '#10B981'
  },
  checkBoxPending: {
    backgroundColor: '#E5E7EB'
  },
  checkMark: {
    color: '#fff',
    fontWeight: '700'
  },
  itemText: {
    fontSize: 16,
    fontWeight: '500'
  },
  itemDone: {
    color: '#6B7280',
    textDecorationLine: 'line-through'
  },
  itemPending: {
    color: '#111827'
  }
});
