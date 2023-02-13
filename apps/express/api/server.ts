import bp from "body-parser";
import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import express, { static as eStatic } from "express";
import fs from "fs";
import morgan from "morgan";
import { join } from "path";

export class Mount<T extends express.Application = express.Application> {
  constructor(private app: T) {}

  protected logger() {
    return fs.createWriteStream(join(process.cwd(), "api.log"), {
      flags: "a"
    });
  }

  protected internals(app: T, writeStream: fs.WriteStream) {
    app
      .get("/message/:name", (req, res) => {
        return res.json({ message: `hello ${req.params.name}` });
      })
      .get("/healthz", (_req, res) => {
        return res.json({ ok: true });
      });
    return app
      .use(compression())
      .use(cookieParser())
      .use(
        cors({
          methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,SPECIAL",
          maxAge: 60,
          origin: "*",
          allowedHeaders: [
            "Access-Control-Allow-Methods",
            "Access-Control-Expose-Headers",
            "access-control-allow-headers",
            "Access-Control-Allow-Origin",
            "Origin",
            "X-Requested-With",
            "Content-Type",
            "Accept",
            "Authorization",
            "Cache-Control",
            "Vary",
            "X-Auth",
            "Content-Length",
            "Cookie",
            "Accept-Encoding",
            "Transfer-Encoding",
            "Connection",
            "Referrer",
            "Referrer-Policy",
            "X-Csrf-Token",
            "Woocommerce-Session",
            "Accept-Charset",
            "Forwarded",
            "Host",
            "From",
            "ETag",
            "Retry-After",
            "Server",
            "Set-Cookie",
            "Trailer",
            "User-Agent",
            "Upgrade",
            "X-XSS-Protection",
            "Upgrade-Insecure-Requests",
            "Session",
            "authorization"
          ],
          credentials: true,
          exposedHeaders: ["*", "authorization", "Authorization"],
          optionsSuccessStatus: 204,
          preflightContinue: false
        })
      )
      .disable("x-powered-by")
      .use(morgan("dev", { stream: writeStream }))
      .use(bp.urlencoded({ extended: true }))
      .use(
        eStatic(join(process.cwd(), "/public"), {
          index: ["index.html"]
        })
      );
  }

  public async mounting() {
    return this.internals(this.app, this.logger());
  }
}
