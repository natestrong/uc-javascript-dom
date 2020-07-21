import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
    <h1>JavaScript DOM</h1>
    <ul id="list"></ul>
</div>
`;

const cats = ['Maxwell', 'Sophie', 'Oliver'];

const fragment = document.createDocumentFragment();

cats.forEach(cat => {
    const li = document.createElement('li');
    li.className = 'list-item';
    li.innerText = cat;
    fragment.append(li);
});
