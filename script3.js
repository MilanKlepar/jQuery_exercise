$('body').css('background-image', 'url("./R.jpeg")');
let names = ['Goga', 'Viki', 'Milan', 'Viktor', 'Patrik'];
// console.log(names[1]);
let li = $('li');
// for (i = 0; i <= names.length; i++) {
//     li[i].append(names[i]);
// }
$('body').find('ul li');


names.forEach((i) => {

  $('ul').append('<li class="add">', i, '</li>')
  // for (l=0; l<= names.length; l++) {
  //     $('li.add').text(i);
  // }
  // // m[i].append(names[i]);
  // $(".added").append(i);

})
// console.log(li.get(8))
$(li[2]).css('font-weight', 'bold');

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

