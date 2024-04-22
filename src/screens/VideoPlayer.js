import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native"; // Remove Video import
import { Video } from "expo-av";
const VideoPlayer = () => {
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    fetch("https://api.npoint.io/b26981ec31637bf1e65b")
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch video data');
        }
        return response.json();
      })
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setVideoData(data[0]);
        }
      })
      .catch(error => {
        console.error("Error fetching video data:", error);
      });
  }, []);

  if (!videoData) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{videoData.title}</Text>
      <Video
        source={{ uri: videoData.sources }}
        style={styles.video}
        useNativeControls
        resizeMode="contain"
      />
      <Text style={styles.subtitle}>{videoData.subtitle}</Text>
      <Text style={styles.description}>{videoData.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 24,
    },
  video: {
    width: 300,
    height: 200,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default VideoPlayer;
