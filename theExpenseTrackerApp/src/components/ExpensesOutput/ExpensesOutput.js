import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import { GlobalStyles } from '../../constants/style';

const DUMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2022-07-04')
    },
    {
        id: 'e2',
        description: 'A pair of trousers',
        amount: 89.29,
        date: new Date('2022-06-14')
    },
    {
        id: 'e3',
        description: 'Some bananas',
        amount: 5.99,
        date: new Date('2022-05-20')
    },
    {
        id: 'e4', 
        description: 'A book',
        amount: 14.99,
        date: new Date('2022-04-24')
    },
    {
        id: 'e5',
        description: 'Another book',
        amount: 59.99,
        date: new Date('2022-06-10')
    },
    {
        id: 'e6',
        description: 'A pair of trousers',
        amount: 89.29,
        date: new Date('2022-06-14')
    },
    {
        id: 'e7',
        description: 'Some bananas',
        amount: 5.99,
        date: new Date('2022-05-20')
    },
    {
        id: 'e8', 
        description: 'A book',
        amount: 14.99,
        date: new Date('2022-04-24')
    },
    {
        id: 'e9',
        description: 'Another book',
        amount: 59.99,
        date: new Date('2022-06-10')
    }
]

export default function ExpensesOutput({expenses, expensesPeriod}) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMY_EXPENSES} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.primary700
    }
});
