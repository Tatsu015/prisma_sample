const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient()

async function main() {
    console.log('start main')
    
    await prisma.user.create({
        data:{
            email:"alice@prisma.io"
        }
    })
    const users = await prisma.user.findMany()
    console.log(users);
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
