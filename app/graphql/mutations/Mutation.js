import {
  GraphQLObjectType
} from 'graphql'

import LoginField from './fields/Login'

const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    Login: LoginField
  }
})

export default MutationType