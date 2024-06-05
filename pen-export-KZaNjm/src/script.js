$(document).ready(function(){
  setTransitionDuration('.circle-wrap', 0.1, 0);
  setAnimationDelay('.circle', 0.1, 0);
});
$('.circle-wrap:first-of-type .circle').addClass('active');
$('.circle').hover(function(){
  $('.circle').removeClass('active');
  $(this).toggleClass('active');
});

$(window).mousemove(function(e){
  var x= e.pageX - ($(window).innerWidth() / 1.2);
  var y= e.pageY - ($(window).innerHeight() / 1.2);
  $('.circle-wrap').css({
    'transform': 'translateX('+parseInt(x*(-0.1))+'px) translateY('+parseInt(y*(-0.1))+'px)'
  });
});

function setTransitionDuration(selector, dur, add) {
  var i = 0;
  $(selector).each(function(){
    i++;
    var eLduration = (dur * i) + add;
    $(this).css({
      "transition-duration": eLduration+"s",
      "-webkit-transition-duration": eLduration+"s" 
    })
  });
}

function setAnimationDelay(selector, dur, add) {
  var i = 0;
  $(selector).each(function(){
    i++;
    var eLduration = (dur * i) + add;
    $(this).css({
      "animation-delay": eLduration+"s",
      "-webkit-animation-delay": eLduration+"s" 
    })
  });
}
