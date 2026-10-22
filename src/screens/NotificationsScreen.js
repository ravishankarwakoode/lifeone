import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { notifications } from '../data/dailyPlans';

export default function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 24 }}
        renderItem={({ item }) => (
          <View
            style={[
              styles.notificationCard,
              item.read ? styles.readCard : styles.unreadCard
            ]}
          >
            <Text style={styles.notificationTitle}>{item.title}</Text>
            <Text style={styles.notificationMessage}>{item.message}</Text>
            <Text style={styles.notificationTime}>{item.time}</Text>
          </View>
        )}
      />
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
    fontWeight: '700',
    marginBottom: 18
  },
  notificationCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12
  },
  unreadCard: {
    borderLeftWidth: 5,
    borderLeftColor: '#4F46E5'
  },
  readCard: {
    borderLeftWidth: 5,
    borderLeftColor: '#D1D5DB'
  },
  notificationTitle: {
    color: '#111827',
    fontSize: 16,
    fontWeight: '700'
  },
  notificationMessage: {
    color: '#4B5563',
    marginTop: 6,
    lineHeight: 20
  },
  notificationTime: {
    color: '#6B7280',
    fontSize: 12,
    marginTop: 8
  }
});
