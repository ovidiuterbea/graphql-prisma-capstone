import { Role } from "@prisma/client";

export type AddUserInput = {
  email: string;
  username: string;
};

export type EditUserInput = {
  username: string;
  roles?: string[];
};
