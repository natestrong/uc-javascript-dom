import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
    <h1>JavaScript DOM</h1>
    <div class="one">
        <div class="two">
            <button type="button" class="three">
            Click Me
            </button>
        </div>
    </div>
`;

const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');

function handleClick(event) {
    console.log(event.target);
}

one.addEventListener('click', handleClick);
two.addEventListener('click', handleClick);
three.addEventListener('click', handleClick);
