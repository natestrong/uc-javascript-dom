import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
    <h1>JavaScript DOM</h1>
    <button type="button">
        Click Me
    </button>
`;

const button = document.querySelector('button');

// Avoid, doesn't allow multiple events
// button.onclick = function() {
//   console.log('1');
// };

function handleClick(event) {
    console.log(this, event.target);
}

button.addEventListener('click', handleClick);

// arrow functions
button.addEventListener('dblclick', event => {
    console.log(this, event.target, 'Double-clicked!');
});
