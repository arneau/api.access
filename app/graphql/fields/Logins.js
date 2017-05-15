import {
  GraphQLList,
  GraphQLString
} from 'graphql'

import LoginType from '../types/Login'

import LoginModel from '../../database/models/Login'

const LoginsField = {
  type: new GraphQLList(LoginType),
  args: {
    website: {
      type: GraphQLString
    }
  },
  resolve: (root, args) => {
    if (!args.website) {
      return LoginModel.findAll()
    } else if (args.website) {
      let website = args.website
      return LoginModel.findAllByWebsite(website)
    }
  }
}

export default LoginsField