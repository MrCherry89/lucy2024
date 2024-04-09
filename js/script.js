$(document).ready(function () {
  $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false,
  });

  $(".drop-menu").click(function (e) {
    e.stopPropagation();
    $(this).toggleClass("is-active");
    $(".header-menu-wrap").toggleClass("open");
    $("body, html").toggleClass("overflow");
  });

  $(".read").on("click", function () {
    $(this).closest(".item-bottom").find(".hide-info").toggleClass("open");
    $(this).closest(".item-bottom").find(".hide-info").toggleClass("visible");
    $(this).find("svg").toggleClass("rotate");
    if (!$(this).closest(".item-bottom").find(".hide-info").hasClass("open")) {
      $(this).find("span").text("читать");
    } else {
      $(this).find("span").text("Скрыть");
    }
    return false;
  });

  $(".album-btn").on("click", function () {
    $(this).closest(".archive-item").find(".item-bottom").toggleClass("open");
    if (
      !$(this).closest(".archive-item").find(".item-bottom").hasClass("open")
    ) {
      $(this).find("span").text("смотреть альбом");
      $(this).closest(".archive-item").find(".item-top").removeClass("bg");
    } else {
      $(this).find("span").text("свернуть альбом");
      $(this).closest(".archive-item").find(".item-top").addClass("bg");
    }
    return false;
  });

  $(".album-btn").on("click", function () {
    if (
      $(this).closest(".archive-item").find(".item-bottom").hasClass("open")
    ) {
      $(this).find(".img").addClass("after");
      $(this).find(".img").removeClass("before");
    } else {
      $(this).find(".img").addClass("before");
      $(this).find(".img").removeClass("after");
    }
    return false;
  });

  $(".album-btn2").on("click", function () {
    $(this).closest(".poem-item").find(".item-bottom").toggleClass("open");
    if (!$(this).closest(".poem-item").find(".item-bottom").hasClass("open")) {
      $(this).find("span").text("посмотреть сборник");
      $(this).closest(".poem-item").find(".item-top").removeClass("bg");
    } else {
      $(this).find("span").text("свернуть сборник");
      $(this).closest(".poem-item").find(".item-top").addClass("bg");
    }
    return false;
  });

  $(".album-btn2").on("click", function () {
    if ($(this).closest(".poem-item").find(".item-bottom").hasClass("open")) {
      $(this).find(".img").addClass("after");
      $(this).find(".img").removeClass("before");
    } else {
      $(this).find(".img").addClass("before");
      $(this).find(".img").removeClass("after");
    }
    return false;
  });

  const image = document.querySelector(".right-img");

  // Create GSAP timeline
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#header",
      scrub: true,
      start: "top top",
      end: "bottom bottom",
      invalidateOnRefresh: true,
    },
  });

  // Add animation to move the image left
  tl.to(image, {
    x: "50%", // Move left by 50% of the image width
    ease: "none", // Linear easing
  });

  const image2 = document.querySelector(".left-img");

  // Create GSAP timeline
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#header",
      scrub: true,
      start: "top top",
      end: "bottom bottom",
      invalidateOnRefresh: true,
    },
  });

  // Add animation to move the image left
  tl2.to(image2, {
    x: "-50%", // Move left by 50% of the image width
    ease: "none", // Linear easing
  });

  const image3 = document.querySelector(".right-img-mobile");

  // Create GSAP timeline
  const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#header",
      scrub: true,
      start: "top top",
      end: "bottom bottom",
      invalidateOnRefresh: true,
    },
  });

  // Add animation to move the image left
  tl3.to(image3, {
    x: "50%", // Move left by 50% of the image width
    ease: "none", // Linear easing
  });

  const image4 = document.querySelector(".left-img-mobile");

  // Create GSAP timeline
  const tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: "#header",
      scrub: true,
      start: "top top",
      end: "bottom bottom",
      invalidateOnRefresh: true,
    },
  });

  // Add animation to move the image left
  tl4.to(image4, {
    x: "-50%", // Move left by 50% of the image width
    ease: "none", // Linear easing
  });
});
