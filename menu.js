'use strict'

let newElement = document.createElement('div');
newElement.innerHTML = '<p1>The Item Is Added to Your Order</p1>';
let afterItem = document.getElementById('place-for-added-item1');
newElement.style.width='45%';
newElement.style.border = '3px solid var(--gold-color)';
newElement.style.padding = '10px';
newElement.style.borderStyle = 'double';
newElement.style.fontFamily = 'var(--cursiv-buttons)';
newElement.style.fontSize = 'large';

function AppendItem() {
    afterItem.append(newElement);
}

let eventTarget = document.getElementById('add-to-order1');
let value = document.getElementById('item1').value;



function getValue1() {

    let item = document.getElementById("item1").value;
    console.log(item);
    
    }
    
    eventTarget.onclick = getValue1;



