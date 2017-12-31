module.exports = {
  data(req) {
    return {
      type: 'login',
      username: req.body.username,
      pwd: req.body.password,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
    }
  },
  loginQuery(req) {
    return `SELECT firstname,lastname,username,email FROM wallet WHERE type='login' AND username='${req.body.username}' and pwd='${req.body.pwd}'`
  },
}
