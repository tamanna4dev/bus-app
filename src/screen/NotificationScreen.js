import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import notifications from './../API/JSONData/NotificationData';

const NotificationScreen = ({ navigation }) => {
  const renderNotificationItem = ({ item }) => (
    <View style={[styles.notificationItem]}>
      <Image source={item.image} style={styles.notificationImage} />
      <View style={styles.notificationTextContainer}>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <Text style={styles.notificationDescription}>{item.description}</Text>
      </View>
      <Text style={styles.notificationTime}>{item.time}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          accessible={true}
          accessibilityLabel="Go back"
        >
          <Icon name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
        <TouchableOpacity
          onPress={() => console.log('Settings Pressed')}
          accessible={true}
          accessibilityLabel="Settings"
        >
          <Icon name="settings-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Notification List */}
      <FlatList
        data={notifications}
        renderItem={renderNotificationItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.notificationList}
        initialNumToRender={5}
        maxToRenderPerBatch={10}
        windowSize={5}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

// Styles remain unchanged
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFD700',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  notificationList: {
    padding: 16,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginBottom: 8,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    elevation: 1, // For shadow on Android
    shadowColor: '#000', // For shadow on iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  notificationImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 12,
  },
  notificationTextContainer: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  notificationDescription: {
    fontSize: 14,
    color: '#666',
  },
  notificationTime: {
    fontSize: 12,
    color: '#999',
  },
});

export default NotificationScreen;
