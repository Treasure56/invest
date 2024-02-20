const nav = document.getElementById("navbar");
window.addEventListener("scroll", (_) => {
  const offset = window.scrollY;
  if (offset > 100) nav.classList.add("scrolled");
  else nav.classList.remove("scrolled");
});
