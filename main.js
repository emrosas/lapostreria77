// Set the Footer rights Year automatically

//When the DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  // Setting the current year in the footer
  //Get the span element
  const footerYear = document.querySelector("[footer='year']");
  //Get Current year
  const year = new Date().getFullYear();
  //Set the span element's text to be the year
  footerYear.textContent = year;

  // Scroll disable toggle function
  let scrollDisable = false;
  function toggleScroll() {
    if (scrollDisable) {
      document.body.style.overflow = "auto";
      scrollDisable = false;
    } else {
      document.body.style.overflow = "hidden";
      scrollDisable = true;
    }
  }
  // Make the scroll toggle when the button is clicked
  const toggleScrollElement = document.querySelector("[scroll='toggle']");
  toggleScrollElement.addEventListener("click", toggleScroll);

  // Mirror a click onto another element
  const mirrorClickTrigger = document.querySelector("[mirror-click='trigger']");
  const mirrorClickTarget = document.querySelector("[mirror-click='target']");
  mirrorClickTrigger.addEventListener("click", () => {
    mirrorClickTarget.click();
  });
});
