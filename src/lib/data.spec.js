/* global it, describe */

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

const selectQuery = `SELECT firstname,lastname,username,email FROM wallet WHERE type='login' AND username='${userName}' and pwd='${userPwd}'`

describe('Create User', () => {
  it('Should submit valid data to create user', () =>
    dataLib.Save(docmentKey, modelData).then((result) => {
      expect(result).to.include.keys('cas')
    }))
})

describe('Update User', () => {
  it('Should submit valid data to update existing user', () =>
    dataLib.Update(docmentKey, modelData).then((result) => {
      expect(result).to.include.keys('cas')
    }))
})

describe('Validate User', () => {
  it('Should submit valid data to update existing user', () =>
    dataLib.Select(selectQuery).then((result) => {
      expect(result).to.include.keys('cas')
    }))
})

describe('Remove User', () => {
  it('Should submit valid document id to delete user', () =>
    dataLib.Remove(docmentKey).then((result) => {
      expect(result).to.include.keys('cas')
    }))
})

