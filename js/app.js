$(function(){
   var search = $('#button');
    var container = $("results");
    var title;
var API_URL = 'https://newsapi.org/v2/top-headlines?apiKey=18d8342646d74c1da4a796ef67758930';
    var code = $('#value');
 


    search.on('click',function(e){

     $.ajax({
     type: 'GET',
url: API_URL, code,
dataType: JSON,
     }).then(function(res){
     console.log(res)

    })
    
   })
  })

