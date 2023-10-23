$(document).ready(function(){
    $(".check").click(function(){
      $(this).css("color","orange");
    });

    
$(".addToCart").click(function(){
    if($("#numberInput").val()==""){
      $(".error").html("*choose the number of products")
    }
    else{
      $(".addToCart").submit()
      $(".error").html("Item added to cart")
      $(".toCartPage").attr("href","yourcartlist.html")
    }
  });


  $(".close").click(function(){
    $(".row").empty();
    $("p").slide()
  })
$("#shoe1 , #shoe2 ,#shoe3 ,#shoe4").click(function(){
    var subshoe=$(this).attr("src")
    var subName=$(this).attr("alt")
    var currentName=$("#mainShoe").attr("alt")
    var currentshoe=$("#mainShoe").attr("src")
    $("#mainShoe").attr("src",subshoe)
    $(this).attr("src",currentshoe)
    $(this).attr("alt",currentName)
    $("#mainShoe").attr("alt",subName)


    if($("#mainShoe").attr("alt")==="DNK Blue Shoe"){
        $(".productName").html("<b>DNK Blue Shoe<div> $200.00 - $240.00 </b></div>")
    }
    else if($("#mainShoe").attr("alt")==="DNK Dark Blue Shoe"){
        $(".productName").html( "<b>DNK Dark Blue Shoe <div>$210.00 - $240.00 </b></div>") 
    }

    else if($("#mainShoe").attr("alt")==="DNK Red Shoe"){
        $(".productName").html("<b>DNK Red Shoe<div> $230.00 - $240.00 </b></div>")
    }
    else if($("#mainShoe").attr("alt")==="DNK Yellow Shoe"){
        $(".productName").html("<b>DNK Yellow Shoe<div> $250.00 - $260.00 </b></div>")
    }
    else{
        $(".productName").html("<b>DNK Green Shoe<div> $210.00 - $260.00 </b></div>")

    }
    })

});
    
