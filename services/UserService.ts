import { AddUserInput, EditUserInput } from "../types/UserTypes";
import prisma from "../prisma/client";

const getUsers = async () => {
  const users = await prisma.user.findMany({
    include: {
      roles: true,
      session: true,
    },
  });
  return users;
};

const addUser = async (user: AddUserInput) => {
  const addedUser = await prisma.user.create({
    data: {
      username: user.username,
      email: user.email,
    },
  });
  return addedUser;
};

const editUser = async (userId: string, payload: EditUserInput) => {
  let editedUser;
  if (payload.roles) {
    const roles = payload.roles.map((role) => ({
      id: role,
    }));
    editedUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        username: payload.username,
        roles: {
          connect: roles,
        },
      },
    });
  } else {
    editedUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        username: payload.username,
      },
    });
  }
  return editedUser;
};

export default { addUser, editUser, getUsers };
