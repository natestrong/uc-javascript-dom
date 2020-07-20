import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

const condition = true;

if (condition) {
    console.log('yes');
}

const num = 99..toFixed();

console.log(num);

function makeCarPrice() {
    console.log(arguments);
}

makeCarPrice(1, 2, 3, 45);

const drink = {
    id: 'xyz',
    getDrinkDetails() {
        return `Drink_${this.id}`;
    },
    100: 'cool'
};

console.log(drink.getDrinkDetails());

console.log(drink["100"]);

function f(first, ...args) {
    console.log(first, args);
}

f('Hi', 'Hello', 'Cool', 'Awesome', 100);


const cat = {
    name: 'Oliver',
    id: 420,
    style: 'cool af'
};

const {name, ...rest} = cat;

console.log(name, rest);

console.log('-----------');

const cat2 = {
    name: 'Oliver',
    jumpHeight: 3
};

const cat2Withid = Object.create(cat2);
cat2Withid.job = 'security cat';

console.log(cat2);
console.log(cat2Withid);

cat2.name = 'Maxwell';

console.log(Object.keys(cat2Withid));

const cats = ['Oliver', 'Sophie', 'Maxwell'];

const removeIndex = 1;

const newCats = [...cats.slice(0, removeIndex), ...cats.slice(removeIndex + 1)];

console.log(cats);
console.log(newCats);

let cars = ['Tacoma', 'Prius', 'Ferrari', 'Ranger'];

console.log(cars.slice(2));

cars = cars.concat(['Tesla', 'Porsche']);
cars.reverse();
console.log(cars);


const myCats = [
    {name: 'Oliver', speed: -1, agility: 1},
    {name: 'Maxwell', speed: 8, agility: 50},
    {name: 'Sophie', speed: 11, agility: 25}
];

const mappedCats = myCats.map(cat => {
    return {...cat, speed: cat.speed * 2};
});

console.log(mappedCats);

const totalSpeed = myCats.reduce((prev, next) => prev + next.speed, 0);
const totalSpeed2 = myCats.reduce((prev, {speed}) => prev + speed, 0);
console.log(totalSpeed);
console.log(totalSpeed2);

const checkIfCatsIsFast = (speed) => speed > 10;
const allCatsFast = mappedCats.every(({speed}) => checkIfCatsIsFast(speed));
console.log(allCatsFast);

const canGetPastLava = (speed, agility) => speed + agility > 50;
const ninjaKitty = myCats.find(({speed, agility}) => canGetPastLava(speed, agility));
console.log(ninjaKitty);
