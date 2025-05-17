import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';  // Expo vector icons
import routes from './../API/JSONData/RoutesData';


const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../images/7.png')} style={{ width: '100%' }} />
      {/* Search Card */}
      <View style={styles.searchCard}>
        <View style={{ flexDirection: 'row' }}>
          <Image source={require('../images/16.png')} style={{ marginTop: 10 }} />
          <View style={{ width: '100%', padding: 10 }}>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="Deevan shib Garden, 337,D,TT. Rd.." />
              <Image source={require('../images/8.png')} />
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="Enter Destination" />
              <Image source={require('../images/8.png')} />
            </View>
          </View>
        </View>

        {/* Route List */}
        <FlatList
          data={routes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.routeItem}>
              <View style={{ backgroundColor: '#fff', borderRadius: 30, padding: 10, height: 45, width: 45 }}>
                <Image source={item.image} style={styles.routeIcon} />
              </View>
              <View style={{ marginLeft: 10 }}>
                <Text style={styles.routeTitle}>{item.title}</Text>
                <Text style={styles.routeDescription}>{item.description}</Text>
              </View>
            </View>
          )}
        />

        {/* Search Button */}
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Search</Text>
          <Ionicons name="bus-outline" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    flex: 1,
  },
  searchCard: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#333',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 18,
    height: 46,
    width: '100%',
  },
  icon: {
    marginHorizontal: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  routeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    // backgroundColor: '#f9f9f9',
    padding: 12,
    borderRadius: 8,
  },
  routeIcon: {
    marginRight: 12,
  },
  routeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#BAB6B6',
  },
  routeDescription: {
    fontSize: 14,
    color: '#BAB6B6',
  },
  searchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFD700',
    padding: 12,
    borderRadius: 8,
    marginTop: 12,
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginRight: 8,
  },
});

export default SearchScreen;
