/// <reference types="cypress" />

describe('Prueba de la API https://echo-serv.tbxnet.com/v1/test', () => {

  const apiUrl = 'https://echo-serv.tbxnet.com/v1/test';  // URL de la API

  it('Realizar una solicitud GET a /v1/test', () => {
    // Realizamos una solicitud GET
    cy.request('GET', apiUrl)
      .then((response) => {
        // Verificamos el código de estado de la respuesta
        expect(response.status).to.eq(200);  // Aseguramos que la respuesta sea exitosa (200 OK)

        // Verificamos el cuerpo de la respuesta (body)
        // Esto dependerá del formato y la estructura de la respuesta que la API devuelve
        // Aquí asumimos que la respuesta es un objeto o un JSON
        expect(response.body).to.be.an('object');  // Verifica que el cuerpo sea un objeto

        // Verificar que la propiedad "date" esté presente en el cuerpo de la respuesta
        expect(response.body).to.have.property('date');  // Verifica que "date" esté presente
        // Verificar que el valor de "date" sea una cadena de texto
        expect(response.body.date).to.be.a('string');  // Verifica que "date" sea un string

        // Verificamos los headers
        expect(response.headers).to.have.property('content-type');  // Verifica que 'content-type' esté presente
        expect(response.headers['content-type']).to.include('application/json');  // Verifica que sea de tipo JSON

      });
  });

});