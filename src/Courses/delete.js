import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.delete({
        where: {
            id: "1",
        },
    });

  console.log(result);
}

main();