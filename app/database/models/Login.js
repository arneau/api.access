import Sequelize from 'sequelize'

import Database from '../Database'

const LoginModel = Database.define('login', {
  password: {
    allowNull: false,
    type: Sequelize.STRING
  },
  username: {
    allowNull: false,
    type: Sequelize.STRING
  },
  website: {
    allowNull: false,
    type: Sequelize.STRING
  }
})

LoginModel.findById = (id) => {
  return LoginModel.find({
    where: {
      id
    }
  })
}
LoginModel.findAllByWebsite = (website) => {
  return LoginModel.findAll({
    where: {
      website
    }
  })
}

LoginModel.sync()

export default LoginModel