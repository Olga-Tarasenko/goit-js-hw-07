const list = document.querySelectorAll("#categories .item");

console.log(`Number of category: ${list.length}`);
list.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const elements = item.querySelectorAll("ul li").length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elements}`);
});
