import { renderHTML } from "./template.js";

// Variables
let products = [
  {
    name: "Tecno Spark GO 2024",
    image: "/img/catalogue/smartphones/spark-2024.png",
    msgUrl:
      "https://wa.me/584244235920?text=Quiero%20comprar%20el%20smartphone%20%22Tecno%20Spark%20GO%2024%22",
    infoScreen: "IPS LCD 6.6&#34;, 90Hz",
    infoStorage: "3GB RAM | 64GB",
    infoAndroidVer: "Android 13 (Go Edition), HIOS 13",
    infoChipset: "Unisoc T606 - Octa-Core 1.8Ghz",
    infoCamera: "Trasera: 13MP | Frontal: 8MP",
    price: "$82",
  },
  {
    name: "Tecno Spark 10C",
    image: "/img/catalogue/smartphones/spark-10c.png",
    msgUrl:
      "https://wa.me/584244235920?text=Quiero%20comprar%20el%20smartphone%20%22Tecno%20Spark%2010C%22",
    infoScreen: "IPS LCD, 90Hz",
    infoStorage: "8GB RAM | 128GB",
    infoAndroidVer: "Android 12, HIOS 8.6",
    infoChipset: "Unisoc T606 (12nm) - Octa-Core 1.8Ghz",
    infoCamera: "Trasera: 16MP | Frontal: 8MP",
    price: "$105",
  },
  {
    name: "Tecno Spark 10 PRO",
    image: "/img/catalogue/smartphones/spark-10-pro.png",
    msgUrl:
      "https://wa.me/584244235920?text=Quiero%20comprar%20el%20smartphone%20%22Tecno%20Spark%2010%20PRO%22",
    infoScreen: "IPS LCD, 90Hz",
    infoStorage: "8GB RAM | 256GB",
    infoAndroidVer: "Android 13, HIOS 12.6",
    infoChipset: "Mediatek MT6769H Helio G88 (12nm) - Octa-Core 2.0Ghz",
    infoCamera: "Trasera: 50MP & 0.08MP | Frontal: 32MP",
    price: "$120",
  },
  {
    name: "Infinix Smart 7",
    image: "/img/catalogue/smartphones/smart-7.png",
    msgUrl:
      "https://wa.me/584244235920?text=Quiero%20comprar%20el%20smartphone%20%22Infinix%20Smart%207%22",
    infoScreen: "6.6&#34, IPS LCD, 500 nits (Brillo), HD&plus;",
    infoStorage: "4GB RAM | 64GB",
    infoAndroidVer: "Android 12, XOS 12",
    infoChipset: "Mediatek Helio A22",
    infoCamera: "Trasera: 13mp | Frontal: 5MP",
    price: "$92",
  },
  {
    name: "Infinix Smart 8",
    image: "/img/catalogue/smartphones/smart-8.png",
    msgUrl:
      "https://wa.me/584244235920?text=Quiero%20comprar%20el%20smartphone%20%22Infinix%20Smart%208%22",
    infoScreen: "IPS LCD, 90Hz, 500 nits (Brillo)",
    infoStorage: "4GB RAM | 64GB",
    infoAndroidVer: "Android 13",
    infoChipset: "Unisoc T610 (12nm)",
    infoCamera: "Trasera: 13mp & 0.08MP | Frontal: 8MP",
    price: "$92",
  },
  {
    name: "Infinix Hot 30i",
    image: "/img/catalogue/smartphones/hot-30i.png",
    msgUrl:
      "https://wa.me/584244235920?text=Quiero%20comprar%20el%20smartphone%20%22Infinix%20Hot%2030i%22",
    infoScreen: "6.56&#34, IPS LCD, 90Hz, 500 nits (Brillo)",
    infoStorage: "4GB RAM | 128GB",
    infoAndroidVer: "Android 12, XOS 10.6",
    infoChipset: "Unisoc T610 (12nm), Octa-Core 1.6Ghz",
    infoCamera: "Trasera: 13mp & 0.08MP | Frontal: 8MP",
    price: "$95",
  },
  {
    name: "Samsung Galaxy A04S",
    image: "/img/catalogue/smartphones/galaxy-a04s.png",
    msgUrl:
      "https://wa.me/584244235920?text=Quiero%20comprar%20el%20smartphone%20%22Samsung%20Galaxy%20A04S%22",
    infoScreen: "6.5&#34, PLS LCD, 90Hz, 400 nits, HD&plus;",
    infoStorage: "4GB RAM | 64GB",
    infoAndroidVer: "Android 12, One UI Core 5",
    infoChipset: "Exynos 850 (8nm), Octa-Core 2.0Ghz",
    infoCamera: "Trasera: 50mp, 2mp & 2mp | Frontal: 5MP",
    price: "$140",
  },
  {
    name: "BLU G51S",
    image: "/img/catalogue/smartphones/blu-g51s.png",
    msgUrl:
      "https://wa.me/584244235920?text=Quiero%20comprar%20el%20smartphone%20%22BLU%20G51S%22",
    infoScreen: "6.4&#34, IPS TFT, HD&plus;",
    infoStorage: "2GB RAM | 32GB",
    infoAndroidVer: "Android 11 (GO edition)",
    infoChipset: "Unisoc SC9863A, Octa-Core 1.6Ghz",
    infoCamera: "Trasera: 13mp & 0.3mp | Frontal: 8mp",
    price: "$65",
  },
];

// Function to create the HTML template for each smartphone
function generateProduct(product) {
  return `
      <div class="catalogue__container image">
        <figure>
          <img
            src="${product.image}"
            alt="${product.name}"
            class="smartphones"
          />
        </figure>
      </div>
      <div class="catalogue__container product-desc">
        <h2>${product.name}</h2>
        <p class="spec">${product.infoScreen}</p>
        <p class="spec">${product.infoStorage}</p>
        <p class="spec">${product.infoAndroidVer}</p>
        <p class="spec">${product.infoChipset}</p>
        <p class="spec">${product.infoCamera}</p>
        <p class="catalogue__container--price">Precio: ${product.price}</p>
        <a
          href="${product.msgUrl}"
          target="_blank"
          class="catalogue__container--buy-button"
          >Comprar</a
        >
      </div>`;
}

// Call the renderHTML function
renderHTML(generateProduct, products);
