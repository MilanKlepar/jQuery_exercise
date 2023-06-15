let c = 0;
let cnt = $('#cnt');
cnt.html(c)
let inc = $('#inc');
let dec = $('#dec');
inc.click(()=>{
c++;
cnt.html(c)
});
dec.click(()=>{
    c--;
    cnt.html(c)
    });