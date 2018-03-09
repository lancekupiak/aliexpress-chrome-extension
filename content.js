$('.list-item:not(:has(span.order-num))').remove();
$('span.order-num a em').each(function( ) {
  var orders = $( this ).text().replace('Orders  (','').replace(')','');
  if(orders > 800 || orders < 200) {
	  
	  $( this ).closest('li.list-item').remove();
  }
});


$('div.price').each(function( ) {
  var price = $( this ).text().replace('US $','');
  if(price > 12) {
	  
	  $( this ).closest('li.vertical').remove();
  }
});