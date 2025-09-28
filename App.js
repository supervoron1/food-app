import { StatusBar } from 'expo-status-bar';
import {StyleSheet, FlatList, View} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { CategoryCard } from "./components/CategoryCard";
import { DishCardDetailed } from "./components/DishCardDetailed";
import category01 from './assets/img/category_01.png';
import category02 from './assets/img/category_02.png';
import category03 from './assets/img/category_03.png';
import category04 from './assets/img/category_04.png';
import category05 from './assets/img/category_05.png';
import category06 from './assets/img/category_06.png';
import dish01 from './assets/img/dish_01.png';
import dish02 from './assets/img/dish_02.png';
import dish03 from './assets/img/dish_03.png';
import dish04 from './assets/img/dish_04.png';
import dish05 from './assets/img/dish_05.png';
import dish06 from './assets/img/dish_06.png';
import {DishCard} from "./components/DishCard";

export default function App() {
  const categories = [
    { id: 1, title: 'Fast Food', img: category01 },
    { id: 2, title: 'Breakfast & Brunch', img: category02 },
    { id: 3, title: 'Mexican', img: category03 },
    { id: 4, title: 'Bakery', img: category04 },
    { id: 5, title: 'Deserts', img: category05 },
    { id: 6, title: 'Burgers', img: category06 },
  ];
  const dishes = [
    { 
      id: 1, 
      title: 'Classic Burger', 
      description: 'Juicy beef patty with fresh lettuce, tomato, and our special sauce',
      price: 12.99,
      rating: 4.8,
      img: dish01 
    },
    { 
      id: 2, 
      title: 'Margherita Pizza', 
      description: 'Traditional Italian pizza with fresh mozzarella, tomato sauce and basil',
      price: 15.50,
      rating: 4.9,
      img: dish02 
    },
    { 
      id: 3, 
      title: 'Caesar Salad', 
      description: 'Crisp romaine lettuce with parmesan cheese, croutons and caesar dressing',
      price: 9.99,
      rating: 4.6,
      img: dish03 
    },
    { 
      id: 4, 
      title: 'Chicken Wings', 
      description: 'Spicy buffalo wings served with ranch dip and celery sticks',
      price: 11.99,
      rating: 4.7,
      img: dish04 
    },
    { 
      id: 5, 
      title: 'Chocolate Cake', 
      description: 'Rich chocolate cake with chocolate ganache and fresh berries',
      price: 7.99,
      rating: 4.8,
      img: dish05 
    },
    { 
      id: 6, 
      title: 'Fish & Chips', 
      description: 'Beer-battered cod with crispy fries and tartar sauce',
      price: 13.99,
      rating: 4.5,
      img: dish06 
    },
  ];

  const handleCategoryPress = (category) => {
    console.log('Выбрана категория:', category.title);
  };

  const handleDishPress = (dish) => {
    console.log('Выбрано блюдо:', dish.title);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style={'auto'} />

        {/*Список категорий*/}
        {/*<FlatList*/}
        {/*  data={categories}*/}
        {/*  numColumns={2}*/}
        {/*  renderItem={({item}) => <CategoryCard*/}
        {/*    title={item.title}*/}
        {/*    img={item.img}*/}
        {/*    onPress={() => handleCategoryPress(item)}*/}
        {/*  />}*/}
        {/*  keyExtractor={item => item.id}*/}
        {/*  contentContainerStyle={styles.flatListContainer}*/}
        {/*  columnWrapperStyle={styles.row}*/}
        {/*/>*/}

        {/*Список блюд в категории*/}
        <FlatList
          data={dishes}
          numColumns={2}
          renderItem={({item}) => <DishCard
            title={item.title}
            price={item.price}
            img={item.img}
            onPress={() => handleDishPress(item)}
          />}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.flatListContainer}
          columnWrapperStyle={styles.row}
        />

        {/*Детальная карточка блюда*/}
        <View style={styles.detailedCard}>
          <DishCardDetailed
            title={dishes.at(1).title}
            description={dishes.at(1).description}
            price={dishes.at(1).price}
            rating={dishes.at(1).rating}
            img={dishes.at(1).img}
          />
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  flatListContainer: {
    marginTop: 8,
    paddingHorizontal: 12,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  detailedCard: {
    padding: 12
  }
});
