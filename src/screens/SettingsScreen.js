import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity
} from 'react-native';

export default function SettingsScreen({ navigation }) {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [travelAlerts, setTravelAlerts] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.label}>Push notifications</Text>
          <Switch
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
            trackColor={{ false: '#E5E7EB', true: '#4F46E5' }}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Travel alerts</Text>
          <Switch
            value={travelAlerts}
            onValueChange={setTravelAlerts}
            trackColor={{ false: '#E5E7EB', true: '#10B981' }}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Dark mode</Text>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            trackColor={{ false: '#E5E7EB', true: '#0F172A' }}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Back</Text>
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
    fontWeight: '700',
    marginBottom: 18
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6'
  },
  label: {
    color: '#111827',
    fontSize: 16,
    fontWeight: '500'
  },
  button: {
    backgroundColor: '#4F46E5',
    borderRadius: 12,
    paddingVertical: 14,
    marginTop: 20
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16
  }
});
