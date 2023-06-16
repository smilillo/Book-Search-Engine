const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Book {
        bookId: String!
        authors: []
        description: String!
        title: String!
        image:
        link:
    }

    type User {
        _id: ID!
        username: String!
        email: String!
        bookCount: Int
        savedBooks: []
    }

    type Query {
        me: [User]
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(): User
        removeBook(bookId: ): User
    }

    type Auth {
        token: ID!
        user: User
    }
`

module.exports = typeDefs;