const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

// about container
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

// room container
ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interval: 500,
});

// service container
ScrollReveal().reveal(".service__list li", {
  ...scrollRevealOption,
  interval: 500,
  origin: "right",
});

// Инициализация слайдера
let testimonials = document.querySelectorAll('.testimonial');
let prevBtn = document.querySelector('.prevBtn');
let nextBtn = document.querySelector('.nextBtn');
let currentIndex = 0;

// Показываем первый слайд
testimonials[currentIndex].classList.add('active');

// Функция для показа предыдущего слайда
function showPrev() {
  testimonials[currentIndex].classList.remove('active');
  currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
  testimonials[currentIndex].classList.add('active');
}

// Функция для показа следующего слайда
function showNext() {
  testimonials[currentIndex].classList.remove('active');
  currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
  testimonials[currentIndex].classList.add('active');
}


// Добавляем обработчики событий для кнопок управления
prevBtn.addEventListener('click', showPrev);
nextBtn.addEventListener('click', showNext);


// Получаем форму
const contactForm = document.getElementById('contactForm');

// Обработчик отправки формы
contactForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Отменяем стандартное действие формы

  // Получаем значения полей формы
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Выводим значения в консоль
  alert('Ваши данные отправлены! Мы скоро свяжемся с Вами!');
  console.log('Данные контактной формы:');
  console.log('Ваше имя:', name);
  console.log('Ваша почта:', email);
  console.log('Сообщение:', message);

  // Очищаем поля формы
  contactForm.reset();
});
