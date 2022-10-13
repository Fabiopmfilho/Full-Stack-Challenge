import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const create = async (ctx) => {
  const data = {
    name: ctx.request.body.name,
    usernames: ctx.request.body.usernames,
    email: ctx.request.body.email,
    password: ctx.request.body.password,
  };

  try {
    const user = await prisma.user.create({ data });
    ctx.body = user;
    ctx.status = 201;
    console.log("Created!");
  } catch (err) {
    ctx.body = err;
    ctx.status = 500;
    console.log(err);
  }
};

export const list = async (ctx) => {
  try {
    const users = await prisma.user.findMany();
    ctx.body = users
    ctx.status = 200
    console.log("Listed successful! ", ctx.body);
  } catch (err) {
    ctx.body = err;
    ctx.status = 500;
    console.log(err)
  }
}
