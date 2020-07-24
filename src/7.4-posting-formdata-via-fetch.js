import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
    <h1>JavaScript DOM</h1>
      <form name="order">
        <label>
          Your name
          <input type="text" name="fullname">
        </label>
        <label>
          Which pizza would you like?
          <select name="pizza">
            <option value="pepperoni">Pepperoni</option>
            <option value="meaty">Meaty</option>
            <option value="cheesey">Cheesey</option>
          </select>
        </label>
        <div>
          What size?
          <label>
            Small
            <input type="radio" name="size" value="small" checked>
          </label>
          <label>
            Medium
            <input type="radio" name="size" value="medium">
          </label>
          <label>
            Large
            <input type="radio" name="size" value="large">
          </label>
        </div>
        <label>
          Quantity
          <input type="number" name="quantity" value="1">
        </label>
        <button type="submit">
          Submit
        </button>
      </form>
`;

const form = document.forms.order;

function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    // query string
    const asString = new URLSearchParams(formData);
    console.log('query string', asString.toString());

    // json
    const asJSON = JSON.stringify(Object.fromEntries(formData));
    console.log('as JSON', asJSON);

    fetch('/fakeapi', {
        method: 'post',
        // headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        headers: {'Content-Type': 'application/json'},
        // body: asString
        body: asJSON});
}

form.addEventListener('submit', handleSubmit);
