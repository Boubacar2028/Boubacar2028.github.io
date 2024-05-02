

let myVar = "ma variable";
myVar = "variable changée";

const myVar2 = "ma variable 2";


let isTrue = true;
let isFalse = false;



let chiffre1 = 4;
let chiffre2 = 3;


let test = 'test ' + myVar + 'value';
let test2 = `test ${myVar} dzqdqzd `;



let array = ['item 1', 'item 2', 'item 3', 'item 4'];


let obj = {
  title: 'Mon titre',
  description: 'Ma description'
}


const myFunction = (item, item2) => {
  // console.log(item, item2);
}

myFunction('toto', 5);
myFunction('tata', 6);

const calcul = (nb1, nb2) => {
  return nb1 + nb1;
}

let result = calcul(4, 5);


let div = document.createElement('div');
div.classList.add('top');
div.innerHTML = `<span>Top zone</span>`;


function menuMobile() {
  const btn = document.querySelector('.burger');
  const header = document.querySelector('.header');
  const links = document.querySelectorAll('.navbar a');

  btn.addEventListener('click', () => {
    header.classList.toggle('show-nav');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      header.classList.remove('show-nav');
    });
  });
}

menuMobile();



// effets

const observerIntersectionAnimation = () => {
  const sections = document.querySelectorAll('section');
  const skills = document.querySelectorAll('.skills .bar');

  sections.forEach((section, index) => {
    if (index === 0) return;
    section.style.opacity = "0";
    section.style.transition = "all 1.6s";
  });

  skills.forEach((elem, index) => {

    elem.style.width = "0";
    elem.style.transition = "all 1.6s";
  });

  let sectionObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let elem = entry.target;
        elem.style.opacity = 1;
      }
    });
  });

  sections.forEach(section => {
    sectionObserver.observe(section);
  });

  let skillsObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let elem = entry.target;
        elem.style.width = elem.dataset.width + '%';
      }
    });
  });

  skills.forEach(skill => {
    skillsObserver.observe(skill);
  });
}

observerIntersectionAnimation();

