import {
  GraphQLObjectType
} from 'graphql'

import LoginField from './fields/Login'
import LoginsField from './fields/Logins'

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    Login: LoginField,
    Logins: LoginsField
  }
})

export default QueryType