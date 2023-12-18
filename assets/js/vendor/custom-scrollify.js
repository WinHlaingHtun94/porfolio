/*---------- Animation hirakatanooto ---------*/

$(function() {
	$.scrollify({
	  section : ".slides",
	  setHeights: false,
	  updateHash:false,
	  interstitialSection : ".promotion_foot",
  
	  before:function(index, section) {
		setCurrent(index);
	  },
	  afterRender:function() {
		setCurrent();
	  },
	});
});
  
function setCurrent(index) {
	$(".slides").removeClass('is-show');
	if($(window).scrollTop() > 2283) {
	$(".slides").children().addClass('show');
	}

	$(".slides").eq(index).addClass('is-show');
setTimeout(function () {
	$(".slides").eq(index).children().addClass('show');
}, 1000);
}
