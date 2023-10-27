$(document).ready(function(){
   
  //feedback
  $(".check").click(function(){
      $(this).css("color","orange");
    });


   

    //add to cart error msg

    $(".addToCart").click(function(){
      
      if($("#ProductCount").val()==""){
        $(".error").html("*choose the number of products")
      }
      else{

        $(".error").html("Product added to cart successfully!")
  

            var name = $(".productName").text();
            var count = $("#ProductCount").val();
            var price=$(".amountShoe").html();
            var images =$("#mainShoe").attr("src")
            
            var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
            
            var newItem = {
                name: name,
                count: count,
                price:price,
                image:images
            };
            
            cartItems.push(newItem);
            
            localStorage.setItem('cart', JSON.stringify(cartItems));
            
    }

      });    

    

   
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