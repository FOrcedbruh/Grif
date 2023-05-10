// сколько звёзд может быть одновременно на экране
var starsCount = 800;
// на старте массив со звёздами будет пустой
var stars = [];
// класс, на основе которого будут сделаны все звёзды
class Star{
    // конструктор, который вызывается при создании каждого объекта на основе этого класса
    constructor(){
        // у новой звезды будут случайные координаты
        this.x = random(-width, width);
        this.y = random(-height, height);
        // глубина — насколько виртуально близко к экрану появится звезда
        this.z = random(width);
    }
    // метод, который обновляет координаты звезды
    update(){
        // скорость полёта
        var speed = 12;
        // приближаем звезду к краю экрана, уменьшая глубину на значение скорости
        this.z -= speed;
        // если звезда вылетела за край экрана — делаем из неё новую звезду, для этого меняем координаты
        if(this.z < 1){
            this.x = random(-width, width);
            this.y = random(-height, height);
            // для новой звезды вместо старой глубину появления теперь выбираем не случайным образом, а задаём прямо
            this.z = width;
        }
    }

    // метод, который отрисовывает звезду на экране
    drawStar(){
        // каждая звезда — белого цвета
        fill(255);
        // и без контура
        noStroke();

        // с помощью функции map() из библиотеки p5.js получаем новые координаты для отрисовки звезды 
        var sx = map(this.x / this.z, 0, 1, 0, width);
        var sy = map(this.y / this.z, 0, 1, 0, height);

        // чем ближе к краю экрана (чем меньше глубина z) — тем больше радиус 
        var r = map(this.z, 0, width, 10, 0);
        // рисуем звезду в новых координатах и новым размером
        ellipse(sx, sy, r, r);
    }
}

// подготавливаем всё к запуску — то, что написано здесь выполнится автоматически сразу после загрузки
function setup(){
    // создаём холст, на котором будем рисовать
    createCanvas(innerWidth, innerHeight);
    // размещаем сразу все звёзды на холсте
    for (var i = 0; i < starsCount; i++) {
        // каждая новая звезда — объект класса Star и умеет то же самое, что и все остальные звёзды
        stars[i] = new Star();
    }
}

// пока мы не закроем страницу, постоянно будет выполняться функция drw() 
function draw(){
// ставим чёрный фон и указываем скорость обновления фона — чем меньше второе число, тем больший шлейф будут оставлять звёзды
background(0, 180);
// формируем центр экрана, куда «полетим» сквозь звёзды
translate(width/2, height/2);

// отрисовываем каждый раз все звёзды и меняем их положение
for (var i = 0; i < starsCount; i++) {
    stars[i].drawStar();
    stars[i].update();
}
}

// если поменяется размер окна браузера — сразу меняем размер холста
addEventListener('resize', () => {
    resizeCanvas(innerWidth, innerHeight);
})	




// тесты 

let Quiz = {
    question1: "На каких уровнях модели OSI работает межсетевой экран ?",
    answer1: "сетевой/транспортный",
    answer2: "физический/сетевой",
    answer3: "транспортный/канальный",
    answer4: "канальный/прикладной",


    question2: "Самый популярный язык программирования  ? ",
    answer2_1: "JavaScript",
    answer2_2: "C++",
    answer2_3: "GO",
    answer2_4: "Phython",

    question3: " Основной ГОСТ по защите информации  ? ",
    answer3_1: "50577-2018",
    answer3_2: "50922-2006",
    answer3_3: "50462-2009",
    answer3_4: "53114-2008",

    question4: "Основная библиотека JS ? ",
    answer4_1: "VueJS",
    answer4_2: "Lume",
    answer4_3: "React",
    answer4_4: "Phython",
}

let question = document.querySelector('.question p');
let answer_1 = document.querySelector('.answer1 p');
let answer_2 = document.querySelector('.answer2 p');
let answer_3 = document.querySelector('.answer3 p');
let answer_4 = document.querySelector('.answer4 p');

let answerClick = document.querySelectorAll('.ans-clicker');

let counter = 0;


answerClick.forEach(element => {
    element.addEventListener('click', () => {
        counter++;
        Tests();
        });
        
   
});


const StartBtn = document.querySelector('.start button');
const test = document.querySelector('.quiz');

StartBtn.addEventListener('click', () => {
    StartBtn.classList.add('active');
    test.classList.add('active');
});

let Tests = () => {
    if (counter == 0) {
        question.innerHTML = Quiz.question1;
        answer_1.innerHTML = Quiz.answer1;
        answer_2.innerHTML = Quiz.answer2;
        answer_3.innerHTML = Quiz.answer3;
        answer_4.innerHTML = Quiz.answer4;
    };
    if (counter == 1) {
        question.innerHTML = Quiz.question2;
        answer_1.innerHTML = Quiz.answer2_1;
        answer_2.innerHTML = Quiz.answer2_2;
        answer_3.innerHTML = Quiz.answer2_3;
        answer_4.innerHTML = Quiz.answer2_4;
    };
    if (counter == 2) {
        question.innerHTML = Quiz.question3;
        answer_1.innerHTML = Quiz.answer3_1;
        answer_2.innerHTML = Quiz.answer3_2;
        answer_3.innerHTML = Quiz.answer3_3;
        answer_4.innerHTML = Quiz.answer3_4;
    };
    if (counter == 3) {
        question.innerHTML = Quiz.question4;
        answer_1.innerHTML = Quiz.answer4_1;
        answer_2.innerHTML = Quiz.answer4_2;
        answer_3.innerHTML = Quiz.answer4_3;
        answer_4.innerHTML = Quiz.answer4_4;
    };
}





