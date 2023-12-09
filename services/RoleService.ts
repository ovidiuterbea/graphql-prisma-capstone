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

const editRole = async (roleId: string, name: string) => {
  const updatedRole = prisma.role.update({
    data: {
      name,
    },
    where: {
      id: roleId,
    },
  });
  return updatedRole;
};

export default { addRole, getRoles, editRole };
