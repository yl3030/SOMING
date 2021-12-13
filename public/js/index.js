
let xMousePos = 0;
let yMousePos = 0;
let lastScrolledLeft = 0;
let lastScrolledTop = 0;
let cursor_1_x,cursor_1_y,cursor_2_x,cursor_2_y;

$(document).mousemove(function(event) {
  captureMousePosition(event);
});

$(window).scroll(function(event){
  if(lastScrolledLeft != $(document).scrollLeft()){
    xMousePos -= lastScrolledLeft;
    lastScrolledLeft = $(document).scrollLeft();
    xMousePos += lastScrolledLeft;
    cursor_1_x = xMousePos-18;
    cursor_2_x = xMousePos-4;
  }
  if(lastScrolledTop != $(document).scrollTop()){
    yMousePos -= lastScrolledTop;
    lastScrolledTop = $(document).scrollTop();
    yMousePos += lastScrolledTop;
    cursor_1_y = yMousePos-18;
    cursor_2_y = yMousePos-4;
  }
  $(".cursor").css("top",cursor_1_y).css("left",cursor_1_x);
  $(".cursor-2").css("top",cursor_2_y).css("left",cursor_2_x);
})

function captureMousePosition(event){
  xMousePos = event.pageX;
  yMousePos = event.pageY;
  cursor_1_x = xMousePos-18;
  cursor_2_x = xMousePos-4;
  cursor_1_y = yMousePos-18;
  cursor_2_y = yMousePos-4;
  $(".cursor").css("top",cursor_1_y).css("left",cursor_1_x);
  $(".cursor-2").css("top",cursor_2_y).css("left",cursor_2_x);
}


$(".next").click(function () {
    $(this).parents(".color-box").addClass("active");
    $(this).addClass("active");
    $(".prev").removeClass("active");
    $(".main-pic").addClass("active");
  });
  $(".prev").click(function () {
    $(this).parents(".color-box").removeClass("active");
    $(this).addClass("active");
    $(".next").removeClass("active");
    $(".main-pic").removeClass("active");
  });