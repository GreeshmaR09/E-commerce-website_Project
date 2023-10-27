$(document).ready(function(){
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    
    $.each(cartItems, function(index, item) {
        $("#pname").text(item.name); // Set the price as the text of the element with id "price"
        $("#count").text(item.count);
         $("#price").html( item.price );
         $("img#imgHere").attr("src", item.image);
    });

    /*
    window.onbeforeunload = function() {
      // Remove the item from local storage
      localStorage.removeItem('cart');
  };*/


    var count = $("#count").text()
    var price = $("#price").text()
    var SubTotal = count * price;
    $("#SubTotal").text(SubTotal);


  // to delete the product from cart 
    $(".delete").click(function(){
        $(".borderline").hide();
        $(".UndoBtn").html("click here to <b><u>UNDO</u></b>")
      //  localStorage.removeItem('cart');
        
      })

      $(".UndoBtn").click(function(){
        $(".borderline").show();
        $(".UndoBtn").html("")
      })    
    
      var totalprice=$("#SubTotal").html();
  
      
      var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
      
      var newItem = {
         
          totalprice:totalprice,
      };
      
      cartItems.push(newItem);
      
      localStorage.setItem('cart', JSON.stringify(cartItems));


});


