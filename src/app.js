import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss'; 
import 'react-dates/lib/css/_datepicker.css';

import {addExpense} from './actions/expenses';
import { setTextFilter, setSortByAmountFilter } from './actions/filters';


const store = configureStore();

//store.dispatch(addExpense({ description: 'Water bill', amount: 50000 }));
//store.dispatch(addExpense({ description: 'Gas bill', amount: 7000}));
//store.dispatch(addExpense({ description: 'mortgage', amount: 250000}));
//store.dispatch(addExpense({ description: 'life', amount: 2300 }));
//store.dispatch(setSortByAmountFilter());
//store.dispatch(setTextFilter('water'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log('from app load',  visibleExpenses);



const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>   
);


ReactDOM.render(jsx, document.getElementById('app'))
