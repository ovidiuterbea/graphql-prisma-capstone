import prisma from "./prisma/client";
import roleService from "./services/RoleService";
import userService from "./services/UserService";

async function main() {
  //give user admin access
  const user = await userService.editUser(
    "c5b6bfe0-6d0d-42e1-a772-99d7585f937a",
    {
      username: "oviEdited",
      roles: ["555bc25d-4c57-4882-b0b6-f2750a2aeefb"],
    }
  );
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
  // console.log(usersWithRoles);
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
