import { BodyRequest } from "../../main/api/dto/BodyRequest";

describe('Methods', () => {

    it('Reach the end point using GET method', () => {
      var response = cy.request("GET","https://www.httpbin.org/get")
      console.log(response.log.body);
      response.should((response) => { expect(response.status).to.eq(200);});
      response.then ((response) => {
        expect(response.body).to.have.property("url")
        cy.wrap(response.body.url).as("url")
      });
    });
  
    it('Reach the end point using POST method', () => {
      var response = cy.request("POST","https://www.httpbin.org/post")
      response.should((response) => { expect(response.status).to.eq(200)});
      response.then ((response) => {
        expect(response.body).to.have.property("url")
        cy.wrap(response.body.url).as("url")
      });
    });
  
    it('Reach the end point using PUT method', () => {
      var response = cy.request("PUT","https://www.httpbin.org/put",)
      response.should((response) => { expect(response.status).to.eq(200);});
      response.then ((response) => {
        expect(response.body).to.have.property("url")
        cy.wrap(response.body.url).as("url")
      });
    });
  
    it('Reach the end point using PATCH method', () => {
      var response = cy.request("PATCH","https://www.httpbin.org/patch")
      response.should((response) => { expect(response.status).to.eq(200);});
      response.then ((response) => {
        expect(response.body).to.have.property("url")
        cy.wrap(response.body.url).as("url")
      });
    });
  
    it('Reach the end point using DELETE method', () => {
      var response = cy.request("DELETE","https://www.httpbin.org/delete")
      response.should((response) => { expect(response.status).to.eq(200);});
      response.then ((response) => {
        expect(response.body).to.have.property("url")
        cy.wrap(response.body.url).as("url")
      });
    });

    it('Reach the ANYTHING end point using GET method', () => {
      var bodyReq = new BodyRequest("Jhon","Doe",33)
      var response = cy.request("GET","https://www.httpbin.org/anything",bodyReq)
      response.should((response) => { expect(response.status).to.eq(200);});
      response.then ((response) => {
        cy.wrap(response.body.json.name).as("name")
        expect(response.body.json.name).to.eq(bodyReq.name)
      });
    });
  
  })
  