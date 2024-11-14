/// <reference types="cypress" />

describe('Pruebas de API con Cypress', () => {
  
  const apiUrl = 'https://echo-serv.tbxnet.com/v1';  // URL de la API

  it('GET /todos/1 - Verificar que el campo "title" sea de tipo string', () => {
    cy.request('GET', apiUrl)  // Realizamos una solicitud GET
      .then((response) => {
        // Verificar el código de estado sea 200
        expect(response.status).to.eq(200);  // Asegurar que el código de estado sea 200 (OK)

        // Verificar que el campo 'title' sea de tipo string
        expect(response.body.title).to.be.a('string');  // Verificamos que 'title' sea un string

        // Opcional: Verificar que el campo 'title' tenga un valor específico
        expect(response.body.title).to.eq('Rest API');  // Compara el valor de 'title'

        // Verificar que el tiempo de respuesta esté dentro de un límite razonable (por ejemplo, < 3000ms)
        expect(response.duration).to.be.lessThan(3000);  // Tiempo de respuesta menor a 3000ms

        // Verificar que el header 'Content-Type' esté presente
        expect(response.headers).to.have.property('content-type');
        
        // Verificar que el 'Content-Type' sea 'application/json' (si la API devuelve JSON)
        expect(response.headers['content-type']).to.include('application/json');

        // Verificar headers, por ejemplo, 'x-ratelimit-limit'
        // Verificamos si el header 'x-ratelimit-limit' está presente
        if (response.headers['x-ratelimit-limit']) {
          expect(response.headers['x-ratelimit-limit']).to.be.a('string');
        }        

        
      });
  });

});