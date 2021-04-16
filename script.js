const transactionsU1 = document.querySelector('#transactions') //pega o referencia da class
const incomeDisplay = document.querySelector('#money-plus')
const expenseDisplay = document.querySelector('#money-minus')
const balanceDisplay = document.querySelector('#balance')
const form = document.querySelector('#form')
const inputTransactionName = document.querySelector('#text')
const inputTransactionAmount = document.querySelector('#amount')

const  dummyTransactions = [
    {id: 1, name: 'Bolo de brigadeiro', amount: -20},
    {id: 2, name: 'Salário', amount: 300},
    {id: 3, name: 'Torta de frango', amount: -10},
    {id: 4, name: 'Violão', amount: 150},
    {id: 4, name: 'Show Anavitoria', amount: -120}
]

const addTransactionIntoDom = transaction => {
    const operator = transaction.amount < 0 ? '-' : '+' //verificar atribuir operadores
    const CSSClass = transaction.amount < 0 ? 'minus': 'plus'
    const amountWithoutOperator = Math.abs(transaction.amount) //retorna o valor absoluto
    //console.log(CSSClass)
    const li = document.createElement('li') //cria um elemento html

    li.classList.add(CSSClass) 
    li.innerHTML = `
        ${transaction.name} <span>${operator} R$ ${amountWithoutOperator}</spam><button class="delete-btn">x</button>
    `
    //console.log(li)
    transactionsU1.append(li) //passa como ob valorado
    
}

const updateBalanceValues = () => {
    const transactionAmounts = dummyTransactions
        .map(transaction => transaction.amount); //recupera o valor do maps de array
    const total = transactionAmounts
        .reduce((accumulator, transaction) => accumulator + transaction, 0)
        .toFixed(2) //somando valores do map no acc
    const income = transactionAmounts
        .filter(value => value > 0)
        .reduce((accumulator, value) => accumulator + value, 0)
        .toFixed(2) //retorna o valor so se a condição for true e soma os valores positivos
    const expense = Math.abs(transactionAmounts
        .filter(value => value < 0)
        .reduce((accumulator, value ) => accumulator + value, 0))
        .toFixed(2)

    
    
    balanceDisplay.textContent = ` R$ ${total} ` //adiciona o valor no display
    incomeDisplay.textContent = ` R$ ${income} `
    expenseDisplay.textContent = ` R$ ${expense} `

}

const init = () => {
    dummyTransactions.forEach(addTransactionIntoDom)
    updateBalanceValues()
}

init()

const generateID = () => Math.round(Math.round() * 1000)

form.addEventListener('submit', event => {
    event.preventDefault()

    const transactionName = inputTransactionName.value.trim()
    const transactionAmount = inputTransactionAmount.value.trim()

    if(transactionName === '' || transactionAmount === ''){
        alert('Por favor, preencha tanto o nome quanto o valor da transação')
        return
    }

    const transaction = {
        id: generateID(),
        name: transactionName,
        amount: transactionAmount
    }

    dummyTransactions.push(transaction)
    init()

    inputTransactionName.value = ''
    inputTransactionAmount.value = ''

})