const { setWorldConstructor } = require("cucumber");

class CustomWorld {
    constructor() {
        this.monto = 0;
        this.tipotransaccion = 1;
    }

    setMonto(number) {
        this.monto = number;
    }
    setTransaccion(number) {
        this.tipotransaccion = number;
    }

    getMonto() {
        return this.monto;
    }
    getTransaccion() {
        return this.tipotransaccion;
    }

}

setWorldConstructor(CustomWorld);