function generateBlocks() {
  const fragment = document.createDocumentFragment();
  const container = document.createElement("div");
  container.classList.add("container");
  container.style.width = "250px";
  container.style.height = "250px";
  container.style.margin = "0px 50px 0px auto";
  container.style.display = "flex";
  container.style.flexWrap = "wrap";
  container.style.float = "left";
  fragment.append(container);
  const colors = [
    "#7FFFD4",
    "#48D1CC",
    "#00CED1",
    "#5F9EA0",
    "#4682B4",
    "#B0C4DE",
    "#B0E0E6",
    "#ADD8E6",
    "#87CEEB",
    "#87CEFA",
    "#00BFFF",
    "#1E90FF",
    "#6495ED",
    "#7B68EE",
    "#4169E1",
    "#FFA07A",
  ];
  for (let i = 1; i <= 25; i++) {
    const item = document.createElement("div");
    item.style.width = "50px";
    item.style.height = "50px";
    container.appendChild(item);
    setInterval(() => {
      colors.forEach((color) => {
        color = item.style.background =
          colors[Math.floor(Math.random() * colors.length)];
      });
    }, 1000);
    document.body.appendChild(fragment);
  }
}

generateBlocks();

// Advanced зробіть так, щоб квадрати змінювали колір раз на секунду.
// Щоб квадрати з'явились на сторінці та почали змінюватись, необхідно викликати функцію generateBlocksInterval();

function generateBlocksInterval() {
  setTimeout(generateBlocks(), 1000);
}
