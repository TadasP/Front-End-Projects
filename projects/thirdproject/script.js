const DOMstrings = {
    driver: document.querySelector('.driver'),
    speed: document.querySelector('.speed'),
    add: document.querySelector('.add'),
    race: document.querySelector('.race'),
    list: document.querySelector('.list ul'),
    track: document.querySelector('.race-track')
}

let driversList = [];

function Car() {
    this.name = DOMstrings.driver.value;
    this.speed = parseInt(DOMstrings.speed.value) || Math.floor(Math.random() * 180 + 20);
    // parseInt() vercia stringa i skaiciu
    this.addDriver = function () {
        DOMstrings.list.insertAdjacentHTML('beforeend', `<li>${this.name}, ${this.speed} mph</li>`);
    };
    this.addCar = function (){
        const html = `<img style="transition:${2/this.speed*100}s" src="Car2.png">`;
        DOMstrings.track.insertAdjacentHTML
        ('beforeend', html);
    }
};

DOMstrings.add.addEventListener('click', function () {
    driversList.push(new Car());
    console.log(driversList);
    driversList[driversList.length-1].addDriver();
    driversList[driversList.length-1].addCar();
});

DOMstrings.race.addEventListener('click', function(){
    const cars = document.querySelectorAll('img');
    cars.forEach(car=> car.style.marginLeft='900px');
});





// Ideti html elementus i puslapi
// insertBefore('div', pozicija)
// appendChild('p')
// parent.insertAdjacentHTML('position','el')

// ideti li elementa i musu ul bloka
