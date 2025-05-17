import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const BusDetails = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Bus Details</Text>
      </View>

      {/* Bus Info */}
      <View style={styles.busInfo}>
        <Icon name="directions-bus" size={40} color="#fdb800" />
        <View>
          <Text style={styles.busName}>Muthu Travels</Text>
          <Text style={styles.busRating}>⭐ 4.0</Text>
          <Text style={styles.route}>Dhaka to Bogura</Text>
        </View>
      </View>

      {/* Amenities */}
      <View style={styles.amenities}>
        <View style={styles.amenityRow}>
          <Text style={styles.amenityText}>Wifi</Text>
          <Text style={styles.amenityValue}>Access in the bus</Text>
        </View>
        <View style={styles.amenityRow}>
          <Text style={styles.amenityText}>AC</Text>
          <Text style={styles.amenityValue}>AC is available</Text>
        </View>
        <View style={styles.amenityRow}>
          <Text style={styles.amenityText}>Dinner/Lunch</Text>
          <Text style={styles.amenityValue}>Yes</Text>
        </View>
        <View style={styles.amenityRow}>
          <Text style={styles.amenityText}>Safety Features</Text>
          <Text style={styles.amenityValue}>Sanitized, Masks</Text>
        </View>
        <View style={styles.amenityRow}>
          <Text style={styles.amenityText}>Snacks</Text>
          <Text style={styles.amenityValue}>Juice/shake</Text>
        </View>
        <View style={styles.amenityRow}>
          <Text style={styles.amenityText}>Essentials</Text>
          <Text style={styles.amenityValue}>Pillow, Water</Text>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity style={styles.tabActive}>
          <Text style={styles.tabTextActive}>Info</Text>
        </TouchableOpacity>
       
        <TouchableOpacity onPress={() => navigation.navigate('BusDetails2screen')} style={styles.tab}>
          <Text style={styles.tabText}>Review</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Pick Up</Text>
        </TouchableOpacity>
      </View>

      {/* Review Section */}
      <View style={styles.review}>
        <Text style={styles.reviewScore}>4.8/5</Text>
        <Text>Punctuality</Text>
        {["5.0", "2.0", "1.0", "2.2", "2.4"].map((rating, index) => (
          <View key={index} style={styles.ratingRow}>
            <Icon name="star" size={16} color="#fdb800" />
            <View style={styles.ratingBar}>
              <View style={[styles.ratingFill, { width: `${rating * 20}%` }]} />
            </View>
            <Text style={styles.ratingText}>{rating}</Text>
          </View>
        ))}
      </View>

      {/* About Section */}
      <View style={styles.about}>
        <Text style={styles.aboutTitle}>About Niloy Poribohon</Text>
        <Text style={styles.aboutText}>
          Lorem Ipsum is simply dummy text of the printing typesetting industry.
          Lorem Ipsum has been a industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled
          it to make a type specimen book.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { flexDirection: 'row', alignItems: 'center', padding: 10 },
  headerTitle: { fontSize: 18, fontWeight: 'bold', marginLeft: 10 },
  busInfo: { flexDirection: 'row', padding: 10, alignItems: 'center' },
  busName: { fontSize: 18, fontWeight: 'bold' },
  busRating: { color: '#777' },
  route: { color: '#777' },
  amenities: { padding: 10 },
  amenityRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 5 },
  amenityText: { fontSize: 16, fontWeight: 'bold' },
  amenityValue: { color: '#777' },
  tabs: { flexDirection: 'row', borderBottomWidth: 1, borderColor: '#ddd' },
  tab: { flex: 1, alignItems: 'center', padding: 10 },
  tabActive: { flex: 1, alignItems: 'center', padding: 10, borderBottomWidth: 2, borderColor: '#fdb800' },
  tabText: { color: '#777' },
  tabTextActive: { fontWeight: 'bold', color: '#000' },
  review: { padding: 10 },
  reviewScore: { fontSize: 24, fontWeight: 'bold' },
  ratingRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 5 },
  ratingBar: { flex: 1, height: 5, backgroundColor: '#ddd', marginHorizontal: 10, borderRadius: 5 },
  ratingFill: { height: 5, backgroundColor: '#fdb800', borderRadius: 5 },
  ratingText: { width: 30, textAlign: 'right' },
  about: { padding: 10 },
  aboutTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
  aboutText: { color: '#777', lineHeight: 20 },
});

export default BusDetails;
