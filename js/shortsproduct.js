$(document).ready(function(){
  
    $(".addToCart2").click(function(){
      
        if($("#ProductCount2").val()==""){
          $(".error").html("*choose the number of products")
        }
        else{
  
          $(".error").html("Product added to cart successfully!")
    
  
          var name2 = $(".productName2").text();
          var count2 = $("#ProductCount2").val();
          var price2=$(".amountShoe2").html();
          var images2 =$("#mainShoe2").attr("src")
              
              var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
              
              var newItem = {
                  name2: name2,
                  count2: count2,
                  price2:price2,
                  image2:images2
              };
              
              cartItems.push(newItem);
              
              localStorage.setItem('cart', JSON.stringify(cartItems));
              
      }
      
  
        });
  
})