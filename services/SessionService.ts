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

const deleteSession = async (sessionId: string) => {
  const deletedSession = await prisma.session.delete({
    where: {
      id: sessionId,
    },
  });
  return deletedSession;
};

const getSessionByIdWithUsers = async (sessionId: string) => {
  const session = await prisma.session.findFirst({
    where: {
      id: sessionId,
    },
    select: {
      id: true,
      createdAt: true,
    },
  });
  return session;
};

export default { addSession, deleteSession, getSessionByIdWithUsers };
