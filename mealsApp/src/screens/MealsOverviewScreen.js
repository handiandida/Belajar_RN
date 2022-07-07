import {StyleSheet, FlatList, View, Text} from 'react-native';
import React, {useEffect, useLayoutEffect} from 'react';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealsList from '../components/MealsList/MealsList';

export default function MealsOverviewScreen({route, navigation}) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      category => category.id === catId,
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals} />
}

const styles = StyleSheet.create({
  
});