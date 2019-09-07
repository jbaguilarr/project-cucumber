Feature: Mostrar las transacciones
 Como Usuario Final
 Quiero ver las transacciones de la billetera

 Scenario: Se tiene datos validos y se muestran correctamente
  Given Dados datos de monto  100 y tipotransaccion 1
   When Navego a la pagina principal 
     And Llenar el campo de monto
     And Seleccionar la lista de transacciones
     And Hacer click en el boton Tramsaccion
     Then Se debe mostrar la cadena "ok"