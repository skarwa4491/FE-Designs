let items = document.querySelectorAll(".item");

for (let i = 0; i < items.length; i++) {
  addListener(items[i]);
}

function addListener(item) {
  item.addEventListener("click", (e) => {
    if (e.target.classList.contains("open")) {
      e.target.classList.remove("open");
    } else {
      e.target.classList.add("open");
    }
  });
}
