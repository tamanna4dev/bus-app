import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import menuItems from './../API/JSONData/MenuItemsData';
 
const ProfileScreen = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.menuItem}>
      <Image source={item.icon} style={styles.menuIcon} />
      <Text style={styles.menuLabel}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profileHeader}>
          <Image
            source={require('../images/profile.png')}
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.profileName}>I Am Tannu</Text>
            <Text style={styles.profileNumber}>+91 12345-88889</Text>
          </View>
          <TouchableOpacity style={styles.editIcon}>
            <Image
              source={require('../images/edit.png')}
              style={styles.editIconImage}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Menu List */}
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.menuList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#FFCC00',
  },
  profileHeader: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  profileNumber: {
    fontSize: 14,
    color: '#000',
  },
  editIcon: {
    marginLeft: 'auto',
    padding: 8,
  },
  editIconImage: {
    width: 20,
    height: 20,
  },
  menuList: {
    padding: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
  menuIcon: {
    width: 22,
    height: 22,
    marginRight: 15,
    tintColor: '#FFCC00',
  },
  menuLabel: {
    fontSize: 16,
    color: '#000',
  },
});

export default ProfileScreen;
