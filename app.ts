import prisma from "./prisma/client";
import roleService from "./services/RoleService";
import userService from "./services/UserService";
import sessionService from "./services/SessionService";

async function main() {
  //give user admin access
  // const user = await userService.editUser(
  //   "c5b6bfe0-6d0d-42e1-a772-99d7585f937a",
  //   {
  //     username: "oviEdited",
  //     roles: ["555bc25d-4c57-4882-b0b6-f2750a2aeefb"],
  //   }
  // );
  // get users
  // const usersWithRoles = await prisma.user.findMany({
  //   include: {
  //     roles: {
  //       select: {
  //         id: true,
  //         name: true,
  //       },
  //     },
  //   },
  // });
  //adds a session
  // const addedSession = await sessionService.addSession({
  //   users: ["135467ec-af8a-434a-8d63-ed17b0c08de7"],
  // });
  // console.log(addedSession);
  //delete session
  // const deletedSession = await sessionService.deleteSession(
  //   "538000d7-18f0-4ddf-a441-bb2a1c376233"
  // );
  // console.log(deletedSession);
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
