(function(){
	var int_img = $('.intereat_panorama_img'),
	    int_wh = $(int_img).width(),
	    int_m1 = int_img.find('img:eq(0)'),
	    int_m2 = int_img.find('img:eq(1)');
	    int_img.find('img').css('width',int_wh);
	    int_img.css('width',int_wh*2);
	var n = 0,
		m,
		mouseDown = true;
   var stop_img = setInterval(function(){
    	if(mouseDown == false){return;}
    	n = n+5;
    	int_img.css('margin-left',-n);
	    if(n >= int_wh){
	    	int_m2.insertBefore(int_m1);
	    	n = 0;
	    }
   },80);
   int_img.mousedown(function (event){
    	m = event.pageX;
    	mouseDown = false;
   }).mousemove(function(event){
    	if(!mouseDown){
	        var mv = event.pageX;
	        if(m < mv){
	        	n = n+8
	        	int_img.css('margin-left',-n);
	        	int_m1.insertBefore(int_m2);
	        	if(n > int_wh){ console.log(1);
	        		int_img.css('margin-left',0);
	        		n = 0;
	        	}
	        } else{
	        	n = n-8
	        	int_img.css('margin-left',-n);
		    	int_m2.insertBefore(int_m1);
		    	if(n <= 0){
		    		n=0;
		    	}
	        }
    	}
      event.preventDefault();
   }) .mouseup(function (){
    	mouseDown = true;
   }).mouseleave(function (){
        mouseDown = true;
    });

   var switch_btn = $('.switch_btn_box p');
   $(switch_btn).click(function(){
      var elemt = $(this).attr('id');
      if($('.'+elemt).is(':hidden')){
         $('.'+elemt).removeClass('dpn').siblings().addClass('dpn');
      }else{
          $('.'+elemt).addClass('dpn').siblings().removeClass('dpn');
      }
   });
   //content 空间铺满
   var navbar = $('.navbar'),
      footer = $('footer'),
      section = $('section'),
      main = $('#main'),
      navbar_h = $(navbar).innerHeight(),
      section_h = $(section).innerHeight(),
      footer_h = $(footer).innerHeight(),
      content_h = window.innerHeight-(navbar_h+footer_h);
   if(content_h < section_h){return;}
   $(section).css('height',content_h);
   $(main).css('height',content_h);
   $(window).resize(function () {
	   var navbar_h = $(navbar).innerHeight();
	   var footer_h = $(footer).innerHeight();
	   var content_h = window.innerHeight-(navbar_h+footer_h);
   });
})();