const rememberToggle = document.querySelector('.toggle');
const toggleRunner = document.querySelector('.toggle-runner');
const rememberToggleDop = document.querySelector('.dopToggle');
const toggleRunnerDop = document.querySelector('.dopToggleRunner');
const goToLogin = document.querySelector('#goToLogin');
const login = document.querySelector('.log-in');
const loginForm = document.querySelector('.login-form');
const signupForm = document.querySelector('.signup-form');
const HeaderWindowSignUp = document.querySelector('.login-window .header-window');
const logBtn = document.querySelector('#log-btn');
const signBtn= document.querySelector('#sign-btn');
const eye = document.querySelectorAll('.eye');
const password_1 = document.querySelector('#pass_1');
const closeLogin = document.getElementById('close');
const modalMenu = document.querySelector('.modal');
const wrapper = document.querySelector('.wrapper');
const body = document.querySelector('body');
const header = document.querySelector('header');
const password_2 = document.querySelector('#password_2');


// ползунок в окне авторизации

rememberToggle.addEventListener('click', () => {
    rememberToggle.classList.toggle('active');
    toggleRunner.classList.toggle('active');

});
rememberToggleDop.addEventListener('click', () => {
    rememberToggleDop.classList.toggle('active');
    toggleRunnerDop.classList.toggle('active');

});


// анимация переключения логин на  сайнап

goToLogin.addEventListener('click', () => {
    login.classList.add('active');
    loginForm.classList.add('active');
    HeaderWindowSignUp.classList.add('scale-active');
})


closeLogin.addEventListener('click', ()=> {
    login.classList.remove('active');
    loginForm.classList.remove('active');
    HeaderWindowSignUp.classList.remove('scale-active');
})

window.addEventListener('keydown', (e) => {
   if (e.code === "Escape") {
    login.classList.remove('active');
    loginForm.classList.remove('active');
    HeaderWindowSignUp.classList.remove('scale-active');
   }
})

logBtn.addEventListener('click', () => {
    loginForm.classList.add('scale_0');
    signupForm.classList.add('active');
});
signBtn.addEventListener('click', () => {
    loginForm.classList.remove('scale_0');
    signupForm.classList.remove('active');
});

// просмотр пароля по клику

eye.forEach(e => {
    e.addEventListener('click', () => {
        let passwordType_1 = password_1.getAttribute("type");
        if (passwordType_1 === "password") {
            e.setAttribute('name', 'eye-off-outline');
            password_1.setAttribute('type', 'text');
            password_2.setAttribute('type', 'text');
        }
        else {
            password_1.setAttribute('type', 'password');
            password_2.setAttribute('type', 'password');
            e.setAttribute('name', 'eye-outline');
        }
        
    });
})




// анимация для menu-bar и модального окна

const burger = document.querySelector('.menu-bar'),
    lines = document.querySelectorAll('.lines');


burger.addEventListener('click', () => {
    lines.forEach(e => {
        e.classList.toggle('active');
    })
    modalMenu.classList.toggle('active');
    settingsContainer.classList.remove('active');
});
const logo = document.querySelector('.logo');

window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;
    header.classList.add('active');
    logo.classList.add('active');
    if (scrollTop === 0) {
        logo.classList.remove('active');
    }
})

// обсервер

let options = {
    root: null,
    rootMargin: "5px",
    threshold: 0.2,
  };

  let callback = function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('intersecting');
        }
    })
  };
  
  let observer = new IntersectionObserver(callback, options);


  let targets = document.querySelectorAll('.obs');
  targets.forEach(target => {
    observer.observe(target);
  })

// начтройки для новостей

  let firstNew = document.querySelector('.first-new p');
  let secondNew = document.querySelector('.second-new p');
  let thirdNew = document.querySelector('.third-new p');
  let firstNewOpenTitle = document.querySelector('#firstNewTitle');
  let secondNewOpenTitle = document.querySelector('#secondNewTitle');
  let thirdNewOpenTitle = document.querySelector('#thirdNewTitle');
  

  firstNewOpenTitle.innerHTML = firstNew.innerHTML;
  secondNewOpenTitle.innerHTML = secondNew.innerHTML;
  thirdNewOpenTitle.innerHTML = thirdNew.innerHTML;



  const newsOpenContainer = document.querySelector('div.news-open');
  const news = document.querySelector('.first-small-top-section');
  const newsOpenBack = document.querySelector('.news-open-back');


  news.addEventListener('click', () => {
    newsOpenContainer.classList.add('open');
  });

  newsOpenBack.addEventListener('click', () => {
    newsOpenContainer.classList.remove('open');
  });
 window.addEventListener('keydown', (e) => {
    if (e.code === "Escape") {
        newsOpenContainer.classList.remove('open');
    }
  });

// настройка для музыки


let audio = document.getElementById('audio');

document.addEventListener('keydown', (e) => {
    if (e.key === "`") {
        audio.play();
    }
    
    if (e.key === "~") {
        audio.pause();
    }
});


// громкость музыки 


let plusVolume = document.getElementById('plus');
let minusVolume = document.getElementById('minus');


plusVolume.addEventListener('click', () => {
    audio.volume += 0.2;
});
minusVolume.addEventListener('click', () => {
    audio.volume -= 0.2;
});


// modal settings 



let settings = document.getElementById('settings');
let settingsContainer = document.querySelector('.settings');

settings.addEventListener('click', () => {
    settingsContainer.classList.toggle('active');
})


// тема 


let themeSwitch = document.querySelector('.theme-switch');
let moon = document.getElementById('moon');
let sun = document.getElementById('sun');

themeSwitch.addEventListener('click', () => {
    sun.classList.toggle('active');
    moon.classList.toggle('active');
    
});













