const server = require("../src/app");
const request = require("supertest");

afterEach(() => {
  server.close();
});

describe("routes: index", () => {
  test("should respond as expected", async () => {
    const response = await request(server).get("/hello");
    expect(response.status).toEqual(200);
    expect(response.type).toEqual("text/plain");
  });
});