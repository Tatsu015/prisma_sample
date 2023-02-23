const { PrismaClient } = require("@prisma/client");

async function create(){
    const prisma = new PrismaClient();
    await prisma.project.create({
        data:{
            tasks:{
                create:[
                    {name:"testproject1"},
                    {name:"testproject2"},
                ]
            },
            name:'testask'
        }
    })
}


function main(){
    create();
}

main()