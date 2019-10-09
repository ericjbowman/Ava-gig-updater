'use strict'

const indexDisplay = require('./templates/index-gigs.handlebars')
const editGigs = require('./templates/edit-gigs.handlebars')
const events = require('./events.js')
const api = require('./api.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#recordings-page').hide()
  $('#calendar-page').hide()
  $('#contact-page').hide()
  $('#bio-page').hide()
  $('#students-page').hide()
  events.addHandlers()
  const blurbs = function () {
    setTimeout(function () {
      $('#blurb3').removeClass('disappear')
    }, 1000)
    setTimeout(function () {
      $('#spotify-player').removeClass('disappear')
      $('#blurb2').removeClass('disappear')
    }, 2000)
    setTimeout(function () {
      $('#blurb4').removeClass('disappear')
    }, 2500)
  }
  $(document).ready(function () {
    blurbs()
  })
  // setTimeout(function () {
  //   $('#spotify-player').removeClass('disappear')
  //   $('#blurb2').removeClass('disappear')
  // }, 1000)
  // setTimeout(function () {
  //   $('#blurb3').removeClass('disappear')
  // }, 2000)
  // setTimeout(function () {
  //   $('#blurb4').removeClass('disappear')
  // }, 2500)
  api.indexGigs()
    .then((responseData) => $('.gigs-container').html(indexDisplay({ gigs: responseData.gigs.reverse() })))
    // .then((responseData) => $('#signInSuccess').html(editGigs({ gigs: responseData.gigs.reverse() })))
    .then(() => {
      $('.calendar-loader').hide()
      $('.calendar-load').hide()
    })
    .catch(console.log)
})
