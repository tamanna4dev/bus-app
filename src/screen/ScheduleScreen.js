import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import EntypoIcon from "react-native-vector-icons/Entypo";
  import ScheduleData from "../API/JSONData/ScheduleData"

const ScheduleScreen = () => {
  const [reminders, setReminders] = React.useState(
    Array(ScheduleData.length).fill(false) // Initialize reminder states based on the data length
  );

  const handleToggle = (index) => {
    const updatedReminders = [...reminders];
    updatedReminders[index] = !updatedReminders[index];
    setReminders(updatedReminders);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Icon name="arrow-back" size={24} color="#fff" />
        <Text style={styles.headerText}>Schedule</Text>
      </View>

      {/* Title and Route */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Weekly Schedule</Text>
        <TouchableOpacity style={styles.routeContainer}>
          <Text style={styles.routeText}>Route D1</Text>
          <Icon name="location-outline" size={18} color="#4A90E2" />
        </TouchableOpacity>
      </View>

      {/* Table Header */}
      <View style={styles.tableHeader}>
        <Text style={styles.tableHeaderText}>Day</Text>
        <Text style={styles.tableHeaderText}>Time</Text>
        <Text style={styles.tableHeaderText}>Reminder</Text>
        <Text style={styles.tableHeaderText}>Edit</Text>
      </View>

      {/* Scrollable Schedule Table */}
      <ScrollView>
        {ScheduleData.map((item, index) => (
          <View style={styles.row} key={index}>
            <Text style={styles.rowText}>{item.date}</Text>
            <Text style={styles.rowText}>{item.time}</Text>
            <Switch
              value={reminders[index]}
              onValueChange={() => handleToggle(index)}
              trackColor={{ false: "#ccc", true: "#4A90E2" }}
              thumbColor={reminders[index] ? "#4A90E2" : "#f4f3f4"}
            />
            <TouchableOpacity>
              <EntypoIcon name="dots-three-horizontal" size={20} color="#000" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Next Week Button */}
      <TouchableOpacity style={styles.nextWeekBtn}>
        <Text style={styles.nextWeekText}>Next Week</Text>
      </TouchableOpacity>

      {/* Bottom Tab Navigation Placeholder */}
      {/* <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Icon name="home-outline" size={24} color="#000" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="search-outline" size={24} color="#000" />
          <Text style={styles.navText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="bus-outline" size={24} color="#000" />
          <Text style={styles.navText}>My Bus</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="map-outline" size={24} color="#000" />
          <Text style={styles.navText}>Routes</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="calendar-outline" size={24} color="#FFD700" />
          <Text style={[styles.navText, styles.activeNavText]}>Schedule</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFD700",
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginTop: 15,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  routeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  routeText: {
    color: "#4A90E2",
    fontSize: 14,
    marginRight: 5,
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#333",
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 15,
  },
  tableHeaderText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  rowText: {
    fontSize: 14,
    color: "#000",
  },
  nextWeekBtn: {
    backgroundColor: "#FFD700",
    paddingVertical: 10,
    marginHorizontal: 10,
    marginTop: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  nextWeekText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    backgroundColor: "#fff",
  },
  navText: {
    fontSize: 10,
    color: "#000",
    textAlign: "center",
  },
  activeNavText: {
    color: "#FFD700",
  },
});

export default ScheduleScreen;



