const CurrentAccount = require('../src/main.js');

describe('Current Account construction', () => {
    const johnSmith = new CurrentAccount();
    const sarahJaneSmith = new CurrentAccount(500);
    it('Creates a new current account object for a customer', () => {
        expect(johnSmith).toEqual(expect.anything());
    });
    it('Creates a new current account object with a balance equal to the initial deposit.', () => {
        expect(sarahJaneSmith.balance).toEqual(500);
    });
    it('Creates a new current account object with a balance of 0 if no initial deposit.', () =>{
        expect(johnSmith.balance).toEqual(0);
    });
});

describe('Current Account Methods', () => {
    const johnSmith = new CurrentAccount();
    johnSmith.deposit(5000);
    it('Deposit method adds to account balance', () => {
        expect(johnSmith.balance).toEqual(5000);
    });
    it('Withdraw method subtracts from the account balance', () => {
        johnSmith.withdraw(5000);
        expect(johnSmith.balance).toEqual(0);
    });
    it('checkBalance method returns account.balance', () => {
        johnSmith.deposit(5000)
        const balance = johnSmith.checkBalance();
        expect(balance).toEqual(5000);
    });
    const expectedStatement = ['Deposited £5000', 'Withdrew £5000', 'Deposited £5000'];
    it('account.statement property is a list of transactions on account', () => {
        expect(johnSmith.statement).toEqual(expectedStatement);
    });
    it('viewStatement function returns statement as a list of transactions', () => {
        expect(johnSmith.viewStatement()).toEqual(expectedStatement);
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