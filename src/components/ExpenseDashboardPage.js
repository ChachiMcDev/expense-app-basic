import React from 'react';
import ExpenseList from '../components/ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = ()=> (
    <div>This is the dashboard

        <ExpenseListFilters />
        <ExpenseList />
    </div>

    
)

export default ExpenseDashboardPage;