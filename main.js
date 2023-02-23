const { PrismaClient } = require("@prisma/client");
const moment = require('moment');

async function create(){
    const prisma = new PrismaClient();
    const currentTime = moment();

    await prisma.project.create({
        data:{
            tasks:{
                create:[
                    {name:currentTime.format("YYYYMMDDHHmmss")},
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