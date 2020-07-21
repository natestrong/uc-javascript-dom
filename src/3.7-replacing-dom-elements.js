import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
    <h1>JavaScript DOM</h1>
    <div>
        Replace Me!
    </div>
</div>
`;

const div = app.querySelector('div');

const newDiv = document.createElement('div');
newDiv.innerText = 'I have been replaced!';

div.replaceWith(newDiv);
