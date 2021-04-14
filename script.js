const  dummyTransactions = [
    {id: 1, name: 'Bolo de brigadeiro', amount: -20},
    {id: 2, name: 'Salário', amount: 300},
    {id: 3, name: 'Torta de frango', amount: -10},
    {id: 4, name: 'Violão', amount: 150}
]

const addTransactionIntoDom = transaction => {
    const operator = transaction.amount < 0 ? '-' : '+' //verificar atribuir operadores
    const CSSClass = transaction.amount < 0 ? 'minus': 'plus'
    const amountWithoutOperator = Math.abs(transaction.amount)
    //console.log(CSSClass)
    const li = document.createElement('li') //cria um elemento html

    li.classList.add(CSSClass) 
    li.innerHTML = `
        ${transaction.name} <span>${operator} R$ ${amountWithoutOperator}</spam><button class="delete-btn>x</button>
    `
    console.log(li)
    
    
}

addTransactionIntoDom(dummyTransactions[0]) //chamada de função
