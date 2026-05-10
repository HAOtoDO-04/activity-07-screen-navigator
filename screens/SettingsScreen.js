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
  // Your code here
  return (
    <View style={styles.container}>
      <Text style={styles.placeholder}>Build SettingsScreen here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholder: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
  },
});
