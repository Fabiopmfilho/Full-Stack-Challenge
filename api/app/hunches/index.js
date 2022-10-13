import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const create = async (ctx) => {
  if (!ctx.request.body.homeTeamScore && !ctx.request.body.awayTeamScore) {
    ctx.status = 400;
    return;
  }

  const userId = "cl96hjzgc0000u3k8dnaso8i2";
  const { gameId } = ctx.request.body;
  const homeTeamScore = parseInt(ctx.request.body.homeTeamScore);
  const awayTeamScore = parseInt(ctx.request.body.awayTeamScore);

  try {
    const [hunch] = await prisma.hunch.findMany({
      where: { userId, gameId },
    });

    ctx.body = hunch
      ? await prisma.hunch.update({
          where: {
            id: hunch.id,
          },
          data: {
            homeTeamScore,
            awayTeamScore,
          },
        })
      : (ctx.body = await prisma.hunch.create({
          data: {
            userId,
            gameId,
            homeTeamScore,
            awayTeamScore,
          },
        }));
    console.log("Created!");
  } catch (err) {
    console.log(err);
    ctx.body = err;
    ctx.status = 500;
  }
};

export const list = async (ctx) => {
  try {
    const hunches = await prisma.hunches.findMany();
    ctx.body = hunches
    ctx.status = 200
    console.log("Listed successful! ", ctx.body);
  } catch (err) {
    ctx.body = err;
    ctx.status = 500;
    console.log(err)
  }
}