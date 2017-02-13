	$(document).ready(function(){	
		/* show all when page is loaded */
			$('.user').addClass('fadein'); 
		/* showall is clicked */
		$('.showall').css('cursor','pointer').click(function(){	
			$('.user').addClass('fadein'); 			
		});
		/* filter 1 is clicked */
		$('.filter1').css('cursor','pointer').click(function(){	
			$('.user').removeClass('fadein'); 			
			$('.group1').addClass('fadein'); 
		});
		/* filter 2 is clicked */
		$('.filter2').css('cursor','pointer').click(function(){	
			$('.user').removeClass('fadein'); 		
			$('.group2').addClass('fadein'); 
		});
		/* filter 3 is clicked */
		$('.filter3').css('cursor','pointer').click(function(){	
			$('.user').removeClass('fadein'); 					
			$('.group3').addClass('fadein'); 	
		});
	});