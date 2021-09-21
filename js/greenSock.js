const lienNav = document.querySelectorAll(".lienNav");
const navigation = document.getElementById("navigation");
const arrow = document.getElementById("arrow");
const titrePrincipal = document.querySelector("h1");
const titreSecondaire = document.querySelector("header h2");

window.addEventListener("load", () => {
  const TL = gsap.timeline();

  TL.to(navigation, { autoAlpha: 1, y: 0, ease: "power3.in" })
    .staggerTo(lienNav, 2, { autoAlpha: 1, y: 0, ease: "power2.out" }, 0.5)

    .to(titrePrincipal, 1, { autoAlpha: 1, y: 0, ease: "power2.out" })

    .to(titreSecondaire, 1, { autoAlpha: 1, y: 0, ease: "power2.out" })
    .to(arrow, 2, { autoAlpha: 1, ease: "power3.out" });

  TL.play();
});
