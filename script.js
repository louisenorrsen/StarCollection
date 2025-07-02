function createStars(containerId, countId, maxStars = 100) {
  const container = document.getElementById(containerId);
  const countDisplay = document.getElementById(countId);
  let count = 0;

  for (let i = 0; i < maxStars; i++) {
    const star = document.createElement("span");
    star.innerHTML = "★";
    star.classList.add("star");

    star.addEventListener("click", () => {
      if (star.classList.contains("active")) {
        star.classList.remove("active");
        count--;
      } else {
        star.classList.add("active");
        count++;
      }
      countDisplay.textContent = count;
    });

    container.appendChild(star);
  }
}

createStars("child1-stars", "child1-count");
createStars("child2-stars", "child2-count");
