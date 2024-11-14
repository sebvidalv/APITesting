/// <reference types="cypress" />

describe('Prueba de la API https://echo-serv.tbxnet.com/v1/echo con error 404', () => {

    const apiUrl = 'https://echo-serv.tbxnet.com/v1/echo?randomawait=4&wait=1&errorCode=404';  // URL de la API con error 404
  
    it('Verificar error 404, texto "Not Found" y validación de headers', () => {
      cy.request({
        method: 'GET',
        url: apiUrl,
        failOnStatusCode: false  // No hacer que la prueba falle automáticamente si el código es 404
      }).then((response) => {
        // Verificar que el código de estado sea 404
        expect(response.status).to.eq(404);  // Esperamos que el código de estado sea 404
  
        // Verificar que el cuerpo de la respuesta contenga el texto "Not Found"
        expect(response.body).to.include('Not Found');  // Verificamos que el cuerpo contenga el texto "Not Found"
  
        // Verificar otros encabezados, como 'server', 'date', etc.
        expect(response.headers).to.have.property('date');  // Verifica que el header 'date' esté presente
        expect(response.headers['date']).to.not.be.empty;  // Verifica que el valor del header 'date' no esté vacío
  
        // Imprimir el cuerpo de la respuesta y los encabezados en los logs de Cypress para inspección
        cy.log('Cuerpo de la respuesta:', JSON.stringify(response.body, null, 2));
        cy.log('Encabezados de la respuesta:', JSON.stringify(response.headers, null, 2));
      });
    });
  
  });