import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./graphql/schema";
import resolvers from "./graphql/resolvers";

// server setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const start = async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`Server ready at: ${url}`);
};

start();

// async function main() {
//   //give user admin access
//   // const user = await userService.editUser(
//   //   "c5b6bfe0-6d0d-42e1-a772-99d7585f937a",
//   //   {
//   //     username: "oviEdited",
//   //     roles: ["555bc25d-4c57-4882-b0b6-f2750a2aeefb"],
//   //   }
//   // );
//   // get users
//   // const usersWithRoles = await prisma.user.findMany({
//   //   include: {
//   //     roles: {
//   //       select: {
//   //         id: true,
//   //         name: true,
//   //       },
//   //     },
//   //   },
//   // });
//   // console.log(usersWithRoles);
//   //adds a session
//   // const addedSession = await sessionService.addSession({
//   //   users: ["135467ec-af8a-434a-8d63-ed17b0c08de7"],
//   // });
//   // console.log(addedSession);
//   //delete session
//   // const deletedSession = await sessionService.deleteSession(
//   //   "538000d7-18f0-4ddf-a441-bb2a1c376233"
//   // );
//   // console.log(deletedSession);
//   //getSessionByIdWithoutUsers
//   // const session = await sessionService.getSessionByIdWithUsers(
//   //   "1a489c59-6369-4422-87bc-d389de9765a9"
//   // );
//   // console.log(session);
//   //getSessionById
//   const session = await sessionService.getSessionById(
//     "1a489c59-6369-4422-87bc-d389de9765a9"
//   );
//   console.log(session);
// }

// main()
//   .catch((e) => {
//     console.error(e.message);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
