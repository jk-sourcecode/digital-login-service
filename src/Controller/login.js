const model = require('../model/signup')
const couchbase = require('common/couchbase')
const { isEmpty } = require('lodash')

module.exports = {
  /**
   * Create new user
   * @param {any} req
   * @param {any} res
   */
  Register(req, res) {
    if (isEmpty(req.body)) { res.send('Failure: Invalid input') } else {
      const data = model.data(req)
      couchbase.Insert(`login_${req.body.username}`, data).then((result) => {
        res.send(result)
      }).catch((err) => {
        res.send(`Failure: ${err}`)
      })
    }
  },
  /**
   * Update profile
   * @param {any} req
   * @param {any} res
   */
  UpdateProfile(req, res) {
    if (isEmpty(req.body)) { res.send('Failure: Invalid input') } else {
      const data = model.data(req)
      couchbase.Upsert(`login_${req.body.username}`, data).then((result) => {
        res.send(result)
      }).catch((err) => {
        res.send(`Failure: ${err}`)
      })
    }
  },
  ValidateUser(req, res) {
    if (isEmpty(req.body)) { res.send('Failure: Invalid input') } else {
      const query = model.loginQuery(req)
      couchbase.ExecuteQuery(query).then((result) => {
        res.send(result)
      }).catch((err) => {
        res.send(`Failure: ${err}`)
      })
    }
  },
}
