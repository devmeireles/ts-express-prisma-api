import request from "supertest";
import app from "../src/app";

describe("Test user routes", () => {
    test("Checking runtime", async () => {
        const res = await request(app).get("/user");

        console.log(res.body);
        
        expect(res.status).toEqual(200)
        expect(res.body).toHaveProperty('data')
        expect(res.body.success).toEqual(true)
    });
});