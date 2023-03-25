describe("Clients suit", ()=>{
    afterEach(async)
    it("Create client", async ()=>{
        await browser.url('http://167.114.201.175:5000/login'); 
        await browser.pause(5000);
        const loginField = await $('input[name="userName"]');
        await loginField.setValue("Admin");
        const passwordField = await $('input.password');
        await passwordField.setValue("Admin@Navi");
        await $('button[type="submit"]').click();
        await browser.pause(10000);

        await $('clients-add-user-dialog').click();
        await browser.pause(5000);

        const lastName = await $ ('input[clients-add-user-dialog]');
        await lastName.setValue('Sultanov')

        const phoneNumberField = await $('input[formcontrolname="phone"]');
        await phoneNumberField.setValue('+996777180027');

        const datebirthField = await $('input[formcontrolname="birthday"]');
        await datebirthField.setValue('05.07.1999');

        const setButton = await $('button[name="save"]');
        await setButton.setButton.click();
        await browser.pause(5000);
        
        await browser.acceptAlert();
        await browser.pause(5000);
    })
})