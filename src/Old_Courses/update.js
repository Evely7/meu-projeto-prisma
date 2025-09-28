import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.update({
        where: { id: "a320a5fe-75cf-4cdd-a240-c469692ecd13" },
        data: {
            duration: 1000,
            name: "Curso de Java na Unitins",
            description: "Curso preparatório  para certificação Java",
        },
    });

  console.log(result);
}

main();