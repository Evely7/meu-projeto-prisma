import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
 const result = await prisma.courses.findMany({
 where: {
id: "cb47f262-0c4e-4a0f-a6e4-aac87292e499"
 },
 include: {
modules: true,
 },
});
//console.log(result);
console.log(JSON.stringify(result));
}
main();
