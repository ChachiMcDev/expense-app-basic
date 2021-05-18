import { addExpense, removeExpense, editExpense, startAddExpense } from '../../actions/expenses';
import expenseData from '../fixtures/expensesData';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expensesData from '../fixtures/expensesData';

const middlewares = [thunk] // add your middlewares like `redux-thunk`
const createMockStore = configureStore(middlewares)


//REMOVE_EXPENSE TEST
test('should return object with type: REMOVE_EXPENSE and id', () =>{
    const action = removeExpense({ id: '123456789'})
    expect(action).toEqual({type: 'REMOVE_EXPENSE', id: '123456789'})
});



//EDIT_EXPENSE TEST
const editExpObjMatch = {
    type: 'EDIT_EXPENSE',
    id: '1234jkl',
    updates: {
        description: 'blabh desc',
        note: 'suckit',
        amount: 100
    }  
}
test('should return object with type: EDIT_EXPENSE and id and updates', ()=>{
    const action = editExpense('1234jkl', {description: 'blabh desc', note:'suckit', amount:100});
    expect(action).toEqual(editExpObjMatch)
})



//ADD_EXPENSE TEST
const addExpObjMatch = {
    type: 'ADD_EXPENSE',
    expense: {
        description: expect.any(String),
        note: expect.any(String),
        amount: expect.any(Number),
        createdAt: expect.any(Number)
    }
}

test('should return object with type: ADD_EXPENSE', ()=>{
    const action = addExpense({
        description: 'mild description', 
        note: 'milder note', 
        amount: 200, 
        createdAt: 500});
        expect(action).toEqual(addExpObjMatch)
});


test('should setup add expense object with default values', ()=>{
    const addExpObjDefaultMatch = {
        type: 'ADD_EXPENSE',
        expense: expenseData[0]
    }
    
    const action = addExpense(expenseData[2]);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenseData[2]
    });
});


test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: 2000,
        note: 'this one is ok i guess',
        createdAt: 1000
    }

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0].toEqual({
            
            type: 'ADD_EXPENSE',
            expense: {
                id: expenct.any(String),
                ...expensesData
            }
        }));
            done();
    });
});


test('should add expense with defaults to database and store', () => {


});


//test('should setup add expense object with default values', ()=>{
//    const addExpObjDefaultMatch = {
//        type: 'ADD_EXPENSE',
//        expense: {
//            id: expect.any(String),
//            description: '',
//            note: '',
//            amount: 0,
//            createdAt: 0
//        }
//    }
//    
//    const action = addExpense();
//
//    expect(action).toEqual(addExpObjDefaultMatch)
//});
//