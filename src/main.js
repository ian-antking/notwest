class CurrentAccount{
    constructor(openingDeposit){
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

    viewStatement(){
        this.statement.map(event => console.log(event));
    };
    
}

module.exports = CurrentAccount;

