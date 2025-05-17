import React, { useRef, useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Platform,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import slides from '../API//JSONData/SlidesData'

const { width, height } = Dimensions.get('window');

const OnboardingScreen = ({ navigation }) => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current.scrollToIndex({ index: currentIndex + 1, animated: true });
    } else {
      navigation.navigate('BottomNavigator');
    }
  };

  const handleSkip = () => {
    navigation.navigate('BottomNavigator');
  };

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0]?.index || 0);
  }).current;

  const renderItem = useCallback(({ item }) => (
    <View style={styles.slide}>
      <Image
        source={item.image}
        style={[styles.image, Platform.OS === 'web' && { resizeMode: 'contain' }]}
        accessibilityLabel={item.title} // Improving accessibility
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  ), []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
        initialNumToRender={1} // Optimizes FlatList rendering
      />

      <View style={styles.footer}>
        <TouchableOpacity onPress={handleSkip} accessible={true} accessibilityLabel="Skip Onboarding">
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>

        <View style={styles.pagination}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[styles.dot, currentIndex === index && styles.activeDot]}
            />
          ))}
        </View>

        <TouchableOpacity
          style={styles.nextButton}
          onPress={handleNext}
          accessible={true}
          accessibilityLabel="Next Slide"
        >
          <Ionicons name="arrow-forward" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  slide: {
    width,
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 60,
  },
  image: {
    width: width * 0.7,
    height: height * 0.4,
    resizeMode: 'cover',
    marginBottom: 40,
  },
  textContainer: {
    marginTop: -70,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width,
    paddingHorizontal: 20,
    marginBottom: 34,
  },
  skipText: {
    color: '#666',
    fontSize: 16,
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#fbbc04',
  },
  nextButton: {
    backgroundColor: '#fbbc04',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OnboardingScreen;
