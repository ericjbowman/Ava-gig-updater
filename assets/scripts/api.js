'use strict'

const config = require('./config')
const store = require('./store')

const indexGigs = () => {
  return $.ajax({
    url: config.apiUrl + '/gigs',
    method: 'GET'
  })
}

const createGig = (data) => {
  return $.ajax({
    url: config.apiUrl + '/gigs',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const updateGig = (data, gigId) => {
  return $.ajax({
    url: config.apiUrl + '/gigs/' + gigId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const deleteGig = (gigId) => {
  return $.ajax({
    url: config.apiUrl + '/gigs/' + gigId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

module.exports = {
  indexGigs,
  createGig,
  updateGig,
  deleteGig,
  signIn
}
