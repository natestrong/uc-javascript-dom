import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
    <h1>JavaScript DOM</h1>
    <input type="text">
`;

const input = app.querySelector('input');
// input.value = '2';
input.setAttribute('value', 2)
console.log(parseInt(input.value));
