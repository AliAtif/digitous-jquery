

$(document).ready(function(){
    $(".btn").click(function(){
       $.ajax({
            url:"https://restcountries.eu/rest/v2/name/france",
            dataType: 'json',
            success: function(data, status, response){

                console.log(response.statusCode);

                $country=data[0].name
                $capital=data[0].capital

                $(".btn").text(data.map((function(data){
                         console.log($country);
             })));
              
              $(".btn").text(data.map((function(data){
                        console.log($capital);
              })));


             
            //     $country=data[0].name
            //     $capital=data[0].capital
            //  $("#exercise").text($country);
            //  console.log($country);
            //  $("#exercise").text($capital)
            //  console.log($capital);
            }

        })
    })
   
})