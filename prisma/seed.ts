import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seed() {

  // cleanup the existing database
  await prisma.order.delete({where: {}}).catch(() => {
    // no worries if it doesn't exist yet
  });


  await prisma.order.create({
    data: {
      title: "Salami Pizza",
      notes: "Extra cheese pls!"
    },
  });

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
