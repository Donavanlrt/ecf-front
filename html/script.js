let $ = (el) => document.querySelector(el);
let $$ = (el) => document.querySelectorAll(el);

$('.closed').addEventListener('click', function () {
    this.style.display = 'none';
    $('.open').style.display = 'block';
    $('.mobile-menu').style.display = 'block';
});

$('.open').addEventListener('click', function () {
    this.style.display = 'none';
    $('.closed').style.display = 'block';
    $('.mobile-menu').style.display = 'none';
});

function orderNow() {
    $$('#section-1 .w-1\\/2').forEach(el => el.style.display = 'none');
    $('#title').style.display = 'block';

    setTimeout(() => {
        $$('#section-1 .w-1\\/2').forEach(el => el.style.display = 'block');
        $('#title').style.display = 'none';
    }, 5000);
}

function playVideo() {
    $('#video img').style.display = 'none';
    $('#video iframe').style.display = 'block';
}

function addYear(event, year) {
    event.preventDefault();

    $('#year').innerHTML = parseInt($('#year').innerHTML) + year;
}
