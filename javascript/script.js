const menuBtn = document.getElementById("menu-btn");
const menuList = document.getElementById("menu-list");

menuBtn.addEventListener("click", () => {
  menuList.classList.toggle("active");
  menuBtn.classList.toggle("active");
});

const texto = "Desenvolvedor Web";
const el = document.getElementById("maquina");
const velocidade = 100;

function digitar() {
  let i = 0;
  function type() {
    if (i < texto.length) {
      el.textContent = texto.slice(0, i + 1);
      i++;
      setTimeout(type, velocidade);
    } else {
      setTimeout(() => {
        el.textContent = "";
        i = 0;
        type();
      }, 2000);
    }
  }
  type();
}

digitar();

function enviarWhatsApp(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const mensagem = document.getElementById("mensagem").value;
  const telefone = "5515997072155";

  const texto = `Olá, meu nome é ${nome}. ${mensagem}`;
  const msgFormatada = encodeURIComponent(texto);

  const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

  window.open(url, "_blank");
}

const marquee = document.querySelector(".marquee-track");
const skillsSection = document.querySelector(".skills-marquee");

const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      marquee.style.animationPlayState = "running";
    } else {
      marquee.style.animationPlayState = "paused";
    }
  },
  { threshold: 0.1 }
);

observer.observe(skillsSection);

const btnDarkModeToggle = document.getElementById("btn-dark-mode-toggle");

const sunSvg = `
  <i class="fa-solid fa-sun" style="color:#fff; font-size:18px;"></i>
`;
const moonSvg = `
  <i class="fa-solid fa-moon" style="color:#fff; font-size:18px;"></i>
`;

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const savedTheme = localStorage.getItem("theme");
let currentTheme = savedTheme || (prefersDark ? "dark" : "light");

document.documentElement.setAttribute("data-theme", currentTheme);
btnDarkModeToggle.innerHTML = currentTheme === "dark" ? sunSvg : moonSvg;

btnDarkModeToggle.addEventListener("click", () => {
  currentTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", currentTheme);
  localStorage.setItem("theme", currentTheme);
  btnDarkModeToggle.innerHTML = currentTheme === "dark" ? sunSvg : moonSvg;
});
