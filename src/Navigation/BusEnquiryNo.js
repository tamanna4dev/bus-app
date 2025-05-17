import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const busEnquiryData = [
  { id: "1", district: "Ambala", busStand: "Ambala City", contact: "0171-2555888" },
  { id: "2", district: "Ambala", busStand: "Ambala Cantt.", contact: "0171-2640821" },
  { id: "3", district: "Ambala", busStand: "Naraingarh", contact: "01734-284058" },
  { id: "4", district: "Bhiwani", busStand: "Bhiwani", contact: "01664-242200" },
  { id: "5", district: "Charkhi Dadri", busStand: "Charkhi Dadri", contact: "01250-220144" },
  { id: "6", district: "Faridabad", busStand: "Faridabad", contact: "0129-2468953" },
  { id: "7", district: "Faridabad", busStand: "Hisar", contact: "01667-220877" },
  { id: "8", district: "Faridabad", busStand: "Tosham", contact: "01652-220050" },
  { id: "9", district: "Gurgaon", busStand: "Gurgaon", contact: "0124-2321802" },
  { id: "10", district: "Hisar", busStand: "Hisar", contact: "01662-233285" },
  { id: "11", district: "Ambala", busStand: "Ambala City", contact: "0171-2555888" },
  { id: "12", district: "Ambala", busStand: "Ambala Cantt.", contact: "0171-2640821" },
  { id: "13", district: "Ambala", busStand: "Naraingarh", contact: "01734-284058" },
  { id: "14", district: "Bhiwani", busStand: "Bhiwani", contact: "01664-242200" },
  { id: "15", district: "Charkhi Dadri", busStand: "Charkhi Dadri", contact: "01250-220144" },
  { id: "16", district: "Faridabad", busStand: "Faridabad", contact: "0129-2468953" },
  { id: "17", district: "Faridabad", busStand: "Hisar", contact: "01667-220877" },
  { id: "18", district: "Faridabad", busStand: "Tosham", contact: "01652-220050" },
  { id: "19", district: "Gurgaon", busStand: "Gurgaon", contact: "0124-2321802" },
  { id: "20", district: "Hisar", busStand: "Hisar", contact: "01662-233285" },
];

export default function BusEnquiryNo() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bus Stand Enquiry Numbers</Text>
      <View style={styles.tableHeader}>
        <Text style={styles.columnHeader}>Sr. No.</Text>
        <Text style={styles.columnHeader}>District</Text>
        <Text style={styles.columnHeader}>Bus Stand</Text>
        <Text style={styles.columnHeader}>Contact Number</Text>
      </View>
      <FlatList
        data={busEnquiryData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.tableRow}>
            <Text style={styles.cell}>{item.id}</Text>
            <Text style={styles.cell}>{item.district}</Text>
            <Text style={styles.cell}>{item.busStand}</Text>
            <Text style={[styles.cell, styles.contact]}>{item.contact}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#184e77",
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  columnHeader: {
    flex: 1,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize:10
  },
  tableRow: {
    flexDirection: "row",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    justifyContent: "space-between",
    // paddingHorizontal: 10,
  },
  cell: {
    flex: 1,
    textAlign: "center",
    fontSize: 10,
  },
  contact: {
    color: "#184e77",
    fontWeight: "bold",
  },
});
