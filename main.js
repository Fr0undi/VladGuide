// Слайдеры
$(document).ready(function(){
  $(document).ready(function(){
    $('.slider').slick({
      autoplaySpeed: 1500,
      arrows: false,
      pauseOnHover: false,
    });
  
    // Добавление обработчиков событий для начала и остановки слайдера при наведении мыши
    $('.slider').on('mouseenter', function(){
      $(this).slick('slickPlay');
    }).on('mouseleave', function(){
      $(this).slick('slickPause');
    });
  });

  $('.travelers__slider').slick({
    pauseOnHover: false,
    nextArrow: '<button class="arrow-right"><img src="main/travelers/arrow-right.svg" alt=""></button>',
    prevArrow: false,
    responsive: [
      {
        breakpoint: 1921,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 321,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
}); 

// Карта
let locationBtn = document.querySelector('.catalog-btn');
let map = document.querySelector('.iframe');
locationBtn.addEventListener('click', function() {
  map.classList.toggle('hidden');
});

let catalogItems = document.querySelectorAll('.catalog__box-item');
let loadmoreNormalBtns = document.querySelectorAll('.loadmore--normal');
let loadmoreNormalFirst = loadmoreNormalBtns[0];
let loadmoreNormalSecond = loadmoreNormalBtns[1];
let loadmoreMobileBtns = document.querySelectorAll('.loadmore--mobile');
let loadmoreMobileFirst = loadmoreMobileBtns[0];
let loadmoreMobileSecond = loadmoreMobileBtns[1];
let loadmoreMobileThird = loadmoreMobileBtns[2];
let loadmoreMobileFourth = loadmoreMobileBtns[3];

// Первая кнопка "Показать ещё" для 1280px
loadmoreNormalFirst.addEventListener('click', function(){
  catalogItems.forEach((item) => {
    for (let i = 6; i <= 17; i++) {
      catalogItems[i].classList.remove('hidden');
      window.dispatchEvent(new Event('resize'));
      loadmoreNormalFirst.classList.add('hidden');
    }
  })
});

// Фильтры
let buttonBridge = document.querySelector('.btn-bridge');
let buttonOther = document.querySelector('.btn-other');
let buttonHill = document.querySelector('.btn-hill');
let buttonFortress = document.querySelector('.btn-fortress');
let buttonStreets = document.querySelector('.btn-streets');
let buttonMonument = document.querySelector('.btn-monument');
let buttonChurches = document.querySelector('.btn-churches');
let buttonMuseum = document.querySelector('.btn-museum');
let buttonEmbankment = document.querySelector('.btn-embankment');
let buttonAll = document.querySelector('.btn-all');
let images = document.querySelectorAll('.img');

// Фильтр. Кнопка "Памятники"
buttonMonument.addEventListener('click', function() {
  catalogItems.forEach((item) => {
    item.classList.add('hidden');
  });
  
  catalogItems.forEach((item) => {
    if (item.classList.contains('monument')) {
      item.classList.remove('hidden');
    }
    loadmoreNormalFirst.remove();
    loadmoreNormalSecond.remove();
  });
});

// Фильтр. Кнопка "Мосты"
buttonBridge.addEventListener('click', function() {
  catalogItems.forEach((item) => {
    item.classList.add('hidden');
  });
  
  catalogItems.forEach((item) => {
    if (item.classList.contains('bridge')) {
      item.classList.remove('hidden');
    }
    loadmoreNormalFirst.remove();
    loadmoreNormalSecond.remove();
  });
});

// Фильтр. Кнопка "Улицы"
buttonStreets.addEventListener('click', function() {
  catalogItems.forEach((item) => {
    item.classList.add('hidden');
  });
  
  catalogItems.forEach((item) => {
    if (item.classList.contains('streets')) {
      item.classList.remove('hidden');
    }
    loadmoreNormalFirst.remove();
    loadmoreNormalSecond.remove();
  });
});

// Фильтр. Кнопка "Крепости"
buttonFortress.addEventListener('click', function() {
  catalogItems.forEach((item) => {
    item.classList.add('hidden');
  });
  
  catalogItems.forEach((item) => {
    if (item.classList.contains('fortress')) {
      item.classList.remove('hidden');
    }
    loadmoreNormalFirst.remove();
    loadmoreNormalSecond.remove();
  });
});

// Фильтр. Кнопка "Сопки"
buttonHill.addEventListener('click', function() {
  catalogItems.forEach((item) => {
    item.classList.add('hidden');
  });
  
  catalogItems.forEach((item) => {
    if (item.classList.contains('hill')) {
      item.classList.remove('hidden');
    }
    loadmoreNormalFirst.remove();
    loadmoreNormalSecond.remove();
  });
});

// Фильтр. Кнопка "Соборы, церкви"
buttonChurches.addEventListener('click', function() {
  catalogItems.forEach((item) => {
    item.classList.add('hidden');
  });
  
  catalogItems.forEach((item) => {
    if (item.classList.contains('churches')) {
      item.classList.remove('hidden');
    }
    loadmoreNormalFirst.remove();
    loadmoreNormalSecond.remove();
  });
});

// Фильтр. Кнопка "Музеи"
buttonMuseum.addEventListener('click', function() {
  catalogItems.forEach((item) => {
    item.classList.add('hidden');
  });
  
  catalogItems.forEach((item) => {
    if (item.classList.contains('museum')) {
      item.classList.remove('hidden');
    }
    loadmoreNormalFirst.remove();
    loadmoreNormalSecond.remove();
  });
});

// Фильтр. Кнопка "Набережные"
buttonEmbankment.addEventListener('click', function() {
  catalogItems.forEach((item) => {
    item.classList.add('hidden');
  });
  
  catalogItems.forEach((item) => {
    if (item.classList.contains('embankment')) {
      item.classList.remove('hidden');
    }
    loadmoreNormalFirst.remove();
    loadmoreNormalSecond.remove();
  });
});

// Фильтр. Кнопка "Прочее"
buttonOther.addEventListener('click', function() {
  catalogItems.forEach((item) => {
    item.classList.add('hidden');
  });
  
  catalogItems.forEach((item) => {
    if (item.classList.contains('other')) {
      item.classList.remove('hidden');
    }
    loadmoreNormalFirst.remove();
    loadmoreNormalSecond.remove();
  });
});

// Фильтр. Кнопка "Все"
buttonAll.addEventListener('click', function() {
  catalogItems.forEach((item) => {
    item.classList.add('hidden');
  });
  
  catalogItems.forEach((item) => {
    item.classList.remove('hidden');
    loadmoreNormalFirst.remove();
    loadmoreNormalSecond.remove();
  });
});