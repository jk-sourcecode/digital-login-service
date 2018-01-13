/* global it, describe */

const chai = require('chai')
const chaiHttp = require('chai-http')

const should = chai.should()

chai.use(chaiHttp)

const server = 'http://localhost:5050'

describe('/Get Testing', () => {
  it('Should return test message', (done) => {
    chai.request(server)
      .get('/login/test')
      .end((err, result) => {
        result.should.have.status(200)
        result.body.should.be.eql('testing')
        done()
      })
  })
})

describe('/POST Register', () => {
  it('Should not POST invalid data for user registeration', (done) => {
    const signup = {
      type: 'login',
      username: 'user1',
      pwd: 'pwd1',
      firstname: 'firstname',
      lastname: 'lastname',
      email: 'email',
    }

    chai.request(server)
      .post('/login/register')
      .send(signup)
      .end((err, result) => {
        result.should.have.status(200)
        done()
      })
  })
})
