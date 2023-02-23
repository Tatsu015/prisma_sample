const { PrismaClient } = require("@prisma/client");

async function create(){
    const prisma = new PrismaClient();
    // let task = await prisma.task.create({
    //   data: {
    //     name: "test1",
    //   },
    // });
    // console.log('created!')

    await prisma.task.create({
        data:{
            project:{
                create:{
                    name:"testproject",
                }
            },
            name:'testask'
        }
    })
}


function main(){
    create();
}

main()