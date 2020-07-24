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
    <button type="submit">
      Submit
    </butto
`;

const form = document.forms.order;

function handleSubmit(event) {
    event.preventDefault();
    console.log(new FormData(event.target));
}

function handleFormData(event) {
    for (const entry of event.formData.entries()) {
        console.log(entry);
    }
}

form.addEventListener('submit', handleSubmit);
form.addEventListener('formdata', handleFormData);
