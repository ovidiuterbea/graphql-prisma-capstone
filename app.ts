import prisma from "./prisma/client";
import roleService from "./services/RoleService";
import userService from "./services/UserService";

async function main() {
  const user = await userService.addUser({
    username: "ovi222",
    email: "ovi222@gmail.com",
  });
  console.log(user);
  const users = await prisma.user.findMany();
  console.log(users);
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
