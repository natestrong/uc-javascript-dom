import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
    <h1>JavaScript DOM</h1>
      <form name="example">
        <input type="text" name="myInput" value="Hello">
      </form>
`;

const form = document.forms.example;
const input = form.myInput;

console.dir(input);

// set
input.value = 'Goodbye';
// disable
// input.disabled = true;

// get
console.log(input.value);

// events
input.addEventListener('focus', () => console.log('Focus'));
input.addEventListener('blur', () => console.log('Blur'));
input.addEventListener('input', () => console.log('Input'));
input.addEventListener('change', () => console.log('Change'));

// methods
setTimeout(() => input.focus(), 2500);
setTimeout(() => input.blur(), 3500);
