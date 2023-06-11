let color = 'purple';
let number = 10;
let word = 'cool';
// $('#north').css('background-color', 'purple');
if (color == 'purple') {
    $('.n').css('background-color', 'purple');
}
console.log(10);
if (number > 100) {
$('.e').text("whoah, that's a big number.");
} else {
    $('.e').text("just a regular number, please.");
}
if (word == 'cool') {
    $('.s').text("Power of DOM");
    } else {
        $('.w').text("Power of DOM");
    }
