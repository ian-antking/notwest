class CurrentAccount{
    constructor(openingDeposit = 0){
        this.balance = openingDeposit;
        this.statement = [];
    }

    deposit(amount){
        this.balance += amount;
        this.statement.push(`Deposited £${amount}`);
    };

    withdraw(amount){
        this.balance -= amount;
        this.statement.push(`Withdrew £${amount}`);
    };

    checkBalance(){
        return this.balance;
    };

    viewStatement(filter = 'all'){
        if(filter === 'in'){
            return this.statement.filter(event => event[0] === 'D');
        }else if(filter === 'out'){
            return this.statement.filter(event => event[0] === 'W');
        }else{
            return this.statement;
        };
    };
    
    printStatement(filter = 'all'){
        if(filter === 'in'){
            const filteredStatement = this.statement.filter(event => event[0] === 'D');
             return filteredStatement.map(even => console.log(event))
        }else if(filter === 'out'){
            const filteredStatement = this.statement.filter(event => event[0] === 'W');
             return filteredStatement.map(even => console.log(event))
        }else{
            return this.statement.map(event => console.log(event));
        };
    };
    
}

module.exports = CurrentAccount;

