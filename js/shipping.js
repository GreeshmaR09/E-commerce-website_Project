$(document).ready(function(){
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    $.each(cartItems, function(index, item) {
        $(".name1").text(item.name); // Set the price as the text of the element with id "price"
        $(".count").text(item.count);
         $(".price1").html( item.price );
         $("#image1").attr("src", item.image);
         $(".totalprice1").html( item.totalprice );

    });

if($(".price2").text()==""){
    $('.summery2').hide();
}
 var amountof1=$(".totalprice1").html()
 var amountof2=$(".totalprice2").html()
 $(".finaltotal").val(amountof1 + amountof2);
 var finaltotal=$(".finaltotal").html()

if($("#fastDelivery").is(':checked')){

$(".shippingfee").html("20")

} else {
    $(".shippingfee").html("FREE")
}
var shipping=$(".shippingfee").html()


$(".subtotal").val(finaltotal+shipping)

})