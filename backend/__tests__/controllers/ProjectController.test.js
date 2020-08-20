const request = require("supertest");

const API_URL = "http://localhost:3333";

describe("Project controller", () => {
  it("should be able to list all projects on application", () => {
    request(API_URL)
      .get("/projects")
      .set("Accept", "application/json")
      .expect(200)
      .then((response) => {
        expect(response.body.length).toBe(0);
      });
  });

  it("should be able to create a new project", () => {
    const project = {
      title: "teste",
      owner: "teste",
    };

    request(API_URL)
      .post("/projects")
      .send(project)
      .set("Accept", "application/json")
      .expect(201)
      .then((response) => {
        expect(response.body.title).toBe(project.title);
        expect(response.body.owner).toBe(project.owner);
      });
  });

  it("should be able to update a project", () => {
    const project = {
      title: "teste",
      owner: "teste",
    };

    request(API_URL)
      .post("/projects")
      .send(project)
      .expect(201)
      .then((response) => {
        request(API_URL)
          .put(`/projects/${response.body.id}`)
          .send({
            title: "alterado",
            owner: "alterado",
          })
          .then((response) => {
            expect(response.body.title).toBe("alterado");
          });
      });
  });

  it("should be able to delete an project", () => {
    const project = {
      title: "teste",
      owner: "teste",
    };

    request(API_URL)
      .post("/projects")
      .send(project)
      .expect(201)
      .then((response) => {
        request(API_URL).delete(`/projects/${response.body.id}`).expect(204);
      });
  });
});
