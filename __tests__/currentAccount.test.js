const CurrentAccount = require('../src/main.js');

describe('Current Account construction', () => {
    it('Creates a new current account object for a customer', () => {
        johnSmith = new CurrentAccount();
        expect(johnSmith).toEqual(expect.anything());
    });
    it('Creates a new current account object with a balance equal to the initial deposit.', () => {
        johnsmith = new CurrentAccount(500);
        expect(johnsmith.balance).toEqual(500);
    });
    it('Creates a new current account object with a balance of 0 if no initial deposit.', () =>{
        johnsmith = new CurrentAccount();
        expect(johnsmith.balance).toEqual(0);
    });
});

describe('Current Account Methods', () => {
    it('Deposit method adds to account balance', () => {
        johnsmith = new CurrentAccount();
        johnsmith.deposit(5000);
        expect(johnsmith.balance).toEqual(5000);
    });
    it('Withdraw method subtracts from the account balance', () => {
        johnsmith = new CurrentAccount(10000);
        johnsmith.withdraw(5000);
        expect(johnsmith.balance).toEqual(5000);
    });
    it('checkBalance method returns account.balance', () => {
        johnsmith = new CurrentAccount(10000);
         const balance = johnsmith.checkBalance();
        expect(balance).toEqual(balance);
    });
    it('account.statement property is a list of transactions on account', () => {
        johnSmith = new CurrentAccount();
        johnSmith.deposit(100);
        johnSmith.withdraw(100);
        expect(johnSmith.statement).toEqual(['Deposited £100', 'Withdrew £100']);
    });
    it('viewStatement function returns statement as a list of transactions', () => {
        johnSmith = new CurrentAccount();
        johnSmith.deposit(100);
        johnSmith.withdraw(100);
        expect(johnSmith.viewStatement()).toEqual(['Deposited £100', 'Withdrew £100']);
    });
    it('viewStatement function can be filtered by money in or money out', () => {
        johnSmith = new CurrentAccount();
        johnSmith.deposit(100);
        johnSmith.withdraw(100);
        expect(johnSmith.viewStatement('all')).toEqual(['Deposited £100', 'Withdrew £100']);
        expect(johnSmith.viewStatement('in')).toEqual(['Deposited £100']);
        expect(johnSmith.viewStatement('out')).toEqual(['Withdrew £100']);
    });
});