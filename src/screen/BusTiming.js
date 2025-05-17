import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const BusTiming = () => {
  

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-back" size={24} color="#fff" />
        <Text style={styles.headerText}>Bus Schedule</Text>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Bus Timing</Text>
        <TouchableOpacity style={styles.routeContainer}>
          <Text style={styles.routeText}>Route D1</Text>
          <Icon name="location-outline" size={18} color="#4A90E2" />
        </TouchableOpacity>
      </View>

      {BusTiming.map((bus, index) => (
        <View style={styles.card} key={index}>
          <View style={styles.row}>
            <Icon name="bus-outline" size={20} color="#000" />
            <View>
              <Text style={styles.busName}>{bus.name}</Text>
              <Text style={styles.busNumber}>{bus.number}</Text>
            </View>
            <View style={styles.timeContainer}>
              <Text style={styles.timeText}>Time</Text>
              <Text style={styles.timeValue}>{bus.times[1]}</Text>
            </View>
          </View>
          <View style={styles.stops}>
            {bus.times.map((time, idx) => (
              <Text key={idx} style={styles.stopText}>
                {time}
              </Text>
            ))}
          </View>
          <View style={styles.rowBottom}>
            <Text style={styles.duration}>{bus.duration}</Text>
            <TouchableOpacity style={styles.scheduleBtn}>
              <Text style={styles.scheduleText}>Schedule Today</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.scheduleBtn}>
              <Text style={styles.scheduleText}>Schedule Later</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFD700',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 15,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  routeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  routeText: {
    color: '#4A90E2',
    fontSize: 14,
    marginRight: 5,
  },
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  busName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  busNumber: {
    fontSize: 14,
    color: '#555',
    marginLeft: 10,
  },
  timeContainer: {
    marginLeft: 'auto',
    alignItems: 'center',
    backgroundColor: '#FFD700',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  timeText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
  },
  timeValue: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
  stops: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  stopText: {
    fontSize: 12,
    color: '#000',
  },
  rowBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  duration: {
    fontSize: 12,
    color: '#555',
  },
  scheduleBtn: {
    backgroundColor: '#FFD700',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  scheduleText: {
    fontSize: 12,
    color: '#fff',
  },
});

export default BusTiming;
