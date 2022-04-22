$(function () {
    $('.top-slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt=""></button>',
        dots: true
    });
    $('.slider-promotions').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left2.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right2.svg" alt=""></button>',
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 810,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });
    $('.slider-news').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left2.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right2.svg" alt=""></button>',
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 905,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    //video
    let video = document.querySelector(".section-reviews__video");
    video.addEventListener("click", function () {
        document.getElementById('vidwrap').innerHTML = '<iframe width="100%" height="100%" src="https://www.youtube.com/watch?v=z5LhGH4j3JM" frameborder="0"></iframe>';
    })

    //accordion

    let accordionItems = document.querySelectorAll('.accordion-questions__header');

    for (let i = 0; i < accordionItems.length; i++) {
        accordionItems[i].addEventListener('click', function () {
            accordionItems[i].classList.toggle('active');

            let blockId = accordionItems[i].getAttribute('data-collapse');
            console.log(blockId);
            document.querySelector(blockId).classList.toggle('active');
        })

    }

    //menu 

    let btnMenu = document.querySelector('.btn-menu');
    let popupMenu = document.querySelector('.popup-menu');
    let body = document.querySelector('body');

    btnMenu.addEventListener('click', function () {
        popupMenu.classList.add('is-active');
        body.classList.add('no-scroll');
        if (popupMenu.classList.contains('is-active')) {
            body.addEventListener('keydown', function (e) {
                if (e.keyCode === 27) {
                    popupMenu.classList.remove('is-active');
                    body.classList.remove('no-scroll');
                }
            })
        }
    })

    body.addEventListener('click', function (a) {
        let target = a.target;
        if (target.classList.contains('popup__inner') || target.classList.contains('popup-close')) {
            popupMenu.classList.remove('is-active');
            body.classList.remove('no-scroll');
        }
    })

})

