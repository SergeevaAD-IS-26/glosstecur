document.addEventListener('DOMContentLoaded', () => {
    
    const burger = document.getElementById('burger');
    const navList = document.getElementById('nav-list');

    if (burger && navList) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('active');
            navList.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });

        document.querySelectorAll('.nav-list__item a').forEach(link => {
            link.addEventListener('click', () => {
                burger.classList.remove('active');
                navList.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
        });
    }

    const answerHeaders = document.querySelectorAll('.answers-item__header');
    answerHeaders.forEach(button => {
        button.addEventListener('click', () => {
            const currentItem = button.parentElement;
            const isActive = currentItem.classList.contains('active');

            document.querySelectorAll('.answers__item').forEach(item => {
                item.classList.remove('active');
            });
            if (!isActive) {
                currentItem.classList.add('active');
            }
        });
    });


    if (document.querySelector('.reviews-swiper')) {
        new Swiper('.reviews-swiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                768: { slidesPerView: 1.5 },
                1024: { slidesPerView: 2 }
            }
        });
    }

    const form = document.querySelector('form');
    const alertBox = document.getElementById('custom-alert');
    const alertMsg = document.getElementById('custom-alert-message');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); 

        const formData = new FormData(this);

        fetch('mail.php', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                showAlert('СПАСИБО! МЫ СВЯЖЕМСЯ С ВАМИ ✦');
                form.reset(); 
            } else {
                showAlert('ОШИБКА ОТПРАВКИ');
            }
        })
        .catch(() => showAlert('НЕТ СВЯЗИ С СЕРВЕРОМ'));
    });

    function showAlert(text) {
        alertMsg.textContent = text;
        alertBox.classList.add('show');
        
        setTimeout(() => {
            alertBox.classList.remove('show');
        }, 3500);
    }

    
});


function initMap() {
        const coords = [47.226760, 39.667474]; 
        const map = new ymaps.Map("yandex-map", {
            center: coords,
            zoom: 16
        });

        const placemark = new ymaps.Placemark(coords, {
            balloonContent: '<strong>SI&LA</strong><br>Официальный представитель Glosstecur'
        }, {
            preset: 'islands#dotIcon',
            iconColor: '#9C8B76'
        });

        map.geoObjects.add(placemark);

        map.behaviors.disable('scrollZoom');
    }