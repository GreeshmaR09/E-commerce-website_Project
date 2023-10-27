$(document).ready(function(){
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    $.each(cartItems, function(index, item) {
        $(".name1").text(item.name); // Set the price as the text of the element with id "price"
        $(".count").text(item.count);
         $(".price1").html( item.price );
         $("#image1").attr("src", item.image);
         $(".totalprice1").html( item.totalprice );
         $(".name2").text(item.name2); // Set the price as the text of the element with id "price"
         $(".count2").text(item.count2);
          $(".price2").html( item.price2 );
          $("#image2").attr("src", item.image2);
          $(".totalprice2").html( item.totalprice2 );
    });




if($(".price2").text()==""){
    $('.summery2').hide();
}

var amountof1=parseFloat($(".totalprice1").html())
var amountof2=parseFloat($(".totalprice2").html())
var finaltotal=parseFloat(amountof1 + amountof2);
var shipping= parseFloat(0);
$(".finaltotal").html(finaltotal);
//var finaltotal=$(".finaltotal").html()
$(".subtotal").html(finaltotal+shipping)


$("#fastDelivery").click(function(){
    $(".shippingfee").html("<b> 20</b>")
    $(".subtotal").html(finaltotal+20)
   

 })





$(".checkout-btn").click(function(){

    if($ ('#firstname').val()==''){
        $('#error').html("Please Enter your name")
        
    }
    else if($ ('#last_name').val()==''){
        $('#error').html("Please Enter your lastname")
        

    }
    else if($('#phone').val()==''){
        $('#error').html("Please Enter your number")
       
    }

    else if($('#pin_code').val()==''){
        $('#error').html("Please Enter pin")
        

    }
    else if($('#city').val()==''){
        $('#error').html("Please Enter city")
        

    }

    else if($('#address').val()==''){
        $('#error').html("Please Enter your address")
        
    }

    else{
        $('#reg_form').submit();
        $('#error').html("")


    }
});


})
