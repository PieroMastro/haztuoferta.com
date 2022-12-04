import React from "react";
// import $ from "jquery";
import "../../styles/productGallery.css";

export const ProductGallery = () => {
  $(document).ready(function () {
    $(".slideshow-thumbnails").hover(function () {
      changeSlide($(this));
    });

    $(document).mousemove(function (e) {
      var x = e.clientX;
      var y = e.clientY;

      var x = e.clientX;
      var y = e.clientY;

      var imgx1 = $(".slideshow-items.active").offset().left;
      var imgx2 = $(".slideshow-items.active").outerWidth() + imgx1;
      var imgy1 = $(".slideshow-items.active").offset().top;
      var imgy2 = $(".slideshow-items.active").outerHeight() + imgy1;

      if (x > imgx1 && x < imgx2 && y > imgy1 && y < imgy2) {
        $("#lens").show();
        $("#result").show();
        imageZoom($(".slideshow-items.active"), $("#result"), $("#lens"));
      } else {
        $("#lens").hide();
        $("#result").hide();
      }
    });
  });

  function imageZoom(img, result, lens) {
    result.width(img.innerWidth());
    result.height(img.innerHeight());
    lens.width(img.innerWidth() / 2);
    lens.height(img.innerHeight() / 2);

    result.offset({
      top: img.offset().top,
      left: img.offset().left + img.outerWidth() + 10,
    });

    var cx = img.innerWidth() / lens.innerWidth();
    var cy = img.innerHeight() / lens.innerHeight();

    result.css("backgroundImage", "url(" + img.attr("src") + ")");
    result.css(
      "backgroundSize",
      img.width() * cx + "px " + img.height() * cy + "px"
    );

    lens.mousemove(function (e) {
      moveLens(e);
    });
    img.mousemove(function (e) {
      moveLens(e);
    });
    lens.on("touchmove", function () {
      moveLens();
    });
    img.on("touchmove", function () {
      moveLens();
    });

    function moveLens(e) {
      var x = e.clientX - lens.outerWidth() / 2;
      var y = e.clientY - lens.outerHeight() / 2;
      if (x > img.outerWidth() + img.offset().left - lens.outerWidth()) {
        x = img.outerWidth() + img.offset().left - lens.outerWidth();
      }
      if (x < img.offset().left) {
        x = img.offset().left;
      }
      if (y > img.outerHeight() + img.offset().top - lens.outerHeight()) {
        y = img.outerHeight() + img.offset().top - lens.outerHeight();
      }
      if (y < img.offset().top) {
        y = img.offset().top;
      }
      lens.offset({ top: y, left: x });
      result.css(
        "backgroundPosition",
        "-" +
        (x - img.offset().left) * cx +
        "px -" +
        (y - img.offset().top) * cy +
        "px"
      );
    }
  }

  function changeSlide(elm) {
    $(".slideshow-items").removeClass("active");
    $(".slideshow-items").eq(elm.index()).addClass("active");
    $(".slideshow-thumbnails").removeClass("active");
    $(".slideshow-thumbnails").eq(elm.index()).addClass("active");
  }

  return (
    <>
      <div id="lens"></div>

      <div id="slideshow-items-container">
        <img
          className="slideshow-items active"
          src="https://images.unsplash.com/photo-1512054502232-10a0a035d672?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
        />
        <img
          className="slideshow-items"
          src="https://images.unsplash.com/photo-1539341029274-a659646db47c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
        />
        <img
          className="slideshow-items"
          src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
        />
      </div>

      <div id="result"></div>

      <div className="row">
        <img
          className="slideshow-thumbnails active"
          src="https://images.unsplash.com/photo-1512054502232-10a0a035d672?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=80"
        />
        <img
          className="slideshow-thumbnails"
          src="https://images.unsplash.com/photo-1539341029274-a659646db47c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=80"
        />
        <img
          className="slideshow-thumbnails"
          src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=80"
        />
      </div>
    </>
  );
};
