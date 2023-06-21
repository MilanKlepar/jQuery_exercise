$('body').css('background-image', 'url("./R.jpeg")');
let names = ['Goga', 'Viki', 'Milan', 'Viktor', 'Patrik'];
// console.log(names[1]);
let li = $('li');
// for (i = 0; i <= names.length; i++) {
//     li[i].append(names[i]);
// }
$('body').find('ul li');
let ul = $('ul');
let liAR = [li]; 
// li(3).css('font-weight','bold');
let elements = document.createDocumentFragment();
let newLI;
names.forEach((i) => {
  newLI = document.createElement('li');
  newLI.textContent = i;
  elements.append(newLI);
})
ul.append(elements);
// elements.css('font-weight','bold');

// console.log(li.get(8))


let additionalBlock = {
  title: "Added with javascript",
  text: "This block was added using JavaScript's jQuery library. How awesome!"
};
$('ul').append('<h1 class="jsHEad"></h1>');
$('.jsHEad').text(additionalBlock.title);
$('.jsHEad').css('color', 'purple');
$('ul').append('<p class="jsP"></h1>');
$('.jsP').text(additionalBlock.text);
$('#fB').click(() => {
  console.log("Yeah, you clicked me' to the console when the user clicks on the button");
})
let p = $('#fB');
let timesClicked = 0;
$('#sB').click(() => {
    p.toggle.text('Change text!Yupii');
})
let x = document.getElementById("txtIn");
x.defaultValue = 'blue';
if (x.defaultValue !== 'blue') {
  x.value = InputEvent.onchange;
}
$('#tB').click(() => {
  timesClicked++;
  if (timesClicked <= 1){
  $('button').css('background-color', x.value);
}
})

console.log(x.value)
// console.log(f);

