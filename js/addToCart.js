$(document).ready(function(){
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
   
    
    $.each(cartItems, function(index, item) {
        $("#pname").text(item.name); // Set the price as the text of the element with id "price"
        $("#count").text(item.count);
         $("#price").html( item.price );
         $("img#imgHere").attr("src", item.image);
    });
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    $.each(cartItems, function(index, item) {
       $("#pname2").text(item.name2);
       $("#count2").text(item.count2);
       $("#price2").html( item.price2 );
       $("img#imgHere2").attr("src", item.image2);
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
    var count2 = $("#count2").text()
    var price2 = $("#price2").text()
    var SubTotal2 = count2 * price2;
    $("#SubTotal2").text(SubTotal2);


  // to delete the product from cart 
    $(".delete").click(function(){
        $(".borderline").hide();
        $(".UndoBtn").html("click here to <b><u>UNDO</u></b>")
      //  localStorage.removeItem('cart');
        
      })
      $(".delete2").click(function(){
        $(".borderline2").hide();
        $(".UndoBtn2").html("click here to <b><u>UNDO</u></b>")
      //  localStorage.removeItem('cart');
        
      })

      $(".UndoBtn").click(function(){
        $(".borderline").show();
        $(".UndoBtn").html("")
      })    
      
      $(".UndoBtn2").click(function(){
        $(".borderline2").show();
        $(".UndoBtn2").html("")
      }) 
    
      var totalprice1=$("#SubTotal").html();
  var totalprice2=$("#SubTotal2").html();
      


      var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
      
      var newItem = {
         
          totalprice1:totalprice1,
          totalprice2:totalprice2
      };
      
      cartItems.push(newItem);
      
      localStorage.setItem('cart', JSON.stringify(cartItems));












});


