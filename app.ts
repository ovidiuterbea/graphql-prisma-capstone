import prisma from "./prisma/client";
import roleService from "./services/RoleService";

async function main() {
  const roles = await roleService.getRoles();
  console.log(roles);
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
