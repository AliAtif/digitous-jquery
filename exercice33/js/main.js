



$(document).ready(function(){
    $(".btn").click(function(){
    //    $.ajax({
    //         url:"https://restcountries.eu/rest/v2/name/france",
    //         success: function(data, status, response){

    //             console.log(response.statusCode);

    //             $("#country").val(data.map((function(france){
                  
    //                $("#country").html(france.name);
              
    //             })));
              
    //             $("#capital").val(data.map((function(france){

    //                 $("#capital").html(france.capital);
    //             })));
    //         }
    //     })

    })

    $("button").click(function(){
        $.ajax({
            url: 'https://restcountries.eu/rest/v2/name/france',
            dataType: 'json',
            success: function(data) {
                $country=data[0].name
                $capital=data[0].capital
             $("#country").html($country)
             $("#capital").html($capital)
            },
       
        });
    })
   
})