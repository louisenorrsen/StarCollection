const supertasks = [
  { category: "Kognitiva", tasks: [
    {name: "Skriva sitt namn 3 gånger med fina och tydliga bokstäver", stars: 1},
    {name: "Läs ett kapitel i en bok", stars: 2},
    {name: "Rita en teckning till någon i familjen", stars: 1},
    {name: "Läsa en saga för ett syskon", stars: 2},
    {name: "Komma på 3 saker man är tacksam för och säga det högt", stars: 1}
  ]},
  { category: "Motoriska", tasks: [
    {name: "Spring 5 varv runt huset", stars: 1},
    {name: "Hoppa 20 hopp i studsmattan", stars: 1},
    {name: "Dansa i 5 minuter till favoritmusik", stars: 1},
    {name: "Sitt stilla i soffan i 5 minuter efter man varit arg", stars: 1}
  ]},
  { category: "Återhämtning", tasks: [
    {name: "Lägg dig ner och blunda i 5 minuter", stars: 1},
    {name: "Lyssna på lugn musik i 10 minuter", stars: 1},
    {name: "Säga till innan man blir arg", stars: 2},
    {name: "Lägga sig när mamma/pappa säger till utan protest", stars: 3},
    {name: "Stänga av dator/iPad utan protest", stars: 3}
  ]},
  { category: "Hushållssysslor", tasks: [
    {name: "Plocka undan sina leksaker", stars: 1},
    {name: "Hjälpa till att sortera tvätten", stars: 2},
    {name: "Plocka i/ur diskmasinen", stars: 2},
    {namn: "Dammsuga sitt rum", stars: 1},
    {name: "Städa toalettstolen", stars: 2},
    {name: "Ge mat och vatten till Dino och Tomu", stars: 1},
    {name: "Fixa Dino och Tomu's bur", stars: 2}
  ]}
]

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

 