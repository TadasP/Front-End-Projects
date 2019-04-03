// 1.Gauti atsitiktini skaiciu
// 2.Event Listener
// 3.Palyginimas
// 4.Rezultatu atvaizdavimas

//kintamieji
var correctNr = document.querySelector('h3');
var number = document.querySelector('input');
var guess = document.querySelector('button');
var result = document.querySelector('.result');
var band = document.querySelector('h2');
var c = 0;

// #1
var rand = Math.floor(Math.random() * 100 + 1);

// #2
guess.addEventListener('click', function () {
    console.log(rand);
    var n = number.value;
    console.log(n);
    c=c+1;
    band.textContent = `Bandymai: ${c}`;
    
    // #3
    if(n > rand ){
        result.textContent ='Skaičius yra mažesnis';
        result.style.color = 'darkorange';
    }else if(n<rand){
        result.textContent ='Skaičius yra didesnis';
        result.style.color = 'darkorange';
    }else if(n == rand){
        // #4
        result.textContent = `Atspėjote skaičių !  ${rand}`;
        result.style.color = 'darkred';
        c = 0;
        band.textContent = `Bandymai: ${c}`;
        rand = Math.floor(Math.random() * 100 + 1);
    }
    // #5
    number.value=''; // arba null
    number.focus();
});
