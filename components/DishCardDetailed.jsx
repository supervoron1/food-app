import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {Text} from "./Text";

export const DishCardDetailed = ({
  title,
  description,
  price,
  rating,
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
          <View style={styles.ratingContainer}>
            <Text size={14} weight={500} color="#FF6B35">★</Text>
            <Text size={14} weight={500} color="#666666" style={styles.rating}>
              {rating}
            </Text>
          </View>
        </View>
        
        <Text 
          size={14} 
          color="#666666" 
          style={styles.description}
          numberOfLines={2}
        >
          {description}
        </Text>
        
        <View style={styles.footer}>
          <Text size={20} weight={700} color="#1A1A1A">
            ${price}
          </Text>
          <TouchableOpacity style={styles.addButton} activeOpacity={0.7}>
            <Text size={16} weight={600} color="#FFFFFF">
              +
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
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
    height: 180,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  content: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  title: {
    flex: 1,
    marginRight: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    marginLeft: 4,
  },
  description: {
    marginBottom: 16,
    lineHeight: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#007AFF',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
});
