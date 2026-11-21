const API_URL = "data/coches.json";

function renderFeaturedCars(cars) {
  const container = document.getElementById("featured-cars");
  if (!container) return;

  const featured = cars.slice(0, 3);
  container.innerHTML = featured.map((car) => `
    <article class="card">
      <h3>${car.marca} ${car.modelo}</h3>
      <p><strong>Motor:</strong> ${car.motor}</p>
      <p><strong>Combustible:</strong> ${car.combustible}</p>
      <p><strong>Precio:</strong> ${car.precio}</p>
      <a href="ficha-coche.html?id=${car.id}" class="text-link">Ver ficha</a>
    </article>
  `).join("");
}

function renderCatalog(cars) {
  const container = document.getElementById("catalogo");
  if (!container) return;

  const searchInput = document.getElementById("searchInput");
  const fuelFilter = document.getElementById("fuelFilter");

  function applyFilters() {
    const term = searchInput ? searchInput.value.toLowerCase() : "";
    const fuel = fuelFilter ? fuelFilter.value : "";

    const filtered = cars.filter((car) => {
      const matchesText =
        car.marca.toLowerCase().includes(term) ||
        car.modelo.toLowerCase().includes(term);

      const matchesFuel = fuel ? car.combustible === fuel : true;

      return matchesText && matchesFuel;
    });

    container.innerHTML = filtered.map((car) => `
      <article class="card">
        <h3>${car.marca} ${car.modelo}</h3>
        <p><strong>Motor:</strong> ${car.motor}</p>
        <p><strong>Consumo:</strong> ${car.consumo}</p>
        <p><strong>Precio:</strong> ${car.precio}</p>
        <a href="ficha-coche.html?id=${car.id}" class="text-link">Ver ficha</a>
      </article>
    `).join("") || "<p>No se han encontrado resultados.</p>";
  }

  if (searchInput) searchInput.addEventListener("input", applyFilters);
  if (fuelFilter) fuelFilter.addEventListener("change", applyFilters);

  applyFilters();
}

function renderCarDetail(car) {
  const container = document.getElementById("ficha-coche");
  if (!container) return;

  container.innerHTML = `
    <div class="car-detail-grid">
      <div>
        <p class="eyebrow">Ficha técnica</p>
        <h1>${car.marca} ${car.modelo}</h1>
        <p>${car.descripcion}</p>
      </div>

      <div>
        <div class="car-meta">
          <div class="meta-item"><strong>Motor</strong><br>${car.motor}</div>
          <div class="meta-item"><strong>Potencia</strong><br>${car.potencia}</div>
          <div class="meta-item"><strong>Consumo</strong><br>${car.consumo}</div>
          <div class="meta-item"><strong>Combustible</strong><br>${car.combustible}</div>
          <div class="meta-item"><strong>Precio</strong><br>${car.precio}</div>
          <div class="meta-item"><strong>Transmisión</strong><br>${car.transmision}</div>
        </div>
      </div>
    </div>
  `;
}

function renderComparador(cars) {
  const selectA = document.getElementById("carA");
  const selectB = document.getElementById("carB");
  if (!selectA || !selectB) return;

  const options = cars.map(car => `<option value="${car.id}">${car.marca} ${car.modelo}</option>`).join("");
  selectA.innerHTML = options;
  selectB.innerHTML = options;

  const defaultA = cars[0];
  const defaultB = cars[1] || cars[0];
  selectA.value = defaultA.id;
  selectB.value = defaultB.id;

  function updateTable() {
    const carA = cars.find(car => car.id === Number(selectA.value));
    const carB = cars.find(car => car.id === Number(selectB.value));

    const mapping = {
      marcaA: carA ? carA.marca : "",
      marcaB: carB ? carB.marca : "",
      modeloA: carA ? carA.modelo : "",
      modeloB: carB ? carB.modelo : "",
      motorA: carA ? carA.motor : "",
      motorB: carB ? carB.motor : "",
      potenciaA: carA ? carA.potencia : "",
      potenciaB: carB ? carB.potencia : "",
      consumoA: carA ? carA.consumo : "",
      consumoB: carB ? carB.consumo : "",
      combustibleA: carA ? carA.combustible : "",
      combustibleB: carB ? carB.combustible : "",
      precioA: carA ? carA.precio : "",
      precioB: carB ? carB.precio : ""
    };

    Object.entries(mapping).forEach(([key, value]) => {
      const el = document.querySelector(`[data-field="${key}"]`);
      if (el) el.textContent = value;
    });

    document.getElementById("colA").textContent = carA ? `${carA.marca} ${carA.modelo}` : "Coche A";
    document.getElementById("colB").textContent = carB ? `${carB.marca} ${carB.modelo}` : "Coche B";
  }

  selectA.addEventListener("change", updateTable);
  selectB.addEventListener("change", updateTable);
  updateTable();
}

function renderMarcaDetalle(cars) {
  const cont = document.getElementById("marca-modelos");
  const title = document.getElementById("marca-titulo");
  if (!cont || !title) return;

  const params = new URLSearchParams(window.location.search);
  const marca = params.get("marca") || "Toyota";

  title.textContent = marca;

  const marcaCars = cars.filter(car => car.marca === marca);
  cont.innerHTML = marcaCars.map((car) => `
    <article class="card">
      <h2>${car.marca} ${car.modelo}</h2>
      <p>${car.motor}</p>
      <p><strong>Precio:</strong> ${car.precio}</p>
      <a href="ficha-coche.html?id=${car.id}" class="text-link">Ver ficha</a>
    </article>
  `).join("") || "<p>No hay modelos disponibles para esta marca.</p>";
}

function initMenu() {
  const btn = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (!btn || !nav) return;

  btn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(isOpen));
  });
}

function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const asunto = document.getElementById("asunto").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    const acepto = document.getElementById("acepto").checked;
    const msg = document.getElementById("formMessage");

    if (!nombre || !email || !asunto || !mensaje || !acepto) {
      msg.textContent = "Revisa los campos: falta información o hay datos no válidos.";
      msg.className = "form-message error";
      return;
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      msg.textContent = "Introduce un correo electrónico válido.";
      msg.className = "form-message error";
      return;
    }

    msg.textContent = "Formulario validado. Esta versión de AutoData es una demo educativa.";
    msg.className = "form-message success";
    form.reset();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initMenu();
  initContactForm();

  fetch(API_URL)
    .then(response => response.json())
    .then(cars => {
      renderFeaturedCars(cars);
      renderCatalog(cars);
      renderComparador(cars);

      const currentPage = location.pathname.split("/").pop();

      if (currentPage === "marca-detalle.html") {
        renderMarcaDetalle(cars);
      }

      if (currentPage === "ficha-coche.html") {
        const params = new URLSearchParams(window.location.search);
        const id = Number(params.get("id"));
        const car = cars.find(item => item.id === id) || cars[0];
        renderCarDetail(car);
      }
    })
    .catch((error) => {
      console.error("Error al cargar datos:", error);
    });
});