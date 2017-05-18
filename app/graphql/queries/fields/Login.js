import {
  GraphQLInt,
  GraphQLNonNull
} from 'graphql'

import LoginType from '../../types/Login'

import LoginModel from '../../../database/models/Login'

const LoginField = {
  type: LoginType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLInt)
    }
  },
  resolve: (root, args) => LoginModel.findById(args.id)
}

export default LoginField