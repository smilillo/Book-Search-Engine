const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Book {
        bookId: 
        authors: 
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
        savedBooks: 
    }

    type Query {
        me: [User]
    }

    type Mutation {
        login(

        ):
        addUser(

        ):
        saveBook(

        ):
        removeBook(bookId):
    }

    type Auth {
        
    }
`

module.exports = typeDefs;