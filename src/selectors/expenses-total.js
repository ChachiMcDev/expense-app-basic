
export default (expenses) => {
    if (expenses.length === 0) {
        return 0;
    } else {
        const amounts = expenses.map((expense) => (expense.amount));
        const sum = amounts.reduce((total, amount) => (total + amount));
        return sum;
    }
}

