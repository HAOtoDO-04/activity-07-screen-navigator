import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function DetailScreen({ route, navigation }) {
  // TODO #2B: Read the item that HomeScreen passed in via `route.params`.
  // Verify: `item.id`, `item.name`, and `item.description` below render with
  // real values instead of the placeholders.

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Detail Screen</Text>

        {/* TODO #2B (continued): Replace the placeholders below with real fields
            read from the item you destructured above. Keep the existing styles. */}
        <View style={styles.infoCard}>
          <Text style={styles.label}>Item ID:</Text>
          <Text style={styles.value}>—</Text>

          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>—</Text>

          <Text style={styles.label}>Description:</Text>
          <Text style={styles.description}>—</Text>
        </View>

        <Pressable
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>← Go Back</Text>
        </Pressable>
      </View>
    </View>
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
  infoCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    marginTop: 12,
    marginBottom: 4,
  },
  value: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
    shadowColor: '#007AFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
