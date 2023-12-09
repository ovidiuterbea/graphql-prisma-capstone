import { AddUserInput } from "../types/UserTypes";
import prisma from "../prisma/client";

const addUser = async (user: AddUserInput) => {
  const addedUser = await prisma.user.create({
    data: {
      username: user.username,
      email: user.email,
    },
  });
  return addedUser;
};

export default { addUser };
