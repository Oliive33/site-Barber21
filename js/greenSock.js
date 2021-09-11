const lienNav = document.querySelectorAll(".lienNav");
const navigation = document.getElementById("navigation");
const arrow = document.getElementById("arrow");
const titrePrincipal = document.querySelector("h1");
const titreSecondaire = document.querySelector("header h2");

window.addEventListener("load", () => {
  const TL = gsap.timeline({ delay: 0.3, paused: true });

  TL.to(navigation, { autoAlpha: 1, y: 0, ease: "power2.in" })
    .staggerFrom(lienNav, 1, { opacity: 0, ease: "power2.out" }, 0.5)

    .staggerFrom(
      titrePrincipal,
      2,
      { opacity: 0, ease: "power2.out" },
      0.8,
      "-=1"
    )

    .staggerFrom(
      titreSecondaire,
      2,
      { opacity: 0, ease: "power2.ease" },
      1.4,
      "-=1"
    )
    .staggerFrom(arrow, 3, { opacity: 0, ease: "power2.ease" }, 1.8, "-=1");

  TL.play();
});
