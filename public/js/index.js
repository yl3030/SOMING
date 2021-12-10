



const cursor = document.querySelector(".cursor");
const cursor_2 = document.querySelector(".cursor-2");


document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 18) + "px; left: " + (e.pageX - 18) + "px;"
  );
  cursor_2.setAttribute(
    "style",
    "top: " + (e.pageY - 4) + "px; left: " + (e.pageX - 4) + "px;"
  );
});
document.addEventListener("scroll", (e) => {
    cursor.setAttribute(
      "style",
      "top: " + (e.pageY - 18) + "px; left: " + (e.pageX - 18) + "px;"
    );
    cursor_2.setAttribute(
        "style",
        "top: " + (e.pageY - 4) + "px; left: " + (e.pageX - 4) + "px;"
      );
});

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