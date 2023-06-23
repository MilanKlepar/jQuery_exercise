let addButton = $('#addButton');
$('#addButton').html("<img src ='./add_library_my_icon1.png')>");
let addIN = document.getElementById("addIN");
// addIN.ariaPlaceholder();
// addIN.defaultValue = 'write something';
addIN.value = InputEvent.onchange;
let ul = $('ul');
let li = $('.liBody');
let elements = document.createDocumentFragment();
let clickCount = 0;
addButton.click(() => {
    clickCount++;
    let newLI = document.createElement('li');
    newLI.textContent = addIN.value;
    elements.append(newLI);
    ul.append(elements);
    $(newLI).addClass('donePlan');
    $(newLI).attr('id','plan' + clickCount );
   
    del = document.createElement('button');
    $(del).addClass('delbutton');
    $(del).html('<img src="./delete_ic_icon.png">');
    newLI.append(del);
    $(del).attr('data-plan', '#plan' + clickCount)
    let planID = $(this.del).attr('data-plan');
    
    done = document.createElement('button');
    $(done).addClass('done');
    $(done).html('<img src="./fluent_checkmark_circle_filled_icon.png">');
    newLI.append(done);
    $(done).attr ('id', 'done' + clickCount)
    $(done).attr('data-done', '#done' + clickCount)
    let doneID = $(this.done).attr('data-done');
    
    let cnt = 0;
    $(done).click (()=>{
        cnt++
        $(planID).toggleClass ('donePlan');
        if (cnt%2 == 1) {
        $(doneID).html('<img src="./GREEN_fluent_checkmark_circle_filled_icon.png">');
    } else $(doneID).html('<img src="./fluent_checkmark_circle_filled_icon.png">');
    })

    $(del).click (()=> {
        $(planID).remove();
    })
    // $(del).fade(1000);
    // $(del)
})


