const LoginPage = require("../pageobjects/loginpage");
const ViewAndEditPage = require("../pageobjects/viewandeditpage");

describe('Edit suit', () => {
    it('Edit client', async () => {
        await LoginPage.open();
        await LoginPage.doLogin('Admin', 'Admin@Navi');

        await ViewAndEditPage.doEdit('Go D.', 'marie', '03.05.2001', '996558645984', 'marie@gmail.com');
    })
})