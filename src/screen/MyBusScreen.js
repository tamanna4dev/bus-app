import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Share,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function MyBusScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { fromCity, toCity, date, stoppages = [] } = route.params || {};

  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);
  const [filters, setFilters] = useState({
    morning: false,
    afternoon: false,
    evening: false,
    night: false,
  });

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
          { backgroundColor: filters[key] ? "#FFCB20" : "#e0e0e0" },
        ]}
      >
        <Text style={styles.toggleButtonText}>{filters[key] ? "✔" : ""}</Text>
      </TouchableOpacity>
    </View>
  );

  const shareContent = async () => {
    const message = stoppages
      .map((stop, index) =>
        `Stop ${index + 1}:\nStation: ${stop.stationName}\nArrival: ${stop.arrivalTime}\nDeparture: ${stop.departureTime}\nBus Type: ${stop.busType || 'N/A'}\nVia: ${stop.viaRouteName}`
      )
      .join("\n\n");

    try {
      const result = await Share.share({ message });
      if (result.action === Share.sharedAction) {
        console.log("Content shared successfully!");
      } else if (result.action === Share.dismissedAction) {
        console.log("Share dismissed.");
      }
    } catch (error) {
      console.error("Error sharing:", error.message);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.station}>{item.stationName}</Text>
      <Text>Arrival: {item.arrivalTime}</Text>
      <Text>Departure: {item.departureTime}</Text>
      <Text>Bus Type: {item.busType || "N/A"}</Text>
      <Text>Via: {item.viaRouteName}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>

        <View style={{ marginLeft: 20 }}>
          <Text style={styles.headerTitle}>{fromCity} to {toCity}</Text>
          <Text style={styles.dateText}>{date}</Text>
        </View>

        <View style={styles.iconRow}>
          <TouchableOpacity onPress={shareContent}>
            <Ionicons name="share-social" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("HomeScreen", { fromCity, toCity, date })
            }
          >
            <Ionicons name="create" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Filter buttons */}
      <View style={styles.filterRow}>
        <TouchableOpacity
          onPress={() => setIsFilterModalVisible(true)}
          style={styles.filterButton}
        >
          <Image source={require("../images/18.png")} />
          <Text style={styles.filterText}>Filters</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIsFilterModalVisible(true)}
          style={styles.filterButton}
        >
          <Image source={require("../images/19.png")} />
          <Text style={styles.filterText}>Sort</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("ACScreen")}
          style={styles.filterButton}
        >
          <Image source={require("../images/20.png")} />
          <Text style={styles.filterText}>AC</Text>
        </TouchableOpacity>
      </View>

      {/* Title */}
      <TouchableOpacity style={styles.dateButtons}>
        <Text style={styles.Text}>Buses For {fromCity} to {toCity}</Text>
      </TouchableOpacity>

      {/* List of stoppages */}
      <FlatList
        data={stoppages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        ListEmptyComponent={<Text style={styles.emptyText}>No stoppages found.</Text>}
      />

      {/* Filter Modal */}
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
              <Text style={styles.filterTitle}>Departure Time</Text>
              {renderFilterOption("Morning (06:00 - 12:00)", "morning")}
              {renderFilterOption("Afternoon (12:00 - 18:00)", "afternoon")}
              {renderFilterOption("Evening (18:00 - 00:00)", "evening")}
              {renderFilterOption("Night (00:00 - 06:00)", "night")}
            </View>
            <View style={styles.modalActions}>
              <TouchableOpacity
                style={styles.clearButton}
                onPress={() =>
                  setFilters({ morning: false, afternoon: false, evening: false, night: false })
                }
              >
                <Text style={styles.clearText}>Clear All</Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9f9f9" },
  header: {
    backgroundColor: "#0D47A1",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
  },
  headerTitle: { fontSize: 18, fontWeight: "bold", color: "white" },
  dateText: { fontSize: 14, color: "#ddd" },
  iconRow: { flexDirection: "row", gap: 15 },
  filterRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#fff",
  },
  filterButton: { alignItems: "center" },
  filterText: { marginTop: 5 },
  dateButtons: {
    backgroundColor: "#FFCB20",
    padding: 10,
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  Text: { fontWeight: "bold", color: "#333" },
  card: {
    backgroundColor: "#fff",
    margin: 10,
    padding: 15,
    borderRadius: 10,
    elevation: 2,
  },
  station: { fontSize: 16, fontWeight: "bold", marginBottom: 5 },
  emptyText: { textAlign: "center", marginTop: 20, color: "#888" },

  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
  },
  modalContent: {
    backgroundColor: "white",
    margin: 20,
    borderRadius: 10,
    padding: 20,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalTitle: { fontSize: 18, fontWeight: "bold" },
  modalClose: { fontSize: 18, color: "#888" },
  filterSection: { marginTop: 20 },
  filterTitle: { fontWeight: "bold", marginBottom: 10 },
  filterOption: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  },
  toggleButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  toggleButtonText: { color: "#000" },
  modalActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  clearButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#888",
    borderRadius: 5,
  },
  clearText: { color: "#888" },
  applyButton: {
    padding: 10,
    backgroundColor: "#0D47A1",
    borderRadius: 5,
  },
  applyText: { color: "#fff" },
});
