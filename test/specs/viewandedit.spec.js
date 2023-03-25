const LoginPage = require("../pageobjects/LoginPage");
const ViewAndEditPage = require("../pageobjects/ViewAndEditPage");

describe('Edit suit', () => {
    it('Edit client', async () => {
        await LoginPage.open();
        await LoginPage.doLogin('Admin', 'Admin@Navi');

        await ViewAndEditPage.doEdit('Ann', 'Marie', '03.05.2001', '996558645984', 'marie@gmail.com');
    })
})
