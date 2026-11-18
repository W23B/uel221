$(document).ready(function () {
  // Effet 1 : apparition en fondu de la page
  $("body").hide().fadeIn(2000);

  // Effet 2 : les images deviennent légèrement transparentes au survol
  $("main article img").hover(
    function () {
      $(this).stop().fadeTo(1000, 0.8);
    },
    function () {
      $(this).stop().fadeTo(500, 1);
    },
  );

  // Effet 3 : le titre principal tourne au survol et revient quand la souris part
  $("h1").hover(
    function () {
      $(this).animate({ rotate: "3600deg" }, 10000);
    },
    function () {
      $(this).stop(true).css("rotate", "0deg");
    },
  );

  lightbox.option({
    albumLabel: "Image %1 sur %2",
    wrapAround: true,
  });
});
