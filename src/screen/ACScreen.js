import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import DatePicker from 'react-native-date-picker'; // Ensure the package is installed
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import ACData from './../API/JSONData/ACData'; // Ensure this file exports data correctly

const ACScreen = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);
  const [filters, setFilters] = useState({
    morning: false,
    afternoon: false,
    evening: false,
    night: false,
  });

  const handleDateConfirm = (selectedDate) => {
    setDate(selectedDate);
    setIsDatePickerOpen(false);
  };

  const toggleFilter = (key) => {
    setFilters({ ...filters, [key]: !filters[key] });
  };

  const renderFilterOption = (label, key) => (
    <View style={styles.filterOption}>
      <Text>{label}</Text>
      <TouchableOpacity
        onPress={() => toggleFilter(key)}
        style={[
          styles.toggleButton,
          { backgroundColor: filters[key] ? '#FFCB20' : '#e0e0e0' },
        ]}
      >
        <Text style={styles.toggleButtonText}>{filters[key] ? '✔' : ''}</Text>
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.time}>{item.time}</Text>
        <Text style={styles.ac}>{item.ac}</Text>

        <View style={styles.durationRow}>
          <Ionicons name="time-outline" size={18} color="#83A4EA" />
          <Text style={styles.duration}>{item.duration}</Text>
        </View>
      </View>

      <View style={styles.headerRow}>
        <View style={{ flexDirection: 'row' }}>
          <Image source={require('../images/21.png')} style={styles.operatorImage} />
          <Text style={styles.operator}>{item.operator}</Text>
        </View>
        <View style={styles.row}>
          <Image source={require('../images/23.png')} style={styles.image} />
          <Text style={styles.company}>{item.company}</Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <Image source={require('../images/22.png')} style={styles.image} />
        <Text style={styles.type}>{item.type}</Text>
      </View>

      <View style={styles.footerRow}>
        <View style={styles.actions}>
          <TouchableOpacity onPress={() => navigation.navigate('LiveTraking')} style={styles.button}>
            <Image source={require('../images/24.png')} style={{ height: 24, width: 23, marginRight: 5 }} />
            <Text style={styles.buttonText}>Live Tracking</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ViewRoute')} style={styles.button}>
            <Image source={require('../images/25.png')} style={{ height: 23, width: 23, marginRight: 5 }} />
            <Text style={styles.buttonText}>View Route</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        
                <TouchableOpacity
                  onPress={() => navigation.goBack("HomeScreen")}
                >
                  <Ionicons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
        <Text style={styles.headerTitle}>Jaipur to Tonk</Text>
        <TouchableOpacity style={styles.dateButton} onPress={() => setIsDatePickerOpen(true)}>
          <MaterialCommunityIcons name="calendar" size={16} color="#fff" />
          <Text style={styles.dateText}>{date.toDateString()}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.filterRow}>
        <TouchableOpacity onPress={() => setIsFilterModalVisible(true)} style={styles.filterButton}>
          <Image source={require('../images/18.png')} />
          <Text style={styles.filterText}>Filters</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsFilterModalVisible(true)} style={styles.filterButton}>
          <Image source={require('../images/19.png')} />
          <Text style={styles.filterText}>Sort</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filter} onPress={() => navigation.navigate('ACScreen')}>
          <Image source={require('../images/20.png')} />
          <Text style={styles.filterText}>AC</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.Text}>Buses For Jaipur to Tonk</Text>

      <FlatList
        data={ACData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />

      <Modal visible={isFilterModalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Filter Buses</Text>
              <TouchableOpacity onPress={() => setIsFilterModalVisible(false)}>
                <Text style={styles.modalClose}>✕</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.filterSection}>
              <Text style={styles.filterTitle}>Departure time from source</Text>
              {renderFilterOption('06:00 - 12:00 Morning', 'morning')}
              {renderFilterOption('12:00 - 18:00 Afternoon', 'afternoon')}
              {renderFilterOption('18:00 - 00:00 Evening', 'evening')}
              {renderFilterOption('00:00 - 06:00 Night', 'night')}
            </View>
            <View style={styles.modalActions}>
              <TouchableOpacity
                style={styles.clearButton}
                onPress={() => setFilters({ morning: false, afternoon: false, evening: false, night: false })}
              >
                <Text style={styles.clearText}>Clean All</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.applyButton}
                onPress={() => setIsFilterModalVisible(false)}
              >
                <Text style={styles.applyText}>Apply</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>


      <Modal visible={isFilterModalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Filter Buses</Text>
              <TouchableOpacity onPress={() => setIsFilterModalVisible(false)}>
                <Text style={styles.modalClose}>✕</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.filterSection}>
              <Text style={styles.filterTitle}>Sort</Text>
              {renderFilterOption('Poplar ', 'morning')}
              {renderFilterOption('Price-Low to Hght', 'afternoon')}
              {renderFilterOption('Early departure', 'evening')}
              {renderFilterOption('Late departure', 'night')}
            </View>
            <View style={styles.modalActions}>
              <TouchableOpacity
                style={styles.clearButton}
                onPress={() => setFilters({ morning: false, afternoon: false, evening: false, night: false })}
              >
                <Text style={styles.clearText}>Clean All</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.applyButton}
                onPress={() => setIsFilterModalVisible(false)}
              >
                <Text style={styles.applyText}>Apply</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <DatePicker
        modal
        open={isDatePickerOpen}
        date={date}
        onConfirm={handleDateConfirm}
        onCancel={() => setIsDatePickerOpen(false)}
        mode="date"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  // Existing styles
  // Add the toggleButton styles
  toggleButton: {
    width: 25,
    height: 25,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggleButtonText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },

  container: {
    flex: 1,
    backgroundColor: '#f9f9f9', // Light background for the screen
  },
  header: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFCB20',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginRight:66,
  },
  dateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFCB20',
    padding: 8,
    borderRadius: 6,
  },
  dateText: {
    fontSize: 14,
    marginLeft: 5,
    color: '#fff',
  },
  filterRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#ffffff',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    padding: 7,
    borderColor: '#FFCB20',
    borderRadius: 8,
    width: 100,
    height: 33,
    justifyContent: 'center',
  },
  filter: {
    flexDirection: 'row',
    alignItems: 'center',
   
    padding: 7,
    backgroundColor: '#FFCB20',
    borderRadius: 8,
    width: 100,
    height: 33,
    justifyContent: 'center',
  },
  filterText: {
    marginLeft: 9,
    fontSize: 10,
    fontWeight: '600',
  },
  list: {
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  time: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  durationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  duration: {
    fontSize: 15,
    color: '#FFAC59',
    marginLeft: 5,
  },
  operatorImage: {
    height: 15,
    width: 15,
    marginTop: 7,
    marginRight: 2,
  },
  operator: {
    fontSize: 14,
    marginVertical: 5,
    color: '#695BB0',
    fontWeight: '700',
    marginLeft: 5,
  },
  type: {
    fontSize: 14,
    color: '#646464',
    fontWeight: '500',
    marginLeft: 4,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  company: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#228326',
    marginLeft: 4,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#FFD700',
    padding: 10,
    borderRadius: 5,
    marginLeft: 5,
    flexDirection: 'row',
    height: 40,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
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
    color: '#FF0000',
  },
  filterSection: {
    marginTop: 20,
  },
  filterOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  clearButton: {
    padding: 10,
    backgroundColor: '#FF4444',
    borderRadius: 5,
  },
  clearText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  applyButton: {
    padding: 10,
    backgroundColor: '#28a745',
    borderRadius: 5,
  },
  applyText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  Text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    marginRight: 20,
  },
  filterTitle:{
    color:'#FFCB20',
    marginBottom:9
  },
  ac:{
    fontSize:9,
    color:'#355FA7',
    backgroundColor:'#E3EAFC',
    padding:3,
    width:50,
    height:23,
    textAlign:'center',
    borderRadius:3,
    marginRight:70,
  }
});

export default ACScreen;

 
