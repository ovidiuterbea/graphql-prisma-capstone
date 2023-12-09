import prisma from "../prisma/client";

const addRole = async (name: string) => {
  const role = await prisma.role.create({
    data: {
      name,
    },
  });
  return role;
};

const getRoles = async () => {
  const roles = await prisma.role.findMany();
  return roles;
};

export default { addRole, getRoles };
