import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
    <h1>JavaScript DOM</h1>
    <form>
        <label>
          Sign-up Email
          <input type="email">
        </label>
        <label>
          I agree to the terms
          <input type="checkbox">
        </label>
    </form>
`;

const form = document.querySelector('form');
const email = form.querySelector('input[type="email"]');
const checkbox = form.querySelector('input[type="checkbox"]');

function handleSubmit(event) {
    if (!checkbox.checked) {
        event.preventDefault();
    }
    console.log(event);
    console.log(email.value, checkbox.checked);
}

form.addEventListener('submit', handleSubmit);

