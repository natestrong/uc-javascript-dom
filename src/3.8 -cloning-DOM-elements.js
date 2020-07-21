import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
    <h1>JavaScript DOM</h1>
</div>
`;

const div = document.createElement('div');
const span = document.createElement('span');

span.innerText = 'Can you clone me?';

div.append(span);
app.append(div);

// const clone = div.cloneNode();
// console.log(clone);


const clone = div.cloneNode(true);
console.log(clone);

app.append(clone);
