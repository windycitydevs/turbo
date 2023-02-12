import supertest from "supertest";
import { server } from "../index";

describe("server", () => {
  it("health check returns 200", async () => {
    await supertest((await server))
      .get("/healthz")
      .expect(200)
      .then(res => {
        expect(res.body.ok).toBe(true);
      });
  });

  it("message endpoint says hello", async () => {
    await supertest((await server))
      .get("/message/goodbye")
      .expect(200)
      .then(res => {
        expect(res.body).toEqual({ message: "hello goodbye" });
      });
  });
});
