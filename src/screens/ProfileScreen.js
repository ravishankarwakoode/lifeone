import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { profileStats } from '../data/dailyPlans';

export default function ProfileScreen({ navigation, onLogout }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Profile</Text>

      <View style={styles.profileCard}>
        <Text style={styles.avatar}>JS</Text>
        <View style={styles.profileText}>
          <Text style={styles.name}>Jessica Smith</Text>
          <Text style={styles.role}>Busy parent & planner</Text>
        </View>
      </View>

      <View style={styles.statsGrid}>
        {profileStats.map((stat) => (
          <View key={stat.label} style={styles.statCard}>
            <Text style={styles.statValue}>{stat.value}</Text>
            <Text style={styles.statLabel}>{stat.label}</Text>
          </View>
        ))}
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Today’s focus</Text>
        <Text style={styles.cardText}>
          Finish morning tasks early, keep the school route on schedule, and preserve time for the evening family routine.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Settings')}
      >
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.logoutButton]}
        onPress={onLogout}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
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
  profileCard: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#C7D2FE',
    color: '#312E81',
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginRight: 14
  },
  profileText: {
    flex: 1
  },
  name: {
    color: '#111827',
    fontSize: 20,
    fontWeight: '700'
  },
  role: {
    color: '#6B7280',
    fontSize: 14,
    marginTop: 4
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 18
  },
  statCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    width: '31%',
    marginBottom: 12
  },
  statValue: {
    color: '#4F46E5',
    fontSize: 22,
    fontWeight: '700'
  },
  statLabel: {
    color: '#6B7280',
    fontSize: 12,
    marginTop: 6
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
    marginBottom: 8
  },
  cardText: {
    color: '#4B5563',
    fontSize: 14,
    lineHeight: 22
  },
  button: {
    backgroundColor: '#4F46E5',
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 12
  },
  logoutButton: {
    backgroundColor: '#EF4444'
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16
  }
});
