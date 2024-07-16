import user from "../fixtures/user.json";

describe('PetStore API tests', () => {

  it('Should create user', () => {
    cy.request("POST", "/user", user).then((response) => {
      expect(response.status).be.eql(200);
    })
  })
})