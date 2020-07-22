import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
    <h1>JavaScript DOM</h1>
    <button type="button" class="one two">
        Click Me!
    </button>
`;

const button = document.querySelector('button');

console.dir(button);

// Odl way: Set
button.className += ' three';

// Old way: Get
console.log(button.className.split(' '));

// New way: ClassList
// Add
button.classList.add('four');

// Remove
button.classList.remove('one');

// Toggle
button.classList.toggle('five');
setTimeout(() => button.classList.toggle('five'), 2500);

// Replace
button.classList.replace('two', 'six');
