import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Modal,
  Image,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const SearchBox = () => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [cityList] = useState([
    { id: '1', name: 'New York' },
    { id: '2', name: 'Los Angeles' },
    { id: '3', name: 'Chicago' },
    { id: '4', name: 'Houston' },
    { id: '5', name: 'Phoenix' },
    { id: '6', name: 'San Francisco' },
    { id: '7', name: 'Miami' },
    { id: '8', name: 'Dallas' },
    { id: '9', name: 'Boston' },
    { id: '10', name: 'Seattle' },
    { id: '11', name: 'Atlanta' },
    { id: '12', name: 'Denver' },
    { id: '13', name: 'Las Vegas' },
    { id: '14', name: 'Orlando' },
    { id: '15', name: 'San Diego' },
  ]);
  
  const [modalVisible, setModalVisible] = useState(false);
  const [currentInput, setCurrentInput] = useState(null); // To track which input is being edited
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');

  const handleCitySelect = (city) => {
    if (currentInput === 'from') {
      setFromCity(city.name);
    } else if (currentInput === 'to') {
      setToCity(city.name);
    }
    setModalVisible(false);
  };

  const handleDateChange = (event, selectedDate) => {
    setShowPicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const formatDate = (date) => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <View style={styles.searchBox}>
      <TouchableOpacity
        onPress={() => {
          setCurrentInput('from');
          setModalVisible(true);
        }}
      >
        <TextInput
          style={styles.input}
          placeholder="From City"
          value={fromCity}
          editable={false} // Make the input non-editable to control the modal flow
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setCurrentInput('to');
          setModalVisible(true);
        }}
      >
        <TextInput
          style={styles.input}
          placeholder="To City"
          value={toCity}
          editable={false} // Make the input non-editable to control the modal flow
        />
      </TouchableOpacity>

      <View style={styles.ImageCon}>
        <Image source={require('../images/4.png')} style={styles.Image} />
      </View>

      <View style={styles.dateSelector}>
        <TouchableOpacity onPress={() => setShowPicker(true)}>
          <Image source={require('../images/celender.png')} style={styles.celenderimage} />
        </TouchableOpacity>
        <Text style={styles.dateText}>{formatDate(date)}</Text>

        <TouchableOpacity
          style={styles.dateButton}
          onPress={() => setDate(new Date())}
        >
          <Text style={styles.dateButtonText}>Today</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.dateButton}
          onPress={() => setDate(new Date(new Date().setDate(new Date().getDate() + 1)))}
        >
          <Text style={styles.dateButtonText}>Tomorrow</Text>
        </TouchableOpacity>
      </View>

      {showPicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={handleDateChange}
        />
      )}

      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <FlatList
            data={cityList}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.cityItem}
                onPress={() => handleCitySelect(item)}
              >
                <Text style={styles.cityName}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBox: {
    marginBottom: 16,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 8,
    borderRadius: 4,
  },
  dateSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -28,
  },
  dateText: {
    marginRight: 8,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#686868',
  },
  dateButton: {
    backgroundColor: '#FFCB20',
    paddingHorizontal: 20,
    paddingVertical: 7,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  dateButtonText: {
    fontSize: 13,
    fontWeight: '400',
    color: '#1A237E',
  },
  ImageCon: {
    alignItems: 'flex-end',
    position: 'relative',
    bottom: 84,
    right: 30,
  },
  Image: {
    height: 45,
    width: 45,
  },
  celenderimage: {
    height: 20,
    width: 20,
    marginRight: 7,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  cityItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 20,
    borderRadius: 5,
  },
  cityName: {
    fontSize: 16,
    color: '#333',
  },
  closeButton: {
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: '#FFCB20',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#1A237E',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SearchBox;
