Feature: Registra salida de monto
   Como un cliente de API WEB
   Requiero registrar un nuevo monto de salida

  Scenario: Registro de un salida
   Given Los siguientes datos monto 50  tipotransaccion 2
    When Preparo el JSON de los datos
    Then Hago un request POST hacia el url transacciones con los datos
    Then Recibo una respuesta con http status 200
 