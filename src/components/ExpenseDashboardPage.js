import React from 'react';
import ExpenseList from '../components/ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseSummary from './ExpensesSummary';

const ExpenseDashboardPage = ()=> (
    <div>
        <ExpenseSummary />
        <ExpenseListFilters />
        <ExpenseList />
    </div>

    
)

export default ExpenseDashboardPage;