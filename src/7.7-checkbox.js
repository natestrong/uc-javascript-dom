import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
    <h1>JavaScript DOM</h1>
  <form name="example">
    <div class="container">
    <labeL>
        Accept Your Fate
        <input type="checkbox" name="accept">
    </labeL>
    </div>
  </form>
`;

const form = document.forms.example;
const checkbox = form.elements.accept;

console.dir(checkbox);
// set
checkbox.checked = true;
// get
console.log(checkbox.checked);

// events
checkbox.addEventListener('change', () => {
    console.log(checkbox.checked);
})
