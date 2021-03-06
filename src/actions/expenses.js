import { v4 as uuid } from 'uuid'
import database from '../firebase/firebase';

//Expenses actions

//component calls action generator
//action generator returns an object
//component dispatches object to redux
//redux store changes

//*** asych flow     */
//component calls action generator
//action generator returns a function
//component dispatches function ((?) =>   redux does not natively allow functions, redux middlware is used ) 
//////// using redux-thunk as the middleware
//function runs (has the abilit to dispatch other actions and do whaterver it wants)




//ADD_EXPENSE
export const addExpense = (expense) => ({
        type: 'ADD_EXPENSE',
        expense   
 });


 export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;
        const expense = { description, note, amount, createdAt }

    return  database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
 };


//REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({ 
    type: 'REMOVE_EXPENSE',
    id
});


//EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

