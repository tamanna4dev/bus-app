import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { useEffect, useRef, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import { getBusStoppages } from "../utils/api";
import Button from "../components/Button";

const HomeScreen = ({ navigation }) => {
  const [fromStationId, setFromStationId] = useState("");
  const [toStationId, setToStationId] = useState("");
  const [routeId, setRouteId] = useState("");
  const [date, setDate] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);
  let scrollX1 = 0;
  let scrollX2 = 0;

  useEffect(() => {
    const interval1 = setInterval(() => {
      if (scrollRef1.current) {
        scrollX1 += 160;
        if (scrollX1 > 160 * 4) scrollX1 = 0;
        scrollRef1.current.scrollTo({ x: scrollX1, animated: true });
      }
    }, 2000);

    const interval2 = setInterval(() => {
      if (scrollRef2.current) {
        scrollX2 += 370;
        if (scrollX2 > 370 * 1) scrollX2 = 0;
        scrollRef2.current.scrollTo({ x: scrollX2, animated: true });
      }
    }, 2500);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);
  const handleConfirm = (selectedDate) => {
    setDate(moment(selectedDate).format("DD-MM-YYYY"));
    hideDatePicker();
  };

  const selectToday = () => setDate(moment().format("DD-MM-YYYY"));
  const selectTomorrow = () => setDate(moment().add(1, "day").format("DD-MM-YYYY"));

  const handleSubmit = async () => {
    if (!fromStationId || !toStationId || !routeId) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    try {
      const data = await getBusStoppages(fromStationId, toStationId, routeId);
      setRecentSearches((prev) => [
        ...prev,
        {
          fromCity: fromStationId,
          toCity: toStationId,
          date,
        },
      ]);
      navigation.navigate("MyBusScreen", { stoppages: data });
    } catch (error) {
      Alert.alert("Error", "Failed to fetch stoppages");
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header Bar */}
      <View style={styles.headerBar}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu-outline" size={24} style={styles.menuIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("NotificationScreen")}>
          <Image source={require("../images/bell.png")} style={styles.bellIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")}>
          <View style={styles.profileCircle}>
            <Text style={styles.profileText}>T</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Input Fields */}
      <TextInput
        placeholder="From Station ID"
        value={fromStationId}
        onChangeText={setFromStationId}
        style={styles.input}
        keyboardType="number-pad"
      />
      <TextInput
        placeholder="To Station ID"
        value={toStationId}
        onChangeText={setToStationId}
        style={styles.input}
        keyboardType="number-pad"
      />
      <TextInput
        placeholder="Route ID"
        value={routeId}
        onChangeText={setRouteId}
        style={styles.input}
        keyboardType="number-pad"
      />

      {/* Date Picker */}
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <TouchableOpacity style={{ flexDirection: "row" }} onPress={showDatePicker}>
          <Image source={require("../images/celender.png")} style={styles.celenderimage} />
          <TextInput
            style={{ marginBottom: 10 }}
            placeholder="DD-MM-YYYY"
            value={date}
            editable={false}
          />
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        <View style={styles.dateButtonsContainer}>
          <TouchableOpacity style={styles.dateButton} onPress={selectToday}>
            <Text style={styles.dateButtonText}>Today</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dateButton} onPress={selectTomorrow}>
            <Text style={styles.dateButtonText}>Tomorrow</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Button title="Show Stoppages" onPress={handleSubmit} />

      {/* Offers */}
      <Image source={require("../images/offer.png")} style={styles.offerImage} />

      {/* Recent Searches */}
      <Text style={styles.sectionTitle}>Recent Searches</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {recentSearches.map((search, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              setFromStationId(search.fromCity);
              setToStationId(search.toCity);
              setDate(search.date);
              handleSubmit();
            }}
          >
            <View style={styles.recentSearchItem}>
              <View style={styles.recentSearchRow}>
                <Image source={require("../images/logo.png")} style={styles.logoImage} />
                <View style={styles.recentSearchTextContainer}>
                  <Text style={styles.recentSearchText}>
                    {search.fromCity} - {search.toCity}
                  </Text>
                  <Text style={styles.recentSearchDate}>{search.date}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Auto-scroll Offers */}
      <Text style={styles.sectionTitle}>Checked some offer?</Text>
      <ScrollView
        horizontal
        ref={scrollRef1}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ flexDirection: "row", gap: 10 }}
      >
        <Image source={require("../images/27.jpg")} style={styles.image} />
        <Image source={require("../images/28.jpg")} style={styles.image} />
        <Image source={require("../images/29.jpg")} style={styles.image} />
        <Image source={require("../images/30.jpg")} style={styles.image} />
        <Image source={require("../images/31.png")} style={styles.image} />
      </ScrollView>

      {/* Travel Stories */}
      <Text style={styles.sectionTitle}>Travel Stories</Text>
      <ScrollView
        horizontal
        ref={scrollRef2}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ flexDirection: "row", gap: 10 }}
      >
        <Image source={require("../images/33.jpg")} style={styles.storyImage} />
        <Image source={require("../images/32.jpg")} style={styles.storyImage} />
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  headerBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  menuIcon: { fontSize: 24 },
  bellIcon: { width: 24, height: 24, tintColor: "#000", marginLeft: 235 },
  profileCircle: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: "#FFCB20",
    justifyContent: "center",
    alignItems: "center",
  },
  profileText: { color: "#fff", fontWeight: "bold", fontSize: 18 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginBottom: 12,
    borderRadius: 4,
  },
  dateButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  dateButton: {
    backgroundColor: "#FFCB20",
    paddingHorizontal: 20,
    paddingVertical: 7,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  dateButtonText: { fontSize: 13, fontWeight: "400", color: "#1A237E" },
  offerImage: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
    marginVertical: 16,
  },
  sectionTitle: { fontSize: 16, fontWeight: "700", marginVertical: 8 },
  recentSearchItem: {
    padding: 10,
    borderWidth: 2,
    borderColor: "#f9f9f9",
    borderRadius: 8,
    margin: 5,
    backgroundColor: "#fff",
  },
  recentSearchRow: { flexDirection: "row", alignItems: "center" },
  logoImage: { height: 30, width: 30 },
  recentSearchTextContainer: { marginLeft: 15 },
  recentSearchText: { fontSize: 15, fontWeight: "500" },
  recentSearchDate: { fontSize: 11, color: "#767676" },
  image: { height: 120, width: 150, borderRadius: 10 },
  storyImage: { borderRadius: 10, width: 370, height: 180 },
  celenderimage: {
    height: 20,
    width: 20,
    marginRight: 5,
    marginTop: 10,
  },
});

export default HomeScreen;
 