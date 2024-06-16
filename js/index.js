document.addEventListener("DOMContentLoaded", () => {
  const typedOut = document.querySelector(".animate-typewriter");

  typedOut.innerHTML = "";

  const text = "Hello!!";
  let charIndex = 0;

  setInterval(() => {
    if (charIndex < text.length) {
      typedOut.innerHTML += text[charIndex];
      charIndex++;
    }
  }, 200);
});
document.querySelectorAll('a[href*="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
