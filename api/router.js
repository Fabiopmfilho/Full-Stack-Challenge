import Router from "@koa/router";
import { PrismaClient } from '@prisma/client'

export const router = new Router();

const users = [];
const prisma = new PrismaClient()

router.get("/", async (ctx) => {
  ctx.body = { Hello: "World!" };
});

router.get("/users", async (ctx) => {
  ctx.body = [];
});

router.post("/users", async (ctx) => {
  const user = {
    username: ctx.request.body.username,
  };

  users.push(user);

  ctx.body = user;
});
