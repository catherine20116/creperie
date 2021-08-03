'use strict';

/*Price List*/

let GMPrice = 5;
let freshPrice = 7;
let florentinePrice = 7;
let gardenPrice = 9;
let hamcheesePrice = 6;
let westernPrice = 8;

/*The Item Is Added to Your Order Box*/

/*GM*/
let newElement1 = document.createElement('div');
newElement1.innerHTML = '<p1>The Item Is Added to Your Order</p1>';
let afterItem1 = document.getElementById('place-for-added-item1');
newElement1.style.width='45%';
newElement1.style.border = '3px solid var(--gold-color)';
newElement1.style.padding = '10px';
newElement1.style.borderStyle = 'double';
newElement1.style.fontFamily = 'var(--cursiv-buttons)';
newElement1.style.fontSize = 'large';

/*Fresh*/
let newElement2 = document.createElement('div');
newElement2.innerHTML = '<p1>The Item Is Added to Your Order</p1>';
let afterItem2 = document.getElementById('place-for-added-item2');
newElement2.style.width='45%';
newElement2.style.border = '3px solid var(--gold-color)';
newElement2.style.padding = '10px';
newElement2.style.borderStyle = 'double';
newElement2.style.fontFamily = 'var(--cursiv-buttons)';
newElement2.style.fontSize = 'large';

/*Florentine*/
let newElement3 = document.createElement('div');
newElement3.innerHTML = '<p1>The Item Is Added to Your Order</p1>';
let afterItem3 = document.getElementById('place-for-added-item3');
newElement3.style.width='45%';
newElement3.style.border = '3px solid var(--gold-color)';
newElement3.style.padding = '10px';
newElement3.style.borderStyle = 'double';
newElement3.style.fontFamily = 'var(--cursiv-buttons)';
newElement3.style.fontSize = 'large';

/*Garden*/
let newElement4 = document.createElement('div');
newElement4.innerHTML = '<p1>The Item Is Added to Your Order</p1>';
let afterItem4 = document.getElementById('place-for-added-item4');
newElement4.style.width='45%';
newElement4.style.border = '3px solid var(--gold-color)';
newElement4.style.padding = '10px';
newElement4.style.borderStyle = 'double';
newElement4.style.fontFamily = 'var(--cursiv-buttons)';
newElement4.style.fontSize = 'large';

/*HamCheese*/
let newElement5 = document.createElement('div');
newElement5.innerHTML = '<p1>The Item Is Added to Your Order</p1>';
let afterItem5 = document.getElementById('place-for-added-item5');
newElement5.style.width='45%';
newElement5.style.border = '3px solid var(--gold-color)';
newElement5.style.padding = '10px';
newElement5.style.borderStyle = 'double';
newElement5.style.fontFamily = 'var(--cursiv-buttons)';
newElement5.style.fontSize = 'large';

/*Western*/
let newElement6 = document.createElement('div');
newElement6.innerHTML = '<p1>The Item Is Added to Your Order</p1>';
let afterItem6 = document.getElementById('place-for-added-item6');
newElement6.style.width='45%';
newElement6.style.border = '3px solid var(--gold-color)';
newElement6.style.padding = '10px';
newElement6.style.borderStyle = 'double';
newElement6.style.fontFamily = 'var(--cursiv-buttons)';
newElement6.style.fontSize = 'large';


/*Price Box*/

/*GM*/
let priceElementGM = document.createElement('p1');
priceElementGM.innerHTML = `${GMPrice} EUR`;
priceElementGM.style.width='45%';
priceElementGM.style.border = '3px solid var(--gold-color)';
priceElementGM.style.padding = '10px';
priceElementGM.style.borderStyle = 'double';
priceElementGM.style.fontFamily = 'var(--cursiv-buttons)';
priceElementGM.style.fontSize = 'large';
let PriceGMAfterItem = document.getElementById('GM-price-place');
PriceGMAfterItem.append(priceElementGM);

/*Fresh*/
let priceElementFresh = document.createElement('p1');
priceElementFresh.innerHTML = `${freshPrice} EUR`;
priceElementFresh.style.width='45%';
priceElementFresh.style.border = '3px solid var(--gold-color)';
priceElementFresh.style.padding = '10px';
priceElementFresh.style.borderStyle = 'double';
priceElementFresh.style.fontFamily = 'var(--cursiv-buttons)';
priceElementFresh.style.fontSize = 'large';
let PriceFreshAfterItem = document.getElementById('Fresh-price-place');
PriceFreshAfterItem.append(priceElementFresh);

/*Florentine*/
let priceElementFlorentine = document.createElement('p1');
priceElementFlorentine.innerHTML = `${florentinePrice} EUR`;
priceElementFlorentine.style.width='45%';
priceElementFlorentine.style.border = '3px solid var(--gold-color)';
priceElementFlorentine.style.padding = '10px';
priceElementFlorentine.style.borderStyle = 'double';
priceElementFlorentine.style.fontFamily = 'var(--cursiv-buttons)';
priceElementFlorentine.style.fontSize = 'large';
let PriceFlorentineAfterItem = document.getElementById('Florentine-price-place');
PriceFlorentineAfterItem.append(priceElementFlorentine);

/*Garden*/
let priceElementGarden = document.createElement('p1');
priceElementGarden.innerHTML = `${gardenPrice} EUR`;
priceElementGarden.style.width='45%';
priceElementGarden.style.border = '3px solid var(--gold-color)';
priceElementGarden.style.padding = '10px';
priceElementGarden.style.borderStyle = 'double';
priceElementGarden.style.fontFamily = 'var(--cursiv-buttons)';
priceElementGarden.style.fontSize = 'large';
let PriceGardenAfterItem = document.getElementById('Garden-price-place');
PriceGardenAfterItem.append(priceElementGarden);

/*HamCheese*/
let priceElementHamCheese = document.createElement('p1');
priceElementHamCheese.innerHTML = `${hamcheesePrice} EUR`;
priceElementHamCheese.style.width='45%';
priceElementHamCheese.style.border = '3px solid var(--gold-color)';
priceElementHamCheese.style.padding = '10px';
priceElementHamCheese.style.borderStyle = 'double';
priceElementHamCheese.style.fontFamily = 'var(--cursiv-buttons)';
priceElementHamCheese.style.fontSize = 'large';
let PriceHamCheeseAfterItem = document.getElementById('HamCheese-price-place');
PriceHamCheeseAfterItem.append(priceElementHamCheese);

/*Western*/
let priceElementWestern = document.createElement('p1');
priceElementWestern.innerHTML = `${westernPrice} EUR`;
priceElementWestern.style.width='45%';
priceElementWestern.style.border = '3px solid var(--gold-color)';
priceElementWestern.style.padding = '10px';
priceElementWestern.style.borderStyle = 'double';
priceElementWestern.style.fontFamily = 'var(--cursiv-buttons)';
priceElementWestern.style.fontSize = 'large';
let PriceWesternAfterItem = document.getElementById('Western-price-place');
PriceWesternAfterItem.append(priceElementWestern);


/*Update Items Value*/

/*GM*/
let eventTarget1 = document.getElementById('add-to-order1');
let GMCanada = [];
let GMCanadaFinal = document.getElementById('GMFinal');

/*Fresh*/
let eventTarget2 = document.getElementById('add-to-order2');
let freshArray = [];
let freshFinal = document.getElementById('freshFinal');

/*Florentine*/
let eventTarget3 = document.getElementById('add-to-order3');
let florentineArray = [];
let florentineFinal = document.getElementById('florentineFinal');

/*Garden Fresh*/
let eventTarget4 = document.getElementById('add-to-order4');
let gardenArray = [];
let gardenFinal = document.getElementById('gardenFinal');

/*Ham & Cheese*/
let eventTarget5 = document.getElementById('add-to-order5');
let hamcheeseArray = [];
let hamcheeseFinal = document.getElementById('hamcheeseFinal');

/*Western*/
let eventTarget6 = document.getElementById('add-to-order6');
let westernArray = [];
let westernFinal = document.getElementById('westernFinal');

let displayButton1 = function () {
    let item = document.getElementById("item1").value;
    afterItem1.append(newElement1);
}

let displayButton2 = function () {
    let item2 = document.getElementById("item2").value;
    afterItem2.append(newElement2);
}

let displayButton3 = function () {
    let item3 = document.getElementById("item3").value;
    afterItem3.append(newElement3);
}

let displayButton4 = function () {
    let item4 = document.getElementById("item4").value;
    afterItem4.append(newElement4);
}

let displayButton5 = function () {
    let item5 = document.getElementById("item5").value;
    afterItem5.append(newElement5);
}

let displayButton6 = function () {
    let item6 = document.getElementById("item6").value;
    afterItem6.append(newElement6);
}

let onclickDisplayButton1 = eventTarget1.addEventListener('click', displayButton1);
let onclickDisplayButton2 = eventTarget2.addEventListener('click', displayButton2);
let onclickDisplayButton3 = eventTarget3.addEventListener('click', displayButton3);
let onclickDisplayButton4 = eventTarget4.addEventListener('click', displayButton4);
let onclickDisplayButton5 = eventTarget5.addEventListener('click', displayButton5);
let onclickDisplayButton6 = eventTarget6.addEventListener('click', displayButton6);

let getValue1 = function() {
    let item = document.getElementById("item1").value;
    GMCanada.push(item);
    let FinalValueGM = GMCanada[GMCanada.length-1];
    let finalPriceGM = FinalValueGM * GMPrice;
    GMCanadaFinal.innerHTML = `Good Morning Canada: ${FinalValueGM} pieces * ${GMPrice} EUR = ${finalPriceGM} EUR`;
    console.log(finalPriceGM);

    let item2 = document.getElementById("item2").value;
    freshArray.push(item2);
    let FinalValueFresh = freshArray[freshArray.length-1];
    let finalPriceFresh = FinalValueFresh * freshPrice;
    freshFinal.innerHTML = `Freshn’ Up: ${FinalValueFresh} pieces * ${freshPrice} EUR = ${finalPriceFresh} EUR`;
    console.log(finalPriceFresh);

    let item3 = document.getElementById("item3").value;
    florentineArray.push(item3);
    let FinalValueFlorentine = florentineArray[florentineArray.length-1];
    let finalPriceFlorentine = FinalValueFlorentine * florentinePrice;
    florentineFinal.innerHTML = `Florentine: ${FinalValueFlorentine} pieces * ${florentinePrice} EUR = ${finalPriceFlorentine} EUR`;
    console.log(finalPriceFlorentine);

    let item4 = document.getElementById("item4").value;
    gardenArray.push(item4);
    let FinalValueGarden = gardenArray[gardenArray.length-1];
    let finalPriceGarden = FinalValueGarden * gardenPrice;
    gardenFinal.innerHTML = `Garden Fresh: ${FinalValueGarden} pieces * ${gardenPrice} EUR = ${finalPriceGarden} EUR`;
    console.log(finalPriceGarden);

    let item5 = document.getElementById("item5").value;
    hamcheeseArray.push(item5);
    let FinalValueHamcheese = hamcheeseArray[hamcheeseArray.length-1];
    let finalPriceHamcheese = FinalValueHamcheese * hamcheesePrice;
    hamcheeseFinal.innerHTML = `Ham & Cheese: ${FinalValueHamcheese} pieces * ${hamcheesePrice} EUR = ${finalPriceHamcheese} EUR`;
    console.log(finalPriceHamcheese);

    let item6 = document.getElementById("item6").value;
    westernArray.push(item6);
    let FinalValueWestern = westernArray[westernArray.length-1];
    let finalPriceWestern = FinalValueWestern * westernPrice;
    westernFinal.innerHTML = `Western Breakfast Crepe: ${FinalValueWestern} pieces * ${westernPrice} EUR = ${finalPriceWestern} EUR`;
    console.log(finalPriceWestern);

    let totalSum = finalPriceGM + finalPriceFresh + finalPriceFlorentine + finalPriceGarden + finalPriceHamcheese + finalPriceWestern;
    
    let totalPriceToPay = document.getElementById("totalPriceToPay"); 
    totalPriceToPay.innerHTML = `Total Price: ${totalSum} EUR`;
}

let addValues1 = eventTarget1.addEventListener('click', getValue1);
let addValues2 = eventTarget2.addEventListener('click', getValue1);
let addValues3 = eventTarget3.addEventListener('click', getValue1);
let addValues4 = eventTarget4.addEventListener('click', getValue1);
let addValues5 = eventTarget5.addEventListener('click', getValue1);
let addValues6 = eventTarget6.addEventListener('click', getValue1);



/*
eventTarget1.onclick = getValue;
eventTarget2.onclick = getValue;
eventTarget3.onclick = getValue;
eventTarget4.onclick = getValue;
eventTarget5.onclick = getValue;
eventTarget6.onclick = getValue;
*/
