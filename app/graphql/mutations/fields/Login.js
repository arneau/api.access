import {
  GraphQLInt,
  GraphQLNonNull,
  GraphQLString
} from 'graphql'

import LoginType from '../../types/Login'

import LoginModel from '../../../database/models/Login'

const LoginQueryField = {
  type: LoginType,
  args: {
    password: {
      type: new GraphQLNonNull(GraphQLString)
    },
    username: {
      type: new GraphQLNonNull(GraphQLString)
    },
    website: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: (root, args) => LoginModel.create(args)
}

export default LoginQueryField