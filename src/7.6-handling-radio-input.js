import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
    <h1>JavaScript DOM</h1>
  <form name="example">
    <div class="container">
      <label>
        Blue
        <input type="radio" name="color" value="blue">
      </label>
      <label>
        Red
        <input type="radio" name="color" value="red" checked>
      </label>
      <label>
        Green
        <input type="radio" name="color" value="green">
      </label>
    </div>
  </form>
`;

const form = document.forms.example;
const radios = [...form.elements.color];

console.log(radios);

radios.forEach(radio => console.log(radio.value, radio.checked));

// events
const container = form.querySelector('.container');
container.addEventListener('change', () => {
    const checked = radios.find(radio => radio.checked).value;
    console.log(checked, 'is checked');
})

// methods
radios[2].select();
setTimeout(() => radios[2].checked = true, 2500);

