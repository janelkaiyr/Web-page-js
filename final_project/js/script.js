

function progressBar() {

    let scroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = scroll / height * 100;
    document.querySelector('.progress-bar').style.width = scrolled + '%';
}
window.addEventListener('scroll', progressBar);



function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: "smooth"
    })
}


//go to top button 

const goTopBtn = document.querySelector(".go-top");
goTopBtn.addEventListener("click", goTop);

function trackScroll() {

    const scrolled = window.pageYOffset;
    const coords = document.documentElement.clientHeight;
    if (scrolled > coords) {
        goTopBtn.classList.add("go-top__show");
    } else {

        goTopBtn.classList.remove("go-top__show");
    }
}

function goTop() {

    if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(goTop, 0);
    }
}
//news-page animation-scroll

const scrollItems = document.querySelectorAll('.news-page__block-animation');

const scrollAnimation = () => {
    let windowCenter = (window.innerHeight / 2) + window.scrollY;

    scrollItems.forEach(el => {
        let scrollOffset = el.offsetTop;
        if (windowCenter >= scrollOffset) {
            el.classList.add('show');
        } else {
            el.classList.remove('show');
        }
    });
};


scrollAnimation();
window.addEventListener('scroll', () => {
    trackScroll();
    scrollAnimation();
});

const nav = document.querySelectorAll('a[href*="#"]')

for (let navigation of nav) {
    navigation.addEventListener('click', function (event) {

        event.preventDefault();
        const blockid = navigation.getAttribute('href')

        document.querySelector('' + blockid).scrollIntoView({
            behavior: "smooth",
            block: "center"
        })

    });
}

//testimonials-page 

const slider = document.querySelector('.testimonials-page__slider');
const sliderItems = Array.from(slider.children);
const btnNext = document.querySelector('#testimonials-page__btnNext');
const btnPrev = document.querySelector('#testimonials-page__btnPrev');

sliderItems.forEach(function (slide, index) {

    if (index !== 0) slide.classList.add('hidden');

    slide.dataset.index = index;
    sliderItems[0].setAttribute('data-active', '');
});

btnNext.addEventListener('click', function () {
    showNextSlide('next');
});
btnPrev.addEventListener('click', function () {
    showNextSlide('prev');
});


function showNextSlide(direction) {

    const currentSlide = slider.querySelector('[data-active]');
    const currentSlideIndex = +currentSlide.dataset.index;
    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');

    let nextSlideIndex;
    if (direction === 'next') {
        nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
    } else if (direction === 'prev') {
        nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
    }

    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', '');
}



// footer -page 
const year = new Date();
const now = year.getFullYear();
document.querySelector('.copyright__year').innerHTML = year.getFullYear();



function diffSubtract(date1, date2) {
    return date2 - date1;
}

let new_year = new Date(2024, 0, 1, 0, 0, 0, 0)

timer = setInterval(function () {
    let now = new Date();
    let left = diffSubtract(now, new_year);

    if (left <= 0) {
        clearInterval(timer);
        alert("Happy New Year!!!");
    } else {
        let res = new Date(left);
        document.querySelector(".copyright__new-year").innerHTML =
            `До нового года осталось ${res.getUTCMonth()} месяцев, ${res.getUTCDate() - 1}  дней, ${res.getUTCHours()} часов, ${res.getUTCMinutes()}минут и ${res.getUTCSeconds()} секунд  `;

    }
}, 1000)
