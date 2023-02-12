import express from "express";
import { Mount } from "./server";

export const port = process.env.PORT
  ? Number.parseInt(process.env.PORT, 10)
  : 3003;

export const server = new Mount(express()).mounting();

server.then(d => d.listen(port));
