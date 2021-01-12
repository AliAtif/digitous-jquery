

$(document).ready(function(){
    $(".btn").click(function(){

        textLength =$(".form-control").val();

        if(textLength.length>5){
            $(".form-control").addClass("is-valid")
        }else{
            $(".form-control").addClass("is-invalid");
        }
       
    });
})
