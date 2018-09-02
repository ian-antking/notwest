const CurrentAccount = require('../src/main.js');

describe('Current Account', () => {
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