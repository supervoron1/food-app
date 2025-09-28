import React from 'react';
import {StyleSheet, View, ImageBackground, TouchableOpacity} from 'react-native';
import {Text} from "./Text";

export const CategoryCard = ({title, img, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.8}>
      <ImageBackground
        source={img}
        style={styles.imageBackground}
        imageStyle={styles.imageStyle}
      >
        <View style={styles.content}>
          <Text color={'#FFFFFF'} weight={600}>{title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 160,
    borderRadius: 16,
    marginHorizontal: 8,
    marginVertical: 8,
  },
  imageBackground: {

    borderRadius: 16,
    overflow: 'hidden',
  },
  imageStyle: {
    borderRadius: 16,
  },
  content: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // overlay with 50% opacity
  },
});