import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, ScrollView } from 'react-native';

/**
 * TODO #3A: Build the Settings screen.
 *
 * Required pieces:
 *   - A "Settings" title.
 *   - Two rows, each with a label + a Switch: "Enable Notifications" and "Dark Mode".
 *     Each row holds its own boolean state (start them both false).
 *   - An info card listing app version + a one-line credit.
 *
 * Constraints:
 *   - Wrap the screen in a ScrollView with comfortable padding.
 *   - Each settings row should be at least 44pt tall and lay out the label and
 *     switch on opposite ends.
 *
 * Verify: On the Settings tab, both switches toggle independently and the
 * updated state is reflected in the UI immediately.
 */
export default function SettingsScreen() {
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>


        <View style={styles.row}>
          <Text style={styles.label}>Enable Notifications</Text>
          <Switch
            value={isNotificationEnabled}
            onValueChange={setIsNotificationEnabled}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Dark Mode</Text>
          <Switch
            value={isDarkMode}
            onValueChange={setIsDarkMode}
          />
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.appVersion}>App Version: 1.0.0</Text>
          <Text style={styles.credit}>Credit: HAO</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Pushes label and switch to opposite ends
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    marginBottom: 12,
    minHeight: 56, // Ensures at least 44pt height as per TODO
  },
  label: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  infoCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginTop: 12,
    alignItems: 'center',
  },
  appVersion: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  credit: {
    fontSize: 14,
    color: '#888',
    fontStyle: 'italic',
  },
});
