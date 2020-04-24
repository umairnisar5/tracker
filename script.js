const  balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');

const amount = document.getElementById('amount');

const dummyTransaction = [
    {id: 1, text: 'flower', amount: -20},
    {id: 2, text: 'salary', amount: 300},
    {id: 3, text: 'book', amount: -10},
    {id: 4, text: 'camera', amount: 150},

];
 let transactions = dummyTransaction;

 // Add transactions to DOM list 
 function addTransactionDOM(transaction) {
     //get sing 
     const sign = transaction.amount < 0 ? '-' : '+'; 
     const item = document.creatElement ('li');

     //ADD class based on value 
     item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');
 }