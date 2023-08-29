let imgARR = new Array ;
imgARR = ['./IMG_4713.JPG', './IMG_4981.JPG', './IMG_4868.JPG', './IMG_4855.JPG', 
'./IMG_4689.JPG', './IMG_4837.JPG', './IMG_4769.JPG', './IMG_4829.JPG', './IMG_4811.JPG' ];
imgDes = ['Я біля пальми', 'сердечко', 'Вікуля', 'Я, Вікуля, Жорік', 'Я і Вікуля', 'Жорік i легіонери', 'золотко', 'ми в колодязі', 'я'];
function loadImages(imgArr, i){
    console.log(imgArr[i]);
    let img = new Image();
    img.src = imgArr[i];
    return img ;
}
let images = new Array;
for (let i = 0; i < imgARR.length; i++) {
    images[i] = loadImages(imgARR, i);
}
function imgSet (x) {
    $('#viewer').css('background-image', 'url(' + images[x].src +')')
    
}
imgSet(0);

let elements = document.createDocumentFragment();
let tumbArr = [];
for (x = 0; x < imgARR.length; x++) {
    let thumb = document.createElement('button');
    $(thumb).css('background-image', 'url(' + images[x].src +')');
    elements.append(thumb);
    $(thumb).attr('id', 'thumb' + x)
    $(thumb).attr('data-num', x);
    tumbArr[x] = $(thumb);
    $(thumb).attr('class', 'thumbs');
    $(thumb).attr('data-hover', imgDes[x]);
    
}

$('#thumbCase').append(elements);
document.onload
let curr = 0;
// !(curr <= 0);
curr <= imgARR.length;
function thumbSet (){
    $('button').css('border','none')
    $('#thumb' + curr).css('border', 'solid red 2px');
}
thumbSet()
$('#next').click (()=> {
    ++curr;
    if (curr < imgARR.length) {
        thumbSet();
        imgSet(curr);
    }  
    while (curr == imgARR.length) {
        imgSet(0);
        curr = 0;
        thumbSet();
    }
})
$('#prev').click (()=> {
    --curr;
    if (curr >= 0) {
        thumbSet();
        imgSet(curr);
    }  
    while (curr < 0) {
        // imgSet(0);
        curr = imgARR.length - 1;
        thumbSet();
        imgSet(curr);
    }
})

function clicker (x) {
    
        let s =  $(tumbArr[x]).attr('data-num');
        return ( 
           $(tumbArr[x]).click (()=> {
            imgSet(s)
            curr = s;
            thumbSet();
           }) 
        )
}
for (x=0; x<tumbArr.length; x++){
    clicker(x);
}
let cnt = 0;
let imgElements = document.createDocumentFragment();
    let greatImg = document.createElement('div');
    
    imgElements.append(greatImg);
    $(greatImg).attr('class', 'greatImg');
    $('.container').append(imgElements)

$('.view').click(() => {
    
    $(greatImg).css('background-image', 'url(' + images[curr].src +')')
    $(greatImg).css('visibility', 'visible')
    

})
$('.greatImg').click(() => {
    $(greatImg).css('visibility', 'hidden')
})

