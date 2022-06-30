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

function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min;
}

function randomNumbers(event) {
    event.preventDefault();

    $('#orders-stat').innerHTML = random(99, 99999)+'+';
    $('#customers-stat').innerHTML = random(99, 99999)+'+';
    $('#chefs-stat').innerHTML = random(99, 99999)+'+';
}

function submitForm(event) {
    event.preventDefault();

    let email = $('#email').value;
    $('#email').value = '';

    $('#form').style.display = 'none';
    $('#title-form').style.display = 'flex';
    $('#title-form').innerHTML = 'Merci '+email;

    setTimeout(() => {
        $('#form').style.display = 'flex';
        $('#title-form').style.display = 'none';
    }, 5000);
}
