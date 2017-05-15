import {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString
} from 'graphql'

const LoginType = new GraphQLObjectType({
  name: 'Login',
  fields: () => ({
    id: {
      type: GraphQLInt
    },
    password: {
      type: GraphQLString
    },
    username: {
      type: GraphQLString
    },
    website: {
      type: GraphQLString
    }
  })
})

export default LoginType