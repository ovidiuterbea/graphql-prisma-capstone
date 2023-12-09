import prisma from "./prisma/client";
import roleService from "./services/RoleService";

async function main() {
  const role = await roleService.addRole("ADMIN");
  console.log(role);
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
