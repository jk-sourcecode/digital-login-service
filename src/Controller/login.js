const model = require('../model/signup')
const data = require('../lib/data')
const { isEmpty } = require('lodash')

module.exports = {
  /**
   * Create new user
   * @param {any} req
   * @param {any} res
   */
  Register(req, res) {
    if (isEmpty(req.body)) { res.json('Failure: Invalid input') } else {
      const userData = model.data(req)
      data.Save(`login_${req.body.username}`, userData)
        .then((result) => {
          res.json(result)
        }).catch((err) => {
          res.json(`Failure: ${err}`)
        })
    }
  },
  /**
   * Update profile
   * @param {any} req
   * @param {any} res
   */
  UpdateProfile(req, res) {
    if (isEmpty(req.body)) { res.json('Failure: Invalid input') } else {
      const userData = model.data(req)
      data.Update(`login_${req.body.username}`, userData)
        .then((result) => {
          res.json(result)
        }).catch((err) => {
          res.json(`Failure: ${err}`)
        })
    }
  },
  ValidateUser(req, res) {
    if (isEmpty(req.body)) { res.json('Failure: Invalid input') } else {
      const query = model.loginQuery(req)
      data.Select(query).then((result) => {
        res.json(result)
      }).catch((err) => {
        res.json(`Failure: ${err}`)
      })
    }
  },
}
