// JR Figaro Barber Studio — enlaces y menú móvil
const WHATSAPP_NUMBER = "573177712935"; // Código de Colombia + número suministrado.
const MESSAGE = encodeURIComponent("Hola, JR Figaro. Quiero consultar disponibilidad y agendar una cita.");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`;

document.querySelectorAll(".whatsapp-link").forEach((link) => {
  link.href = WHATSAPP_URL;
});

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Abrir menú");
    });
  });
}
