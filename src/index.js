import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
    <h1>JavaScript DOM</h1>
`;

console.log(document);
console.dir(document);

console.log(document.documentElement);
console.dir(document.documentElement);

console.log('------');
console.dir(document.head);
console.dir(document.body);

console.log('------');
