import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
    <h1>JavaScript DOM</h1>
    <button type="button">
        Click Me
    </button>
`;

const button = document.querySelector('button');

function handleClickOnce(event) {
    console.log(event.target);
    button.removeEventListener('click', handleClickOnce);
}

button.addEventListener('click', handleClickOnce)

// button.addEventListener(
//   'dblclick',
//   () => {
//     console.log('Double-click!');
//   },
//   { once: true }
// );
