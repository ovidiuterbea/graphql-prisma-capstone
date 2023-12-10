import { DateTimeResolver } from "graphql-scalars";
import userService from "../services/UserService";
import roleService from "../services/RoleService";
import sessionService from "../services/SessionService";
import { EditUserInput } from "../types/UserTypes";
import { User } from "@prisma/client";

const resolvers = {
  Query: {
    users() {
      return userService.getUsers();
    },
    roles() {
      return roleService.getRoles();
    },
    sessions() {
      return sessionService.getSessions();
    },
  },
  Mutation: {
    addRole(_: undefined, args: { name: string }) {
      return roleService.addRole(args.name);
    },
    editRole(
      _: undefined,
      args: { editRoleInput: { id: string; name: string } }
    ) {
      return roleService.editRole(
        args.editRoleInput.id,
        args.editRoleInput.name
      );
    },
    deleteRole(_: undefined, args: { id: string }) {
      return roleService.deleteRole(args.id);
    },
    editUser(
      _: undefined,
      args: { id: string; payload: { username: string; roles: string[] } }
    ) {
      return userService.editUser(args.id, args.payload);
    },
  },
  DateTime: DateTimeResolver,
};

export default resolvers;
