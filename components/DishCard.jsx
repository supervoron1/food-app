import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {Text} from "./Text";
import {Button} from "./Button";

export const DishCard = ({
  title,
  price,
  img,
  onPress,
  style
}) => {
  return (
    <TouchableOpacity 
      style={[styles.container, style]} 
      onPress={onPress} 
      activeOpacity={0.8}
    >
      <Image
        source={img}
        style={styles.image}
        resizeMode="cover"
      />
      
      <View style={styles.content}>
        <View style={styles.header}>
          <Text 
            size={18} 
            weight={600} 
            color="#1A1A1A"
            style={styles.title}
          >
            {title}
          </Text>
        </View>


      </View>

      <Button title={`${price} $`} fullWidth />

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 220,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    marginHorizontal: 8,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 130,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  content: {
    padding: 9,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  title: {
    flex: 1,
  },
});
