import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
    <h1>JavaScript DOM</h1>
    <ul>
        <li>1</li>
    </ul>
</ul>
`;

const ul = app.querySelector('ul');

ul.insertAdjacentHTML('beforebegin', '<p>Before</p>');
ul.insertAdjacentHTML('afterbegin', '<li>afterbegin</li>');
ul.insertAdjacentHTML('beforeend', '<li>beforeend</li>');
ul.insertAdjacentHTML('afterend', '<p>afterEnd</p>');
