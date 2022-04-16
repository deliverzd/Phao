$(document).ready(function(){
 const settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://covid19.ddc.moph.go.th/api/Cases/today-cases-all",
  "method": "GET",
 };
 
 $.ajax(settings).done(function(response) {
  $('#confirmed').text(response.Confirmed);
  $('#recovered').text(response.Recovered);
  $('#hospitalized').text(response.Hospitalized);
  $('#deaths').text(response.Deaths);
 });
});
