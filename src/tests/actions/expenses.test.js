import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

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
        id: expect.any(String),
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
})

const addExpObjDefaultMatch = {
    type: 'ADD_EXPENSE',
    expense: {
        id: expect.any(String),
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    }
}

test('should setup add expense object with default values', ()=>{
    const action = addExpense();

    expect(action).toEqual(addExpObjDefaultMatch)
})
