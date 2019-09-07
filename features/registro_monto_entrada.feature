Feature: Registra ingreso de monto
   Como un cliente de API WEB
   Requiero registrar un nuevo monto de ingreso

  Scenario: Registro de un ingreso
   Given Los siguientes datos monto 100  tipotransaccion 1
    When Preparo el JSON de los datos
    Then Hago un request POST hacia el url transacciones con los datos
    Then Recibo una respuesta con http status 200
 