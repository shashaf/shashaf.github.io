/********скрипт-приветствие*/ 
let greetings = document.getElementById('greetings'); //получение элемента, содержащего текст приветствия

let timeOfDay = getTimeOfDay() //запись сообщения, подобранного в зависимости от времени суток в переменную
greetings.innerHTML = greetings.innerHTML + timeOfDay; //помещение текста сообщения на страницу
function getTimeOfDay() { //функция получения времени суток, возвращающее один из вариантов текстового сообщения
    let message = "";
    let today = new Date();
    let hours = today.getHours();
    if (hours > 23 || hours < 7)
        message = "night?.. Let me check. Oh yes, it's night. You should go to sleep, check my site later!"
    else if (hours > 6 && hours <12)
        message = "morning?.. Let me check. Oh yes, it's morning. Good morning, have a nice day!"
    else if (hours > 11 && hours < 19)
        message = "afternoon?.. Let me check. Oh yes, it's afternoon now. Good afternoon, take a break if you're tired from work!"
    else if (hours > 18 && hours < 24)
        message = "evening?.. Let me check. Oh yes, it's evening. Good evening, I hope you had a good day!"
    return message;
}

/***************скрипт-обработка нажатия на изображение в F.A.Q.********************/
let mglvn = document.getElementById('megalo'); //запись аудиофрагмента в переменную
let sans = document.getElementById('sans'); //запись изображения в переменную

function changeImage (image, path){ //скрипт смены изображения на указанное
    image.src = path  
}

sans.addEventListener('click', function duDuduDu() { //обработка события клика клавиши мыши
    sans.src = "images/sansheadwithouteyes.png" //смена изображения на другое
    mglvn.play(); //воспроизведение аудиофрагмента
    setTimeout(changeImage, 1000, sans, "images/sansheadwitheyes.png"); //восстановление исходного изображения с задержкой
})

/***************скрипт-галерея********************/
let pictures = ["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg"] // массив картинок
let to = 0;  // Счетчик, указывающий на текущую картинку

function right_arrow() { // Открытие следующей картинки(движение вправо)
    let obj = document.getElementById("img"); 
    if (to < pictures.length-1) //если сейчас показывается не последняя картинка, показываем следующую
        to++ 
    else //если сейчас показывается последняя картинка, показываем первую
        to = 0;
    obj.src = pictures[to];	//отображаем новую картинку 
}

function left_arrow() {// Открытие предыдущей картинки (движение влево) 
    let obj = document.getElementById("img");
    if (to > 0) //если сейчас показывается не первая картинка, показываем предыдующую
        to--;
    else //если сейчас показывается первая картинка, показываем последнюю
        to = pictures.length-1;
    obj.src = pictures[to];	//отображаем новую картинку  			 
}

let autoOn = false;
function auto() { 
    autoOn = !autoOn; //включение/выключение автоматического переключения
    if (autoOn == true) //если автоматический режим включен
        interval = setInterval(right_arrow, 3000) //меняем картинки с интервалом в 3 секунды
    else { //если автоматический режим выключен
        clearInterval(interval); //останавливаем вызов функции в интервале
    }
}
/***************скрипт-обратный отсчёт до даты********************/
function getNumberOfDays(start, end) { //функция подсчёта разницы между датами в днях
    let date1 = new Date(start);
    let date2 = new Date(end);

    // один день в миллисекундах
    let oneDay = 1000 * 60 * 60 * 24;

    // Расчёт времени между датами в миллисекундах
    let diffInTime = date2.getTime() - date1.getTime();

    // Расчёт времени в днях
    let diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
}
let days = document.getElementById('days'); //запись элемента для хранения числа дней в переменную

currentDay = new Date() //текущая дата
possibleReleaseDate = new Date("07/09/2023"); //конечная дата

let daysLeft = getNumberOfDays(currentDay, possibleReleaseDate); //запись разницы между датами в днях в переменную
days.style.color = "yellow"; //стилизация счетчика, покраска в желтый цвет
days.innerHTML = days.innerHTML + daysLeft; //вывод разницы на страницу

/***************мини-игра "поиграй с песиком"********************/
let dog = document.getElementById('dog'); //запись элемента изображения собачки в переменную
let wof = document.getElementById('wof'); //запись звукового фрагмента в переменную
let dogTired = 0; //переменная для отслеживания числа кликов по собачке
let startX = dog.style.left; //запоминание изначальной позиции изображения
let startY = dog.style.top;

dog.addEventListener('click', function petTheDog() { //обработка события клика клавишей мыши по изображению собаки
        if (dogTired < 5) { //если "собака не устала" (кликов было меньше 5)
            if (window.innerWidth > 600) { //если макет страницы имеет стандартный вид
                dog.style.left = Math.floor(Math.random() * (10 - 1 + 1) + 10)+ "px"; //местоположение собаки меняется
                dog.style.top = Math.floor(Math.random() * (150 - 1 + 1) + 10)+ "px";   
            }
            else {
                dog.style.left = startX; //собака занимает положение по умолчанию
                dog.style.top = startY;
            }
            wof.play(); //звук воспроизводится
            dogTired ++; //собака "устает" (записывается 1 клик)
        }
        else { //если собака устала, она занимает положение по умолчанию
            dog.style.left = startX; 
            dog.style.top = startY;
            changeImage(dog, "images/sleepingdog.jpg"); //и элемент меняет изображение на спящую собаку
        }
    
})

