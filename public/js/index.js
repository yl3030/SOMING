let xMousePos = 0;
let yMousePos = 0;
let lastScrolledLeft = 0;
let lastScrolledTop = 0;
let cursor_1_x, cursor_1_y, cursor_2_x, cursor_2_y;

$(document).mousemove(function (event) {
  captureMousePosition(event);
});

$(window).scroll(function (event) {
  if (lastScrolledLeft != $(document).scrollLeft()) {
    xMousePos -= lastScrolledLeft;
    lastScrolledLeft = $(document).scrollLeft();
    xMousePos += lastScrolledLeft;
    cursor_1_x = xMousePos - 18;
    cursor_2_x = xMousePos - 4;
  }
  if (lastScrolledTop != $(document).scrollTop()) {
    yMousePos -= lastScrolledTop;
    lastScrolledTop = $(document).scrollTop();
    yMousePos += lastScrolledTop;
    cursor_1_y = yMousePos - 18;
    cursor_2_y = yMousePos - 4;
  }
  $(".cursor").css("top", cursor_1_y).css("left", cursor_1_x);
  $(".cursor-2").css("top", cursor_2_y).css("left", cursor_2_x);
});

function captureMousePosition(event) {
  xMousePos = event.pageX;
  yMousePos = event.pageY;
  cursor_1_x = xMousePos - 18;
  cursor_2_x = xMousePos - 4;
  cursor_1_y = yMousePos - 18;
  cursor_2_y = yMousePos - 4;
  $(".cursor").css("top", cursor_1_y).css("left", cursor_1_x);
  $(".cursor-2").css("top", cursor_2_y).css("left", cursor_2_x);
}

let stage = 1;
$(".next").click(function () {
  if (stage == 1) {
    $(".main-pic-2").addClass("active").siblings(".main-pic_content").removeClass("active");
    $(this).parents(".color-box").removeClass("stage-1").addClass("stage-2");
    $(this).parents(".color-box").find(".common-text.text-2").addClass("active").siblings(".common-text").removeClass("active");
    stage = 2;
  } else if (stage == 2) {
    $(".main-pic-3").addClass("active").siblings(".main-pic_content").removeClass("active");
    $(this).parents(".color-box").removeClass("stage-2").addClass("stage-3");
    $(this).parents(".color-box").find(".common-text.text-3").addClass("active").siblings(".common-text").removeClass("active");
    stage = 3;
  } else if (stage == 3) {
    $(".main-pic-4").addClass("active").siblings(".main-pic_content").removeClass("active");
    $(this).parents(".color-box").removeClass("stage-3").addClass("stage-4");
    $(this).parents(".color-box").find(".common-text.text-4").addClass("active").siblings(".common-text").removeClass("active");
    stage = 4;
  } else if (stage == 4) {
    $(".main-pic-1").addClass("active").siblings(".main-pic_content").removeClass("active");
    $(this).parents(".color-box").removeClass("stage-4").addClass("stage-1");
    $(this).parents(".color-box").find(".common-text.text-1").addClass("active").siblings(".common-text").removeClass("active");
    stage = 1;
  }
});
$(".prev").click(function () {
  if (stage == 1) {
    $(".main-pic-4").addClass("active").siblings(".main-pic_content").removeClass("active");
    $(this).parents(".color-box").removeClass("stage-1").addClass("stage-4");
    stage = 4;
  } else if (stage == 2) {
    $(".main-pic-1").addClass("active").siblings(".main-pic_content").removeClass("active");
    $(this).parents(".color-box").removeClass("stage-2").addClass("stage-1");
    stage = 1;
  } else if (stage == 3) {
    $(".main-pic-2").addClass("active").siblings(".main-pic_content").removeClass("active");
    $(this).parents(".color-box").removeClass("stage-3").addClass("stage-2");
    stage = 2;
  } else if (stage == 4) {
    $(".main-pic-3").addClass("active").siblings(".main-pic_content").removeClass("active");
    $(this).parents(".color-box").removeClass("stage-4").addClass("stage-3");
    stage = 3;
  }
});

$(".arrow-box").mouseenter(function(){
  $(".cursor").css("opacity","0");
  $(".cursor-2").css("opacity","0");
  $("body").css("cursor","pointer");
})
$(".arrow-box").mouseleave(function(){
  $(".cursor").css("opacity","1");
  $(".cursor-2").css("opacity","1");
  $("body").css("cursor","none");
})

// menu
$(".header_menu").click(function(){
  $(this).toggleClass("active");
  $(".header_nav").toggleClass("active");
})