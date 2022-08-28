import request from "supertest";
import app from "../src/app";

describe("Test app.ts", () => {
    test("Checking runtime", async () => {
        const res = await request(app).get("/");
        
        expect(res.status).toEqual(404)
    });
});