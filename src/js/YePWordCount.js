(function ($) {

   $.fn.YePWordCount = function (options) {

      var AutoTabSetup = $.extend({
            interVal : setInterval(ShowMessage,1000)
         }, options);
      return this.each(function () {
         $(this).addClass("YePWordCount");
		  $(".YePWordCount").keypress(DisplayCount);
		  function DisplayCount(e){
		var OldChar = $(this).val();
		var len = OldChar ? OldChar.length: 0;
		//console.log(len);
		var offset = $(this).offset();
		var width = $(this).width();
		if($(".YePCount").length == 0){
			$("body").append("<div class='YePCount'>"+len+"</div>");
			
		}else{
			$(".YePCount").html(len);			
		}
		$(".YePCount").css("top",offset.top-20).css("left",offset.left+width);
clearInterval(AutoTabSetup.interVal);
console.log(AutoTabSetup.interVal)
AutoTabSetup.interVal = "";	
AutoTabSetup.interVal = setInterval(ShowMessage,1000);
console.log(AutoTabSetup.interVal)
	}
      });
     
}
	
	function ShowMessage(e){
		if($(".YePCount").length == 0){}
		else{
			$(".YePCount").remove();
		}
	}
   }(jQuery));
