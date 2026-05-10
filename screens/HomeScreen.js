import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import NavigationCard from '../components/NavigationCard';

export default function HomeScreen({ navigation }) {
  const items = [
    {
      id: 1,
      name: 'First Item',
      description: 'This is the first item with detailed information',
    },
    {
      id: 2,
      name: 'Second Item',
      description: 'This is the second item with more details',
    },
    {
      id: 3,
      name: 'Third Item',
      description: 'This is the third item with additional information',
    },
  ];

  // TODO #2A: Push the Detail screen with the tapped item attached.
  // Verify: Tapping a card opens the Detail screen and the tapped item's data
  // shows up there (DetailScreen will read it from `route.params`).
  const goToDetail = (item) => {
    navigation.navigate('Detail', item);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to Screen Navigator!</Text>
        <Text style={styles.subtitle}>
          Tap any card below to navigate to the Detail screen and pass its data along.
        </Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Navigation Examples</Text>

          {items.map((item) => (
            <NavigationCard
              key={item.id}
              title={item.name}
              description={item.description}
              onPress={() => goToDetail(item)}
            />
          ))}
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
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
    lineHeight: 22,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
});
