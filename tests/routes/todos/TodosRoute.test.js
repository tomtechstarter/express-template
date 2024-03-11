const request = require("supertest");
const app = require("../../../src/server");

describe("GET /v1/todos/all", () => {
    test("responds with json", async () => {
        const response = await request(app)
            .get("/v1/todos/all")
            .expect("Content-Type", /json/)
            .expect(200);

        expect(response.body).toEqual([]);
    });
    describe("GET /v1/todos/byid", () => {
        test("responds with json for a specific todo", async () => {
            const todoId = '1';
            const response = await request(app)
                .get(`/v1/todos/byid/${todoId}`)
                .expect("Content-Type", /json/)
                .expect(200);


            const expectedResponse = { id: todoId, title: 'Test Todo', completed: false };
            expect(response.body).toEqual(expectedResponse);
        });
    });

});