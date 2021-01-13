



$(document).ready(function(){
    $(".btn").click(function(){
        $.ajax({
            url:"https://restcountries.eu/rest/v2/name/france",
            success: function(data, status, response){

                 console.log(response.statusCode);

                 $country=data[0].name
                 $capital=data[0].capital

                 $("#country").val(data.map((function(data){
                    $("#country").html($country);
              
                 })));
              
                 $("#capital").val(data.map((function(data){
                     $("#capital").html( $capital);
                })));
             }
         })

    })



    // $("button").click(function(){
    //     $.ajax({
    //         url: 'https://restcountries.eu/rest/v2/name/france',
    //         dataType: 'json',
    //         success: function(data) {
    //             $country=data[0].name
    //             $capital=data[0].capital
    //          $("#country").html($country)
    //          $("#capital").html($capital)
    //         },
       
    //     });
    // })
   
})