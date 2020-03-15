
export function slider() {


    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    prevBtn.addEventListener('click', () => {
        let current = document.querySelector('.current');
        if (current.previousElementSibling) {

            current.previousElementSibling.classList.add('current');

        } else {


            slides[slides.length - 1].classList.add('current');
        }
        setTimeout(() => current.classList.remove('current'), 0)


    });

    nextBtn.addEventListener('click', () => {

        let current = document.querySelector('.current');

        if (current.nextElementSibling) {
            current.nextElementSibling.classList.add('current');

        } else {


            slides[0].classList.add('current');
        }
        setTimeout(() => current.classList.remove('current'), 0)
    });

    function autoCarousel(){
        let current = document.querySelector('.current');
        if (current.nextElementSibling) {
            current.nextElementSibling.classList.add('current');

        } else {
            slides[0].classList.add('current');
        }
        setTimeout(() => current.classList.remove('current'), 0)
    }

    setInterval(autoCarousel, 5000);

}