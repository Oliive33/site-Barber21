const lienNav = document.querySelectorAll(".lienNav");
const navigation = document.getElementById("navigation");
const icone = document.querySelector(".icon");
const arrow = document.getElementById("arrow");
const titrePrincipal = document.querySelector("h1");
const titreSecondaire = document.querySelector("header h2");

window.addEventListener("load", () => {
  const TL = gsap.timeline({
    defaults: {
      duration: 1,
      ease: "power2",
    },
  });

  TL.to(navigation, { autoAlpha: 1, y: 0, ease: "power3.in" })
    .to(icone, { autoAlpha: 1, y: 0 })

    .staggerTo(lienNav, 1, { autoAlpha: 1, y: 0 }, 0.4)

    .to(titrePrincipal, 1, {
      autoAlpha: 1,
      y: 0,
    })

    .to(titreSecondaire, 1, {
      autoAlpha: 1,
      y: 0,
    })
    .to(arrow, 2, { autoAlpha: 1 });

  TL.play();
});
