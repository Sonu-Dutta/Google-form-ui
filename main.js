$(document).ready(function(){
    $(".input-field").focusout(function(){
        var inputval=$(this).val();
        if(inputval===""){
            $(this).removeClass("has-value");
        }
        else{
            $(this).addClass("has-value");
        }
    })
})