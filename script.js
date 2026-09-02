const year = document.querySelector("#year");

if (year) {
  year.textContent = String(new Date().getFullYear());
}

document.querySelectorAll("[data-education-logo]").forEach((logo) => {
  const hideMissingLogo = () => {
    logo.hidden = true;
  };

  logo.addEventListener("error", hideMissingLogo);

  if (logo.complete && logo.naturalWidth === 0) {
    hideMissingLogo();
  }
});
