let addButton = $('#addButton');
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
    $(newLI).attr('id','plan' + clickCount );
    del = document.createElement('button');
    $(del).addClass('delbutton');
    $(del).html('delete');
    newLI.append(del);
    $(del).attr('id','del' + clickCount );
    $(del).attr('data-plan', clickCount)
    $(del).click (()=> {
        $('#plan' + $(this.$(del)).attr('data-plan')).remove();
    
    })
    // $(del).fade(1000);
    // $(del)
})


