import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView,Image,TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import LiveTrakingData from './../API/JSONData/LiveTrakingData';


const RoutesScreen = ({navigation}) => {
    return (
    <SafeAreaView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="white" />
        <Text style={styles.headerTitle}>Jaipur to Tonk Express</Text>
      </View>

      {/* Column Titles */}
      <View style={styles.tableHeader}>
        <Text style={styles.tableTitle}>Arrival</Text>
        <Text style={styles.tableTitle}>Day1-Nov15,Fri</Text>
        <Text style={styles.tableTitle}>Departure</Text>
      </View>
     
      {/* Stops List */}
      <ScrollView>
        {LiveTrakingData.map((stop, index) => (
          <View key={stop.id} style={styles.row}>

            {/* Arrival Time */}
            <View style={styles.timeColumn}>
              <Text style={styles.timeText}>{stop.time}</Text>
              <Text style={styles.redText}>{stop.time}</Text>
            </View>

            {/* Station Info */}
             <TouchableOpacity onPress={() => navigation.navigate('BusDetails')}>
                        
            <View style={styles.middleColumn}>             
                <View style={styles.dot} />
            
              <View style={{ marginLeft: 10 }}>
                <Text style={styles.stationName}>{stop.station}</Text>
                <Text style={styles.platformText}>{stop.platform}</Text>
              </View>
            </View>
</TouchableOpacity>

            


            {/* Departure Time */}
            <View style={styles.timeColumn}>
              <Text style={styles.timeText}>{stop.time}</Text>
              <Text style={styles.redText}>{stop.time}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <Image source={require('../images/26.png')} style={styles.image} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#FBC02D',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  headerTitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 16,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tableTitle: {
    fontWeight: '600',
    fontSize: 16,
    color: '#444',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  timeColumn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',

    // backgroundColor:'red'
  },
  timeText: {
    fontSize: 14,
    color: '#444',
  },
  redText: {
    fontSize: 12,
    color: 'red',
  },
  middleColumn: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '60%',
  },
  dot: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#FFCB20',
  },
  stationName: {
    fontWeight: '600',
    fontSize: 16,
    color: '#222',
  },
  platformText: {
    fontSize: 14,
    color: '#666',
  },
  image:{
    width:14,
    height:500,
position:'absolute',
left:100,
bottom:35


  }
});

export default RoutesScreen;