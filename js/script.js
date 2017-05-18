$(function () {
  'use strict';
  
  var rsvpInfo =[];
  var rsvpName = $('#name').val();
  var rsvpAttend = $('#attend').val();
  var rsvpOption = $('#option').val();
  var rsvpPlus = $('#plus').val();
  var rsvpPhone = $('#phone').val();
  
  
  $('#submitBtn').on('click', addRow);
  $('#rsvpBtn').on('click', showForm);
  
  function addRow (evt) {
    var row = '<tr><td>' + rsvpName + '</td><td>' + rsvpAttend + '</td><td>' + rsvpOption + '</td><td>' + rsvpPlus + '</td><td>' + rsvpPhone + '</tr>';  
    $('#tableArea').append(row);
    $('#rsvpForm').hide();
    evt.preventDefault();
  }
  
  function showForm () {
    var rsvpName = $('#name').val('');
    var rsvpAttend = $('#attend').val('');
    var rsvpOption = $('#option').val('');
    var rsvpPlus = $('#plus').val('');
    var rsvpPhone = $('#phone').val('');
    $('#rsvpForm').show();
  }
  

});
  
  