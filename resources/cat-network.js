// Variables
let products = [
  {
    name: "Mercusys AC750 (MR20)",
    image: "/img/catalogue/network/ac750.png",
    msgUrl:
      "https://wa.me/584244235920?text=Quiero%20comprar%20el%20router%20%22Mercusys%20AC750%20%28MR20%29%22",
    desc1: "750 Mbps | 2 Antenas | Fácil de Instalar",
    desc2: "Doble Banda, Multi-modo, Wi-Fi 5",
    price: "$35",
  },
  {
    name: "Mercusys AC1200 (AC10)",
    image: "/img/catalogue/network/ac1200.png",
    msgUrl:
      "https://wa.me/584244235920?text=Quiero%20comprar%20el%20router%20%22Mercusys%20AC1200%20%28AC10%29%22",
    desc1: "1167 Mbps | 4 Antenas (Alta Ganancia) | Control Parental",
    desc2: "Wi-Fi 5 - Doble Banda",
    price: "$40",
  },
];

// Function to create the HTML template for each smartphone
function generateSmartphone(product) {
  return `
      <div class="catalogue__container image">
        <figure>
          <img
            src="${product.image}"
            alt="${product.name}e"
            class="products"
          />
        </figure>
      </div>
      <div class="catalogue__container product-desc">
        <h2>${product.name}</h2>
        <p>${product.desc1}</p=>
        <p>${product.desc2}</p=>
        <p class="catalogue__container--price">Precio: ${product.price}</p>
        <a
          href="${product.msgUrl}"
          target="_blank"
          class="catalogue__container--buy-button"
          >Comprar</a
        >
      </div>`;
}

// Render the HTML template for each smartphone
function renderHTML(products) {
  const body = document.querySelector("body");

  for (let i = 0; i < products.length; i++) {
    const section = document.createElement("section");
    section.classList.add("catalogue");

    const product = products[i];
    const addHTML = generateSmartphone(product);

    if (i % 2 == 1) {
      section.setAttribute("id", "reversed");
    }

    section.innerHTML = addHTML;
    body.appendChild(section);
  }
}

// Call the renderHTML function
renderHTML(products);
