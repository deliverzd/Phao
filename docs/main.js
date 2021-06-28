$(document).ready(function(){

 const settings = {

  "async": true,

  "crossDomain": true,

  "url": "https://covid19.th-stat.com/json/covid19v2/getTodayCases.json",

  "method": "GET"

 };

 

 $.ajax(settings).done(function(response) {

  $('#confirmed').text(response.Confirmed);

  $('#recovered').text(response.Recovered);

  $('#hospitalized').text(response.Hospitalized);

  $('#deaths').text(response.Deaths);

 }).fali(function(){

  let failtext = "ขออภัย,ไม่สามารถเเสดงผลได้";

  $('#confirmed').text(failtext);

  $('#recovered').text(failtext);

  $('#hospitalized').text(failtext);

  $('#deaths').text(failtext);

 });

});







