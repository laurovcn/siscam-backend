// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.user.create({
    data: {
      name: 'lvneto',
      cpf: 'cpf',
      department: 'department',
      email: 'email@email',
      inscription: 'iscription',
      password: 'password',
      phone: 'phone',
    },
  });

  console.log({ user1 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
