const { PrismaClient } = require("@prisma/client");

async function create(){
    const prisma = new PrismaClient();
    await prisma.task.create({
      data: {
        name: "test1",
      },
    });
    console.log('created!')
}


function main(){
    create();
}

main()