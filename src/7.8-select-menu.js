import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
    <h1>JavaScript DOM</h1>
  <form name="example">
    <select name="cat">
        <option value="">Favorite Cat:</option>
        <option value="oliver">Oliver</option>
        <option value="sophie">Sophie</option>
        <option value="maxwell">Maxwell</option>
    </select>
  </form>
`;

const form = document.forms.example;
const select = form.elements.cat;

console.dir(select);

// selected value
const selected = select.value;
console.log(selected)

// set
setTimeout(() => select.value = 'sophie', 2500);

// selected index
setTimeout(() => select.selectedIndex = 1, 4500);


// events
select.addEventListener('change', () => {
    console.log(select.value);
});

// and new options
const option = document.createElement('option');
option.value = 'crosby';
option.text = 'Crosby';
select.add(option, 1);
