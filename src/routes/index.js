const loginController = require('../Controller/login')

module.exports = function (app) {
  app.route('/login/register').post(loginController.Register)
  app.route('/login/updateprofile').post(loginController.UpdateProfile)
  app.route('/login/validate').post(loginController.ValidateUser)
  app.get('/login/test', (req, res) => { res.json('testing') })
}
