

  const year = $("#year").val()
  const month = $("#month").val()
  const day = parseInt($("#day").val())
  let startDate = `${year}-${month}-${day}`
  let endDate = `${year}-${month}-${day + 1}`

$("#search-button").click(function() {
  
  console.log(month)
  searchSomething()
});

function searchSomething() {
  $.ajax({
  method: 'GET', //use GET because we are READING data.
 
  url: "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson" + '&starttime=' + startDate + '&endtime=' + endDate,
  //tell AJAX what url has the JSON we want
  dataType: 'json', //tell AJAX that its JSON format we want
  success: onSuccess, // If AJAX is successful, fire a function called onSuccess
  error: onError // if it isn’t successful, fire a function called onError, so we can stress eat chocolate chip cookies and then try again.
  }) // close that AJAX function called by JQuery
}


function onSuccess(jsonReturn) {
  console.log(jsonReturn.features[0].properties.place)

  
    // var quake = jsonReturn.features[i]
    var location = jsonReturn.features[0].properties.place
    var info = jsonReturn.features[0].properties.detail
    var loadName = `<h2>you were born ${startDate}?? ${location} is quaking.</h2><br>`
    $("#gallery").empty()
    $(loadName).appendTo($("#gallery"))

}

function onError() {
  var loadName = `<h2>i failed.</h2>`
  $(loadName).appendTo($("#gallery"))
}
  
  

//     $.get(url, function(result) {
//     var json = $.parseJSON(result);
//     alert(json.feature); // Do whatever you want here
// });
    
