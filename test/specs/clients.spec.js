const LoginPage = require( "../pageobjects/LoginPage");


describe('Clients Suit', ()=> {
    beforeEach( async() => {
        await LoginPage.open();
        await LoginPage.doLogin('Admin', 'Admin@Navi')
    })

    afterEach( async()=>{
        await browser.reloadSession();
    })

    it('Create client', async ()=> {
        // здесь идет создание клиента
        await $('button.clients-add-user-dialog').click();
        await browser.pause(5000);

        // проверка что форма регистрации клиента открылась
        const userForm = await $('div.add-user-modal form');
        await expect(userForm).toExist();

        // далее в поля формы ввожу данные
        const surnameField = await $('input[formcontrolname="userSurname"]');
        await surnameField.setValue('Pottuh');

        const firstnameField = await $('input[formcontrolname="userName"]');
        await firstnameField.setValue('Haary');

        const maleOptionRadio = await $('mat-radio-group mat-radio-button:nth-child(1) div[class="mat-radio-label-content"]');
        await maleOptionRadio.click();

        const emailField = await $('input[formcontrolname="email"]');
        await emailField.setValue('haary.pottuh@gmail.com');

        const phoneNumberField = await $('input[formcontrolname="phone"]');
        await phoneNumberField.setValue('996765390601');

        const datebirthField = await $('input[formcontrolname="birthday"]');
        await datebirthField.setValue('12.12.2001');

        const saveButton = await $('button[name="save"]');
        await saveButton.click();
        await browser.pause(10000);

        // принять алерт 
        await browser.acceptAlert();
        await browser.pause(5000);
    })

    it('Open to read', async() => {
    })
})
