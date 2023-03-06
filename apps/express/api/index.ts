import express, { type Express } from "express";
import type { Logger } from "winston";
import LoggerService from "./logger";
import { Mount } from "./server";

export const port = process.env.PORT
  ? Number.parseInt(process.env.PORT, 10)
  : 3003;

export const server = new Mount<Express, Logger>(
  express(),
  LoggerService()
).mounting();

server.then(d => d.listen(port));
