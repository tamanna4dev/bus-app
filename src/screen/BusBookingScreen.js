import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  // CheckBox,
} from 'react-native';

const BusBookingScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [filters, setFilters] = useState({
    morning: false,
    afternoon: false,
    evening: false,
    night: false,
  });

  const toggleFilter = (key) => {
    setFilters({ ...filters, [key]: !filters[key] });
  };

  const buses = [
    {
      id: '1',
      time: '10:bbbbb  bbbb00 AM - 12:00 PM',
      name: 'Rajasthan Roadways',
      type: 'Non A/C Express Seater Bus',
      duration: '01h 59m',
      seats: 'Seats Available',
      price: '₹90',
      status: 'Govt.',
    },
  ];

  const renderBus = ({ item }) => (
    <View style={styles.busCard}>
      <View style={styles.busHeader}>
        <Text style={styles.busTime}>{item.time}</Text>
        <Text style={styles.busDuration}>{item.duration}</Text>
      </View>
      <Text style={styles.busSeats}>{item.seats}</Text>
      <Text style={styles.busPrice}>Onwards {item.price}</Text>
      <Text style={styles.busName}>{item.name}</Text>
      <Text style={styles.busType}>{item.type}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Jaipur to Tonk</Text>
        <TouchableOpacity style={styles.filterButton} onPress={() => setModalVisible(true)}>
          <Text style={styles.filterText}>Filters</Text>
        </TouchableOpacity>
      </View>

      {/* Bus List */}
      <FlatList
        data={buses}
        renderItem={renderBus}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />

      {/* Filter Modal */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Filter Buses</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.modalClose}>✕</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.filterSection}>
              <Text style={styles.filterTitle}>Sort by</Text>
              <View style={styles.filterOption}>
                <Text>06:00 - 12:00 Morning</Text>
                {/* <CheckBox
                  value={filters.morning}
                  onValueChange={() => toggleFilter('morning')}
                /> */}
              </View>
              <View style={styles.filterOption}>
                <Text>12:00 - 1800000:00 Afternoon</Text>
                {/* <CheckBox
                  value={filters.afternoon}
                  onValueChange={() => toggleFilter('afternoon')}
                /> */}
              </View>
              <View style={styles.filterOption}>
                <Text>18:00 - 00:00 Evening</Text>
                {/* <CheckBox
                  value={filters.evening}
                  onValueChange={() => toggleFilter('evening')}
                /> */}
              </View>
              <View style={styles.filterOption}>
                <Text>00:00 - 06:00 Night</Text>
                {/* <CheckBox
                  value={filters.night}
                  onValueChange={() => toggleFilter('night')}
                /> */}
              </View>
            </View>
            <View style={styles.modalActions}>
              <TouchableOpacity style={styles.clearButton} onPress={() => setFilters({ morning: false, afternoon: false, evening: false, night: false })}>
                <Text style={styles.clearText}>Clean All</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.applyButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.applyText}>Apply</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFD700',
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  filterButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  filterText: {
    color: '#FFD700',
    fontWeight: 'bold',
  },
  listContent: {
    padding: 10,
  },
  busCard: {
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  busHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  busTime: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  busDuration: {
    fontSize: 14,
    color: '#777',
  },
  busSeats: {
    fontSize: 14,
    color: 'green',
  },
  busPrice: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  busName: {
    fontSize: 16,
    marginVertical: 5,
    color: '#333',
  },
  busType: {
    fontSize: 14,
    color: '#777',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalClose: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFD700',
  },
  filterSection: {
    marginTop: 20,
  },
  filterTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  filterOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  clearButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  clearText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  applyButton: {
    backgroundColor: '#FFD700',
    padding: 10,
    borderRadius: 5,
  },
  applyText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default BusBookingScreen;
