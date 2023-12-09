import { AddSessionInput } from "../types/ServicesTypes";
import prisma from "../prisma/client";

const addSession = (usersInput: AddSessionInput) => {
  const users = usersInput.users.map((user) => ({
    id: user,
  }));
  const addedSession = prisma.session.create({
    data: {
      users: {
        connect: users,
      },
    },
  });
  return addedSession;
};

export default { addSession };
