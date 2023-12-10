import { AddSessionInput } from "../types/ServicesTypes";
import prisma from "../prisma/client";

const getSessions = async () => {
  const sessions = await prisma.session.findMany();
  return sessions;
};

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

const getSessionById = async (sessionId: string) => {
  const session = await prisma.session.findFirst({
    where: {
      id: sessionId,
    },
    include: {
      users: {
        include: {
          roles: true,
        },
      },
    },
  });
  return session;
};

export default {
  getSessions,
  addSession,
  deleteSession,
  getSessionByIdWithUsers,
  getSessionById,
};
