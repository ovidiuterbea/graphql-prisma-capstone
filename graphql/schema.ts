export const typeDefs = `#graphql
  type Role {
  id: ID!
  name: String!
  users: [User!]!
}

type User {
  id: ID!
  email: String!
  username: String!
  roles: [Role!]!
  session: Session
}

type Session {
  id: ID!
  createdAt: DateTime!
  users: [User!]!
}

type Query {
    users: [User]
    roles: [Role]
    sessions: [Session]
}

scalar DateTime
`;
