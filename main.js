const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient()

async function main() {
    console.log('start main')
    
    const result = await prisma.post.create({
        data:{
            title:"Hello World"
        }
    })
    console.log(result)
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

//   import { PrismaClient } from '@prisma/client'

// // Fetch all posts (in /pages/index.tsx)
// export async function getStaticProps() {
//   const prisma = new PrismaClient()
//   const posts = await prisma.post.findMany()
//   return {
//     props : { posts }
//   }
// }
