import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
    <h1>JavaScript DOM</h1>
    <button type="button" aria-label="Close this modal">
        Close
    </button>
`;

const button = app.querySelector('button');
console.log(button);

button.setAttribute('aria-label', 'open this modal');

console.log(button.attributes);
