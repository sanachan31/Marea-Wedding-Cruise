
$(function (){
 $('.slick').slick({
  arrows:true,
  centerMode:false,
  variableWidth:false,
  dots:true,
  draggable:true,
  focusOnSelect:true,
  infinite:true,
  slidersToScroll:"1",
  swipe:true,
  swipeToSlide:true,
  responsive: [ {
      breakpoint: 540, // 539px以下のサイズに適用
      settings: {
      slidesToShow: 1,
      },
  },],
 });
});
