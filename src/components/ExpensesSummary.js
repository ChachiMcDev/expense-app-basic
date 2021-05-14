import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses'
import expensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';



export const ExpenseSummary = (props) => (
    <div>     
         { 
            props.expenses.length === 1 ? 
            (<p>
                You are viewing 1 expense totalling: 
                {numeral(expensesTotal(props.expenses) / 100).format('$0,0.00')}
            </p>) : 
            (<p>
                You are viewing {props.expenses.length} expenses totalling: 
                {numeral(expensesTotal(props.expenses) / 100).format('$0,0.00')} 
            </p>) 
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
} 

export default connect(mapStateToProps)(ExpenseSummary);