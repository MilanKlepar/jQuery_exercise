let names = ['Goga', 'Viki', 'Milan', 'Viktor', 'Patrik'];
// console.log(names[1]);
let li = $('li');
// for (i = 1; i <= names.length; i++) {
//     li[i].append(names[i]);
// }
$('body').find('ul li');


names.forEach ((i) => {

    $('ul').append('<li class="added">', i ,'</li>');
    // $('ul').children(".added").text(i);
    $(i).css('background','purple');
    
})





 console.log(li.get(8))


$(li[2]).css('font-weight','bold');

$('body').css('background-image', 'url("./R.jpeg")');