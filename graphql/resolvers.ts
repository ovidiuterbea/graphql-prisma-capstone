import { DateTimeResolver } from "graphql-scalars";
import userService from "../services/UserService";
import roleService from "../services/RoleService";
import sessionService from "../services/SessionService";

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
  DateTime: DateTimeResolver,
};

export default resolvers;
