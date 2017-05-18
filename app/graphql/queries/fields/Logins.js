import {
  GraphQLList,
  GraphQLString
} from 'graphql'

import LoginType from '../../types/Login'

import LoginModel from '../../../database/models/Login'

const LoginsField = {
  type: new GraphQLList(LoginType),
  args: {
    website: {
      type: GraphQLString
    }
  },
  resolve: (root, args) => {
    if (args.website === undefined) {
      return LoginModel.findAll()
    } else if (args.website) {
      return LoginModel.findAllByWebsite(args.website)
    }
  }
}

export default LoginsField