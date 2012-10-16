(function ($) {

  Drupal.behaviors.vacancies = {
    attach: function (context, settings) {
    	var bodycolor = $('body').css('color');
    	var articletitlecolor = $('h1.article-title > a').css('color');
    	$('h1.article-title > a').hover(function(){
    		$(this).css('color',bodycolor);
    	});
    	
    	
    	$('.facetapi-inactive').css('color',bodycolor);
    	    	
    	addEventListener("DOMNodeInserted", function(event) {
    		$target = $(event.target);
    		if($target.hasClass('facetapi-limit-link')) {
				$target.css('color',articletitlecolor);
			}    			
    	});
    	
    	$('h1.article-title > a').css('color',bodycolor);
    	
  		
		var clickprice = $('#edit-field-click-price-und-0-value');
		var clickval = parseFloat(clickprice.val());
		
		function addclickval(addprice) {
		    clickval = clickval + addprice;
		    clickprice.val(clickval.toFixed(2));
		}
		
		clickprice.change( function(){
			clickprice.val(clickval.toFixed(2));
		});
		
		$('#edit-field-werkweek-und [type=checkbox]').click( function(){
			var oneischecked = 0;
			$('#edit-field-werkweek-und [type=checkbox]').each(function(){
				if( $(this).is(":checked")){
					oneischecked++;
				}
			});
			if($(this).is(":checked") && oneischecked > 1) {
				addclickval(parseFloat("0.10"));
			} else if ( $(this).is(":checked") == false && oneischecked > 0 ) {
				addclickval(parseFloat("-0.10"));
			}	
		});
		
		$('#edit-field-dienstverb-und [type=checkbox]').click( function(){
			var oneischecked = 0;
			$('#edit-field-dienstverb-und [type=checkbox]').each(function(){
				if( $(this).is(":checked")){
					oneischecked++;
				}
			});
			if($(this).is(":checked") && oneischecked > 1) {
				addclickval(parseFloat("0.10"));
			} else if ( $(this).is(":checked") == false && oneischecked > 0 ) {
				addclickval(parseFloat("-0.10"));
			}	
		});
		
		$('#edit-field-functioncat-und [type=checkbox]').click( function(){
			var oneischecked = 0;
			$('#edit-field-functioncat-und [type=checkbox]').each(function(){
				if( $(this).is(":checked")){
					oneischecked++;
				}
			});
			if($(this).is(":checked") && oneischecked > 1) {
				addclickval(parseFloat("0.10"));
			} else if ( $(this).is(":checked") == false && oneischecked > 0 ) {
				addclickval(parseFloat("-0.10"));
			}	
		});
    }
  };
  
}(jQuery));