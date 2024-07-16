import user from "../fixtures/user.json";
import updatedUser from "../fixtures/user-update.json";

describe('PetStore API tests', () => {

  it('Should create user', () => {
    cy.request("POST", "/user", user).then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).be.eql(200);
    });

    cy.request("GET",`/user/${user.username}`,).then((response) => {
    cy.log(JSON.stringify(response.body));
    expect(response.status).be.eql(200);
    expect(response.body).be.eql(user);
    });
  });

  it('Should update user', () => {
    cy.request("POST", "/user", user).then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).be.eql(200);
    });

    cy.request("PUT", `/user/${user.username}`, updatedUser).then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).be.eql(200);
    });

    cy.request("GET",`/user/${updatedUser.username}`).then((response) => {
    cy.log(JSON.stringify(response.body));
    expect(response.status).be.eql(200);
    expect(response.body).be.eql(updatedUser);
    });
  });

});