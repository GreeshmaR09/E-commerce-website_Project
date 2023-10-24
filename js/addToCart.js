$(document).ready(function(){


    // to delete the product from cart 
    $(".delete").click(function(){
        $(".borderline").hide();
      })

     
      
/*
$(".addToCart").click(function() {
$.ajax({
    type: 'POST',
    url: 'product_page.html',
    success: function(data) {
        // Update content of file1.html based on the response from file2.html
        var cartimage= $(".mainShoe").attr("src");
        var ProductAmount=$(".amountShoe").html();
        var ProductCount=$("#ProductCount").val();
        var ProductName=$(".productName").html();
        var SubTotal=$("#ProductCount").val() * $(".amountShoe").html();
        $(".CartImageSize").attr("src",cartimage);
     $(".CartProductName").html(ProductName);
      $(".PriceOfItem").html(ProductAmount);
      $(".NoOfItem").html(ProductCount);
      $(".SubTotal").html(SubTotal);
    }
  
});
});*/
});