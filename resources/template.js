// Render the HTML template for each product
export function renderHTML(generateProduct, products) {
  const body = document.querySelector("body");

  for (let i = 0; i < products.length; i++) {
    const section = document.createElement("section");
    section.classList.add("catalogue");

    const product = products[i];
    const addHTML = generateProduct(product);

    if (i % 2 == 1) {
      section.setAttribute("id", "reversed");
    }

    section.innerHTML = addHTML;
    body.appendChild(section);
  }
}
