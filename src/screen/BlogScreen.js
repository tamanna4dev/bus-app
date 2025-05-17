
import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
 
const routes = [
  {
    id: "1",
   image: require('../images/37.jpg'), // Replace with actual image URL
    title: "Hisar to Chandigarh",
    distance: "240 km",
    description: "Buses run every hour from Hisar to Chandigarh via Jind and Karnal."
  },
  {
    id: "2",
   image: require('../images/38.jpg'), // Replace with actual image URL
    title: "Delhi to Rohtak",
    distance: "70 km",
    description: "Frequent buses available every 30 minutes from Delhi ISBT to Rohtak."
  },
  {
    id: "3",
   image: require('../images/39.jpg'), // Replace with actual image URL
    title: "Ambala to Gurgaon",
    distance: "270 km",
    description: "Express buses available daily with limited stops for faster travel."
  },
  {
    id: "4",
   image: require('../images/39.jpg'), // Replace with actual image URL
    title: "Kurukshetra to Faridabad",
    distance: "270 km",
    description: "Buses pass through Karnal and Panipat with a 4-hour travel time."
  }
];

export default function BlogScreen() {
  return (
    <View style={styles.container}>
      <View style={{backgroundColor:'#184e77',padding:15,borderRadius:10,paddingHorizontal:35,marginBottom:30,alignItems:'center',justifyContent:'center'}}>
        <Text style={{color:'#fff',fontSize:15,fontWeight:'600'}}>Haryana Roadways Bus Routes
</Text>
        <Text style={{color:'#fff',fontSize:11,textAlign:'center',marginTop:7}}>Find bus routes, schedules, and essential details for easy travel.

</Text>
      </View>
       

      <FlatList
        data={routes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.distanceContainer}>
              <Text style={styles.distance}>{item.distance}</Text>
            </View>
            <Text style={styles.description}>{item.description}</Text>
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
    justifyContent:'center',
    alignItems:'center'
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    // alignItems:'center'
  },
  image: {
    width: "100%",
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    // fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    // textAlign:'center'
  },
  distanceContainer: {
    backgroundColor: "#184e77",
    paddingVertical: 5,
    borderRadius: 20,
    // alignSelf: "flex-start",
    marginBottom: 5,
    alignItems:'center',
   width:70
  },
  distance: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 9,

  },
  description: {
    fontSize: 11,
    color: "#333",
    width:330,
   
  },
});