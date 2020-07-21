import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
    <h1>JavaScript DOM</h1>
`;

const div = document.createElement('div');
const span = document.createElement('span');
const p = document.createElement('p');
const i = document.createElement('i');

div.append(span);
div.prepend(p);
span.before(i);

console.log(div);
