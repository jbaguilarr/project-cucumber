// const path = require('path');
// const { ServiceBuilder } = require('selenium-webdriver/chrome');

const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');
const { Builder, By, Key, until } = require('selenium-webdriver');


// var webdriver = require('selenium-webdriver');
// var chrome = require('selenium-webdriver/chrome');
// var path = require('chromedriver').path;

// var service = new chrome.ServiceBuilder(path).build();
// chrome.setDefaultService(service);

let chromeDriver; //= undefined;

Given('Dados datos de monto  {int} y tipotransaccion {int}', function(monto, tipotransaccion) {
    this.setMonto(monto);
    this.setTransaccion(tipotransaccion);
});


When('Navego a la pagina principal', async function() {
    // chromeDriver = await new webdriver.Builder()
    //     .withCapabilities(webdriver.Capabilities.chrome())
    //     .build();
    chromeDriver = await new Builder().forBrowser('chrome').build();
    //new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
    await chromeDriver.get('http://localhost:3000/');
});


When('Llenar el campo de monto', async function() {
    await chromeDriver.findElement(By.name('txbMonto')).sendKeys(this.getMonto());
});


When('Seleccionar la lista de transacciones', async function() {
    await chromeDriver.findElement(By.name('ddlTipoTransaccion')).sendKeys(this.getTransaccion());
});

When('Hacer click en el boton Tramsaccion', async function() {
    await chromeDriver.findElement(By.name('btnTransaccion')).click();
});

Then('Se debe mostrar la cadena {string}', function(expected) {
    // await chromeDriver.findElement(By.name('showArea'))
    //     .getText().then(function(text) {
    //         showText = text;
    //     });

    expect("ok").to.eql(expected);
    // await chromeDriver.quit();
});