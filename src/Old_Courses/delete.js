import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.coursesModules.delete({
        where: {
            id: "86d37e3a-381c-42fe-ba7d-c1b2368cd289",
        },
    });

  console.log(result);
}

main();