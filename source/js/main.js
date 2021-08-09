// rellax
var rellax = new Rellax('[data-rellax="true"]');


// search input
var input = document.getElementById('inputSearch');

input.addEventListener("input", function() {
  this.value = this.value[0].toUpperCase() + this.value.slice(1);
});


// tabs
document.querySelectorAll(".trip__tabsBtn").forEach(function(tabsBtn) {
  tabsBtn.addEventListener("click", function(event) {
    const path = event.currentTarget.dataset.path;

    document.querySelectorAll(".trip__contentItem").forEach(function(tabContent) {
      tabContent.classList.remove('is_active');
    });

    document.querySelector(`[data-target="${path}"]`).classList.add("is_active");
  });
});

const tripList = document.querySelectorAll(".trip__tabsBtn");

for (let i=0; i<tripList.length; i++) {
  tripList[i].onclick = function() {
    let j = 0;

    while(j < tripList.length) {
      tripList[j++].className = "trip__tabsBtn";
    };

    tripList[i].className = "trip__tabsBtn is_active";
  };

};

const contentArrowPrev = document.getElementById('arrowPrev');
const contentArrowNext = document.getElementById('arrowNext');

var activeBtn = document.querySelector('.trip__tabsBtn.is_active');

contentArrowPrev.addEventListener('click', function(event) {
  event.preventDefault();
  activeBtn.previousElementSibling.click();
  activeBtn = document.querySelector('.trip__tabsBtn.is_active');
});

contentArrowNext.addEventListener('click', function(event) {
  event.preventDefault();
  activeBtn.nextElementSibling.click();
  activeBtn = document.querySelector('.trip__tabsBtn.is_active');
});


// popup
const popupMain = document.getElementById('popupMain');
const popupMenu = document.getElementById('popupMenu');

const callMenu = document.getElementById('callMenu');

const linkMenu = document.querySelector(".popupMenu__link");
const hero = document.getElementById('hero');
const trip = document.getElementById('trip');
const aboutUs = document.getElementById('aboutUs');
const people = document.getElementById('people');
const footer = document.getElementById('footer');

function menu() {
  popupMenu.classList.toggle('is_active');
  callMenu.classList.toggle('is_active');
};



function scrollMain() {
  popupMenu.classList.toggle('is_active');
  callMenu.classList.toggle('is_active');
}

function scrollTrip() {
  popupMenu.classList.toggle('is_active');
  callMenu.classList.toggle('is_active');
};

function scrollAboutUs() {
  popupMenu.classList.toggle('is_active');
  callMenu.classList.toggle('is_active');
};

function scrollPeople() {
  popupMenu.classList.toggle('is_active');
  callMenu.classList.toggle('is_active');
};

function scrollFooter() {
  popupMenu.classList.toggle('is_active');
  callMenu.classList.toggle('is_active');
};
