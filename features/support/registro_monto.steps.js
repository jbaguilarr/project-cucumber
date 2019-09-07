const { Given, When, Then } = require('cucumber')
const { expect } = require('chai')
const httpClient = require('request-promise')

let newTransaccion = {};
let httpOptions = {};
let result = undefined;
Given('Los siguientes datos monto {int}  tipotransaccion {int}', function(monto, tipotransaccion) {
    newTransaccion = {
        monto: monto,
        tipotransaccion: tipotransaccion
    };
});

When('Preparo el JSON de los datos', function() {

    httpOptions = {
        method: 'POST',
        uri: 'http://localhost:3000/guardar',
        json: true,
        body: newTransaccion,
        resolveWithFullResponse: true
    };
});

Then('Hago un request POST hacia el url transacciones con los datos', async function() {
    await httpClient(httpOptions)
        .then(function(response) {
            result = response;
        })
        .catch(function(error) {
            result = error;
        });
});

Then('Recibo una respuesta con http status {int}', function(httpStatus) {
    console.log(httpStatus);
    expect(result.statusCode).to.eql(httpStatus);
});