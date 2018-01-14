/* global it, describe, afterEach */

const dataLib = require('./data')
const { expect } = require('chai')

const userName = 'tdd_user'
const userPwd = 'tdd_pwd'
const docmentKey = `Login_${userName}`

const modelData = {
  type: 'login',
  username: userName,
  pwd: userPwd,
  firstname: 'firstname',
  lastname: 'lastname',
  email: 'email',
}

describe('New user registration', () => {
  it('Should submit valid data for user registeration', () =>
    dataLib.Save(docmentKey, modelData).then((result) => {
      expect(result).to.include.keys('cas')
    }))
})

afterEach(() =>
  dataLib.Remove(docmentKey)
    .then((result) => {
      console.log('Test completed')
      console.log('Test data cleared from DB')
      console.log(result)
    }).catch((err) => {
      console.log(`Test data not found - ${err}`)
    }))
