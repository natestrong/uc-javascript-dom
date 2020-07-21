import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
    <h1>JavaScript DOM</h1>
</div>
`;

const div = document.createElement('div');
div.innerText = 'I am a message!';

app.append(div);

setTimeout(() => div.remove(), 2500);
