import { renderHTML } from "./template.js";

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
  {
    name: "Mercusys AC1200 (MR30G)",
    image: "/img/catalogue/network/MR30G.png",
    msgUrl:
      "https://wa.me/584244235920?text=Quiero%20comprar%20el%20router%20%22Mercusys%20AC1200%20%28MR30G%29%22",
    desc1: "1.2 Gbps | 4 Antenas | Puertos Gigabit | MU-MIMO",
    desc2: "Wi-Fi 5, Doble Banda",
    price: "$45",
  },
  {
    name: "Mercusys AX1500 (MR60X v2)",
    image: "/img/catalogue/network/MR60X.png",
    msgUrl:
      "https://wa.me/584244235920?text=Quiero%20comprar%20el%20router%20%22Mercusys%20Ax1500%20%28MR60X%29%22",
    desc1: "1.5 Gbps | 4 Antenas (Alta Ganancia) | WPA3 (Seguridad máxima)",
    desc2: "<strong>Wi-Fi 6</strong> - Doble Banda",
    price: "$60",
  },
  {
    name: "Mercusys AX1800 (MR70X)",
    image: "/img/catalogue/network/MR70X.png",
    msgUrl:
      "https://wa.me/584244235920?text=Quiero%20comprar%20el%20router%20%22Mercusys%20Ax1800%20%28MR70X%29%22",
    desc1: "1.8 Gbps | 4 Antenas (Beamforming) | Protección WPA3 | TWT",
    desc2: "Wi-fi 6, Doble Banda, Full Gigabit",
    price: "$75",
  },
  {
    name: "Mercusys AC1200 (Extensor - ME30)",
    image: "/img/catalogue/network/ME30.png",
    msgUrl:
      "https://wa.me/584244235920?text=Quiero%20comprar%20el%20router%20%22Mercusys%20AC1200%20%28Extensor%20-%20ME30%29%22",
    desc1: "1.2 Gbps | 2 Antenas | Indicadores LED | Máxima Compatibilidad",
    desc2: "Wi-Fi 5, Doble Banda",
    price: "$40",
  },
  {
    name: "Mercusys MW300D (Modem-Router)",
    image: "/img/catalogue/network/MW300D.png",
    msgUrl:
      "https://wa.me/584244235920?text=Quiero%20comprar%20el%20router%20%22Mercusys%20MW300D%20%28Modem-Router%29%22",
    desc1: "300 Mbps | 2 Antenas | 2.4 GHz | ADSL2",
    desc2: "Wi-Fi 4 | CANTV",
    price: "$35",
  },
  {
    name: "Mercusys SWITCH",
    image: "/img/catalogue/network/switch.png",
    msgUrl:
      "https://wa.me/584244235920?text=Quiero%20comprar%20el%20router%20%22Switch%20de%20escritorio%20%28Mercusys%29%22",
    desc1:
      "<strong>Full Gigabit</strong> | Red cableada | Ahorro de energia 82%",
    desc2: "5 Puertos | No requiere configuracion",
    price: "$20",
  },
  {
    name: "Mini UPS OLAX (POE-03)",
    image: "/img/catalogue/network/Mini-UPS-olax.png",
    msgUrl:
      "https://wa.me/584244235920?text=Quiero%20comprar%20el%20router%20%22Switch%20de%20escritorio%20%28Mercusys%29%22",
    desc1: "Protector de corriente | Power Bank | Fuente ininterrumpida",
    desc2: "<strong>10.000 mAh</strong> | Puertos 5V, 8V, 12V",
    price: "$40",
  },
  {
    name: "Adaptador Wi-Fi (TP-LINK)",
    image: "/img/catalogue/network/t2u-wifi.png",
    msgUrl:
      "https://wa.me/584244235920?text=Quiero%20comprar%20el%20router%20%22Adaptador%20Wi-Fi%20%28TP-LINK%29%22",
    desc1: "600 Mbps 2.4 Ghz | 433 Mpbs 5 Ghz | Windows/Mac OS",
    desc2: "Receptor Doble Banda | Seguridad avanzada",
    price: "$20",
  },
];

// Function to create the HTML template for each smartphone
function generateProduct(product) {
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

// Call the renderHTML function
renderHTML(generateProduct, products);
