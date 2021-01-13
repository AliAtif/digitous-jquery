



$(document).ready(function(){
    $(".form-control").keyup(function(){

        if($(".form-control").val().length < 5){
            $(".form-control").addClass("is-invalid")
           
        }else{
            $(".form-control").removeClass("is-invalid");
            $(".form-control").addClass("is-valid");
         
        }
       
    });
})
