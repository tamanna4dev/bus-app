import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Share,
  Dimensions,
} from "react-native";
import { LiveTrackingData } from "./../API/JSONData/AllJsonData";
import { Animated } from "react-native";
import React, { useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useWindowDimensions } from "react-native";

const onShare = async () => {
  try {
    const jsonData = JSON.stringify(LiveTrackingData, null, 2);
    const result = await Share.share({
      message: `Live Tracking!\n\n${jsonData}`,
    });
    if (result.action === Share.sharedAction) {
      console.log("Shared successfully");
    } else if (result.action === Share.dismissedAction) {
      console.log("Share dismissed");
    }
  } catch (error) {
    console.error("Error sharing:", error);
  }
};

const ScheduleScreen = ({ navigation }) => {
  const route = useRoute();
  console.log("Route Params:", route.params); // ✅ Debugging Step

  // Default values to prevent undefined errors
  const { fromCity = "Unknown", toCity = "Unknown" } = route.params || {};
  console.log("From:", fromCity, "To:", toCity);

  const { width, height } = useWindowDimensions();
  const rotation = new Animated.Value(0);
  const scale = new Animated.Value(1);
  const translateY = new Animated.Value(0);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.spring(scale, {
          toValue: 1.3,
          friction: 3,
          tension: 150,
          useNativeDriver: true,
        }),
        Animated.spring(scale, {
          toValue: 1,
          friction: 3,
          tension: 150,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        {/* <Text style={[styles.headerTitle, { fontSize: width * 0.05 }]}>Jaipur to Tonk Express</Text> */}
        <Text style={styles.headerTitle}>{fromCity} to {toCity}</Text>
      <Image source={require("../images/stream.png")}style={{height:32,width:32,tintColor:'white',marginRight:10}}/>

        <TouchableOpacity style={styles.dateButton} onPress={onShare}>
      
      
      <MaterialCommunityIcons name="share-variant" size={width * 0.07} color="#fff" />
     

        </TouchableOpacity>
      </View>

      <View style={styles.tableHeader}>
        <Text style={styles.tableTitle}>Arrival</Text>
        <Text style={styles.tableTitle}>Day1-Nov15,Fri</Text>
        <Text style={styles.tableTitle}>Departure</Text>
      </View>

      <ScrollView>
      <Image source={require("../images/26.png")} style={styles.image} />

      <View style={{marginTop:-670}}>
          {LiveTrackingData.map((stop, index) => (
          <View key={stop.id} style={styles.row}>
            
            <View style={styles.timeColumn}>
              <Text style={styles.timeText}>{stop.time}</Text>
            </View>

            <View style={styles.middleColumn}>
              {index === LiveTrackingData.length - 1 ? (
                <Animated.View style={{ transform: [{ scale }, { translateY }] }}>
{/* <View style={{marginRight:12}}> */}
<Ionicons name="bus" size={width * 0.07} color="#FBC02D" />
{/* </View>   */}
              </Animated.View>
              ) : (
                
                <View style={styles.dot} />
              )}

              <View style={{ marginLeft: 10 }}>
                <Text style={styles.stationName}>{stop.station}</Text>
                <Text style={styles.platformText}>{stop.platform}</Text>
              </View>
            </View>
            <View style={styles.timeColumn}>
              <Text style={styles.timeText}>{stop.time}</Text>
            </View>
          </View>
        ))}
        </View>
      </ScrollView>
      {/* <Image source={require("../images/26.png")} style={[styles.image, { height: height * 0.6 }]} /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#FBC02D",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    justifyContent: "space-between",
  },
  headerTitle: {
    color: "#fff",
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
justifyContent:'center'
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#FFF",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  tableTitle: {
    fontWeight: "600",
    fontSize: 16,
    color: "#444",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  timeColumn: {
    alignItems: "center",
    justifyContent: "center",
    width: "25%",
  },
  timeText: {
    fontSize: 14,
    color: "#444",
  },
  middleColumn: {
    flexDirection: "row",
    alignItems: "center",
    width: "50%",
  },
  dot: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: "#FFCB20",
  },
  stationName: {
    fontWeight: "600",
    fontSize: 16,
    color: "#222",
  },
  platformText: {
    fontSize: 14,
    color: "#666",
  },
  image: {
    // width: "100%",
    // position: "absolute",
    // // left: "3",
    // bottom: "2%",
    position:'relative',
    left:119,
    borderRadius:10,
  },
});

export default ScheduleScreen;
// import {
//   View,
//   Text,
//   StyleSheet,
//   SafeAreaView,
//   ScrollView,
//   Image,
//   TouchableOpacity,
//   Share,
//   Animated,
// } from "react-native";
// import React, { useEffect } from "react";
// import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
// import { useRoute, useNavigation } from "@react-navigation/native";
// import { buses } from "./../API/JSONData/AllJsonData"; // ✅ Ensure this path is correct

// const onShare = async () => {
//   try {
//     const jsonData = JSON.stringify(buses, null, 2);
//     const result = await Share.share({
//       message: `Bus Schedule:\n\n${jsonData}`,
//     });
//     if (result.action === Share.sharedAction) {
//       console.log("Shared successfully");
//     } else if (result.action === Share.dismissedAction) {
//       console.log("Share dismissed");
//     }
//   } catch (error) {
//     console.error("Error sharing:", error);
//   }
// };

// const ScheduleScreen = () => {
  // const navigation = useNavigation();
  // const route = useRoute();
  // console.log("Route Params:", route.params); // ✅ Debugging Step

  // // Default values to prevent undefined errors
  // const { fromCity = "Unknown", toCity = "Unknown" } = route.params || {};
  // console.log("From:", fromCity, "To:", toCity);

//   const scale = new Animated.Value(1);

//   useEffect(() => {
//     Animated.loop(
//       Animated.sequence([
//         Animated.spring(scale, {
//           toValue: 1.3,
//           friction: 3,
//           tension: 150,
//           useNativeDriver: true,
//         }),
//         Animated.spring(scale, {
//           toValue: 1,
//           friction: 3,
//           tension: 150,
//           useNativeDriver: true,
//         }),
//       ])
//     ).start();
//   }, []);

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
//           <Ionicons name="arrow-back" size={24} color="white" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>{fromCity} to {toCity}</Text>
//         <TouchableOpacity style={styles.dateButton} onPress={onShare}>
//           <MaterialCommunityIcons name="share-variant" size={24} color="#fff" />
//         </TouchableOpacity>
//       </View>

//       <ScrollView>
//         <Image source={require("../images/26.png")} style={styles.image} />

//         <View style={{ marginTop: -670 }}>
//           {buses.length > 0 ? (
//             buses.map((bus, index) => (
//               <View key={bus.id} style={styles.row}>
//                 <View style={styles.timeColumn}>
//                   <Text style={styles.timeText}>{bus.time}</Text>
//                 </View>

//                 <View style={styles.middleColumn}>
//                   {index === buses.length - 1 ? (
//                     <Animated.View style={{ transform: [{ scale }] }}>
//                       <Ionicons name="bus" size={24} color="#FBC02D" />
//                     </Animated.View>
//                   ) : (
//                     <View style={styles.dot} />
//                   )}

//                   <View style={{ marginLeft: 10 }}>
//                     <Text style={styles.stationName}>{bus.operator}</Text>
//                     <Text style={styles.platformText}>{bus.type}</Text>
//                   </View>
//                 </View>

//                 <View style={styles.timeColumn}>
//                   <Text style={styles.timeText}>{bus.duration}</Text>
//                 </View>
//               </View>
//             ))
//           ) : (
//             <Text style={styles.noData}>No Buses Available</Text>
//           )}
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#fff" },
//   header: {
//     backgroundColor: "#FBC02D",
//     flexDirection: "row",
//     alignItems: "center",
//     paddingVertical: 12,
//     paddingHorizontal: 16,
//     justifyContent: "space-between",
//   },
//   headerTitle: {
//     color: "#fff",
//     fontWeight: "bold",
//     flex: 1,
//     textAlign: "center",
//   },
//   row: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingVertical: 12,
//     paddingHorizontal: 16,
//   },
//   timeColumn: { alignItems: "center", justifyContent: "center", width: "25%" },
//   timeText: { fontSize: 14, color: "#444" },
//   middleColumn: { flexDirection: "row", alignItems: "center", width: "50%" },
//   dot: { height: 12, width: 12, borderRadius: 6, backgroundColor: "#FFCB20" },
//   stationName: { fontWeight: "600", fontSize: 16, color: "#222" },
//   platformText: { fontSize: 14, color: "#666" },
//   image: { position: "relative", left: 119, borderRadius: 10 },
//   noData: { textAlign: "center", fontSize: 18, marginTop: 20, color: "gray" },
// });

// export default ScheduleScreen;
