$(document).ready(function(){
   
  //feedback
  $(".check").click(function(){
      $(this).css("color","orange");
    });


   

    //add to cart error msg

    $(".addToCart").click(function(){
      if($("#numberInput").val()==""){
        $(".error").html("*choose the number of products")
      }
      else{
        $(".error").html("Item added to the cart")
       
    }
      });

     /*
 $(".CartImageSize").attr("src",cartimage);
 $(".CartProductName").html(ProductName);
 $(".PriceOfItem").html(ProductAmount);
 $(".NoOfItem").html(ProductCount);
 $(".SubTotal").html(SubTotal);*/


  //change shoe color
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
        $(".productName").html("<b>DNK Blue Shoe</b>")
        $(".amountShoe").html("<b>240</b>")
    }
    else if($("#mainShoe").attr("alt")==="DNK Dark Blue Shoe"){
        $(".productName").html( "<b>DNK Dark Blue Shoe  </b>") 
        $(".amountShoe").html("<b>250</b>")
    }

    else if($("#mainShoe").attr("alt")==="DNK Red Shoe"){
        $(".productName").html("<b>DNK Red Shoe </b>")
        $(".amountShoe").html("<b>230</b>")
    }
    else if($("#mainShoe").attr("alt")==="DNK Yellow Shoe"){
        $(".productName").html("<b>DNK Yellow Shoe </b>")
        $(".amountShoe").html("<b>220</b>")
    }
    else{
        $(".productName").html("<b>DNK Green Shoe</b>")
        $(".amountShoe").html("<b>210</b>")

    }
    })


  


 
});