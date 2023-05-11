import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  speakerContainer: {
    backgroundColor: '#F2F2F2',
    padding: 16,
    marginStart: 8,
    marginEnd: 8,
    marginBottom: 16,
    borderRadius: 8,
  },
  startTime: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  speakerName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  speakerTitle: {
    fontSize: 14,
    color: '#666666',
  },
});

interface BaseSpeakerProps {
  startDate: Date;
  name: string;
  title: string;
}

const BaseSpeaker = ({startDate, name, title}: BaseSpeakerProps) => (
  <View style={styles.speakerContainer}>
    <Text style={styles.startTime}>
      {startDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}
    </Text>
    <Text style={styles.speakerName}>{name}</Text>
    <Text style={styles.speakerTitle}>{title}</Text>
  </View>
);

export {BaseSpeaker};
